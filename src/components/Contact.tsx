import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [gdprConsent, setGdprConsent] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!gdprConsent) {
      toast({
        title: "Wymagana zgoda",
        description: "Proszę wyrazić zgodę na przetwarzanie danych osobowych.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Wiadomość wysłana",
      description: "Dziękujemy za kontakt. Odpowiemy najszybciej jak to możliwe.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
    setGdprConsent(false);
  };

  return (
    <section id="kontakt" className="section-padding bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="heading-display text-3xl md:text-4xl text-heading mb-4">
            Skontaktuj się z nami
          </h2>
          <p className="text-body text-lg">
            Umów się na bezpłatną konsultację wstępną. Chętnie odpowiemy na wszystkie pytania.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-heading mb-2">
                    Imię i nazwisko *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Jan Kowalski"
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-heading mb-2">
                    Telefon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+48 123 456 789"
                    className="border-border focus:border-primary focus:ring-primary"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-heading mb-2">
                  Adres e-mail *
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jan.kowalski@email.pl"
                  className="border-border focus:border-primary focus:ring-primary"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-heading mb-2">
                  Wiadomość *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Opisz krótko swoją sprawę..."
                  className="border-border focus:border-primary focus:ring-primary resize-none"
                />
              </div>

              {/* GDPR Checkbox */}
              <div className="flex items-start gap-3">
                <Checkbox
                  id="gdpr"
                  checked={gdprConsent}
                  onCheckedChange={(checked) => setGdprConsent(checked as boolean)}
                  className="mt-1 border-border data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                />
                <label htmlFor="gdpr" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                  Wyrażam zgodę na przetwarzanie moich danych osobowych zgodnie z{" "}
                  <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                    Polityką Prywatności
                  </a>{" "}
                  w celu udzielenia odpowiedzi na przesłaną wiadomość. *
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-green-hover text-primary-foreground px-8 py-6 text-base font-medium w-full sm:w-auto"
              >
                {isSubmitting ? (
                  "Wysyłanie..."
                ) : (
                  <>
                    Wyślij wiadomość
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading mb-1">Adres</h4>
                  <p className="text-muted-foreground">
                    ul. Marszałkowska 100/10<br />
                    00-001 Warszawa
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading mb-1">Telefon</h4>
                  <a href="tel:+48123456789" className="text-muted-foreground hover:text-primary transition-colors">
                    +48 123 456 789
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading mb-1">E-mail</h4>
                  <a href="mailto:kontakt@kancelaria.pl" className="text-muted-foreground hover:text-primary transition-colors">
                    kontakt@kancelaria.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-light flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-heading mb-1">Godziny pracy</h4>
                  <p className="text-muted-foreground">
                    Pon - Pt: 9:00 - 17:00<br />
                    Sob: po wcześniejszym umówieniu
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="aspect-[4/3] bg-muted rounded-lg overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-10 h-10 text-primary/40 mx-auto mb-2" />
                  <p className="text-muted-foreground text-sm">Mapa Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
