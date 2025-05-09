
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    id: "sport",
    name: "Sport Bikes",
    image: "https://images.unsplash.com/photo-1615172282389-9e69079c0165?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Lightning-fast bikes designed for speed and performance"
  },
  {
    id: "naked",
    name: "Naked Bikes",
    image: "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Versatile rides that balance performance and comfort"
  },
  {
    id: "adventure",
    name: "Adventure Bikes",
    image: "https://images.unsplash.com/photo-1543037911-0fb9a686a444?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    description: "Go anywhere machines built for long journeys"
  }
];

const FeaturedCategories = () => {
  return (
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title">Explore Categories</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find your perfect ride from our diverse collection of motorcycles
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link to={`/category/${category.id}`} key={category.id}>
              <Card className="overflow-hidden h-full hover-scale">
                <div className="relative h-64">
                  <div 
                    className="absolute inset-0" 
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url(${category.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center"
                    }}
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <p className="text-sm text-white/80 mt-1">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
