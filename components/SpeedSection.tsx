import React from 'react';
import { Zap } from 'lucide-react';

export const SpeedSection: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Image Column */}
          <div className="relative rounded-3xl overflow-hidden min-h-[500px] group">
             <img 
              src="https://images.unsplash.com/photo-1478260466023-ea3f219d9b62?q=80&w=1000&auto=format&fit=crop" 
              alt="Winter cabin scene" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Right Content Card Column */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 flex flex-col justify-center items-start border border-gray-100/50">
            {/* Icon */}
            <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
               <Zap className="text-blue-600 fill-blue-600" size={24} />
            </div>
            
            {/* Card Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Lightning-fast text removal results
            </h3>
            
            {/* Card Description */}
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">
              Get clean, text-free images in seconds. Perfect for photographers, content creators, and anyone who needs to remove watermarks or text overlays quickly and professionally.
            </p>

            {/* CTA Button */}
            <button className="bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 text-sm md:text-base shadow-lg">
              Explore other Krea tools
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};