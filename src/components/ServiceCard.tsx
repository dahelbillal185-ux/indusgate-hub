import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="transition-smooth hover:shadow-elegant hover:-translate-y-1 border-border">
      <CardContent className="p-6">
        <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-4">
          <Icon className="w-6 h-6 text-primary-foreground" />
        </div>
        <h3 className="mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
