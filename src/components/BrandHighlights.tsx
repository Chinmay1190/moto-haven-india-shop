
import { Card, CardContent } from "@/components/ui/card";

const brands = [
  {
    id: "ducati",
    name: "Ducati",
    logo: "https://1000logos.net/wp-content/uploads/2020/02/Ducati-Logo-1926.png"
  },
  {
    id: "kawasaki",
    name: "Kawasaki",
    logo: "https://1000logos.net/wp-content/uploads/2018/03/Kawasaki-logo.png"
  },
  {
    id: "honda",
    name: "Honda",
    logo: "https://1000logos.net/wp-content/uploads/2018/03/Honda-logo.png"
  },
  {
    id: "yamaha",
    name: "Yamaha",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Yamaha-logo.png"
  },
  {
    id: "bmw",
    name: "BMW Motorrad",
    logo: "https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo.png"
  },
  {
    id: "triumph",
    name: "Triumph",
    logo: "https://1000logos.net/wp-content/uploads/2020/09/Triumph-Logo.png"
  }
];

const BrandHighlights = () => {
  return (
    <section className="py-16 container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="section-title">Premium Brands</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          We partner with the world's leading motorcycle manufacturers to bring you the best
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {brands.map((brand) => (
          <Card key={brand.id} className="flex items-center justify-center p-6 hover-scale group">
            <CardContent className="p-0 flex items-center justify-center h-20">
              <img 
                src={brand.logo} 
                alt={brand.name} 
                className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default BrandHighlights;
