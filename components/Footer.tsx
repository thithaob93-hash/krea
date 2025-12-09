import React from 'react';
import { Upload, Sparkles } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <section className="bg-gray-50 border-t border-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 max-w-3xl">
          <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">How to remove text from images with AI</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-900 leading-[1.15]">
            Remove text from images in 3 easy steps with AI text removal tool.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          
          {/* Step 1 */}
          <div className="flex flex-col bg-white rounded-2xl p-3 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300">
             {/* Card Image Area - Mocking the UI */}
             <div className="h-64 w-full bg-gray-50 rounded-xl mb-6 relative overflow-hidden border border-gray-100 flex items-center justify-center p-8">
                <div className="w-full max-w-[200px] aspect-[4/3] bg-white rounded-lg border border-gray-200 shadow-sm flex flex-col items-center justify-center gap-3 relative select-none">
                     <div className="absolute top-3 left-3 flex gap-1">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
                     </div>
                     <div className="bg-blue-600 text-white px-4 py-1.5 rounded-md text-[10px] font-semibold flex items-center gap-1.5 shadow-sm">
                        <Upload size={10} className="text-white"/> Upload Image
                     </div>
                     <div className="h-1 w-16 bg-gray-100 rounded-full"></div>
                </div>
             </div>
             
             {/* Content */}
             <div className="px-3 pb-6 flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white font-bold text-sm">1</div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Upload your photo</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Upload any PNG, JPG, WEBP, HEIC, HEIF, or AVIF image containing unwanted text, watermarks, or text overlays that you want to remove.
                    </p>
                </div>
             </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col bg-white rounded-2xl p-3 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300">
             {/* Card Image Area */}
             <div className="h-64 w-full bg-[#1a1d21] rounded-xl mb-6 relative overflow-hidden group">
                {/* Background Image */}
                <img 
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=600&auto=format&fit=crop" 
                    alt="Background Context" 
                    className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay"
                />
                
                {/* Center Processing Element */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-44 bg-gray-800 rounded-lg overflow-hidden border border-gray-600 shadow-2xl transform transition-transform group-hover:scale-105">
                         <img 
                           src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop"
                           className="w-full h-full object-cover filter brightness-110"
                           alt="Mini Preview"
                        />
                        {/* Scanning Effect */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent translate-y-[-100%] animate-[scan_2s_ease-in-out_infinite]"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-md p-2 rounded-full border border-white/20">
                            <Sparkles className="text-white w-5 h-5" />
                        </div>
                    </div>
                </div>
             </div>

             {/* Content */}
             <div className="px-3 pb-6 flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white font-bold text-sm">2</div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Auto-remove text with AI</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Click generate. Our AI detects and removes the text while preserving the background. Most images process in seconds.
                    </p>
                </div>
             </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col bg-white rounded-2xl p-3 shadow-sm border border-gray-100/50 hover:shadow-md transition-all duration-300">
             {/* Card Image Area */}
             <div className="h-64 w-full bg-black rounded-xl mb-6 relative overflow-hidden flex items-center justify-center">
                <img 
                    src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=600&auto=format&fit=crop" 
                    alt="Clean Result" 
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-700"
                />
             </div>

             {/* Content */}
             <div className="px-3 pb-6 flex gap-4">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-lg bg-black text-white font-bold text-sm">3</div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Download your cleaned image</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                        Download your clean, text-free image ready for professional use. For more editing options, visit <a href="#" className="text-gray-900 font-medium hover:underline">our apps page</a>.
                    </p>
                </div>
             </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes scan {
            0% { transform: translateY(-100%); }
            100% { transform: translateY(100%); }
        }
      `}</style>
    </section>
  );
};