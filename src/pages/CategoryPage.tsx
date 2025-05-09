
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { allProducts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

const categories = {
  sport: {
    name: "Sport Bikes",
    description: "High-performance motorcycles designed for speed and acceleration",
    image: "https://images.unsplash.com/photo-1615172282389-9e69079c0165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  naked: {
    name: "Naked Bikes",
    description: "Versatile motorcycles with an upright riding position",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  adventure: {
    name: "Adventure Bikes",
    description: "Dual-purpose motorcycles designed for both on and off-road travel",
    image: "https://images.unsplash.com/photo-1543037911-0fb9a686a444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  cruiser: {
    name: "Cruiser Bikes",
    description: "Comfortable motorcycles designed for long-distance riding",
    image: "https://images.unsplash.com/photo-1558980664-1db506751c42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  touring: {
    name: "Touring Bikes",
    description: "Long-distance motorcycles with extra comfort features",
    image: "https://images.unsplash.com/photo-1589149934732-d218d4339cc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
};

const CategoryPage = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    if (id) {
      const categoryProducts = allProducts.filter(product => product.category === id);
      setProducts(categoryProducts);
    }
  }, [id]);
  
  const categoryInfo = categories[id] || {
    name: "Category Not Found",
    description: "This category does not exist",
    image: "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  };
  
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };
  
  return (
    <div>
      <div 
        className="h-80 relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${categoryInfo.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center flex-col text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{categoryInfo.name}</h1>
          <p className="text-xl text-white/90 max-w-2xl">
            {categoryInfo.description}
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {products.length > 0 ? (
          <>
            <p className="text-muted-foreground mb-8">
              Showing {products.length} motorcycles in this category
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((bike) => (
                <Card key={bike.id} className="bike-card animate-fade-in">
                  <Link to={`/bikes/${bike.id}`}>
                    <div className="overflow-hidden">
                      <img 
                        src={bike.images[0]} 
                        alt={bike.name} 
                        className="bike-card-image hover:scale-110 transition-transform duration-500"
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
          </>
        ) : (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold mb-4">No motorcycles found</h2>
            <p className="text-muted-foreground mb-8">
              We couldn't find any motorcycles in this category. Please check out our other categories.
            </p>
            <Button asChild>
              <Link to="/bikes">Browse All Bikes</Link>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
