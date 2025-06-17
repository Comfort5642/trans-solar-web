
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Phone, MessageCircle, Search, MapPin, Target, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const HydroSurveys = () => {
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
            <div className="bg-blue-100 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Search className="h-10 w-10 text-blue-600" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hydro-Geological Surveys
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional groundwater surveys to identify the best drilling locations and maximize your borehole success rate
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

      {/* Survey Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">Survey Methods & Techniques</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle>Geophysical Surveys</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Electrical resistivity surveys</li>
                  <li>• Seismic refraction studies</li>
                  <li>• Electromagnetic mapping</li>
                  <li>• Ground penetrating radar</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle>Geological Mapping</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Surface geology assessment</li>
                  <li>• Rock formation analysis</li>
                  <li>• Structural geology mapping</li>
                  <li>• Hydrogeological characterization</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle>Site Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Water table depth assessment</li>
                  <li>• Aquifer potential evaluation</li>
                  <li>• Optimal drilling point selection</li>
                  <li>• Environmental impact assessment</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Survey Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Survey Process</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <CardTitle>Site Visit & Planning</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-1 text-sm text-gray-600">
                  <li>• Initial site inspection</li>
                  <li>• Topographic assessment</li>
                  <li>• Access route planning</li>
                  <li>• Survey method selection</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <CardTitle>Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-1 text-sm text-gray-600">
                  <li>• Geophysical measurements</li>
                  <li>• GPS coordinate mapping</li>
                  <li>• Geological observations</li>
                  <li>• Water source identification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <CardTitle>Analysis & Modeling</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-1 text-sm text-gray-600">
                  <li>• Data processing and analysis</li>
                  <li>• 3D subsurface modeling</li>
                  <li>• Water potential assessment</li>
                  <li>• Risk factor evaluation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <CardTitle>Report & Recommendations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-1 text-sm text-gray-600">
                  <li>• Comprehensive survey report</li>
                  <li>• Drilling recommendations</li>
                  <li>• Expected yield estimates</li>
                  <li>• Cost-benefit analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Report Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
            
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-6 w-6 text-blue-600" />
                  <span>Comprehensive Survey Report</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Technical Analysis</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Geological cross-sections</li>
                      <li>• Aquifer depth and thickness</li>
                      <li>• Water quality predictions</li>
                      <li>• Drilling depth recommendations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Maps & Visualizations</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li>• Site location maps</li>
                      <li>• Subsurface geology maps</li>
                      <li>• 3D aquifer models</li>
                      <li>• Risk assessment charts</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-600">Success Guarantee</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our surveys come with a 95% success rate guarantee. If water is not found at the recommended location within the specified depth, we provide:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>• Alternative site recommendations</li>
                    <li>• Partial refund options</li>
                    <li>• Re-survey at reduced cost</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-blue-600">Survey Pricing</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span>Basic Survey (up to 2 acres):</span>
                      <span className="font-semibold">KSh 25,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Standard Survey (2-10 acres):</span>
                      <span className="font-semibold">KSh 45,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Comprehensive Survey (10+ acres):</span>
                      <span className="font-semibold">KSh 75,000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Start with a Professional Survey</h2>
          <p className="text-xl mb-8 opacity-90">Maximize your borehole success rate with expert hydrogeological assessment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:0729319889">
                <Phone className="h-5 w-5 mr-2" />
                Call Now: 0729 319 889
              </a>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-blue-600" asChild>
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

export default HydroSurveys;
