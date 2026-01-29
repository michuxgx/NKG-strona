import { Facebook, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoNkg from "@/assets/logo-nkg.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background/80">
      {/* Google Maps Section */}
      <div className="w-full h-64 md:h-80">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.8!2d17.0339!3d51.1097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fc2763ff8dd5d%3A0x5f0b3e6f6b4c4c4c!2sMarszałka%20Józefa%20Piłsudskiego%2074%2C%2050-020%20Wrocław!5e0!3m2!1spl!2spl!4v1700000000000!5m2!1spl!2spl"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Lokalizacja Kancelarii Adwokackiej NKG"
          className="grayscale"
        />
      </div>

      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img 
                src={logoNkg} 
                alt="Logo Kancelarii NKG" 
                className="h-10 w-auto object-contain brightness-0 invert"
              />
              <div>
                <p className="font-serif font-semibold text-background text-lg">
                  Kancelaria Adwokacka NKG  
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
                <a href="tel:+48123456789" className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+48 123 456 789</span>
                </a>
              </li>
              <li>
                <a href="mailto:test@example.com" className="flex items-center gap-2 text-background/60 hover:text-primary transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>test@example.com</span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-background/60 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>
                  ul. Testowa 1/lok. 1<br />
                  00-000 Warszawa
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
            © {currentYear} Kancelaria Adwokacka Adwokat Natalia Kijaczko-Gołaś. Wszelkie prawa zastrzeżone.
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