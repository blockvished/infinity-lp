
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-20 md:pt-24 lg:pt-32 pb-16 md:pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              IKON BPS - Document Management System (DMS)
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
              The Global Digital Universe is growing exponentially and is doubling in every 2 years and is expected to touch 44 Zetabytes(ZB) or 44 Trillion Gigabytes (GBs) by year 2020. The Indian Digital Universe is growing at a similar space and is expected to touch 2.8 ZB by year 2020.
            </p>
            <p className="text-gray-600 mb-8 text-lg">
              As organizations generate massive amounts of documents, proper management becomes vital for statutory audit and compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-blue-700 hover:bg-blue-800 text-md px-6 py-6">
                Get Started
                <ArrowRight size={18} className="ml-2" />
              </Button>
              <Button variant="outline" className="border-blue-700 text-blue-700 hover:bg-blue-50 text-md px-6 py-6">
                Learn More
              </Button>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob"></div>
              <div className="absolute -bottom-8 right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=1200"
                  alt="Document Management System"
                  className="relative rounded-lg shadow-2xl w-full h-auto object-cover z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Concerns for Organizations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-medium text-blue-700">Traceability & Availability</h3>
              <p className="text-gray-600 mt-2">Access crucial documents on demand when needed</p>
            </div>
            <div className="flex flex-col p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-medium text-blue-700">Inventory & Visibility</h3>
              <p className="text-gray-600 mt-2">Comprehensive records inventory with audit trails</p>
            </div>
            <div className="flex flex-col p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-medium text-blue-700">Life Cycle & Retention</h3>
              <p className="text-gray-600 mt-2">Proper document lifecycle management</p>
            </div>
            <div className="flex flex-col p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
              <h3 className="font-medium text-blue-700">Safety & Security</h3>
              <p className="text-gray-600 mt-2">Access restriction and robust security controls</p>
            </div>
          </div>
          <div className="mt-8">
            <p className="text-lg text-center text-gray-700">
              Your search for a reliable partner for an End to End Solution ends here.
            </p>
            <p className="text-base text-center text-gray-600 mt-4">
              IKON Team, are the subject matter experts having more than 4 decades of collective experience in the field of Records & Document Management across diversified segment. The expertise varies from highly sensitive Defense Sector, Central & State Government, Telecom, Banking, NBFC, Insurance, Pharmaceutical, Healthcare, Diagnostics, Media, Legal, IT, ITeS and BPO.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
