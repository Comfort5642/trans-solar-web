
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle, Battery, Sun, Wrench, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolarPumps = () => {
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

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <div className="bg-secondary/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Battery className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Solar Pump Installation
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Eco-friendly solar-powered water pumping systems for sustainable and cost-effective water access
            </p>
            <Button size="lg" className="mr-4" asChild>
              <a href="tel:0729319889">
                <Phone className="h-5 w-5 mr-2" />
                Get Quote
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Installation Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>1. System Design</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Water demand assessment</li>
                  <li>• Solar irradiation analysis</li>
                  <li>• Pump sizing and selection</li>
                  <li>• System configuration planning</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>2. Solar Panel Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Mounting structure setup</li>
                  <li>• Panel positioning and alignment</li>
                  <li>• Electrical connections</li>
                  <li>• Weather protection measures</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>3. Pump & Controller Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Submersible pump installation</li>
                  <li>• MPPT controller configuration</li>
                  <li>• Protection systems setup</li>
                  <li>• Remote monitoring installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>4. Piping & Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Pipeline installation</li>
                  <li>• Storage tank connections</li>
                  <li>• Distribution network setup</li>
                  <li>• Pressure and flow control</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>5. Testing & Commissioning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• System performance testing</li>
                  <li>• Flow rate verification</li>
                  <li>• Safety checks and validation</li>
                  <li>• Efficiency optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle>6. Training & Handover</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Operation training</li>
                  <li>• Maintenance guidelines</li>
                  <li>• Warranty documentation</li>
                  <li>• 24/7 support activation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits & Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">System Benefits & Specifications</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Environmental Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Zero carbon emissions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>No fuel costs or dependency</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Silent operation</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>25+ year system lifespan</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Technical Specifications</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Panel Capacity:</span>
                    <span className="font-semibold">500W - 5,000W</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Pump Capacity:</span>
                    <span className="font-semibold">1,000 - 20,000 L/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Lifting Height:</span>
                    <span className="font-semibold">Up to 200m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Daily Output:</span>
                    <span className="font-semibold">10,000 - 100,000L</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Switch to Sustainable Solar Pumping</h2>
          <p className="text-xl mb-8 opacity-90">Reduce operating costs by up to 90% with our solar pump systems</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:0729319889">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0729 319 889
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-secondary" asChild>
              <a href="https://wa.me/254729319889">
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolarPumps;
