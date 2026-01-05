import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-wood-100 px-6 py-4">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group">
          <span className="font-serif text-2xl font-bold tracking-wide uppercase text-primary">
            Espaço <span className="text-accent">Wood</span>
          </span>
        </Link>

        <Button 
          className="bg-accent hover:bg-accent/90 text-white font-bold uppercase tracking-wider px-6 rounded-sm shadow-lg transition-all hover:-translate-y-0.5"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Solicite um Orçamento
        </Button>
      </div>
    </header>
  );
}
