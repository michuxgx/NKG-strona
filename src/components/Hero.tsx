import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroVideo from "@/assets/hero-video.mp4";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("kontakt");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  
  return <section className="relative min-h-screen flex items-center pt-20">
      {/* Video Background */}
      <div className="absolute inset-0 bg-white">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover grayscale brightness-110 contrast-90 opacity-70"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* White fog overlay */}
        <div className="absolute inset-0 bg-white/35" />
        {/* Subtle gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* Accent Line */}
          <div className="accent-line mb-8 animate-fade-up" />

          {/* Heading */}
          <h1 className="heading-display text-4xl md:text-5xl lg:text-6xl text-heading mb-6 animate-fade-up" style={{
          animationDelay: "0.1s"
        }}>
            Profesjonalna pomoc prawna
            <span className="block text-primary mt-2">dla Ciebie i Twojej firmy</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-body max-w-2xl mb-10 leading-relaxed animate-fade-up" style={{
          animationDelay: "0.2s"
        }}>
            Zapewniamy kompleksową obsługę prawną opartą na wieloletnim doświadczeniu, 
            indywidualnym podejściu i pełnym zaangażowaniu w każdą sprawę.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{
          animationDelay: "0.3s"
        }}>
            <Button onClick={scrollToContact} size="lg" className="bg-primary hover:bg-green-hover text-primary-foreground px-8 py-6 text-base font-medium group">
              Umów konsultację
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button onClick={() => document.getElementById("uslugi")?.scrollIntoView({
            behavior: "smooth"
          })} variant="outline" size="lg" className="border-primary/30 text-heading hover:bg-primary/5 px-8 py-6 text-base font-medium bg-white/60 backdrop-blur-sm">
              Poznaj nasze usługi
            </Button>
          </div>

          {/* Trust Indicators */}
          
        </div>
      </div>
    </section>;
};
export default Hero;