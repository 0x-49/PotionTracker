import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AFFILIATE_URL = "https://whop.com/potiontracker-advanced/?a=digitalartlab";

const navigation = [
  { name: "Features", href: "#features" },
  { name: "Success Stories", href: "#success-stories" },
  { name: "Analytics", href: "#analytics" },
  { name: "Security", href: "#security" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute('href');
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b border-border/50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-bold text-purple-400">
              Potion Tracker
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                  onClick={handleNavClick}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href={AFFILIATE_URL}
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" className="hover:border-purple-500 w-full">
                Log In
              </Button>
            </a>
            <a
              href={AFFILIATE_URL}
              className="w-full"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-purple-600 hover:bg-purple-700 w-full">
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-muted-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4"
            >
              <div className="flex flex-col gap-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                    onClick={handleNavClick}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full hover:border-purple-500">
                      Log In
                    </Button>
                  </a>
                  <a
                    href={AFFILIATE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-purple-600 hover:bg-purple-700">
                      Get Started
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
