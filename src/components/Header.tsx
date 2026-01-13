import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logoNkg from "@/assets/logo-nkg.png";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const needsSolidHeader = ["/polityka-prywatnosci", "/regulamin"].includes(location.pathname);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      // Show header when scrolling up or at top, hide when scrolling down
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current) {
        setIsVisible(false);
        setIsMobileMenuOpen(false); // Close mobile menu when hiding
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed left-0 right-0 z-50 transition-all duration-300 ${needsSolidHeader ? "bg-background/80 backdrop-blur-sm shadow-sm border-b border-border" : isScrolled ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border" : "bg-transparent"} ${isVisible ? "top-0" : "-top-24"}`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logoNkg} 
              alt="Logo Kancelarii NKG" 
              className="h-12 w-auto object-contain"
            />
            <div className="hidden sm:block">
              <p className="font-serif font-semibold text-heading text-lg leading-tight">
                Kancelaria Adwokacka 
              </p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">
                Adwokat Natalia Kijaczko-Gołaś  
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button onClick={() => scrollToSection("uslugi")} className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm tracking-wide">
              Usługi
            </button>
            <button onClick={() => scrollToSection("o-nas")} className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm tracking-wide">
              O Kancelarii
            </button>
            
            {/* Contact Info */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-border">
              <a href="tel:+48123456789" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors text-sm" aria-label="Zadzwoń do nas">
                <Phone className="w-4 h-4" />
                <span className="hidden lg:inline">+48 123 456 789</span>
              </a>
              <a href="mailto:kontakt@kancelaria.pl" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors text-sm" aria-label="Napisz do nas">
                <Mail className="w-4 h-4" />
                <span className="hidden lg:inline">kontakt@kancelaria.pl</span>
              </a>
            </div>

            <Button onClick={() => scrollToSection("kontakt")} className="bg-primary hover:bg-green-hover text-primary-foreground px-6">
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Menu">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <nav className="md:hidden py-4 border-t border-border bg-background animate-fade-in">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection("uslugi")} className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 text-left">
                Usługi
              </button>
              <button onClick={() => scrollToSection("o-nas")} className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 text-left">
                O Kancelarii
              </button>
              
              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-2 py-2 border-t border-border mt-2 pt-4">
                <a href="tel:+48123456789" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <Phone className="w-4 h-4" />
                  <span>+48 123 456 789</span>
                </a>
                <a href="mailto:kontakt@kancelaria.pl" className="flex items-center gap-2 text-foreground/70 hover:text-primary transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>kontakt@kancelaria.pl</span>
                </a>
              </div>

              <Button onClick={() => scrollToSection("kontakt")} className="bg-primary hover:bg-green-hover text-primary-foreground w-full">
                Kontakt
              </Button>
            </div>
          </nav>}
      </div>
    </header>;
};
export default Header;