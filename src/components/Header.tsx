import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (!isHomePage) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-muted rounded-sm flex items-center justify-center overflow-hidden">
              <img 
                src="/placeholder.svg" 
                alt="Logo Kancelarii" 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="hidden sm:block">
              <p className="font-serif font-semibold text-heading text-lg leading-tight">
                Kancelaria Adwokacka
              </p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">
                Adwokat Jan Kowalski
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("uslugi")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm tracking-wide"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection("o-nas")}
              className="text-foreground/80 hover:text-primary transition-colors font-medium text-sm tracking-wide"
            >
              O Kancelarii
            </button>
            <Button
              onClick={() => scrollToSection("kontakt")}
              className="bg-primary hover:bg-green-hover text-primary-foreground px-6"
            >
              Kontakt
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border bg-background animate-fade-in">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("uslugi")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 text-left"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection("o-nas")}
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2 text-left"
              >
                O Kancelarii
              </button>
              <Button
                onClick={() => scrollToSection("kontakt")}
                className="bg-primary hover:bg-green-hover text-primary-foreground w-full"
              >
                Kontakt
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
