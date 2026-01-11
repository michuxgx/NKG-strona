import { Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background/80">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Logo Kancelarii" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-serif font-semibold text-background text-lg">
                  Kancelaria Elegance
                </p>
              </div>
            </Link>
            <p className="text-background/60 text-sm leading-relaxed">
              Profesjonalna pomoc prawna oparta na wieloletnim doświadczeniu 
              i indywidualnym podejściu do każdego klienta.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-background mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="tel:+48123456789" 
                  className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+48 123 456 789</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:kontakt@kancelaria.pl" 
                  className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>kontakt@kancelaria.pl</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  ul. Przykładowa 123<br />
                  00-001 Warszawa
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Szybkie linki</h4>
            <ul className="space-y-2">
              <li>
                <a href="#uslugi" className="text-background/60 hover:text-primary transition-colors text-sm">
                  Usługi
                </a>
              </li>
              <li>
                <a href="#o-nas" className="text-background/60 hover:text-primary transition-colors text-sm">
                  O Kancelarii
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-background/60 hover:text-primary transition-colors text-sm">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-background mb-4">Informacje prawne</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/polityka-prywatnosci" className="text-background/60 hover:text-primary transition-colors text-sm">
                  Polityka Prywatności
                </Link>
              </li>
              <li>
                <Link to="/regulamin" className="text-background/60 hover:text-primary transition-colors text-sm">
                  Regulamin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Kancelaria Elegance. Wszelkie prawa zastrzeżone.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;