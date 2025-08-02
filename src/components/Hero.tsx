import { HeroButton } from "./ui/hero-button";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import heroImage from "@/assets/aerox-hero.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-aerox-surface to-background">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow opacity-30"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aerox-cyan/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aerox-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary text-primary bg-primary/10 backdrop-blur-sm">
                🚀 Révolutionnez votre performance
              </Badge>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-hero bg-clip-text text-transparent">
                  AeroX
                </span>
                <br />
                <span className="text-foreground">
                  L'analyse aéro
                </span>
                <br />
                <span className="text-muted-foreground text-2xl md:text-3xl lg:text-4xl">
                  en temps réel
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-relaxed">
                Économisez <span className="text-primary font-semibold">jusqu'à 40 watts</span> et 
                gagnez des minutes précieuses grâce à l'IA qui analyse votre position aérodynamique 
                en temps réel.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <HeroButton size="lg" className="animate-glow">
                📱 Télécharger l'App
              </HeroButton>
              <HeroButton variant="secondary" size="lg">
                🎥 Voir la démo
              </HeroButton>
            </div>
            
            {/* Social Proof */}
            <div className="flex items-center gap-6 pt-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,500+</div>
                <div className="text-sm text-muted-foreground">Cyclistes actifs</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">40W</div>
                <div className="text-sm text-muted-foreground">Économie moyenne</div>
              </div>
              <div className="w-px h-12 bg-border"></div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">15%</div>
                <div className="text-sm text-muted-foreground">Performance boost</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-3xl rounded-3xl"></div>
            <Card className="relative overflow-hidden border-primary/20 bg-card/50 backdrop-blur-sm shadow-[0_0_50px_hsl(var(--aerox-cyan)/0.3)]">
              <img 
                src={heroImage} 
                alt="AeroX - Analyse aérodynamique en temps réel"
                className="w-full h-auto rounded-lg"
              />
              
              {/* Floating stats overlay */}
              <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-primary/20 animate-float">
                <div className="text-xs text-muted-foreground">Watts économisés</div>
                <div className="text-2xl font-bold text-primary">-28W</div>
              </div>
              
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-primary/20 animate-float delay-500">
                <div className="text-xs text-muted-foreground">CdA amélioré</div>
                <div className="text-2xl font-bold text-aerox-purple">-12%</div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};