import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-industrial.jpg";

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Lignes de production industrielles modernes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="mb-6 drop-shadow-lg">
            Votre Partenaire en Sourcing Industriel
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
            Spécialiste de la fourniture de lignes de production complètes, machines industrielles 
            et matières premières pour votre entreprise.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" asChild>
              <Link to="/produits">
                Découvrir nos Produits
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Demander un Devis</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
