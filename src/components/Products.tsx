
import React from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      name: "IKONDocuM",
      stars: 3,
      description: "IKONDocuM is conceptualized by the Team of Subject Matter Experts, having an experience of more than 4 Decades in managing Records and Document. The Product is crafted after extensive Market Research into various Segment and Verticals Records and Document Management Pain Areas and suitably designed to provide solutions for those."
    },
    {
      name: "IKONRecoM",
      stars: 3,
      description: "IKONRecoM is a unique and robust Software Solution to help you manage your Hard copy Records and Documents in the most effective and professional manner to meet the challenges of Compliance, Risk Management & Business Continuity, while facilitating a Secure environment with Access Audit Trails for your critical information."
    },
    {
      name: "IKONDoeS",
      stars: 3,
      description: "IKONDoeS is suitable for any Enterprise which is considering to efficiently Create, Edit Review, Manage & Distribute the business documents. It enables organizations to regulate and manage the Creation and Review of business documents and make them available as online information."
    }
  ];

  return (
    <section id="products" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 text-white">
                <div className="flex items-center mb-2">
                  {Array.from({ length: product.stars }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <h3 className="text-xl font-bold">{product.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>
                <Button 
                  className="w-full bg-blue-700 hover:bg-blue-800"
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
