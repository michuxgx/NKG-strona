import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-secondary">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23006A4E' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-1/3 h-96 bg-gradient-to-l from-green-light to-transparent opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Accent Line */}
          <div className="accent-line mb-8 animate-fade-up" />

          {/* Heading */}
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-heading mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Profesjonalna pomoc prawna
            <span className="block text-primary mt-2">dla Ciebie i Twojej firmy</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-body max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Zapewniamy kompleksową obsługę prawną opartą na wieloletnim doświadczeniu, 
            indywidualnym podejściu i pełnym zaangażowaniu w każdą sprawę.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary hover:bg-green-hover text-primary-foreground px-8 py-6 text-base font-medium group"
            >
              Umów konsultację
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              onClick={() => document.getElementById("uslugi")?.scrollIntoView({ behavior: "smooth" })}
              variant="outline"
              size="lg"
              className="border-primary/30 text-foreground hover:bg-primary/5 px-8 py-6 text-base font-medium"
            >
              Poznaj nasze usługi
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-border/50 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-wrap gap-8 md:gap-12">
              <div>
                <p className="text-3xl font-serif font-semibold text-primary">15+</p>
                <p className="text-sm text-muted-foreground">Lat doświadczenia</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-semibold text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Wygranych spraw</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-semibold text-primary">98%</p>
                <p className="text-sm text-muted-foreground">Zadowolonych klientów</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
