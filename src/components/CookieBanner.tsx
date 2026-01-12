import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface CookiePreferences {
  marketing: boolean;
  analytics: boolean;
}

const defaultPreferences: CookiePreferences = {
  marketing: false,
  analytics: false,
};

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showFloatingIcon, setShowFloatingIcon] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowFloatingIcon(true);
      try {
        const savedPreferences = JSON.parse(consent);
        if (typeof savedPreferences === "object" && savedPreferences !== null) {
          setPreferences(savedPreferences);
        }
      } catch {
        // If parsing fails, use default preferences
      }
    }
  }, []);

  const saveAndClose = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    setPreferences(prefs);
    setIsVisible(false);
    setShowFloatingIcon(true);
  };

  const acceptAll = () => {
    saveAndClose({
      marketing: true,
      analytics: true,
    });
  };

  const acceptSelected = () => {
    saveAndClose(preferences);
  };

  const rejectAll = () => {
    saveAndClose(defaultPreferences);
  };

  const openSettings = () => {
    setIsVisible(true);
  };

  const togglePreference = (key: keyof CookiePreferences) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Floating Cookie Icon */}
      {showFloatingIcon && !isVisible && (
        <button
          onClick={openSettings}
          className="fixed bottom-6 left-6 z-50 p-3 bg-card border border-border rounded-full shadow-lg hover:bg-muted transition-all duration-300 animate-fade-in group"
          aria-label="Ustawienia cookies"
        >
          <Cookie className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
        </button>
      )}

      {/* Cookie Banner */}
      {isVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-card border border-border rounded-xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Cookie className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">
                  Ustawienia cookies
                </h2>
              </div>
              <button
                onClick={() => {
                  setIsVisible(false);
                  if (localStorage.getItem("cookie-consent")) {
                    setShowFloatingIcon(true);
                  }
                }}
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Zamknij"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Używamy plików cookies, aby zapewnić najlepsze doświadczenie na naszej stronie. 
                Możesz dostosować swoje preferencje poniżej.
              </p>

              {/* Cookie Categories */}
              <div className="space-y-3">
                {/* Necessary - Always enabled */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex-1 pr-4">
                    <h3 className="text-sm font-medium text-foreground">
                      Ciasteczka niezbędne
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Wymagane do prawidłowego działania strony
                    </p>
                  </div>
                  <Switch checked disabled className="opacity-70" />
                </div>

                {/* Analytics */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex-1 pr-4">
                    <h3 className="text-sm font-medium text-foreground">
                      Ciasteczka analityczne
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Pomagają nam zrozumieć, jak korzystasz ze strony
                    </p>
                  </div>
                  <Switch
                    checked={preferences.analytics}
                    onCheckedChange={() => togglePreference("analytics")}
                  />
                </div>

                {/* Marketing (includes advertising & personalization) */}
                <div className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border">
                  <div className="flex-1 pr-4">
                    <h3 className="text-sm font-medium text-foreground">
                      Ciasteczka marketingowe
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      Umożliwiają personalizację treści, wyświetlanie reklam i udostępnianie danych partnerom reklamowym
                    </p>
                  </div>
                  <Switch
                    checked={preferences.marketing}
                    onCheckedChange={() => togglePreference("marketing")}
                  />
                </div>
              </div>

              {/* Privacy Policy Link */}
              <p className="text-xs text-muted-foreground">
                Więcej informacji znajdziesz w naszej{" "}
                <a href="/polityka-prywatnosci" className="text-primary hover:underline">
                  Polityce Prywatności
                </a>
              </p>
            </div>

            {/* Actions */}
            <div className="p-6 border-t border-border space-y-3">
              <Button
                onClick={acceptAll}
                className="w-full bg-primary hover:bg-green-hover text-primary-foreground"
              >
                Akceptuj wszystkie
              </Button>
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  onClick={acceptSelected}
                  className="flex-1 border-border hover:bg-muted"
                >
                  Akceptuj wybrane
                </Button>
                <Button
                  variant="outline"
                  onClick={rejectAll}
                  className="flex-1 border-border hover:bg-muted"
                >
                  Odrzuć wszystkie
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
