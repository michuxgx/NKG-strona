import { Award, BookOpen, Users2, Clock, Scale } from "lucide-react";
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
  return <section id="o-nas" className="section-padding bg-secondary">
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
                {values.map(value => <div key={value.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-heading text-sm mb-1">{value.title}</h4>
                      <p className="text-muted-foreground text-sm">{value.description}</p>
                    </div>
                  </div>)}
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div className="relative">
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <Scale className="w-12 h-12 text-primary" />
                  </div>
                  <p className="text-muted-foreground text-sm">Zdjęcie kancelarii</p>
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>;
};
export default About;