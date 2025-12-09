import React from 'react';
import { Sparkles } from 'lucide-react';

export const QualitySection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="flex flex-col items-start">
                 <div className="h-14 w-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-8">
                    <Sparkles className="text-blue-600 fill-blue-600" size={24} />
                 </div>
                 
                 <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-[1.1]">
                    Preserve image quality while removing text
                 </h2>
                 
                 <p className="text-lg text-gray-500 leading-relaxed mb-10">
                    Our AI seamlessly removes text while preserving image quality and background details. Get clean, natural-looking results without artifacts or distortion.
                 </p>

                 <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 text-sm md:text-base shadow-lg">
                    Explore other Krea tools
                 </button>
            </div>
            
            {/* Right Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] bg-gray-100 group">
                 <img 
                    src="https://images.unsplash.com/photo-1560790671-b76ca41700fa?q=80&w=1000&auto=format&fit=crop" 
                    alt="Flowers detail preservation" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </div>
        </div>
      </div>
    </section>
  );
};