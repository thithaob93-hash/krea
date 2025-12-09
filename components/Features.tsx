import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 max-w-5xl leading-[1.1]">
            Professional Text Removal for Clean, Polished Images
          </h2>
          <p className="text-lg text-gray-500 max-w-3xl mb-8 leading-relaxed">
            Remove text, watermarks, and overlays from images to create clean, professional photos ready for any use. Perfect for photographers, marketers, and content creators who need pristine images.
          </p>
          <a href="#" className="inline-flex items-center text-lg font-medium text-gray-900 hover:text-gray-600 transition-colors group">
            Try our full image editor
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* Left Image Column */}
          <div className="relative rounded-3xl overflow-hidden min-h-[500px] group">
             <img 
              src="https://images.unsplash.com/photo-1542385151-efd9000785a0?q=80&w=1000&auto=format&fit=crop" 
              alt="Night street scene art" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>

          {/* Right Content Card Column */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-16 flex flex-col justify-center items-start border border-gray-100/50">
            {/* Icon */}
            <div className="h-14 w-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-8">
               <span className="text-blue-600 text-2xl font-medium">$</span>
            </div>
            
            {/* Card Title */}
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Free AI text removal tool. No sign up, no credit card.
            </h3>
            
            {/* Card Description */}
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">
              Remove unwanted text, watermarks, and overlays from your images completely free. Perfect for cleaning photos for professional use, social media, or presentations.
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