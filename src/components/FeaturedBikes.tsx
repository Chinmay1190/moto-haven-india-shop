
import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const FeaturedBikes = () => {
  const { addToCart } = useCart();
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };
  
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-title">Featured Superbikes</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our handpicked selection of the most impressive machines on two wheels
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featuredProducts.map((bike) => (
          <Card key={bike.id} className="bike-card group animate-fade-in">
            <Link to={`/bikes/${bike.id}`}>
              <div className="overflow-hidden">
                <img 
                  src={bike.images[0]} 
                  alt={bike.name} 
                  className="bike-card-image group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <h3 className="font-bold text-lg">{bike.name}</h3>
                  <Badge variant={bike.inStock ? "default" : "destructive"}>
                    {bike.inStock ? "In Stock" : "Out of Stock"}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-2xl font-bold text-primary">
                  ₹{bike.price.toLocaleString("en-IN")}
                </p>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                  {bike.description}
                </p>
              </CardContent>
            </Link>
            <CardFooter>
              <Button 
                onClick={() => handleAddToCart(bike)} 
                disabled={!bike.inStock} 
                className="w-full"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-10">
        <Button asChild variant="outline" size="lg">
          <Link to="/bikes">View All Bikes</Link>
        </Button>
      </div>
    </section>
  );
};

export default FeaturedBikes;
