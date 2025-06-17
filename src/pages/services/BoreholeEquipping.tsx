
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle, Wrench, Settings, Droplets } from 'lucide-react';
import { Link } from 'react-router-dom';

const BoreholeEquipping = () => {
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
            <div className="bg-accent/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Wrench className="h-10 w-10 text-accent" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Borehole Equipping & Maintenance
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Complete borehole setup and ongoing maintenance services to ensure optimal performance and longevity
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

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Comprehensive Equipping Services</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">New Borehole Equipping</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Submersible pump selection and installation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Rising main and delivery pipeline setup</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Control panel and starter installation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <span>Pressure tank and distribution system</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-2xl text-accent">Maintenance Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>24/7 emergency repair services</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Preventive maintenance programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>Pump servicing and replacement</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2"></div>
                    <span>System upgrades and optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Process Steps */}
          <h3 className="text-2xl font-bold text-center mb-8">Equipment Installation Process</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary">1</span>
                </div>
                <CardTitle className="text-lg">Assessment</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Borehole condition evaluation and water yield testing</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary">2</span>
                </div>
                <CardTitle className="text-lg">Equipment Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Pump sizing and component specification based on requirements</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary">3</span>
                </div>
                <CardTitle className="text-lg">Installation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Professional installation of all pumping and control equipment</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="font-bold text-primary">4</span>
                </div>
                <CardTitle className="text-lg">Testing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">System commissioning and performance verification</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Maintenance Plans</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Basic Plan</CardTitle>
                <div className="text-center text-3xl font-bold text-primary">KSh 15,000</div>
                <div className="text-center text-gray-600">per year</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Quarterly inspections</li>
                  <li>✓ Basic cleaning and lubrication</li>
                  <li>✓ Performance monitoring</li>
                  <li>✓ Emergency support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary border-2">
              <CardHeader>
                <CardTitle className="text-center text-primary">Professional Plan</CardTitle>
                <div className="text-center text-3xl font-bold text-primary">KSh 25,000</div>
                <div className="text-center text-gray-600">per year</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Monthly inspections</li>
                  <li>✓ Comprehensive servicing</li>
                  <li>✓ Component replacements</li>
                  <li>✓ 24/7 emergency response</li>
                  <li>✓ Performance optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Premium Plan</CardTitle>
                <div className="text-center text-3xl font-bold text-primary">KSh 40,000</div>
                <div className="text-center text-gray-600">per year</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Bi-weekly inspections</li>
                  <li>✓ Full system overhauls</li>
                  <li>✓ All parts included</li>
                  <li>✓ Priority emergency response</li>
                  <li>✓ System upgrades</li>
                  <li>✓ Remote monitoring</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ensure Reliable Water Access</h2>
          <p className="text-xl mb-8 opacity-90">Professional borehole equipping and maintenance services you can trust</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:0729319889">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0729 319 889
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-accent" asChild>
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

export default BoreholeEquipping;
