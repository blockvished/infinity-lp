
import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ClientCarousel = () => {
  const clients = [
    {
      name: "Client 1",
      logo: "https://via.placeholder.com/150?text=Client+1",
      industry: "Banking"
    },
    {
      name: "Client 2",
      logo: "https://via.placeholder.com/150?text=Client+2",
      industry: "Healthcare"
    },
    {
      name: "Client 3",
      logo: "https://via.placeholder.com/150?text=Client+3",
      industry: "Insurance"
    },
    {
      name: "Client 4",
      logo: "https://via.placeholder.com/150?text=Client+4",
      industry: "Government"
    },
    {
      name: "Client 5",
      logo: "https://via.placeholder.com/150?text=Client+5",
      industry: "Telecommunications"
    },
    {
      name: "Client 6",
      logo: "https://via.placeholder.com/150?text=Client+6",
      industry: "Pharmaceuticals"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const timeoutRef = useRef<number | null>(null);
  
  const itemsToShow = 3;
  const maxIndex = Math.max(0, clients.length - itemsToShow);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    
    if (isAutoScrolling) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, 3000);
    }
    
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isAutoScrolling, maxIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };

  return (
    <section id="clients" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Clients and Partners</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We are proud to serve a diverse range of clients across different industries. Our partnerships reflect our commitment to quality and excellence.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto overflow-hidden px-10" 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex space-x-8 transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)` }}
          >
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="min-w-[calc(100%/3-2rem)] flex-grow-0 flex-shrink-0"
              >
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow h-full flex flex-col items-center justify-center">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="h-24 w-auto object-contain mb-4" 
                  />
                  <h3 className="text-lg font-medium text-gray-900">{client.name}</h3>
                  <p className="text-sm text-gray-600">{client.industry}</p>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6 text-blue-700" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6 text-blue-700" />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentIndex ? "bg-blue-600" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientCarousel;
