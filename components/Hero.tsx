import React, { useState, useRef } from 'react';
import { Sparkles, Upload, Loader2 } from 'lucide-react';
import { removeTextFromImage } from '../services/gemini';
import { ImageComparison } from './ImageComparison';

// Demo images to simulate the "Before/After" state shown in the design
// Using a movie-poster style image to match the "Krea" vibe
const DEMO_BEFORE = "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop"; 
// We apply a blur to the "After" demo to visually demonstrate the slider functionality
// since we can't perform actual text removal without user input/API cost on load.
const DEMO_AFTER = "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=800&auto=format&fit=crop&blur=5";

export const Hero: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
        processFile(selectedFile);
    }
  };

  const processFile = (selectedFile: File) => {
    // Validate file type
    if (!selectedFile.type.startsWith('image/')) {
        setError('Please upload a valid image file.');
        return;
    }

    setFile(selectedFile);
    setError(null);
    setIsProcessing(true);
    setProcessedImage(null); // Reset previous result

    const reader = new FileReader();
    reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        setOriginalImage(base64);

        try {
            const resultBase64 = await removeTextFromImage(base64, selectedFile.type);
            setProcessedImage(resultBase64);
        } catch (err) {
            setError('Failed to process image. Please try again.');
            console.error(err);
        } finally {
            setIsProcessing(false);
        }
    };
    reader.readAsDataURL(selectedFile);
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
        processFile(droppedFile);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <section className="flex flex-col lg:flex-row min-h-[calc(100vh-64px)] w-full max-w-7xl mx-auto p-6 lg:p-12 gap-12">
      
      {/* Left Column: Content & Upload */}
      <div className="flex-1 flex flex-col justify-center space-y-8 animate-fade-in-up">
        
        {/* Badge */}
        <div className="flex items-center gap-2 self-start rounded-lg bg-gray-100 p-1 pr-3">
             <div className="rounded-md bg-white p-1 shadow-sm">
                <Sparkles size={16} className="text-black fill-current" />
             </div>
             <span className="text-sm font-semibold text-gray-900">Text Remover</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 lg:text-6xl">
          Remove Text From Images for Free - <br className="hidden lg:block"/>
          <span className="text-gray-900">AI Text Removal Tool</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg text-gray-500 max-w-xl leading-relaxed">
          Instantly remove text from images using Krea's free AI text remover. Perfect for cleaning photos, removing watermarks, and preparing images for professional use. Our AI detects and completely erases unwanted text overlays from your pictures.
        </p>

        {/* Upload Area */}
        <div 
            className="relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-200 bg-gray-50 px-6 py-12 text-center transition-colors hover:border-blue-400 hover:bg-blue-50/30"
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
        >
            <input 
                type="file" 
                ref={fileInputRef}
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/png, image/jpeg, image/webp, image/heic"
            />
            
            {isProcessing ? (
                <div className="flex flex-col items-center gap-4">
                    <Loader2 className="h-10 w-10 animate-spin text-blue-600" />
                    <p className="text-gray-600 font-medium">Removing text...</p>
                </div>
            ) : (
                <>
                    <button 
                        onClick={triggerUpload}
                        className="mb-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105 hover:bg-blue-700 active:scale-95"
                    >
                        <Upload size={20} />
                        Upload Image
                    </button>
                    <p className="text-xs text-gray-400 font-medium">
                        .png, .jpeg, .webp, .heic, .heif
                    </p>
                    {error && <p className="mt-4 text-sm text-red-500">{error}</p>}
                </>
            )}
        </div>
      </div>

      {/* Right Column: Visualizer */}
      <div className="flex-1 lg:h-[600px] h-[400px]">
         <div className="h-full w-full rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-gray-100 relative">
            {isProcessing ? (
                <div className="relative h-full w-full">
                     <img src={originalImage || DEMO_BEFORE} className="h-full w-full object-cover opacity-50 blur-sm" alt="Processing" />
                     <div className="absolute inset-0 flex items-center justify-center">
                        <div className="rounded-full bg-white/90 p-4 shadow-xl">
                            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                        </div>
                     </div>
                </div>
            ) : (
                <ImageComparison 
                    beforeImage={originalImage || DEMO_BEFORE} 
                    afterImage={processedImage || (originalImage ? originalImage : DEMO_AFTER)} 
                />
            )}
         </div>
      </div>
    </section>
  );
};