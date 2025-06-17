
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle, Droplets, Search, Wrench, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

const BoreholesDrilling = () => {
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
            <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Droplets className="h-10 w-10 text-primary" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Professional Borehole Drilling
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert water borehole drilling services using modern equipment and experienced technicians across Kenya
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Our Drilling Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>1. Site Survey & Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Hydro-geological survey</li>
                  <li>• GPS mapping and marking</li>
                  <li>• Soil analysis and water table assessment</li>
                  <li>• Environmental impact evaluation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>2. Equipment Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Modern drilling rig positioning</li>
                  <li>• Safety equipment installation</li>
                  <li>• Water and mud circulation system setup</li>
                  <li>• Power generation and tool preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Droplets className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>3. Drilling Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Progressive drilling to target depth</li>
                  <li>• Continuous geological logging</li>
                  <li>• Water strike monitoring</li>
                  <li>• Depth capacity up to 300 meters</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Wrench className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>4. Casing Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• High-grade steel casing installation</li>
                  <li>• Proper sealing and grouting</li>
                  <li>• Screen placement in water zones</li>
                  <li>• Wellhead protection setup</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>5. Testing & Development</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Pumping test and yield assessment</li>
                  <li>• Water quality testing</li>
                  <li>• Flow rate measurement</li>
                  <li>• Chemical and bacteriological analysis</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <CardTitle>6. Final Setup</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-600">
                  <li>• Wellhead completion</li>
                  <li>• Documentation and certification</li>
                  <li>• Handover and training</li>
                  <li>• Maintenance schedule setup</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Technical Specifications</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Drilling Capabilities</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Maximum Depth:</span>
                    <span className="font-semibold">300 meters</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Diameter Range:</span>
                    <span className="font-semibold">4" - 12" inches</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Expected Yield:</span>
                    <span className="font-semibold">1,000 - 10,000 L/hr</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Completion Time:</span>
                    <span className="font-semibold">3 - 7 days</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Quality Assurance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Water Testing:</span>
                    <span className="font-semibold">Laboratory certified</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Casing Material:</span>
                    <span className="font-semibold">Galvanized steel</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Warranty:</span>
                    <span className="font-semibold">2 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Success Rate:</span>
                    <span className="font-semibold">95%+</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Borehole Project?</h2>
          <p className="text-xl mb-8 opacity-90">Contact us today for a free site assessment and quote</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:0729319889">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0729 319 889
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-primary" asChild>
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

export default BoreholesDrilling;
