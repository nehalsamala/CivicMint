import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, UploadCloud } from "lucide-react";
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export function SubmitCleanup() {

    const [dragActive, setDragActive] = useState(false);
    const [before, setBefore] = useState(null);
    const [after, setAfter] = useState(null);

    const submitCleanup = async () => {
        console.log("Submitting cleanup...");
        if (!before || !after) {
            alert("Please upload both photos");
            return;
        }

        try {
            await addDoc(collection(db, "cleanups"), {
                location: "Sector 12",
                wasteCollected: 3,
                createdAt: new Date(),
                status: "pending"
            });

            console.log("Firestore write successful!");
            alert("Cleanup submitted 🚀");

            // reset after submit
            setBefore(null);
            setAfter(null);

        } catch (error) {
            console.error("Firestore Error:", error);
            alert(error.message);
        }
    };

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    };

    return (
        <Card className="border-slate-200 shadow-sm flex flex-col max-w-2xl mx-auto">
            <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-slate-900">
                    Submit Verification Photos
                </CardTitle>
                <CardDescription>
                    Upload clear before & after photos to claim your impact points.
                </CardDescription>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col">
                <div
                    className={`flex-1 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-12 transition-colors duration-200 ${dragActive
                        ? 'border-green-500 bg-green-50'
                        : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                        }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrag}
                >
                    <div className="w-16 h-16 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 text-green-600">
                        <UploadCloud size={28} />
                    </div>

                    <p className="text-sm font-semibold text-slate-700 mb-1">
                        Drag & drop your photos here
                    </p>

                    <p className="text-xs text-slate-500 mb-8 text-center max-w-xs">
                        JPG, PNG, HEIC. Max 10MB.
                    </p>

                    {/* UPLOAD BOXES */}
                    <div className="flex gap-4 w-full">

                        {/* BEFORE */}
                        <label className="flex-1 h-36 bg-white border border-slate-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-400 hover:shadow-sm transition relative overflow-hidden">

                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => setBefore(e.target.files[0])}
                            />

                            {before ? (
                                <img
                                    src={URL.createObjectURL(before)}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-slate-500">
                                    <Camera size={28} />
                                    <span className="text-sm font-medium">
                                        Add "Before"
                                    </span>
                                </div>
                            )}
                        </label>

                        {/* AFTER */}
                        <label className="flex-1 h-36 bg-white border border-slate-200 rounded-lg flex items-center justify-center cursor-pointer hover:border-green-400 hover:shadow-sm transition relative overflow-hidden">

                            <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => setAfter(e.target.files[0])}
                            />

                            {after ? (
                                <img
                                    src={URL.createObjectURL(after)}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            ) : (
                                <div className="flex flex-col items-center gap-2 text-slate-500">
                                    <Camera size={28} />
                                    <span className="text-sm font-medium">
                                        Add "After"
                                    </span>
                                </div>
                            )}
                        </label>

                    </div>
                </div>
            </CardContent>

            <CardFooter className="pt-4 justify-end border-t border-slate-100 mt-4">
                <Button variant="outline" className="mr-3 text-slate-600">
                    Cancel
                </Button>

                <Button
                    type="button"
                    onClick={() => submitCleanup()}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6"
                >
                    Verify & Submit
                </Button>
            </CardFooter>
        </Card>
    );
}