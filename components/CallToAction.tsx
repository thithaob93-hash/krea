import React from 'react';

export const CallToAction: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white pb-24 px-6 pt-12">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-[2.5rem] border-2 border-dashed border-gray-200 bg-white px-6 py-24 md:py-32 text-center overflow-hidden">
            
            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                <p className="text-lg md:text-xl text-gray-500 mb-8 leading-relaxed text-center max-w-2xl font-medium">
                    Free AI-powered text removal for clean, professional images. No signup required.
                    Perfect for removing watermarks, text overlays, and unwanted text from photos.
                </p>

                <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-12 leading-[1.1]">
                    Remove text from any image<br className="hidden md:block"/> instantly
                </h2>

                <button 
                    onClick={scrollToTop}
                    className="bg-black text-white px-8 md:px-10 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 text-lg shadow-xl"
                >
                    Start removing text
                </button>
            </div>

            {/* Subtle bottom fade effect */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-gray-50/50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};