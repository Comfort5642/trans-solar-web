
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Phone, MessageCircle, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Brochure = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <a href="tel:0729319889" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary">
                <Phone className="h-4 w-4" />
                <span>0729 319 889</span>
              </a>
              <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="https://wa.me/254729319889">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Services Brochure
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive overview of Trans Solar Boreholes water solutions and services
            </p>
            <Button size="lg" className="mb-8" asChild>
              <a href="/lovable-uploads/2387459c-7c86-4409-b915-d50dd521effa.png" download="Trans-Solar-Boreholes-Brochure.png">
                <Download className="h-5 w-5 mr-2" />
                Download Brochure
              </a>
            </Button>
          </div>

          {/* Brochure Display */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <img 
                src="/lovable-uploads/2387459c-7c86-4409-b915-d50dd521effa.png"
                alt="Trans Solar Boreholes Services Brochure - Water pumping and drilling services in Kenya"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Services Summary */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Hydro-geological Surveys</h3>
              <p className="text-gray-600">Professional ground water assessment and mapping</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Borehole Drilling</h3>
              <p className="text-gray-600">Modern drilling techniques up to 300m depth</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Solar Pump Systems</h3>
              <p className="text-gray-600">Eco-friendly water pumping solutions</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-primary">Maintenance Services</h3>
              <p className="text-gray-600">24/7 support and preventive maintenance</p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-gray-600 mb-8">Contact us for consultation, booking, or more information</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:0729319889">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0729 319 889
                </a>
              </Button>
              <Button size="lg" asChild>
                <a href="tel:0755319889">
                  <Phone className="h-5 w-5 mr-2" />
                  Call: 0755 319 889
                </a>
              </Button>
              <Button size="lg" variant="outline" className="bg-green-600 text-white hover:bg-green-700" asChild>
                <a href="https://wa.me/254729319889">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Brochure;
