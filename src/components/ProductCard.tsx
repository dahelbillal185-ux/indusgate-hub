import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  onContact?: () => void;
}

const ProductCard = ({ image, category, title, description, onContact }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition-smooth hover:shadow-elegant hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-smooth hover:scale-105"
        />
        <Badge className="absolute top-3 left-3 gradient-accent text-accent-foreground shadow-accent">
          {category}
        </Badge>
      </div>
      <CardHeader>
        <h3 className="line-clamp-2">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" onClick={onContact}>
          Demander des Informations
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
