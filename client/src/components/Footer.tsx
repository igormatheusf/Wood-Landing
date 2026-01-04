import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container-custom grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand & Social */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif font-bold text-accent">Espaço Wood</h3>
          <p className="text-primary-foreground/70 leading-relaxed">
            Realizando sonhos e criando memórias inesquecíveis em ambientes sofisticados e acolhedores.
          </p>
          <div className="flex space-x-4">
            <SocialIcon href="https://instagram.com" icon={<Instagram size={20} />} />
            <SocialIcon href="https://facebook.com" icon={<Facebook size={20} />} />
            <SocialIcon href="https://youtube.com" icon={<Youtube size={20} />} />
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif font-bold border-b border-accent/30 pb-2 inline-block">Menu</h4>
          <ul className="space-y-3">
            {["Home", "Casamento", "Corporativo", "Debutante", "Aniversário"].map((item) => (
              <li key={item}>
                <Link href="/" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif font-bold border-b border-accent/30 pb-2 inline-block">Contato</h4>
          <div className="space-y-3 text-primary-foreground/70">
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              <span>(11) 2506 6316</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-accent" />
              <span>(11) 95091 9909</span>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif font-bold border-b border-accent/30 pb-2 inline-block">Localização</h4>
          
          <div className="space-y-4 text-primary-foreground/70 text-sm">
            <div>
              <strong className="block text-white mb-1">ESPAÇO WOOD</strong>
              <p className="flex gap-2">
                <MapPin size={16} className="text-accent shrink-0 mt-1" />
                <span>Rua Pássaros e Flores, 405<br />Brooklin, São Paulo/SP<br />CEP: 04704-901</span>
              </p>
            </div>
            
            <div>
              <strong className="block text-white mb-1">ESPAÇO WOOD CHUCRI ZAIDAN</strong>
              <p className="flex gap-2">
                <MapPin size={16} className="text-accent shrink-0 mt-1" />
                <span>Rua Antônio das Chagas, 1515<br />Chácara St. Antônio (ZS) – SP<br />CEP: 04714-002</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom mt-20 pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/50">
        <p>&copy; {new Date().getFullYear()} Espaço Wood. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

function SocialIcon({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-accent hover:text-white transition-all duration-300"
    >
      {icon}
    </a>
  );
}
