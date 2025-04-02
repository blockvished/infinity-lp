
import React from "react";
import { FileText, Book } from "lucide-react";

const Consultancy = () => {
  const consultancyServices = [
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Document Processing & Management",
      description: "Expert consultancy to optimize your document workflows and management systems"
    },
    {
      icon: <Book className="h-12 w-12 text-blue-600" />,
      title: "In-House Records Management Processes",
      description: "Design and implementation of efficient in-house records management processes"
    }
  ];

  return (
    <section id="consultancy" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Consultancy</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Industry & Subject Matter Experts, having cumulative experience of nearly 4 decades under their belt, backs IKON Consultancy Services. During their respective career, they have Designed, Developed and Implemented solutions across industries, company sizes and technology environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {consultancyServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex flex-col items-center text-center"
            >
              <div className="mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <p className="text-gray-700">
            We follow the Project Approach Methodology derived and perfected out of our vast experience, to synergize the efforts and delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Consultancy;
