import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Menu, X, Phone, Mail, MapPin, Droplets, Wrench, Settings, Battery, Building, Search, MessageCircle, Star, ChevronDown, Shield, Award, Clock, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Gallery from '@/components/Gallery';
import { Link } from 'react-router-dom';

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
      description: "Professional water borehole drilling with modern equipment and experienced technicians.",
      features: ["Modern drilling rigs", "Depth up to 300m", "Water quality testing"],
      link: "/services/borehole-drilling"
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: "Solar Pump Installation", 
      description: "Eco-friendly solar-powered water pumping systems for sustainable water access.",
      features: ["Energy efficient", "Low maintenance", "Remote monitoring"],
      link: "/services/solar-pumps"
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Borehole Equipping & Maintenance",
      description: "Complete borehole setup and ongoing maintenance services to ensure optimal performance.",
      features: ["24/7 support", "Preventive maintenance", "Emergency repairs"],
      link: "/services/borehole-equipping"
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Elevated Steel Tank Construction",
      description: "Durable steel water storage tanks designed to meet your capacity needs.",
      features: ["Custom sizes", "Corrosion resistant", "10-year warranty"],
      link: "/services/steel-tanks"
    },
    {
      icon: <Search className="h-8 w-8" />,
      title: "Hydro-Geological Surveys",
      description: "Professional ground water surveys to identify the best drilling locations.",
      features: ["GPS mapping", "Detailed reports", "Success guarantee"],
      link: "/services/hydro-surveys"
    }
  ];

  const projects = [
    {
      name: "Borehole Drilling Project",
      location: "Kiambu County, Kenya",
      description: "Professional borehole drilling operation with modern equipment and experienced technicians",
      image: "/lovable-uploads/8021145f-b4f3-4f35-b615-a6c9a89fe7db.png",
      specs: "150m depth, 3000L/hr capacity"
    },
    {
      name: "Solar-Powered Water Tank System",
      location: "Machakos County, Kenya", 
      description: "Elevated steel water tank with solar panel system for sustainable water storage",
      image: "/lovable-uploads/162244c4-1299-40a1-8061-05c4f61b93b8.png",
      specs: "10,000L capacity, Solar powered"
    },
    {
      name: "Complete Water Infrastructure",
      location: "Nakuru County, Kenya",
      description: "Multi-level water storage system with modern infrastructure and solar power integration",
      image: "/lovable-uploads/a8c85162-e05f-4226-96ca-4bc521b966f1.png",
      specs: "Community project, 500+ beneficiaries"
    }
  ];

  const testimonials = [
    {
      name: "Mary Wanjiku",
      location: "Kiambu County",
      company: "Sunrise Farm Ltd",
      text: "Trans Solar Boreholes transformed our farm operations! The solar pump works perfectly and our crops have never been better. Their team was professional from start to finish.",
      rating: 5,
      verified: true
    },
    {
      name: "John Kamau",
      location: "Machakos County", 
      company: "Machakos Water Committee",
      text: "Reliable water supply for our entire community! The drilling was completed ahead of schedule and within budget. We've had zero issues in the past two years.",
      rating: 4.5,
      verified: true
    },
    {
      name: "Grace Akinyi",
      location: "Nakuru County",
      company: "Akinyi Enterprises",
      text: "Quick response time and excellent maintenance service. When our pump had issues, they fixed it the same day. Great customer support and fair pricing!",
      rating: 5,
      verified: true
    }
  ];

  const certifications = [
    { name: "Water Works Development Agency", icon: <Shield className="h-6 w-6" /> },
    { name: "Kenya Association of Manufacturers", icon: <Award className="h-6 w-6" /> },
    { name: "ISO 9001:2015 Certified", icon: <Settings className="h-6 w-6" /> }
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
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white p-3 rounded-xl shadow-lg">
                <Droplets className="h-7 w-7" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Trans Solar Boreholes</h1>
                <p className="text-sm text-primary font-medium">Your Water Solutions Partner</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-primary transition-colors font-medium">Home</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-primary transition-colors font-medium">About Us</button>
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-primary transition-colors font-medium">Services</button>
              <button onClick={() => scrollToSection('projects')} className="text-gray-700 hover:text-primary transition-colors font-medium">Projects</button>
              <Link to="/brochure" className="text-gray-700 hover:text-primary transition-colors font-medium">Brochure</Link>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-primary transition-colors font-medium">Contact</button>
            </nav>

            {/* Contact Info & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <a href="tel:0729319889" className="flex items-center space-x-2 text-sm text-gray-600 hover:text-primary transition-colors">
                <Phone className="h-4 w-4" />
                <span className="font-medium">0729 319 889</span>
              </a>
              <Button size="sm" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="https://wa.me/254729319889?text=Hello%20Trans%20Solar%20Boreholes">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  WhatsApp
                </a>
              </Button>
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
            <nav className="md:hidden mt-4 pb-4 border-t bg-white rounded-lg shadow-lg">
              <div className="flex flex-col space-y-3 pt-4 px-4">
                <button onClick={() => scrollToSection('home')} className="text-left text-gray-700 hover:text-primary py-2 font-medium">Home</button>
                <button onClick={() => scrollToSection('about')} className="text-left text-gray-700 hover:text-primary py-2 font-medium">About Us</button>
                <button onClick={() => scrollToSection('services')} className="text-left text-gray-700 hover:text-primary py-2 font-medium">Services</button>
                <button onClick={() => scrollToSection('projects')} className="text-left text-gray-700 hover:text-primary py-2 font-medium">Projects</button>
                <Link to="/brochure" className="text-left text-gray-700 hover:text-primary py-2 font-medium" onClick={() => setIsMenuOpen(false)}>Brochure</Link>
                <button onClick={() => scrollToSection('contact')} className="text-left text-gray-700 hover:text-primary py-2 font-medium">Contact</button>
                <div className="flex items-center space-x-3 pt-3 border-t">
                  <Button size="sm" asChild>
                    <a href="tel:0729319889">
                      <Phone className="h-4 w-4 mr-1" />
                      Call Now
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href="https://wa.me/254729319889">
                      <MessageCircle className="h-4 w-4 mr-1" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-primary/5 to-green-600/10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-2">
                  <Badge className="bg-primary/10 text-primary hover:bg-primary/20 text-sm font-medium">
                    🏆 Kenya's #1 Water Solutions Provider
                  </Badge>
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Life in Every 
                  <span className="text-primary block">Drop</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Professional borehole drilling, solar pump installation, and comprehensive water system solutions across Kenya. Trusted by 500+ satisfied customers.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="pulse-glow text-lg px-8 py-6" onClick={() => scrollToSection('contact')}>
                  <Phone className="h-5 w-5 mr-2" />
                  Get Free Quote
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6" onClick={() => scrollToSection('services')}>
                  View Services
                  <ChevronDown className="h-5 w-5 ml-2" />
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600 font-medium">Boreholes Drilled</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">15+</div>
                  <div className="text-sm text-gray-600 font-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-gray-600 font-medium">Support Available</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="float-animation">
                <img 
                  src="/lovable-uploads/2173bda5-410a-4edb-91c0-4a5a1a393647.png" 
                  alt="Trans Solar Boreholes professional team drilling borehole in Kenya - Clean water solutions"
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-full">
                    <Droplets className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">Clean Water Guaranteed</div>
                    <div className="text-sm text-gray-600">Quality tested & certified</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-y">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">Trusted & Certified</h3>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-2 text-gray-600">
                <div className="text-primary">{cert.icon}</div>
                <span className="text-sm font-medium">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Why Choose Trans Solar Boreholes?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We are Kenya's premier water solutions provider, combining cutting-edge technology with local expertise to deliver reliable, sustainable water access to communities and businesses nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-10 w-10 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Expert Technicians</h3>
                <p className="text-gray-600">Certified professionals with 15+ years of experience and modern equipment.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Battery className="h-10 w-10 text-secondary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Solar Technology</h3>
                <p className="text-gray-600">Eco-friendly solar systems with 10-year warranties and minimal operating costs.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="h-10 w-10 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-3">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock maintenance support and emergency repair services.</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">500+ Happy Clients</h3>
                <p className="text-gray-600">Trusted by communities, farms, and businesses across Kenya.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Water Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial surveys to complete system installation and ongoing maintenance - we handle every aspect of your water needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader className="pb-4">
                  <div className="bg-primary/10 w-20 h-20 rounded-xl flex items-center justify-center text-primary mb-6">
                    {service.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="ghost" className="mt-6 p-0 h-auto font-bold text-primary hover:text-primary/80 hover:bg-primary/10 hover:scale-105 transition-all duration-300 px-4 py-2 rounded-lg" asChild>
                    <Link to={service.link}>
                      Learn More →
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <Gallery />

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our successful water solutions across Kenya - from rural communities to commercial farms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={`${project.name} in ${project.location} - Trans Solar Boreholes water solution project`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {project.location}
                  </div>
                  <Badge variant="outline" className="w-fit text-xs">
                    {project.specs}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <a href="https://facebook.com/TransSolarBoreholes" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                View More Projects
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real feedback from satisfied customers across Kenya
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(testimonial.rating) ? 'text-yellow-400 fill-current' : i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                      {testimonial.rating % 1 !== 0 && (
                        <div className="relative">
                          <Star className="h-5 w-5 text-gray-300 absolute" />
                          <Star className="h-5 w-5 text-yellow-400 fill-current" style={{ clipPath: 'inset(0 50% 0 0)' }} />
                        </div>
                      )}
                    </div>
                    {testimonial.verified && (
                      <Badge variant="outline" className="text-green-600 border-green-600">
                        Verified
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <div className="text-sm text-gray-500">{testimonial.location}</div>
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
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get Your Free Quote Today
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your water access? Let's discuss your project requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Send Your Requirements</CardTitle>
                <p className="text-gray-600">Get a detailed quote within 24 hours</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name *</label>
                      <Input
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Enter your full name"
                        className="h-12"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number *</label>
                      <Input
                        required
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="0729 319 889"
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="your.email@example.com (optional)"
                      className="h-12"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Service Needed *</label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Select service" />
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
                        placeholder="County, Kenya"
                        className="h-12"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your water requirements, expected depth, usage purpose..."
                      rows={4}
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full pulse-glow text-lg py-6">
                    Get Free Quote
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                    <div className="bg-primary p-3 rounded-lg">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Call Us Now</div>
                      <div className="text-gray-600">
                        <a href="tel:0729319889" className="hover:text-primary text-lg font-medium">0729 319 889</a>
                        <span className="mx-2">•</span>
                        <a href="tel:0755319889" className="hover:text-primary text-lg font-medium">0755 319 889</a>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                    <div className="bg-green-600 p-3 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">WhatsApp</div>
                      <a href="https://wa.me/254729319889" className="text-gray-600 hover:text-green-600 font-medium">
                        +254 729 319 889
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="bg-gray-600 p-3 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg">Email Us</div>
                      <a href="mailto:transboreholes@gmail.com" className="text-gray-600 hover:text-primary font-medium">
                        transboreholes@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">Service Areas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Nairobi County</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Kiambu County</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Machakos County</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>Nakuru County</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">
                      We provide professional water solutions across all 47 counties in Kenya. Contact us to confirm service availability in your area.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-primary text-white p-3 rounded-xl">
                  <Droplets className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Trans Solar Boreholes</h3>
                  <p className="text-sm text-gray-400">Your Water Solutions Partner</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Transforming lives across Kenya through reliable, sustainable water solutions. Professional borehole drilling and solar pump systems.
              </p>
              <div className="flex space-x-4">
                <a href="https://facebook.com/TransSolarBoreholes" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Our Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors cursor-pointer">Borehole Drilling</li>
                <li className="hover:text-white transition-colors cursor-pointer">Solar Pump Installation</li>
                <li className="hover:text-white transition-colors cursor-pointer">Borehole Equipping</li>
                <li className="hover:text-white transition-colors cursor-pointer">Maintenance Services</li>
                <li className="hover:text-white transition-colors cursor-pointer">Steel Tank Construction</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Contact Details</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-white transition-colors">
                  <a href="tel:0729319889">📞 0729 319 889</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="tel:0755319889">📞 0755 319 889</a>
                </li>
                <li className="hover:text-white transition-colors">
                  <a href="mailto:transboreholes@gmail.com">✉️ transboreholes@gmail.com</a>
                </li>
                <li>🌍 Kenya (Nationwide Service)</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
              <div className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800" onClick={() => scrollToSection('contact')}>
                  <Phone className="h-4 w-4 mr-2" />
                  Get Free Quote
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-transparent border-gray-600 text-gray-300 hover:bg-gray-800" asChild>
                  <a href="tel:0729319889">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start bg-green-700 border-green-600 text-white hover:bg-green-600" asChild>
                  <a href="https://wa.me/254729319889">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Trans Solar Boreholes. All rights reserved. | Professional water solutions across Kenya</p>
          </div>
        </div>
      </footer>

      {/* Enhanced Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <a
          href="https://wa.me/254729319889?text=Hello%20Trans%20Solar%20Boreholes,%20I%20need%20information%20about%20your%20water%20solutions."
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 pulse-glow group"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            WhatsApp Us
          </span>
        </a>
        
        <a
          href="tel:0729319889"
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 group"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Call Now
          </span>
        </a>
      </div>
    </div>
  );
};

export default Index;
