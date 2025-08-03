import { HeroButton } from "./ui/hero-button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import heroImage from "@/assets/aerox-hero.jpg";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [wattsCount, setWattsCount] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    // Animation du compteur de watts
    const timer = setInterval(() => {
      setWattsCount(prev => prev < 40 ? prev + 1 : 40);
    }, 50);
    
    setTimeout(() => clearInterval(timer), 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-aerox-surface to-background">
      {/* Background effects - Plus dynamiques */}
      <div className="absolute inset-0 bg-gradient-glow opacity-40 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aerox-cyan/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aerox-purple/20 rounded-full blur-3xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content - Animations d'entrée */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary text-primary bg-primary/20 backdrop-blur-sm animate-glow">
                🏆 #1 App Aérodynamique Pro
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent animate-gradient">
                  Dominez
                </span>
                <br />
                <span className="text-foreground">
                  Chaque Course
                </span>
                <br />
                <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl font-normal">
                  avec l'IA aérodynamique
                </span>
              </h1>
              
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                  <span className="text-primary font-bold text-3xl">{wattsCount}W</span> économisés en moyenne.
                  <br />
                  <span className="text-primary font-semibold">3-5 minutes gagnées</span> par course.
                  <br />
                  L'avantage décisif que tout compétiteur recherche.
                </p>
                
                <div className="flex items-center gap-2 text-sm text-aerox-purple font-medium">
                  <span>✓</span> Analyse temps réel
                  <span>•</span>
                  <span>✓</span> Corrections instantanées  
                  <span>•</span>
                  <span>✓</span> Résultats garantis
                </div>
              </div>
            </div>
            
            {/* CTA Buttons - Plus percutants */}
            <div className="flex flex-col sm:flex-row gap-4">
              <HeroButton size="lg" className="animate-glow text-lg font-semibold px-8 py-4">
                🚀 Commencer Ma Transformation
              </HeroButton>
              <HeroButton variant="secondary" size="lg" className="text-lg px-8 py-4">
                📊 Voir Mon Potentiel
              </HeroButton>
            </div>
            
            {/* Social Proof - Plus impactant */}
            <div className="flex items-center gap-6 pt-6 border-t border-primary/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2,847</div>
                <div className="text-sm text-muted-foreground">Champions actifs</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aerox-purple">156m</div>
                <div className="text-sm text-muted-foreground">Minutes économisées</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-aerox-cyan">€2.3M</div>
                <div className="text-sm text-muted-foreground">Gains de nos pros</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image - Plus dynamique */}
          <div className={`relative transition-all duration-1200 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="absolute inset-0 bg-gradient-hero opacity-30 blur-3xl rounded-3xl animate-pulse"></div>
            <Card className="relative overflow-hidden border-primary/30 bg-card/60 backdrop-blur-sm shadow-[0_0_80px_hsl(var(--aerox-cyan)/0.4)] transform hover:scale-105 transition-transform duration-700">
              <img 
                src={heroImage} 
                alt="Champion utilisant AeroX pour dominer la compétition"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Floating stats overlay - Plus nombreux et animés */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-primary/30 animate-float shadow-lg">
                <div className="text-xs text-muted-foreground font-medium">ÉCONOMIE ACTUELLE</div>
                <div className="text-3xl font-bold text-primary">-{wattsCount}W</div>
                <div className="text-xs text-aerox-purple">↗ +12% efficacité</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm rounded-xl p-4 border border-aerox-purple/30 animate-float delay-500 shadow-lg">
                <div className="text-xs text-muted-foreground font-medium">TEMPS GAGNÉ</div>
                <div className="text-3xl font-bold text-aerox-purple">-2.4min</div>
                <div className="text-xs text-primary">Sur 40km TT</div>
              </div>

              <div className="absolute top-1/2 left-4 bg-background/90 backdrop-blur-sm rounded-xl p-3 border border-aerox-cyan/30 animate-float delay-1000 shadow-lg">
                <div className="text-xs text-muted-foreground font-medium">POSITION OPTIMALE</div>
                <div className="text-xl font-bold text-aerox-cyan">94%</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};