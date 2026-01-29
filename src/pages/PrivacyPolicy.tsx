import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
const PrivacyPolicy = () => {
  return <Layout>
      {/* Back Button */}
      <div className="pt-24 pb-4 bg-foreground">
        <div className="container">
          <Link to="/">
            <Button variant="ghost" className="text-background hover:text-primary hover:bg-background/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót do strony głównej
            </Button>
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Polityka Prywatności
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-foreground/80 leading-relaxed">
                Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych 
                przekazanych przez Użytkowników w związku z korzystaniem z usług świadczonych przez 
                Kancelarię Adwokacką Adwokat Natalia Kijaczko-Gołaś za pośrednictwem strony internetowej.
              </p>
            </section>

            {/* Section 1 - Administrator */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                1. Administrator Danych Osobowych
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Administratorem Państwa danych osobowych jest Kancelaria Adwokacka Adwokat Natalia Kijaczko-Gołaś z siedzibą 
                w Warszawie, ul. Testowa 1/lok. 1, 00-000 Warszawa.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                W sprawach związanych z ochroną danych osobowych można kontaktować się pod adresem 
                e-mail: <a href="mailto:test@example.com" className="text-primary hover:underline">test@example.com</a> lub 
                telefonicznie: <a href="tel:+48123456789" className="text-primary hover:underline">+48 123 456 789</a>.
              </p>
            </section>

            {/* Section 2 - Legal Basis */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                2. Podstawa Prawna Przetwarzania Danych
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Przetwarzanie danych osobowych odbywa się zgodnie z Rozporządzeniem Parlamentu 
                Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) oraz ustawą 
                o ochronie danych osobowych.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-2">Dane osobowe przetwarzane są na podstawie:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Art. 6 ust. 1 lit. a) RODO – zgoda osoby, której dane dotyczą</li>
                <li>Art. 6 ust. 1 lit. b) RODO – wykonanie umowy lub podjęcie działań przed jej zawarciem</li>
                <li>Art. 6 ust. 1 lit. c) RODO – wypełnienie obowiązku prawnego ciążącego na administratorze</li>
                <li>Art. 6 ust. 1 lit. f) RODO – prawnie uzasadnione interesy administratora</li>
              </ul>
            </section>

            {/* Section 3 - Purpose */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                3. Cel Przetwarzania Danych
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-2">Państwa dane osobowe przetwarzane są w celu:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Świadczenia usług prawnych i obsługi klientów</li>
                <li>Odpowiedzi na zapytania przesłane za pośrednictwem formularza kontaktowego</li>
                <li>Prowadzenia korespondencji e-mailowej i telefonicznej</li>
                <li>Realizacji obowiązków prawnych i podatkowych</li>
                <li>Dochodzenia lub obrony przed roszczeniami</li>
                <li>Prowadzenia analiz statystycznych i doskonalenia usług</li>
              </ul>
            </section>

            {/* Section 4 - Scope */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                4. Zakres Przetwarzanych Danych
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-2">
                Przetwarzamy następujące kategorie danych osobowych:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Dane identyfikacyjne (imię, nazwisko)</li>
                <li>Dane kontaktowe (adres e-mail, numer telefonu, adres korespondencyjny)</li>
                <li>Dane niezbędne do świadczenia usług prawnych</li>
                <li>Dane techniczne (adres IP, typ przeglądarki, czas wizyty)</li>
              </ul>
            </section>

            {/* Section 5 - Rights */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                5. Prawa Osób, Których Dane Dotyczą
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-2">
                Zgodnie z RODO przysługują Państwu następujące prawa:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Prawo dostępu</strong> – prawo do uzyskania informacji o przetwarzanych danych</li>
                <li><strong>Prawo do sprostowania</strong> – prawo do poprawienia nieprawidłowych danych</li>
                <li><strong>Prawo do usunięcia</strong> – prawo do żądania usunięcia danych („prawo do bycia zapomnianym")</li>
                <li><strong>Prawo do ograniczenia przetwarzania</strong> – prawo do żądania ograniczenia przetwarzania danych</li>
                <li><strong>Prawo do przenoszenia danych</strong> – prawo do otrzymania danych w ustrukturyzowanym formacie</li>
                <li><strong>Prawo do sprzeciwu</strong> – prawo do wniesienia sprzeciwu wobec przetwarzania</li>
                <li><strong>Prawo do cofnięcia zgody</strong> – w dowolnym momencie, bez wpływu na zgodność z prawem przetwarzania przed jej cofnięciem</li>
                <li><strong>Prawo do skargi</strong> – prawo do wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych</li>
              </ul>
            </section>

            {/* Section 6 - Retention */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                6. Okres Przechowywania Danych
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Dane osobowe przechowywane są przez okres niezbędny do realizacji celów, dla których 
                zostały zebrane:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Dane związane ze świadczeniem usług prawnych – przez okres 10 lat od zakończenia sprawy</li>
                <li>Dane z formularza kontaktowego – przez okres 3 lat od ostatniego kontaktu</li>
                <li>Dane przetwarzane na podstawie zgody – do momentu jej cofnięcia</li>
                <li>Dane przetwarzane dla celów podatkowych – zgodnie z obowiązującymi przepisami (5-6 lat)</li>
              </ul>
            </section>

            {/* Section 7 - Recipients */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                7. Odbiorcy Danych
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-2">
                Dane osobowe mogą być przekazywane następującym kategoriom odbiorców:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Podmioty świadczące usługi hostingowe i IT</li>
                <li>Podmioty świadczące usługi księgowe</li>
                <li>Organy państwowe i sądy – w zakresie wymaganym przez prawo</li>
                <li>Współpracujący prawnicy i eksperci – w zakresie niezbędnym do świadczenia usług</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Dane osobowe nie są przekazywane do państw trzecich ani organizacji międzynarodowych.
              </p>
            </section>

            {/* Section 8 - Security */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                8. Bezpieczeństwo Danych
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Administrator stosuje odpowiednie środki techniczne i organizacyjne zapewniające 
                ochronę przetwarzanych danych osobowych, w szczególności zabezpiecza dane przed ich 
                udostępnieniem osobom nieupoważnionym, zabraniem przez osobę nieuprawnioną, 
                przetwarzaniem z naruszeniem przepisów oraz zmianą, utratą, uszkodzeniem lub zniszczeniem.
              </p>
            </section>

            {/* Section 9 - Cookies */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                9. Polityka Cookies
              </h2>
              
              <h3 className="font-semibold text-foreground text-lg mt-6 mb-3">9.1. Czym są pliki cookies?</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Pliki cookies (ciasteczka) to małe pliki tekstowe zapisywane na urządzeniu użytkownika 
                podczas korzystania ze strony internetowej. Służą one do prawidłowego funkcjonowania 
                strony, analizy ruchu oraz personalizacji treści.
              </p>

              <h3 className="font-semibold text-foreground text-lg mt-6 mb-3">9.2. Rodzaje wykorzystywanych cookies</h3>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80 mb-4">
                <li>
                  <strong>Cookies niezbędne</strong> – wymagane do prawidłowego funkcjonowania strony, 
                  np. zapamiętanie preferencji dotyczących cookies
                </li>
                <li>
                  <strong>Cookies analityczne</strong> – pozwalają na analizę sposobu korzystania ze strony 
                  i jej optymalizację
                </li>
                <li>
                  <strong>Cookies funkcjonalne</strong> – umożliwiają zapamiętanie wybranych ustawień 
                  i personalizację interfejsu
                </li>
              </ul>

              <h3 className="font-semibold text-foreground text-lg mt-6 mb-3">9.3. Zarządzanie plikami cookies</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Użytkownik może w każdej chwili zmienić ustawienia dotyczące plików cookies w swojej 
                przeglądarce internetowej. Większość przeglądarek domyślnie akceptuje cookies, ale 
                można zmienić te ustawienia.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-2">Instrukcje zarządzania cookies w popularnych przeglądarkach:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                <li><a href="https://support.mozilla.org/pl/kb/wzmocniona-ochrona-przed-sledzeniem-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                <li><a href="https://support.apple.com/pl-pl/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                <li><a href="https://support.microsoft.com/pl-pl/microsoft-edge/usuwanie-plik%C3%B3w-cookie-w-przegl%C4%85darce-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
              </ul>

              <h3 className="font-semibold text-foreground text-lg mt-6 mb-3">9.4. Konsekwencje wyłączenia cookies</h3>
              <p className="text-foreground/80 leading-relaxed">
                Wyłączenie lub ograniczenie obsługi plików cookies może spowodować trudności w 
                korzystaniu ze strony, a w skrajnych przypadkach może uniemożliwić korzystanie z 
                niektórych jej funkcji.
              </p>
            </section>

            {/* Section 10 - Changes */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                10. Zmiany Polityki Prywatności
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Administrator zastrzega sobie prawo do wprowadzania zmian w niniejszej Polityce 
                Prywatności. O wszelkich zmianach użytkownicy będą informowani poprzez publikację 
                zaktualizowanej wersji na stronie internetowej.
              </p>
            </section>

            {/* Section 11 - Contact */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                11. Kontakt
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                W przypadku pytań dotyczących niniejszej Polityki Prywatności lub przetwarzania 
                danych osobowych prosimy o kontakt:
              </p>
              <div className="bg-muted/50 p-6 rounded-lg mt-4">
                <p className="text-foreground font-medium">Kancelaria Adwokacka Adwokat Natalia Kijaczko-Gołaś</p>
                <p className="text-foreground/80">ul. Testowa 1/lok. 1</p>
                <p className="text-foreground/80">00-000 Warszawa</p>
                <p className="text-foreground/80 mt-2">
                  E-mail: <a href="mailto:test@example.com" className="text-primary hover:underline">test@example.com</a>
                </p>
                <p className="text-foreground/80">
                  Telefon: <a href="tel:+48123456789" className="text-primary hover:underline">+48 123 456 789</a>
                </p>
              </div>
            </section>

            {/* Last updated */}
            <div className="border-t border-border pt-6 mt-10">
              <p className="text-sm text-muted-foreground">
                Ostatnia aktualizacja: Styczeń 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>;
};
export default PrivacyPolicy;