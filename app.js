console.log("Firebase connected!");

const auth = firebase.auth();
const db = firebase.firestore();

// ================= AUTH =================

function register() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.createUserWithEmailAndPassword(email, password)
    .catch(error => alert(error.message));
}

function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .catch(error => alert(error.message));
}

function logout() {
  auth.signOut();
}

auth.onAuthStateChanged(user => {
  if (user) {
    document.getElementById("authStatus").innerText =
      "Logged in as: " + user.email;
  } else {
    document.getElementById("authStatus").innerText =
      "Not logged in";
  }
});

// ================= CLOUDINARY =================

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "civicmint_upload");

  const response = await fetch(
    "https://api.cloudinary.com/v1_1/dvewrlyhq/image/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();
  return data.secure_url;
}

// ================= CREATE POST =================

async function handleUpload() {
  const user = auth.currentUser;

  if (!user) {
    alert("Please login first.");
    return;
  }

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const file = document.getElementById("imageInput").files[0];

  if (!title || !description || !file) {
    alert("Fill all fields.");
    return;
  }

  try {
    const imageUrl = await uploadImage(file);

    document.getElementById("preview").src = imageUrl;

    await db.collection("posts").add({
      title,
      description,
      imageUrl,
      userId: user.uid,
      userEmail: user.email,
      upvotes: 0,
      status: "open",
      createdAt: new Date()
    });

    alert("Post created!");
  } catch (error) {
    console.error(error);
    alert("Error uploading post.");
  }
}

// ================= LOAD POSTS =================

function loadPosts() {
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {
      const container = document.getElementById("postsContainer");
      container.innerHTML = "";

      snapshot.forEach(doc => {
        const post = doc.data();

        container.innerHTML += `
          <div class="post-card">
            <h3>${post.title}</h3>
            <p>${post.description}</p>
            <p><strong>Posted by:</strong> ${post.userEmail}</p>
            <img src="${post.imageUrl}" />
            <p>👍 ${post.upvotes}</p>
          </div>
        `;
      });
    });
}

loadPosts();