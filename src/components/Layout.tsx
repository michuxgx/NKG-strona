import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import BackToTop from "@/components/BackToTop";
import ScrollToTop from "@/components/ScrollToTop";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <ScrollToTop />
      <Header />
      <main>{children}</main>
      <Footer />
      <CookieBanner />
      <BackToTop />
    </div>
  );
};

export default Layout;
