import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message envoyé !",
      description: "Nous vous contacterons dans les plus brefs délais.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Header */}
        <section className="gradient-hero text-white py-20">
          <div className="container mx-auto px-4">
            <h1 className="mb-4 text-white">Contactez-Nous</h1>
            <p className="text-xl text-white/90 max-w-2xl">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info Cards */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-2">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle>Email</CardTitle>
                    <CardDescription>Envoyez-nous un message</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href="mailto:contact@industrialsource.com"
                      className="text-primary hover:underline"
                    >
                      contact@industrialsource.com
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-2">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle>Téléphone</CardTitle>
                    <CardDescription>Appelez-nous directement</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a href="tel:+33123456789" className="text-primary hover:underline">
                      +33 1 23 45 67 89
                    </a>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center mb-2">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle>Adresse</CardTitle>
                    <CardDescription>Visitez nos bureaux</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      123 Avenue des Champs-Élysées
                      <br />
                      75008 Paris, France
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Envoyez-nous un Message</CardTitle>
                    <CardDescription>
                      Remplissez le formulaire ci-dessous et nous vous répondrons rapidement
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">
                            Nom complet <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Jean Dupont"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">
                            Email <span className="text-destructive">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="jean.dupont@exemple.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Entreprise</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Nom de votre entreprise"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Téléphone</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+33 1 23 45 67 89"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">
                          Message <span className="text-destructive">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Décrivez votre projet ou vos besoins..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        <Send className="mr-2" />
                        Envoyer le Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
