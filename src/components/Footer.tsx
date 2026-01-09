import { Facebook, Linkedin, Twitter } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-foreground text-background/80">
      {/* Main Footer */}
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl">K</span>
              </div>
              <div>
                <p className="font-serif font-semibold text-background text-lg">
                  Kancelaria Adwokacka
                </p>
              </div>
            </div>
            <p className="text-background/60 text-sm leading-relaxed">
              Profesjonalna pomoc prawna oparta na wieloletnim doświadczeniu 
              i indywidualnym podejściu do każdego klienta.
            </p>
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
                <a href="/polityka-prywatnosci" className="text-background/60 hover:text-primary transition-colors text-sm">
                  Polityka Prywatności
                </a>
              </li>
              <li>
                <a href="/regulamin" className="text-background/60 hover:text-primary transition-colors text-sm">
                  Regulamin
                </a>
              </li>
              <li>
                <a href="/rodo" className="text-background/60 hover:text-primary transition-colors text-sm">
                  Klauzula RODO
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} Kancelaria Adwokacka. Wszelkie prawa zastrzeżone.
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
    </footer>;
};
export default Footer;