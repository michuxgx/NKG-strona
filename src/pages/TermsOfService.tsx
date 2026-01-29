import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
const TermsOfService = () => {
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
            Regulamin
          </h1>

          <div className="prose prose-lg max-w-none text-muted-foreground">
            {/* Introduction */}
            <section className="mb-10">
              <p className="text-foreground/80 leading-relaxed">
                Niniejszy Regulamin określa zasady korzystania z usług prawnych świadczonych przez 
                Kancelarię Adwokacką Adwokat Natalia Kijaczko-Gołaś oraz warunki korzystania ze strony internetowej.
              </p>
            </section>

            {/* Section 1 - Definitions */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                1. Definicje
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li><strong>Kancelaria</strong> – Kancelaria Adwokacka Adwokat Natalia Kijaczko-Gołaś z siedzibą w Warszawie</li>
                <li><strong>Klient</strong> – osoba fizyczna, prawna lub jednostka organizacyjna korzystająca z usług Kancelarii</li>
                <li><strong>Usługi prawne</strong> – pomoc prawna świadczona przez Kancelarię zgodnie z ustawą Prawo o adwokaturze</li>
                <li><strong>Strona internetowa</strong> – witryna dostępna pod adresem kancelarii</li>
                <li><strong>Formularz kontaktowy</strong> – elektroniczny formularz umożliwiający kontakt z Kancelarią</li>
              </ul>
            </section>

            {/* Section 2 - General Provisions */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                2. Postanowienia Ogólne
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Kancelaria świadczy usługi prawne zgodnie z obowiązującymi przepisami prawa, 
                w szczególności z ustawą z dnia 26 maja 1982 r. Prawo o adwokaturze oraz 
                Kodeksem Etyki Adwokackiej.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Korzystanie ze strony internetowej oznacza akceptację niniejszego Regulaminu. 
                Regulamin jest dostępny na stronie internetowej Kancelarii w sposób umożliwiający 
                jego utrwalenie.
              </p>
            </section>

            {/* Section 3 - Scope of Services */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                3. Zakres Usług
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-2">Kancelaria świadczy usługi prawne obejmujące:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Udzielanie porad prawnych</li>
                <li>Sporządzanie opinii prawnych</li>
                <li>Przygotowywanie projektów umów i innych dokumentów prawnych</li>
                <li>Reprezentowanie Klientów przed sądami, urzędami i innymi organami</li>
                <li>Prowadzenie negocjacji i mediacji</li>
                <li>Bieżącą obsługę prawną przedsiębiorstw</li>
              </ul>
            </section>

            {/* Section 4 - Entering into Agreement */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                4. Zawarcie Umowy
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Świadczenie usług prawnych następuje na podstawie umowy zawartej pomiędzy 
                Kancelarią a Klientem. Umowa może być zawarta w formie pisemnej lub za 
                pośrednictwem środków komunikacji elektronicznej.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Przed zawarciem umowy Kancelaria informuje Klienta o zakresie usług, 
                przewidywanym terminie realizacji oraz wysokości wynagrodzenia.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Skorzystanie z formularza kontaktowego na stronie internetowej nie stanowi 
                zawarcia umowy o świadczenie usług prawnych, a jedynie nawiązanie wstępnego kontaktu.
              </p>
            </section>

            {/* Section 5 - Fees */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                5. Wynagrodzenie
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Wysokość wynagrodzenia za świadczone usługi prawne ustalana jest indywidualnie 
                z każdym Klientem przed rozpoczęciem świadczenia usług.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-2">Wynagrodzenie może być ustalone w formie:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Stawki godzinowej</li>
                <li>Ryczałtu za określony zakres usług</li>
                <li>Opłaty za konkretną czynność</li>
                <li>Miesięcznego abonamentu</li>
              </ul>
              <p className="text-foreground/80 leading-relaxed mt-4">
                Do wynagrodzenia netto doliczany jest podatek VAT zgodnie z obowiązującymi przepisami.
              </p>
            </section>

            {/* Section 6 - Client Obligations */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                6. Obowiązki Klienta
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-2">Klient zobowiązany jest do:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Przekazywania Kancelarii prawdziwych i kompletnych informacji niezbędnych do świadczenia usług</li>
                <li>Terminowego dostarczania dokumentów i materiałów potrzebnych do prowadzenia sprawy</li>
                <li>Informowania o wszelkich zmianach mających wpływ na prowadzoną sprawę</li>
                <li>Terminowego regulowania należności za świadczone usługi</li>
                <li>Współpracy z Kancelarią w zakresie niezbędnym do realizacji zlecenia</li>
              </ul>
            </section>

            {/* Section 7 - Confidentiality */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                7. Poufność
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Kancelaria zobowiązana jest do zachowania w tajemnicy wszystkich informacji 
                uzyskanych w związku ze świadczeniem pomocy prawnej (tajemnica adwokacka).
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Obowiązek zachowania tajemnicy zawodowej nie może być uchylony przez Klienta, 
                jest nieograniczony w czasie i trwa również po zakończeniu współpracy.
              </p>
            </section>

            {/* Section 8 - Liability */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                8. Odpowiedzialność
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Kancelaria ponosi odpowiedzialność za szkody wyrządzone Klientowi wskutek 
                niewykonania lub nienależytego wykonania umowy, na zasadach określonych 
                w przepisach prawa.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Kancelaria posiada obowiązkowe ubezpieczenie odpowiedzialności cywilnej 
                adwokatów zgodnie z wymogami ustawowymi.
              </p>
            </section>

            {/* Section 9 - Website Usage */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                9. Korzystanie ze Strony Internetowej
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Treści zamieszczone na stronie internetowej mają charakter wyłącznie informacyjny 
                i nie stanowią porady prawnej ani oferty w rozumieniu przepisów Kodeksu cywilnego.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-2">Użytkownik strony zobowiązuje się do:</p>
              <ul className="list-disc pl-6 space-y-2 text-foreground/80">
                <li>Korzystania ze strony zgodnie z jej przeznaczeniem</li>
                <li>Niepodejmowania działań mogących zakłócić funkcjonowanie strony</li>
                <li>Niekopiowania i nierozpowszechniania treści bez zgody Kancelarii</li>
              </ul>
            </section>

            {/* Section 10 - Intellectual Property */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                10. Prawa Autorskie
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Wszelkie treści zamieszczone na stronie internetowej, w tym teksty, grafiki, 
                logotypy i zdjęcia, są chronione prawem autorskim i stanowią własność Kancelarii 
                lub zostały wykorzystane za zgodą uprawnionych podmiotów. Kopiowanie, 
                rozpowszechnianie lub wykorzystywanie tych treści bez zgody Kancelarii jest zabronione.
              </p>
            </section>

            {/* Section 11 - Complaints */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                11. Reklamacje
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Klient ma prawo złożyć reklamację dotyczącą świadczonych usług. Reklamację 
                należy złożyć w formie pisemnej lub elektronicznej na adres Kancelarii.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Kancelaria rozpatrzy reklamację w terminie 14 dni od daty jej otrzymania 
                i poinformuje Klienta o sposobie jej rozpatrzenia.
              </p>
            </section>

            {/* Section 12 - Changes to Terms */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                12. Zmiany Regulaminu
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Kancelaria zastrzega sobie prawo do zmiany niniejszego Regulaminu. 
                O wszelkich zmianach Klienci zostaną poinformowani poprzez publikację 
                zaktualizowanej wersji na stronie internetowej. Zmiany wchodzą w życie 
                z dniem publikacji.
              </p>
            </section>

            {/* Section 13 - Final Provisions */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                13. Postanowienia Końcowe
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                W sprawach nieuregulowanych niniejszym Regulaminem zastosowanie mają 
                przepisy prawa polskiego, w szczególności Kodeksu cywilnego oraz ustawy 
                Prawo o adwokaturze.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Wszelkie spory wynikające ze świadczenia usług prawnych będą rozstrzygane 
                przez sąd właściwy dla siedziby Kancelarii.
              </p>
            </section>

            {/* Section 14 - Contact */}
            <section className="mb-10">
              <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
                14. Kontakt
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                W przypadku pytań dotyczących niniejszego Regulaminu prosimy o kontakt:
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
export default TermsOfService;