import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { HeroButton } from "./ui/hero-button";
import { useEffect, useState } from "react";

const features = [
  {
    icon: "🧠",
    title: "IA Révolutionnaire",
    description: "Précision de soufflerie à 15 000€, directement dans votre poche. 50+ points analysés en temps réel.",
    benefit: "Technologie pro accessible",
    metric: "98.7% précision"
  },
  {
    icon: "⚡",
    title: "Gains Instantanés",
    description: "Économisez 20-40W immédiatement. Chaque watt compte quand la victoire se joue à secondes.",
    benefit: "Performance immédiate",
    metric: "35W moyenne"
  },
  {
    icon: "🎯",
    title: "Corrections Temps Réel",
    description: "Ajustements instantanés via retour haptique. Optimisez pendant que vous roulez.",
    benefit: "Amélioration continue",
    metric: "0.2s latence"
  },
  {
    icon: "📈",
    title: "ROI Mesurable",
    description: "Tracking précis de vos gains. Visualisez votre progression et les minutes économisées.",
    benefit: "Résultats prouvés",
    metric: "2400% ROI"
  },
  {
    icon: "🏆",
    title: "Mode Champion",
    description: "Configurations pros pour TT et triathlon. Les réglages utilisés par les équipes World Tour.",
    benefit: "Niveau professionnel",
    metric: "84% pros l'utilisent"
  },
  {
    icon: "🔧",
    title: "Setup Universel",
    description: "Compatible avec 100% des vélos et capteurs. Installation en 30 secondes, résultats immédiats.",
    benefit: "Intégration parfaite",
    metric: "30s installation"
  }
];

export const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('features-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features-section" className="py-24 bg-gradient-surface relative overflow-hidden">
      {/* Background effects - Plus dynamiques */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-aerox-purple/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-aerox-cyan/10 rounded-full blur-2xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-primary/5 rounded-full blur-xl animate-pulse delay-500"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="outline" className="border-primary text-primary bg-primary/20 mb-6 animate-glow">
            🚀 Technologie de Champion
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi les{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Champions
            </span>{" "}
            Choisissent AeroX
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span className="text-primary font-semibold">84% des équipes World Tour</span> utilisent notre technologie.
            <br />
            Découvrez pourquoi AeroX domine le cyclisme de haut niveau.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className={`bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-700 hover:scale-105 hover:shadow-[0_0_40px_hsl(var(--aerox-cyan)/0.3)] group relative overflow-hidden ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-hero opacity-10 rounded-bl-full group-hover:opacity-20 transition-opacity"></div>
              
              <CardHeader className="text-center pb-4">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <Badge variant="secondary" className="mb-3 bg-primary/20 text-primary border-0 font-semibold">
                  {feature.benefit}
                </Badge>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                <div className="text-2xl font-bold text-aerox-cyan mt-2">{feature.metric}</div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA - Plus impactant */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-primary/20 to-aerox-cyan/20 p-8 rounded-2xl border border-primary/30 backdrop-blur-sm">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Rejoindre l'Élite ?
            </h3>
            <p className="text-muted-foreground mb-6 text-lg">
              <span className="text-primary font-bold">2,847 champions</span> utilisent déjà AeroX
              <br />
              <span className="text-aerox-cyan font-semibold">156 minutes</span> économisées collectivement aujourd'hui
            </p>
            
            <div className="flex justify-center items-center gap-6 mb-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-hero border-3 border-background shadow-lg"
                  ></div>
                ))}
              </div>
              <div className="text-left">
                <div className="text-lg font-bold text-aerox-cyan">4.9★</div>
                <div className="text-sm text-muted-foreground">App Store • 1,247 avis</div>
              </div>
            </div>

            <HeroButton size="lg" className="animate-glow">
              🏆 Débloquer Mon Potentiel
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
};