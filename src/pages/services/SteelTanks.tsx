
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle, Building, Shield, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const SteelTanks = () => {
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
            <div className="bg-gray-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Building className="h-10 w-10 text-gray-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Elevated Steel Tank Construction
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Durable steel water storage tanks designed to meet your capacity needs with superior quality and longevity
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

      {/* Tank Types */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Tank Types & Specifications</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Ground Level Tanks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Capacity: 5,000L - 100,000L</li>
                  <li>• Easy maintenance access</li>
                  <li>• Cost-effective solution</li>
                  <li>• Quick installation</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Elevated Steel Tanks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Capacity: 10,000L - 200,000L</li>
                  <li>• Gravity-fed distribution</li>
                  <li>• Height: 10m - 30m</li>
                  <li>• Enhanced water pressure</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sectional Tanks</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Modular construction</li>
                  <li>• Custom sizes available</li>
                  <li>• Easy transportation</li>
                  <li>• Scalable capacity</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Construction Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Construction Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Site Preparation</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-1 text-sm text-gray-600">
                  <li>• Soil analysis and testing</li>
                  <li>• Foundation design</li>
                  <li>• Site leveling and excavation</li>
                  <li>• Base construction</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Foundation Work</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-1 text-sm text-gray-600">
                  <li>• Concrete foundation pouring</li>
                  <li>• Anchor bolt installation</li>
                  <li>• Curing and testing</li>
                  <li>• Foundation inspection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Tank Assembly</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-1 text-sm text-gray-600">
                  <li>• Steel plate cutting and shaping</li>
                  <li>• Welding and assembly</li>
                  <li>• Quality control checks</li>
                  <li>• Pressure testing</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Finishing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-1 text-sm text-gray-600">
                  <li>• Surface preparation</li>
                  <li>• Anti-corrosion coating</li>
                  <li>• Pipe connections</li>
                  <li>• Final inspection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features & Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Features & Benefits</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Shield className="h-6 w-6 text-green-600" />
                    <span>Durability Features</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>High-grade galvanized steel construction</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Corrosion-resistant coating</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Weather-resistant design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>10-year structural warranty</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Wrench className="h-6 w-6 text-blue-600" />
                    <span>Technical Specifications</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span>Material:</span>
                    <span className="font-semibold">Galvanized Steel</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thickness:</span>
                    <span className="font-semibold">3mm - 8mm</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Height Options:</span>
                    <span className="font-semibold">10m - 30m</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Installation Time:</span>
                    <span className="font-semibold">2 - 4 weeks</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Guide */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pricing Guide</h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">10,000L Tank</CardTitle>
                <div className="text-center text-2xl font-bold text-primary">From KSh 450,000</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Ground level installation</li>
                  <li>✓ Basic fittings included</li>
                  <li>✓ 2-year warranty</li>
                  <li>✓ Ideal for small homes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary border-2">
              <CardHeader>
                <CardTitle className="text-center text-primary">50,000L Tank</CardTitle>
                <div className="text-center text-2xl font-bold text-primary">From KSh 1,200,000</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Elevated or ground installation</li>
                  <li>✓ Complete fittings package</li>
                  <li>✓ 5-year warranty</li>
                  <li>✓ Perfect for communities</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">100,000L+ Tank</CardTitle>
                <div className="text-center text-2xl font-bold text-primary">Custom Quote</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>✓ Custom design and size</li>
                  <li>✓ Premium materials</li>
                  <li>✓ 10-year warranty</li>
                  <li>✓ Commercial applications</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Build Your Water Storage Solution</h2>
          <p className="text-xl mb-8 opacity-90">Durable steel tanks built to last with professional installation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:0729319889">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0729 319 889
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-gray-800" asChild>
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

export default SteelTanks;
