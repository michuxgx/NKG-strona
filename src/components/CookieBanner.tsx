import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "all");
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem("cookie-consent", "necessary");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-up">
      <div className="container">
        <div className="bg-card border border-border rounded-lg shadow-lg p-6 md:flex md:items-center md:justify-between gap-6">
          {/* Content */}
          <div className="flex-1 mb-4 md:mb-0">
            <p className="text-sm text-foreground leading-relaxed">
              Ta strona korzysta z plików cookies w celu zapewnienia prawidłowego działania 
              oraz w celach statystycznych. Możesz określić warunki przechowywania lub 
              dostępu do cookies w ustawieniach przeglądarki.{" "}
              <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                Dowiedz się więcej
              </a>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Button
              variant="outline"
              onClick={acceptNecessary}
              className="text-sm border-border hover:bg-muted"
            >
              Tylko niezbędne
            </Button>
            <Button
              onClick={acceptAll}
              className="bg-primary hover:bg-green-hover text-primary-foreground text-sm"
            >
              Akceptuj wszystkie
            </Button>
          </div>

          {/* Close Button */}
          <button
            onClick={acceptNecessary}
            className="absolute top-3 right-3 md:hidden text-muted-foreground hover:text-foreground"
            aria-label="Zamknij"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
