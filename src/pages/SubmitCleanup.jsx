import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, UploadCloud } from "lucide-react";

export function SubmitCleanup() {
    const [dragActive, setDragActive] = useState(false);

    const handleDrag = function (e) {
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
                <CardTitle className="text-xl font-bold text-slate-900">Submit Verification Photos</CardTitle>
                <CardDescription>Upload clear before & after photos to claim your impact points and help keep the map updated.</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
                <div
                    className={`flex-1 border-2 border-dashed rounded-xl flex flex-col items-center justify-center p-12 transition-colors duration-200 ${dragActive ? 'border-green-500 bg-green-50' : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
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
                        Supported formats: JPG, PNG, HEIC. Max size 10MB per photo.
                    </p>

                    <div className="flex gap-4 w-full">
                        <div className="flex-1 h-36 bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-green-400 hover:shadow-sm transition-all group overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Camera className="text-slate-400 group-hover:text-green-500 z-10 transition-colors" size={28} />
                            <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 z-10">Add "Before" Photo</span>
                        </div>
                        <div className="flex-1 h-36 bg-white border border-slate-200 rounded-lg flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-green-400 hover:shadow-sm transition-all group overflow-hidden relative">
                            <div className="absolute inset-0 bg-slate-100 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                            <Camera className="text-slate-400 group-hover:text-green-500 z-10 transition-colors" size={28} />
                            <span className="text-sm font-medium text-slate-500 group-hover:text-slate-700 z-10">Add "After" Photo</span>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="pt-4 justify-end border-t border-slate-100 mt-4">
                <Button variant="outline" className="mr-3 text-slate-600">Cancel</Button>
                <Button className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-6">
                    Verify & Submit
                </Button>
            </CardFooter>
        </Card>
    );
}
