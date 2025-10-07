import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Award, Users, Globe } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, en fournissant des solutions de qualité supérieure.",
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Plus de 15 ans d'expérience dans le sourcing et la fourniture d'équipements industriels.",
    },
    {
      icon: Users,
      title: "Partenariat",
      description: "Nous construisons des relations durables avec nos clients et fournisseurs.",
    },
    {
      icon: Globe,
      title: "Réseau Global",
      description: "Un réseau mondial de fournisseurs certifiés pour répondre à tous vos besoins.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-white">À Propos de Nous</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Votre partenaire de confiance pour le sourcing industriel depuis plus de 15 ans
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="mb-6">Notre Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                IndustrialSource s'engage à fournir des solutions industrielles de haute qualité à nos clients 
                à travers le monde. Nous facilitons l'accès aux meilleures lignes de production, machines 
                industrielles et matières premières, en garantissant qualité, fiabilité et prix compétitifs.
              </p>
              <p className="text-lg text-muted-foreground">
                Notre expertise et notre réseau mondial nous permettent de répondre aux besoins spécifiques 
                de chaque industrie, en offrant un accompagnement personnalisé de la consultation initiale 
                jusqu'à la livraison et l'installation.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="mb-4">Nos Valeurs</h2>
              <p className="text-xl text-muted-foreground">
                Les principes qui guident notre travail quotidien
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index} className="text-center transition-smooth hover:shadow-elegant">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  15+
                </div>
                <p className="text-lg text-muted-foreground">Années d'Expérience</p>
              </div>
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  500+
                </div>
                <p className="text-lg text-muted-foreground">Projets Réalisés</p>
              </div>
              <div>
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <p className="text-lg text-muted-foreground">Pays Desservis</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
