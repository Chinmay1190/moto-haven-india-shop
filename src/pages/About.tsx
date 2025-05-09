
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">About Moto Haven</h1>
        
        <div className="mb-12">
          <div 
            className="h-80 rounded-lg overflow-hidden mb-6"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80)`,
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
          >
            <div className="flex items-center justify-center h-full">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Passion for Motorcycles</h2>
            </div>
          </div>
          
          <p className="text-lg mb-6">
            Founded in 2010, Moto Haven has grown to become India's premier destination for high-performance motorcycles and accessories. What started as a small passion project has evolved into a nationwide brand trusted by motorcycle enthusiasts across the country.
          </p>
          
          <p className="text-lg mb-6">
            Our mission is simple: to provide riders with the finest motorcycles and accessories, backed by exceptional service and expert knowledge. We believe that every ride should be extraordinary, and we're committed to helping our customers experience the thrill of the open road with confidence and style.
          </p>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Why Choose Moto Haven?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="animate-fade-in hover-scale">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m8 3 4 8 5-5 5 15H2L8 3z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Premium Selection</h3>
                <p className="text-muted-foreground">
                  We carefully curate our inventory to bring you the finest motorcycles from renowned manufacturers worldwide.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in hover-scale delay-100">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Expert Knowledge</h3>
                <p className="text-muted-foreground">
                  Our team consists of passionate riders with deep industry knowledge to guide you through every purchase.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in hover-scale delay-200">
              <CardContent className="p-6 text-center">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">Exceptional Service</h3>
                <p className="text-muted-foreground">
                  We're committed to providing outstanding customer service before, during, and after your purchase.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
        
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Our Locations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-2">Mumbai Showroom</h3>
              <address className="not-italic text-muted-foreground">
                <p>123 Marine Drive</p>
                <p>Mumbai, Maharashtra</p>
                <p>India - 400001</p>
                <p className="mt-2">Tel: +91 22 1234 5678</p>
                <p>Email: mumbai@motohaven.com</p>
              </address>
            </div>
            
            <div>
              <h3 className="font-bold text-lg mb-2">Delhi Showroom</h3>
              <address className="not-italic text-muted-foreground">
                <p>456 Connaught Place</p>
                <p>New Delhi, Delhi</p>
                <p>India - 110001</p>
                <p className="mt-2">Tel: +91 11 8765 4321</p>
                <p>Email: delhi@motohaven.com</p>
              </address>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="text-center">
              <img 
                src="https://i.pravatar.cc/300?img=11" 
                alt="Rajiv Mehta" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Rajiv Mehta</h3>
              <p className="text-muted-foreground">Founder & CEO</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://i.pravatar.cc/300?img=32" 
                alt="Sneha Patel" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Sneha Patel</h3>
              <p className="text-muted-foreground">Head of Operations</p>
            </div>
            
            <div className="text-center">
              <img 
                src="https://i.pravatar.cc/300?img=59" 
                alt="Arjun Singh" 
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg">Arjun Singh</h3>
              <p className="text-muted-foreground">Technical Expert</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
