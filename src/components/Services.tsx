import { Scale, Briefcase, Users, Building2, FileText, Shield } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Prawo Cywilne",
    description: "Reprezentacja w sprawach cywilnych, sporach majątkowych, odszkodowaniach i roszczeniach.",
  },
  {
    icon: Shield,
    title: "Prawo Karne",
    description: "Obrona w postępowaniach karnych, reprezentacja pokrzywdzonych, sprawy wykroczeniowe.",
  },
  {
    icon: Briefcase,
    title: "Prawo Gospodarcze",
    description: "Obsługa prawna przedsiębiorstw, umowy handlowe, spory korporacyjne.",
  },
  {
    icon: Users,
    title: "Prawo Rodzinne",
    description: "Rozwody, alimenty, podział majątku, sprawy opiekuńcze i adopcyjne.",
  },
  {
    icon: Building2,
    title: "Prawo Nieruchomości",
    description: "Transakcje nieruchomościowe, umowy najmu, sprawy własnościowe i budowlane.",
  },
  {
    icon: FileText,
    title: "Prawo Pracy",
    description: "Reprezentacja pracowników i pracodawców, spory pracownicze, umowy o pracę.",
  },
];

const Services = () => {
  return (
    <section id="uslugi" className="section-padding bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="accent-line mx-auto mb-6" />
          <h2 className="heading-display text-3xl md:text-4xl text-heading mb-4">
            Obszary Praktyki
          </h2>
          <p className="text-body text-lg">
            Oferujemy kompleksową pomoc prawną w wielu dziedzinach prawa, 
            dostosowując nasze usługi do indywidualnych potrzeb każdego klienta.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-elevated rounded-lg p-8 group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-green-light flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>

              {/* Content */}
              <h3 className="font-serif font-semibold text-xl text-heading mb-3">
                {service.title}
              </h3>
              <p className="text-body leading-relaxed">
                {service.description}
              </p>

              {/* Hover Indicator */}
              <div className="mt-6 flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Dowiedz się więcej</span>
                <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
