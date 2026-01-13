import { Award, BookOpen, Users2, Clock } from "lucide-react";
import nataliaPhoto from "@/assets/natalia-photo.jpeg";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const values = [{
  icon: Award,
  title: "Profesjonalizm",
  description: "Najwyższe standardy etyczne i merytoryczne w każdej sprawie."
}, {
  icon: BookOpen,
  title: "Doświadczenie",
  description: "Wieloletnia praktyka w różnorodnych dziedzinach prawa."
}, {
  icon: Users2,
  title: "Indywidualne podejście",
  description: "Każdy klient i każda sprawa traktowane są wyjątkowo."
}, {
  icon: Clock,
  title: "Dyspozycyjność",
  description: "Stały kontakt i szybka reakcja na potrzeby klientów."
}];

const About = () => {
  const { ref: imageRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="o-nas" className="section-padding bg-secondary">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="accent-line mb-6" />
            <h2 className="heading-display text-3xl md:text-4xl text-heading mb-6">
              O Kancelarii
            </h2>
            <div className="space-y-4 text-body text-lg leading-relaxed">
              <p>
                Jako adwokat oferuję profesjonalne wsparcie prawne, gwarantując każdemu klientowi osobiste zaangażowanie i doradztwo na najwyższym poziomie.
              </p>
              <p>
                Naszą misją jest zapewnienie klientom profesjonalnej pomocy prawnej, 
                opartej na rzetelnej analizie, strategicznym myśleniu i pełnym zaangażowaniu 
                w realizację ich celów.
              </p>
              <p>
                Działamy zgodnie z zasadami etyki zawodowej, dbając o poufność 
                i bezpieczeństwo powierzonych nam spraw.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 pt-8 border-t border-border">
              <div className="grid grid-cols-2 gap-6">
                {values.map(value => (
                  <div key={value.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading text-sm mb-1">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Profile Image with Animations */}
          <div 
            ref={imageRef}
            className={`relative transition-all duration-700 ease-out ${
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden group cursor-pointer">
              <img 
                src={nataliaPhoto} 
                alt="Adwokat Natalia Kijaczko-Gołaś" 
                className="w-full h-full object-cover object-top transition-all duration-500 ease-out 
                  grayscale-[30%] group-hover:grayscale-0 
                  group-hover:scale-105 
                  group-hover:brightness-105"
              />
              {/* Hover overlay for subtle glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            {/* Decorative Element with animation */}
            <div 
              className={`absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-lg -z-10 transition-all duration-700 delay-200 ${
                isVisible 
                  ? "opacity-100 translate-x-0 translate-y-0" 
                  : "opacity-0 translate-x-4 translate-y-4"
              }`} 
            />
            {/* Shadow effect on hover */}
            <div className="absolute inset-0 rounded-lg transition-shadow duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;