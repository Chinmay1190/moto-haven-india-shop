
import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { allProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import { ChevronLeft, ShoppingCart } from "lucide-react";

const BikeDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const bike = allProducts.find(product => product.id === id);
  
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  if (!bike) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-8">
          The motorcycle you're looking for does not exist or has been removed.
        </p>
        <Button onClick={() => navigate("/bikes")}>View All Bikes</Button>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(bike);
    }
    toast.success(`${quantity} ${bike.name} added to cart`);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <Button 
        variant="ghost" 
        className="mb-6 pl-0"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <div className="rounded-lg overflow-hidden mb-4">
            <img 
              src={bike.images[selectedImage]} 
              alt={bike.name} 
              className="w-full h-96 object-cover"
            />
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-2">
            {bike.images.map((image, index) => (
              <button
                key={index}
                className={`rounded-lg overflow-hidden border-2 min-w-[100px] h-20 ${
                  selectedImage === index ? "border-primary" : "border-transparent"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <img 
                  src={image} 
                  alt={`${bike.name} - view ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-2">{bike.name}</h1>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant={bike.inStock ? "default" : "destructive"}>
              {bike.inStock ? "In Stock" : "Out of Stock"}
            </Badge>
            <span className="text-muted-foreground">Brand: {bike.brand}</span>
          </div>
          
          <div className="text-3xl font-bold text-primary mb-6">
            ₹{bike.price.toLocaleString("en-IN")}
          </div>
          
          <p className="text-muted-foreground mb-8">{bike.description}</p>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </Button>
              <span className="w-12 text-center">{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </Button>
            </div>
            
            <Button 
              onClick={handleAddToCart} 
              disabled={!bike.inStock}
              className="flex-1"
            >
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
          
          <Tabs defaultValue="specs">
            <TabsList className="w-full">
              <TabsTrigger value="specs" className="flex-1">Specifications</TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">Shipping</TabsTrigger>
              <TabsTrigger value="warranty" className="flex-1">Warranty</TabsTrigger>
            </TabsList>
            <TabsContent value="specs" className="mt-4">
              <Card className="p-4">
                <div className="grid grid-cols-2 gap-y-2">
                  <div className="font-semibold">Engine</div>
                  <div>{bike.specifications.engine}</div>
                  
                  <div className="font-semibold">Power</div>
                  <div>{bike.specifications.power}</div>
                  
                  <div className="font-semibold">Torque</div>
                  <div>{bike.specifications.torque}</div>
                  
                  <div className="font-semibold">Weight</div>
                  <div>{bike.specifications.weight}</div>
                  
                  <div className="font-semibold">Top Speed</div>
                  <div>{bike.specifications.topSpeed}</div>
                </div>
              </Card>
            </TabsContent>
            <TabsContent value="shipping" className="mt-4">
              <Card className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>Free shipping across India for all motorcycles.</li>
                  <li>Delivery within 7-10 business days after order confirmation.</li>
                  <li>Professional delivery team will contact you 24 hours before delivery.</li>
                  <li>Complete walkthrough and handover process included.</li>
                </ul>
              </Card>
            </TabsContent>
            <TabsContent value="warranty" className="mt-4">
              <Card className="p-4">
                <ul className="list-disc pl-5 space-y-2">
                  <li>2-year or 24,000 km manufacturer warranty (whichever comes first).</li>
                  <li>Extended warranty options available at checkout.</li>
                  <li>All warranty repairs handled by authorized service centers.</li>
                  <li>24/7 roadside assistance included for the first year.</li>
                </ul>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default BikeDetail;
