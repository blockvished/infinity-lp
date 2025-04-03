
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The document management system from Infinity BPS transformed how we handle our data. The efficiency has improved dramatically.",
    author: "John Smith",
    position: "CIO, Financial Services Company"
  },
  {
    quote: "We've been able to reduce our document processing time by 60% since implementing Infinity's solutions. Their team is responsive and knowledgeable.",
    author: "Sarah Johnson",
    position: "Operations Director, Healthcare Provider"
  },
  {
    quote: "The consultancy services provided by Infinity helped us set up a robust document management workflow that meets all our regulatory requirements.",
    author: "Rajiv Mehta",
    position: "Compliance Manager, Insurance Company"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-16 md:py-24 bg-blue-700 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-blue-800 bg-opacity-30 rounded-lg p-8 md:p-10 text-center">
                    <Quote className="h-12 w-12 mx-auto mb-6 text-blue-300 opacity-50" />
                    <blockquote className="text-xl md:text-2xl italic font-light mb-8">
                      "{testimonial.quote}"
                    </blockquote>
                    <div>
                      <p className="font-semibold text-lg">{testimonial.author}</p>
                      <p className="text-blue-200">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevTestimonial} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-blue-800 hover:bg-blue-900 p-2 rounded-full"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-blue-800 hover:bg-blue-900 p-2 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-white" : "bg-blue-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;