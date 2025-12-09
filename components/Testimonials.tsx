import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "FYN",
    text: "So many AI tools out there but I always come back to Krea. It's really the one AI platform that 'just works'.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Lynn",
    text: "Krea's interfaces are still the best in the industry. Everything looks and feels so clean and easy to use! Imo the easiest to use gen AI website.",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Daniel",
    text: "Ultra fast generations. Extremely simple to use. All the latest AI models.",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Sophia M.",
    text: "KREA is the only AI subscription I have right now besides ChatGPT.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Wirot Ch.",
    text: "I'm a Krea Max user. It's crazy how fast they add models. I see a new AI model on twitter and the same day krea already offers it.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=faces"
  },
  {
    name: "Gravion",
    text: "Still the most powerful AI creative suite out there.",
    avatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop&crop=faces"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 border-t border-gray-50">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Trust Headline */}
        <div className="text-center mb-24 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
            Trusted by over 30 million users and companies worldwide. <br className="hidden md:block" />
            Krea is one of the world's leading generative AI platforms.
          </h2>
        </div>

        {/* Second Headline Section */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">
            Intuitive, powerful, and free. See <br className="hidden md:block" />
            what others say about Krea.
          </h3>
          <a href="#" className="text-lg text-gray-500 hover:text-gray-900 transition-colors">
            Read our testimonials
          </a>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-900 font-medium text-lg leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <img 
                  src={review.avatar} 
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover border border-gray-100" 
                />
                <span className="font-bold text-gray-900">{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};