import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Casamento", href: "/#casamento" },
    { label: "Corporativo", href: "/#corporativo" },
    { label: "Debutante", href: "/#debutante" },
    { label: "Aniversário", href: "/#aniversario" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out border-b border-transparent",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-border/40 py-3"
          : "bg-transparent py-6"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className={cn(
            "font-serif text-2xl font-bold tracking-wide uppercase transition-colors duration-300",
            isScrolled ? "text-primary" : "text-white"
          )}>
            Espaço <span className="text-accent">Wood</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span className={cn(
                "text-sm font-semibold uppercase tracking-wider hover:text-accent transition-colors cursor-pointer",
                isScrolled ? "text-primary" : "text-white/90"
              )}>
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href="#contact"
            className={cn(
              "px-6 py-2.5 rounded-sm font-semibold text-sm uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-lg",
              isScrolled
                ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-primary/20"
                : "bg-white text-primary hover:bg-white/90 hover:shadow-black/20"
            )}
          >
            Peça um orçamento
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-current"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={isScrolled ? "text-primary" : "text-white"} />
          ) : (
            <Menu className={isScrolled ? "text-primary" : "text-white"} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute top-full left-0 right-0 bg-white shadow-xl transition-all duration-300 ease-in-out overflow-hidden lg:hidden",
          mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href}>
              <span 
                className="text-primary font-medium hover:text-accent transition-colors block py-2 cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </span>
            </Link>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-center w-full px-6 py-3 bg-primary text-primary-foreground font-semibold uppercase tracking-wider rounded-sm hover:bg-primary/90 transition-colors mt-4"
          >
            Peça um orçamento
          </a>
        </div>
      </div>
    </header>
  );
}
