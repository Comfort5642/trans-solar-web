import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Phone, Mail, MapPin, Droplets, Wrench, Settings, Battery, Building, Search, MessageCircle, Star, ChevronDown } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    location: '',
    message: ''
  });
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submission:', formData);
    
    // Simulate form submission
    toast({
      title: "Quote Request Sent!",
      description: "We'll contact you within 24 hours. Thank you for choosing Trans Solar Boreholes!",
    });
    
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      location: '',
      message: ''
    });
  };

  const services = [
    {
      icon: <Droplets className="h-8 w-8" />,
      title: "Borehole Drilling",
      description: "Professional water borehole drilling with modern equipment and experienced technicians."
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Solar Pump Installation", 
      description: "Eco-friendly solar-powered water pumping systems for sustainable water access."
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Borehole Equipping & Maintenance",
      description: "Complete borehole setup and ongoing maintenance services to ensure optimal performance."
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Elevated Steel Tank Construction",
      description: "Durable steel water storage tanks designed to meet your capacity needs."
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Hydro-Geological Surveys",
      description: "Professional ground water surveys to identify the best drilling locations."
    }
  ];

  const projects = [
    {
      name: "Machakos County Borehole",
      location: "Machakos, Kenya",
      description: "200-meter deep borehole with solar pump installation serving 500+ households",
      image: "https://images.unsplash.com/photo-1506744038136-40eb2168fd21?w=400&h=300&fit=crop"
    },
    {
      name: "Kiambu Farm Water System",
      location: "Kiambu, Kenya", 
      description: "Complete water system with 10,000L elevated tank for agricultural irrigation",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=400&h=300&fit=crop"
    },
    {
      name: "Nakuru Community Project",
      location: "Nakuru, Kenya",
      description: "Multi-borehole project with solar pumping system for rural community",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=400&h=300&fit=crop"
    }
  ];

  const testimonials = [
    {
      name: "Mary Wanjiku",
      location: "Kiambu",
      text: "Trans Solar Boreholes transformed our farm! The solar pump works perfectly and our crops have never been better.",
      rating: 5
    },
    {
      name: "John Kamau",
      location: "Machakos", 
      text: "Professional service from start to finish. Our community now has reliable water access thanks to their expert drilling.",
      rating: 5
    },
    {
      name: "Grace Akinyi",
      location: "Nakuru",
      text: "Excellent work on our borehole maintenance. The team is knowledgeable and very reliable.",
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Droplets className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Trans Solar Boreholes</h1>
                <p className="text-sm text-primary">Your Borehole Experts</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors">About Us</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary transition-colors">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors">Contact</button>
            </nav>

            {/* Contact Info & Social */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:0729319889" className="flex items-center space-x-1 text-sm text-gray-600 hover:text-primary">
                <Phone className="h-4 w-4" />
                <span>0729 319 889</span>
              </a>
              <a href="https://facebook.com/TransSolarBoreholes" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t">
              <div className="flex flex-col space-y-2 pt-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-primary py-2">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-primary py-2">About Us</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-primary py-2">Services</button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-primary py-2">Projects</button>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-primary py-2">Contact</button>
                <div className="flex items-center space-x-4 pt-2">
                  <a href="tel:0729319889" className="flex items-center space-x-1 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>Call Us</span>
                  </a>
                  <a href="https://facebook.com/TransSolarBoreholes" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">Kenya's Water Solutions Experts</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Life in Every Drop
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  Professional borehole drilling, solar pump installation, and water system maintenance across Kenya. Your trusted borehole experts since day one.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="pulse-glow" onClick={() => scrollToSection('contact')}>
                  <Phone className="h-5 w-5 mr-2" />
                  Get a Quote
                </Button>
                <Button variant="outline" size="lg" onClick={() => scrollToSection('services')}>
                  Our Services
                  <ChevronDown className="h-5 w-5 ml-2" />
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Boreholes Drilled</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="float-animation">
                <img 
                  src="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=600&h=400&fit=crop" 
                  alt="Crystal clear water waves - Professional borehole and water solutions"
                  className="rounded-lg shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Droplets className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Clean Water</div>
                    <div className="text-sm text-gray-600">Guaranteed Quality</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              About Trans Solar Boreholes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We are Kenya's premier water solutions provider, bringing clean, reliable water access to communities and businesses across the country through innovative drilling and solar technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Technicians</h3>
                <p className="text-gray-600">Our certified team brings years of experience and modern equipment to every project.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Battery className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Solar Technology</h3>
                <p className="text-gray-600">Eco-friendly solar pumping systems that provide sustainable water access with minimal operating costs.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
                <p className="text-gray-600">We stand behind our work with comprehensive warranties and ongoing maintenance support.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Water Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive water services from initial surveys to complete system installation and maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center text-primary mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{service.description}</p>
                  <Button variant="ghost" className="mt-4 p-0 h-auto font-semibold text-primary hover:text-primary/80">
                    Learn More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See our successful water solutions in action across Kenya.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.name}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <a href="https://facebook.com/TransSolarBoreholes" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                See More on Facebook
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Trusted by communities and businesses across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Request a Quote
            </h2>
            <p className="text-xl text-gray-600">
              Get started on your water solution project today
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send Us Your Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <Input
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number *</label>
                    <Input
                      required
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g., 0729 319 889"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com (optional)"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Service Needed *</label>
                    <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select service needed" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="drilling">Borehole Drilling</SelectItem>
                        <SelectItem value="solar-pump">Solar Pump Installation</SelectItem>
                        <SelectItem value="equipping">Borehole Equipping</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="tank">Steel Tank Construction</SelectItem>
                        <SelectItem value="survey">Hydro-Geological Survey</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Location *</label>
                    <Input
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      placeholder="e.g., Kiambu County, Kenya"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us more about your requirements..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full pulse-glow">
                    Request a Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Call Us</div>
                      <div className="text-gray-600">
                        <a href="tel:0729319889" className="hover:text-primary">0729 319 889</a>
                        <span className="mx-2">•</span>
                        <a href="tel:0755319889" className="hover:text-primary">0755 319 889</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Email Us</div>
                      <a href="mailto:transboreholes@gmail.com" className="text-gray-600 hover:text-primary">
                        transboreholes@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <svg className="h-6 w-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-semibold">Follow Us</div>
                      <a href="https://facebook.com/TransSolarBoreholes" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-600">
                        Trans Solar Boreholes
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Service Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Service Coverage Map</p>
                      <p className="text-sm">Serving all of Kenya</p>
                    </div>
                  </div>
                  <p className="text-gray-600">
                    We provide professional water solutions across Kenya, from Nairobi to rural communities. Contact us for service availability in your area.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-primary text-white p-2 rounded-lg">
                  <Droplets className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Trans Solar Boreholes</h3>
                  <p className="text-sm text-gray-400">Your Borehole Experts</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Life in Every Drop - Professional water solutions across Kenya.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/TransSolarBoreholes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Borehole Drilling</li>
                <li>Solar Pump Installation</li>
                <li>Borehole Equipping</li>
                <li>Maintenance Services</li>
                <li>Steel Tank Construction</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>0729 319 889</li>
                <li>0755 319 889</li>
                <li>transboreholes@gmail.com</li>
                <li>Kenya (Nationwide)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Actions</h4>
              <div className="space-y-2">
                <Button variant="outline" size="sm" className="w-full justify-start" onClick={() => scrollToSection('contact')}>
                  <Phone className="h-4 w-4 mr-2" />
                  Get Quote
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                  <a href="tel:0729319889">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Trans Solar Boreholes. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/254729319889?text=Hello%20Trans%20Solar%20Boreholes,%20I%20need%20information%20about%20your%20water%20solutions."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 pulse-glow"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
};

export default Index;
