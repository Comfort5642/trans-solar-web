
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Gallery = () => {
  const galleryImages = [
    {
      src: "/lovable-uploads/9d9f144c-01bb-454e-b0d9-1b0b4f0d49e4.png",
      title: "Professional Borehole Drilling",
      description: "Modern drilling rig in operation in the Kenyan countryside"
    },
    {
      src: "/lovable-uploads/51234531-4494-4be4-a06c-924473d28dcc.png", 
      title: "Advanced Drilling Equipment",
      description: "State-of-the-art drilling equipment working on site"
    },
    {
      src: "/lovable-uploads/832a3768-bad9-4ce0-89c9-ff04f8468393.png",
      title: "Trans Solar Boreholes Fleet",
      description: "Our professional drilling trucks and equipment fleet"
    },
    {
      src: "/lovable-uploads/a33ff016-5692-4fa2-8825-a51618ba558e.png",
      title: "On-Site Operations",
      description: "Trans Solar Boreholes team conducting drilling operations"
    },
    {
      src: "/lovable-uploads/75684ba1-7815-4693-b9fc-006736f44610.png",
      title: "Mobile Drilling Unit",
      description: "Specialized drilling equipment transported to project site"
    },
    {
      src: "/lovable-uploads/69d75e8b-30c7-4c5c-b07f-22449adbfb2e.png",
      title: "Professional Drilling Setup",
      description: "Complete drilling operation with professional equipment"
    },
    {
      src: "/lovable-uploads/9c56c41d-bf75-48d1-928d-d9f46636239a.png",
      title: "Rural Borehole Project",
      description: "Drilling operation in rural Kenya with sunflowers in foreground"
    },
    {
      src: "/lovable-uploads/eb0f9c8d-1b1e-4602-b9ce-83ac8e95ab4b.png",
      title: "Community Water Project",
      description: "Trans Solar Boreholes working on community water access"
    },
    {
      src: "/lovable-uploads/bd34aac6-f38a-45b6-a260-fe9184656c99.png",
      title: "Active Drilling Site",
      description: "Active borehole drilling operation with dust showing work in progress"
    },
    {
      src: "/lovable-uploads/248c7fb1-395e-4b2d-b236-ec479ccc5d7c.png",
      title: "Solar Pump System",
      description: "High-quality solar water pump with controller for sustainable water access"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Project Gallery
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our extensive portfolio of successful borehole drilling and solar water system projects across Kenya
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryImages.map((image, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={image.src}
                  alt={`${image.title} - Trans Solar Boreholes Kenya`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{image.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
