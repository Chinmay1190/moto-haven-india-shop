
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Rajesh Singh",
    location: "Mumbai",
    quote: "I purchased a Ducati Panigale from Moto Haven and the experience was exceptional. The team was knowledgeable and helped me choose the perfect bike for my needs.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi",
    quote: "The service at Moto Haven is unparalleled. They made buying my first superbike a smooth and enjoyable experience. I couldn't be happier with my purchase.",
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 3,
    name: "Vikram Patel",
    location: "Bangalore",
    quote: "Moto Haven has the best collection of superbikes in India. The staff is friendly and they offer excellent after-sales service. Highly recommended!",
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 4,
    name: "Ananya Desai",
    location: "Chennai",
    quote: "I've been a customer for years and have purchased multiple bikes from Moto Haven. Their knowledge and passion for motorcycles is evident in their service.",
    avatar: "https://i.pravatar.cc/150?img=10"
  }
];

const Testimonials = () => {
  const [active, setActive] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Hear from our satisfied customers about their experience with Moto Haven
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <Card
            key={testimonial.id}
            className={`absolute inset-0 transition-all duration-500 ${
              active === index 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 translate-x-8 pointer-events-none"
            }`}
          >
            <CardContent className="p-8 flex flex-col items-center text-center">
              <img 
                src={testimonial.avatar} 
                alt={testimonial.name} 
                className="w-20 h-20 rounded-full mb-6 border-4 border-primary"
              />
              <blockquote className="text-lg italic mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex justify-center gap-2 mt-64 md:mt-72">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              active === index ? "bg-primary" : "bg-primary/30"
            }`}
            onClick={() => setActive(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
