
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Us</h1>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have questions about our motorcycles or services? We're here to help. Reach out to us using the form below or contact us directly.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-2">Corporate Headquarters</h3>
                <address className="not-italic text-muted-foreground">
                  <p>123 Marine Drive</p>
                  <p>Mumbai, Maharashtra</p>
                  <p>India - 400001</p>
                </address>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Contact Details</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-medium">Email:</span> info@motohaven.com
                  </p>
                  <p>
                    <span className="font-medium">Customer Support:</span> +91 22 1234 5678
                  </p>
                  <p>
                    <span className="font-medium">Sales Inquiries:</span> +91 22 8765 4321
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Business Hours</h3>
                <div className="space-y-1 text-muted-foreground">
                  <p>Monday - Friday: 10:00 AM - 8:00 PM</p>
                  <p>Saturday: 10:00 AM - 6:00 PM</p>
                  <p>Sunday: 11:00 AM - 5:00 PM</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2">Showroom Locations</h3>
                <div className="space-y-4 text-muted-foreground">
                  <div>
                    <p className="font-medium">Mumbai</p>
                    <p>123 Marine Drive, Mumbai - 400001</p>
                  </div>
                  <div>
                    <p className="font-medium">Delhi</p>
                    <p>456 Connaught Place, New Delhi - 110001</p>
                  </div>
                  <div>
                    <p className="font-medium">Bangalore</p>
                    <p>789 MG Road, Bangalore - 560001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Do you offer test rides?</h3>
              <p className="text-muted-foreground">
                Yes, we offer test rides for all our motorcycles. Please bring a valid motorcycle license and schedule an appointment in advance.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept credit cards, debit cards, bank transfers, and financing options. Please contact our sales team for more details on financing.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Do you ship motorcycles to different cities?</h3>
              <p className="text-muted-foreground">
                Yes, we offer nationwide shipping for all our motorcycles. Shipping costs depend on the destination and are calculated during checkout.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">What warranty coverage do you provide?</h3>
              <p className="text-muted-foreground">
                All our motorcycles come with a standard 2-year or 24,000 km manufacturer warranty. Extended warranty options are available for purchase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
