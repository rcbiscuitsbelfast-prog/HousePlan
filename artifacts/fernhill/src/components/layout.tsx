import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/weddings", label: "Weddings" },
    { href: "/wakes", label: "Wakes" },
    { href: "/tea-room", label: "Tea Room" },
    { href: "/cinema", label: "Cinema" },
    { href: "/community", label: "Community" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm font-medium tracking-wide">
        Please note: This is a proposed future vision. Fernhill House is not currently restored or open.
      </div>
      
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-semibold tracking-wide text-primary">
            Fernhill Heritage Vision
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide uppercase transition-colors hover:text-secondary ${
                  location === link.href ? "text-primary font-medium" : "text-muted-foreground"
                }`}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-border py-4 px-4 space-y-4">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block text-sm tracking-wide uppercase ${
                  location === link.href ? "text-primary font-medium" : "text-muted-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="bg-foreground text-background py-16 mt-20">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="font-serif text-xl mb-4 text-secondary">Fernhill Heritage Vision</h3>
            <p className="text-sm text-background/80 leading-relaxed max-w-sm">
              A community-rooted initiative presenting the dream of what Fernhill House could become. Reverent of the past, hopeful for the future.
            </p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Proposed Concepts</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link href="/weddings" className="hover:text-white transition-colors">Weddings & Ceremonies</Link></li>
              <li><Link href="/wakes" className="hover:text-white transition-colors">Wakes & Remembrance</Link></li>
              <li><Link href="/tea-room" className="hover:text-white transition-colors">Heritage Tea Room</Link></li>
              <li><Link href="/cinema" className="hover:text-white transition-colors">Community Cinema</Link></li>
              <li><Link href="/community" className="hover:text-white transition-colors">Community Events</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4 text-secondary">Important Notice</h4>
            <p className="text-sm text-background/80 leading-relaxed">
              This website presents a conceptual vision for the restoration of Fernhill House. 
              The venue is not currently operational, and these images represent aspirations for its future.
            </p>
          </div>
        </div>
        <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-background/20 text-xs text-background/60 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Fernhill Heritage Vision. All rights reserved.</p>
          <p className="mt-2 md:mt-0">A proposed future for Belfast.</p>
        </div>
      </footer>
    </div>
  );
}