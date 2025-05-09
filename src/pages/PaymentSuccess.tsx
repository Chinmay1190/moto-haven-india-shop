
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import confetti from "canvas-confetti";

const PaymentSuccess = () => {
  useEffect(() => {
    // Simulate receipt generation
    const orderId = `ORD-${Math.floor(Math.random() * 10000).toString().padStart(4, '0')}`;
    localStorage.setItem("lastOrderId", orderId);
    
    // Trigger confetti effect
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);
  
  const orderId = localStorage.getItem("lastOrderId") || "ORD-0000";
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle className="h-24 w-24 text-green-500" />
        </div>
        
        <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
        
        <p className="text-xl mb-6">
          Thank you for your purchase. Your order has been confirmed.
        </p>
        
        <div className="bg-muted p-6 rounded-lg mb-8">
          <h2 className="font-bold mb-4">Order Details</h2>
          <div className="flex justify-between mb-2">
            <span>Order Number:</span>
            <span className="font-medium">{orderId}</span>
          </div>
          <div className="flex justify-between">
            <span>Order Date:</span>
            <span className="font-medium">{new Date().toLocaleDateString()}</span>
          </div>
        </div>
        
        <p className="mb-6 text-muted-foreground">
          A confirmation email has been sent to your email address. We'll notify you when your order ships.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/">Return to Home</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/bikes">Continue Shopping</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
