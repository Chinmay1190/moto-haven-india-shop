
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";

// Accessories data
const accessoriesData = [
  {
    id: "helmet-1",
    name: "Premium Racing Helmet",
    price: 25000,
    description: "High-performance racing helmet with advanced safety features and aerodynamic design.",
    category: "helmet",
    inStock: true,
    image: "https://images.unsplash.com/photo-1623766180289-7ff1fc2f6543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: "jacket-1",
    name: "Leather Racing Jacket",
    price: 18000,
    description: "Premium leather racing jacket with impact protection and weather resistance.",
    category: "apparel",
    inStock: true,
    image: "https://images.unsplash.com/photo-1622519407650-3df9883f76a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: "gloves-1",
    name: "Racing Gloves",
    price: 5000,
    description: "Professional racing gloves with knuckle protection and superior grip.",
    category: "apparel",
    inStock: true,
    image: "https://images.unsplash.com/photo-1584937103534-22bec77d8181?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "boots-1",
    name: "Motorcycle Boots",
    price: 12000,
    description: "High-quality boots with ankle protection and anti-slip soles.",
    category: "apparel",
    inStock: false,
    image: "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  },
  {
    id: "cover-1",
    name: "Motorcycle Cover",
    price: 3500,
    description: "Waterproof and UV-resistant cover to protect your bike from the elements.",
    category: "maintenance",
    inStock: true,
    image: "https://images.unsplash.com/photo-1583227061267-8428fb76fbfd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: "toolkit-1",
    name: "Emergency Tool Kit",
    price: 4500,
    description: "Compact tool kit with essential tools for roadside repairs and maintenance.",
    category: "maintenance",
    inStock: true,
    image: "https://images.unsplash.com/photo-1620733723572-11c53be2f11b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
  }
];

// Generate more accessories
const generateMoreAccessories = () => {
  const additional = [];
  const categories = ["helmet", "apparel", "maintenance", "electronics", "luggage"];
  
  for (let i = 1; i <= 10; i++) {
    for (const category of categories) {
      additional.push({
        id: `${category}-${i + 1}`,
        name: `${category.charAt(0).toUpperCase() + category.slice(1)} Model ${i}`,
        price: 1000 * (i + 1) + Math.floor(Math.random() * 1000),
        description: `High-quality ${category} for motorcycle enthusiasts.`,
        category,
        inStock: Math.random() > 0.3,
        image: accessoriesData[Math.floor(Math.random() * accessoriesData.length)].image
      });
    }
  }
  
  return additional;
};

const allAccessories = [...accessoriesData, ...generateMoreAccessories()];

const Accessories = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [accessories, setAccessories] = useState(allAccessories);
  
  useEffect(() => {
    if (selectedCategory === "all") {
      setAccessories(allAccessories);
    } else {
      setAccessories(allAccessories.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  const handleAddToCart = (accessory) => {
    addToCart({
      id: accessory.id,
      name: accessory.name,
      price: accessory.price,
      images: [accessory.image]
    });
    toast.success(`${accessory.name} added to cart`);
  };
  
  const categories = [
    { id: "all", name: "All Accessories" },
    { id: "helmet", name: "Helmets" },
    { id: "apparel", name: "Apparel" },
    { id: "maintenance", name: "Maintenance" },
    { id: "electronics", name: "Electronics" },
    { id: "luggage", name: "Luggage" }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Motorcycle Accessories</h1>
      <p className="text-muted-foreground mb-8">
        High-quality accessories to enhance your riding experience and safety
      </p>
      
      <div className="flex overflow-x-auto pb-4 mb-8">
        <div className="flex space-x-2">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="whitespace-nowrap"
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {accessories.map((accessory) => (
          <Card key={accessory.id} className="bike-card animate-fade-in">
            <div className="overflow-hidden">
              <img 
                src={accessory.image} 
                alt={accessory.name} 
                className="bike-card-image hover:scale-110 transition-transform duration-500"
              />
            </div>
            <CardHeader>
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg">{accessory.name}</h3>
                <Badge variant={accessory.inStock ? "default" : "destructive"}>
                  {accessory.inStock ? "In Stock" : "Out of Stock"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold text-primary">
                ₹{accessory.price.toLocaleString("en-IN")}
              </p>
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {accessory.description}
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={() => handleAddToCart(accessory)} 
                disabled={!accessory.inStock} 
                className="w-full"
              >
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
