
import React from "react";
import { Database, FileText, Mail, CheckSquare, BarChart, Search } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <FileText className="h-12 w-12 text-blue-600" />,
      title: "Managed Document Processing Services",
      description: "End-to-end document processing tailored to your organization's needs"
    },
    {
      icon: <Database className="h-12 w-12 text-blue-600" />,
      title: "Data Processing & Data Entry",
      description: "Accurate data extraction and entry services for all your documents"
    },
    {
      icon: <Search className="h-12 w-12 text-blue-600" />,
      title: "Bulk Document Scanning & Digitization",
      description: "High-volume scanning and digitization with quality control"
    },
    {
      icon: <CheckSquare className="h-12 w-12 text-blue-600" />,
      title: "Document Validation",
      description: "Comprehensive validation services ensuring data accuracy and compliance"
    },
    {
      icon: <BarChart className="h-12 w-12 text-blue-600" />,
      title: "Document Inventory Services",
      description: "Complete tracking and management of your document inventory"
    },
    {
      icon: <Mail className="h-12 w-12 text-blue-600" />,
      title: "MailRoom Management",
      description: "Efficient mail processing, sorting, and distribution services"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our Business Process Outsource (BPO) Solutions are designed to help improve operational efficiency and organizational priorities. We offer BPO Solutions to ensure that each client get a customized and tailored solution that is in tune with their requirements and organizational goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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

        <div className="mt-16 max-w-3xl mx-auto text-center text-gray-700">
          <p>
            Our BPO Solutions ensures that you have experts in the field guiding you on how best to streamline your Document Processing and Management, with the right team of software and people. We enable enterprises of various sizes to achieve their business goals, while subject matter experts take care of the Business Critical Documentation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;