import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import productionLine from "@/assets/production-line-1.jpg";
import machine from "@/assets/machine-1.jpg";
import materials from "@/assets/materials-1.jpg";

type Category = "all" | "production" | "machines" | "materials";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const { toast } = useToast();

  const handleContact = (productName: string) => {
    toast({
      title: "Demande d'information",
      description: `Notre équipe vous contactera concernant: ${productName}`,
    });
  };

  const products = [
    {
      image: productionLine,
      category: "production",
      categoryLabel: "Ligne de Production",
      title: "Ligne d'Assemblage Automatisée Complète",
      description: "Ligne de production moderne équipée de robots industriels, systèmes de convoyage intelligents et contrôle qualité intégré. Capacité de production élevée avec suivi en temps réel.",
    },
    {
      image: machine,
      category: "machines",
      categoryLabel: "Machine CNC",
      title: "Centre d'Usinage CNC 5 Axes Haute Précision",
      description: "Centre d'usinage avec commande numérique dernière génération. Précision micrométrique, idéal pour pièces complexes. Interface intuitive et maintenance simplifiée.",
    },
    {
      image: materials,
      category: "materials",
      categoryLabel: "Matières Premières",
      title: "Aciers & Métaux Industriels Premium",
      description: "Sélection complète de tôles, bobines d'acier et composants métalliques. Matériaux certifiés, traçabilité complète et livraison rapide.",
    },
    {
      image: productionLine,
      category: "production",
      categoryLabel: "Ligne de Production",
      title: "Ligne de Conditionnement Automatique",
      description: "Solution complète d'emballage et conditionnement. Systèmes robotisés, étiquetage automatique et palettisation intégrée.",
    },
    {
      image: machine,
      category: "machines",
      categoryLabel: "Machines",
      title: "Presse Hydraulique Industrielle 500 Tonnes",
      description: "Presse hydraulique haute capacité pour formage, découpe et estampage. Contrôle précis de la force, sécurité renforcée.",
    },
    {
      image: materials,
      category: "materials",
      categoryLabel: "Matières Premières",
      title: "Polymères & Plastiques Techniques",
      description: "Gamme étendue de polymères techniques et plastiques industriels. Matériaux adaptés aux contraintes thermiques et mécaniques.",
    },
  ];

  const categories = [
    { id: "all" as Category, label: "Tous" },
    { id: "production" as Category, label: "Lignes de Production" },
    { id: "machines" as Category, label: "Machines" },
    { id: "materials" as Category, label: "Matières Premières" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-white">Nos Produits</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Découvrez notre catalogue complet de lignes de production, machines industrielles et matières premières
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/30 sticky top-16 z-40 border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  variant={selectedCategory === cat.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat.id)}
                >
                  {cat.label}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  image={product.image}
                  category={product.categoryLabel}
                  title={product.title}
                  description={product.description}
                  onContact={() => handleContact(product.title)}
                />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground text-lg">
                  Aucun produit trouvé dans cette catégorie
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
