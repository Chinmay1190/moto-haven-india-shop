
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Moto Haven</h3>
            <p className="text-sm text-muted-foreground">
              Your premium destination for superbikes in India. We offer the best selection of high-performance motorcycles.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/bikes" className="text-sm hover:text-primary transition-colors">Bikes</Link></li>
              <li><Link to="/accessories" className="text-sm hover:text-primary transition-colors">Accessories</Link></li>
              <li><Link to="/about" className="text-sm hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <address className="not-italic text-sm text-muted-foreground">
              <p>123 Bike Street</p>
              <p>Mumbai, Maharashtra</p>
              <p>India - 400001</p>
              <p className="mt-2">Email: contact@motohaven.com</p>
              <p>Phone: +91 98765 43210</p>
            </address>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for updates on new bikes and exclusive offers.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 rounded-md bg-muted text-foreground flex-1 text-sm"
              />
              <button className="bg-primary text-primary-foreground px-3 py-2 rounded-md text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Moto Haven. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
