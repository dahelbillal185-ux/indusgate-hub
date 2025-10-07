import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">IS</span>
              </div>
              <span className="font-bold text-lg">IndustrialSource</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Votre partenaire de confiance pour le sourcing de lignes de production et machines industrielles.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-smooth">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/produits" className="text-muted-foreground hover:text-primary transition-smooth">
                  Produits
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-muted-foreground hover:text-primary transition-smooth">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Nos Services</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Lignes de Production</li>
              <li>Machines Industrielles</li>
              <li>Matières Premières</li>
              <li>Conseil & Expertise</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>contact@industrialsource.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} IndustrialSource. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
