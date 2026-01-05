import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema } from "@shared/routes";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowRight, Utensils, GlassWater, Music, Users } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col font-sans text-foreground bg-background">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <GastronomySection />
        <ValuePropositionSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

// -----------------------------------------------------------------------------
// SECTIONS
// -----------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {/* Luxury Event Space - Wedding/Party Setup */}
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2098&auto=format&fit=crop"
          alt="Espaço Wood Event Hall"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      <div className="relative z-10 container-custom text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-4 text-accent">
            Experiências Únicas
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight">
            Momentos que <br/>
            <span className="text-white italic font-light">Eternizam</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10">
            <a
              href="#contact"
              className="px-10 py-4 bg-accent text-white font-bold uppercase tracking-widest hover:bg-white hover:text-primary transition-all duration-300 rounded-sm shadow-xl shadow-black/20"
            >
              Solicite um Orçamento
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-widest">Descubra</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent" />
      </motion.div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-2xl">
            {/* Elegant Interior Venue */}
            <img 
              src="https://pixabay.com/get/g4e7adc4ad33eaefe31b9f072545e22ac65543b143bade1a6b287ecb8861edcb691886f19669706c6819a96bbbb1bac03377ac7b07712fd2ffb5c2cfff6715dfa_1280.jpg" 
              alt="Interior Espaço Wood" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-white p-4 shadow-xl hidden md:block">
            <div className="w-full h-full border border-primary/20 p-2">
               {/* Detail Shot - Decoration */}
              <img 
                src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop" 
                alt="Decoração" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-accent font-bold uppercase tracking-widest text-sm mb-4">Nossa Essência</h4>
          <h2 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-8 leading-tight">
            Espaço Wood e <br/>Espaço Wood Chucri Zaidan
          </h2>
          
          <div className="w-20 h-1 bg-accent mb-8" />
          
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Localizados no coração do Brooklin, nossos espaços oferecem sofisticação, modernidade e conforto, para que a sua experiência seja exatamente como você sempre sonhou.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Realizamos eventos sociais e corporativos: casamento, festa de 15 anos, bodas, aniversários, Bar e Bat Mitzvah, confraternizações, lançamentos, palestras e seminários, entre outros.
          </p>
          
          <div className="flex flex-wrap gap-4">
            {["Casamentos", "Corporativo", "Debutantes", "Bodas"].map(tag => (
              <span key={tag} className="px-4 py-2 bg-secondary text-primary-foreground text-sm font-semibold rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function GastronomySection() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none" />
      
      <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 text-accent mb-4">
              <Utensils size={20} />
              <span className="font-bold uppercase tracking-widest text-sm">Alta Gastronomia</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Sabor & Sofisticação</h2>
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              Assinada pela chef Manoela Zarzur, nossa gastronomia é personalizada e apresenta um toque de sofisticação em cada detalhe da preparação e apresentação. Nosso objetivo é proporcionar a melhor experiência gastronômica a você e seus convidados!
            </p>
            
            <ul className="space-y-4 mb-10">
              {["Menu Personalizado", "Ingredientes Selecionados", "Apresentação Impecável"].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        
        <div className="lg:col-span-7 order-1 lg:order-2 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {/* Fine Dining Dish */}
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1374&auto=format&fit=crop" 
              alt="Gastronomia Wood" 
              className="w-full h-80 object-cover rounded-sm translate-y-8" 
            />
            {/* Chef Plating Food */}
            <img 
              src="https://pixabay.com/get/gd231c337e9baac56c21fdaba69144f518d311b2caa13b0abf5c5ae98e508170dbf001fc52c35331b26a31baf9b5299b0372b802ab2bc9876b1cf9fc5174ed4c2_1280.jpg" 
              alt="Chef Preparando" 
              className="w-full h-80 object-cover rounded-sm" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ValuePropositionSection() {
  const features = [
    {
      icon: <Users className="w-8 h-8 text-accent" />,
      title: "Equipe Especializada",
      desc: "Profissionais aptos a te atender com o mais alto grau de profissionalismo."
    },
    {
      icon: <GlassWater className="w-8 h-8 text-accent" />,
      title: "Serviço Impecável",
      desc: "Do planejamento à execução, cuidamos de cada detalhe do seu evento."
    },
    {
      icon: <Music className="w-8 h-8 text-accent" />,
      title: "Infraestrutura Completa",
      desc: "Espaços amplos, funcionais e com acessibilidade para todos os convidados."
    }
  ];

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom text-center max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-6">
          Viva seus melhores momentos <br/> no Espaço Wood
        </h2>
        <p className="text-muted-foreground text-lg">
          Espaços amplos, funcionais e com acessibilidade para que você aproveite ao máximo independente da ocasião.
        </p>
      </div>

      <div className="container-custom grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {features.map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.2, duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow text-center group"
          >
            <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <div className="group-hover:text-white transition-colors">
                {feature.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="text-center">
        <a 
          href="#contact" 
          className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest border-b-2 border-accent pb-1 hover:text-accent transition-colors"
        >
          Agendar uma degustação <ArrowRight size={16} />
        </a>
      </div>
    </section>
  );
}

function ContactSection() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(insertContactMessageSchema),
  });

  const onSubmit = (data: any) => {
    const subject = encodeURIComponent("Solicitação de Orçamento - Espaço Wood");
    const body = encodeURIComponent(`Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}`);
    window.location.href = `mailto:contato@espacowood.com.br?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="section-padding bg-white relative">
      <div className="container-custom max-w-5xl">
        <div className="bg-primary rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Left Side Info */}
          <div className="md:w-5/12 bg-primary-foreground/5 p-10 md:p-14 text-white flex flex-col justify-center relative">
            {/* Background Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')] opacity-10 pointer-events-none" />
            
            <h3 className="text-3xl font-serif font-bold mb-6 relative z-10">Vamos realizar <br/>seu sonho?</h3>
            <p className="text-white/80 mb-8 relative z-10">
              Preencha o formulário ao lado e nossa equipe entrará em contato para criar um orçamento personalizado para o seu evento.
            </p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-primary font-bold">1</div>
                <span>Solicite o orçamento</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">2</div>
                <span className="text-white/60">Agende uma visita</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold">3</div>
                <span className="text-white/60">Realize seu evento</span>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="md:w-7/12 bg-white p-10 md:p-14">
            <h2 className="text-2xl font-serif font-bold text-primary mb-2">Receba seu orçamento</h2>
            <p className="text-muted-foreground mb-8 text-sm">É rápido e sem compromisso.</p>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary uppercase tracking-wider">Nome*</label>
                <input
                  {...register("name")}
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="Seu nome completo"
                />
                {errors.name && <p className="text-destructive text-xs">{errors.name.message as string}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary uppercase tracking-wider">Email*</label>
                <input
                  {...register("email")}
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="seu@email.com"
                />
                {errors.email && <p className="text-destructive text-xs">{errors.email.message as string}</p>}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-primary uppercase tracking-wider">Telefone*</label>
                <input
                  {...register("phone")}
                  className="w-full px-4 py-3 bg-secondary/30 border border-border rounded-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                  placeholder="(11) 99999-9999"
                />
                {errors.phone && <p className="text-destructive text-xs">{errors.phone.message as string}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-white font-bold uppercase tracking-widest rounded-sm shadow-lg hover:bg-accent/90 transition-all transform active:scale-[0.98] mt-4"
              >
                Enviar meu Orçamento
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
