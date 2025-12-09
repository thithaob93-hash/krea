import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "Is the AI text remover free?",
    answer: "Yes, our AI text remover is completely free to use. You can process images without any cost or subscription."
  },
  {
    question: "How does AI text removal work?",
    answer: "Our advanced AI analyzes the image to identify text elements and then intelligently fills in the area with background texture and details, making it look like the text was never there."
  },
  {
    question: "How do I remove text from an image?",
    answer: "Simply upload your image using the button at the top of the page, and our AI will automatically detect and remove the text. You can then download the clean image."
  },
  {
    question: "Will it remove logos?",
    answer: "Yes, the tool is effective at removing logos, watermarks, and other unwanted overlays in addition to standard text."
  },
  {
    question: "Do I need an account for text removal?",
    answer: "No, you can use the tool instantly without creating an account or providing any credit card information."
  },
  {
    question: "How fast is text removal?",
    answer: "Most images are processed in just a few seconds, depending on the image size and complexity."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-24 px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-500">
            Everything you need to know about AI text removal
          </p>
        </div>

        <div className="space-y-0 divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <div key={index} className="pt-2 pb-2">
              <button
                className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {faq.question}
                </span>
                <span className={`ml-6 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
              >
                <p className="text-gray-500 leading-relaxed pr-8">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};