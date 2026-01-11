import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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
          {/* Google Form Embed */}
          <div className="lg:col-span-3">
            <div className="relative rounded-2xl overflow-hidden bg-card/30 backdrop-blur-sm border border-border/50 shadow-xl">
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
              
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSeSZJhw4YBjhuEc-4KoY9iY1FYcmo_AVu93yPysVWZApqoCvQ/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="relative z-10"
                title="Formularz kontaktowy"
                loading="lazy"
              >
                Ładowanie formularza…
              </iframe>
            </div>
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
