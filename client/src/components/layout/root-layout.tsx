import { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";

interface RootLayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

export default function RootLayout({
  children,
  title = "Potion Tracker Advanced - Elite Solana Trading Analytics",
  description = "Transform on-chain data into profitable trades with military-grade wallet tracking, millisecond alerts, and advanced analytics. Join top Solana traders making life-changing gains.",
}: RootLayoutProps) {
  const [location] = useLocation();
  const currentUrl = `https://joinpotiontracker.com${location}`;

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Potion Tracker Advanced",
    "description": description,
    "url": currentUrl,
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Potion Tracker Advanced",
      "url": "https://joinpotiontracker.com"
    }
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#7c3aed" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Potion Tracker Advanced" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Additional SEO tags */}
        <meta name="keywords" content="Solana trading, crypto tracking, wallet tracker, trading analytics, blockchain monitoring, real-time alerts" />
        <meta name="author" content="Potion Tracker Advanced" />
        <link rel="canonical" href="https://www.joinpotiontracker.com" />
        
        {/* Responsive design meta */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="HandheldFriendly" content="true" />
        
        {/* Performance optimizations */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        
        {/* JSON-LD Schema Markup */}
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}
