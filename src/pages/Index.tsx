import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Factory, Cog, Package, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import productionLine from "@/assets/production-line-1.jpg";
import machine from "@/assets/machine-1.jpg";
import materials from "@/assets/materials-1.jpg";

const Index = () => {
  const { toast } = useToast();

  const handleContact = (productName: string) => {
    toast({
      title: "Demande d'information",
      description: `Notre équipe vous contactera concernant: ${productName}`,
    });
  };

  const services = [
    {
      icon: Factory,
      title: "Lignes de Production",
      description: "Lignes de production complètes et automatisées, adaptées à vos besoins spécifiques.",
    },
    {
      icon: Cog,
      title: "Machines Industrielles",
      description: "Large gamme de machines industrielles de haute qualité pour tous secteurs.",
    },
    {
      icon: Package,
      title: "Matières Premières",
      description: "Fourniture de matières premières de qualité pour votre production.",
    },
  ];

  const featuredProducts = [
    {
      image: productionLine,
      category: "Ligne de Production",
      title: "Ligne d'Assemblage Automatisée",
      description: "Ligne de production moderne avec robots industriels, systèmes de convoyage et contrôle qualité intégré.",
    },
    {
      image: machine,
      category: "Machine CNC",
      title: "Centre d'Usinage CNC 5 Axes",
      description: "Centre d'usinage haute précision avec commande numérique, idéal pour pièces complexes.",
    },
    {
      image: materials,
      category: "Matières Premières",
      title: "Aciers & Métaux Industriels",
      description: "Large sélection de tôles, bobines et composants métalliques pour fabrication industrielle.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <Hero />

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nos Services</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Solutions complètes pour vos besoins industriels
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="mb-4">Produits en Vedette</h2>
                <p className="text-xl text-muted-foreground">
                  Découvrez notre sélection de produits
                </p>
              </div>
              <Button variant="outline" asChild className="hidden md:flex">
                <Link to="/produits">
                  Voir Tous les Produits
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  {...product}
                  onContact={() => handleContact(product.title)}
                />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <Button variant="outline" asChild>
                <Link to="/produits">
                  Voir Tous les Produits
                  <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 gradient-hero text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="mb-6 text-white">Prêt à Démarrer Votre Projet ?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins en équipements industriels
            </p>
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Demander un Devis Gratuit</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
