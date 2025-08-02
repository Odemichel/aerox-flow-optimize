import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

const features = [
  {
    icon: "🔬",
    title: "Analyse IA Avancée",
    description: "Notre algorithme propriétaire analyse 50+ points de données en temps réel pour optimiser votre position aérodynamique.",
    benefit: "Précision scientifique"
  },
  {
    icon: "⚡",
    title: "Économie de Watts",
    description: "Réduisez votre traînée et économisez jusqu'à 40 watts - l'équivalent de plusieurs minutes sur un contre-la-montre.",
    benefit: "Performance immédiate"
  },
  {
    icon: "📱",
    title: "Interface Intuitive",
    description: "Recevez des corrections en temps réel avec des visuels clairs et des recommandations actionables.",
    benefit: "Facile à utiliser"
  },
  {
    icon: "📊",
    title: "Suivi de Progression",
    description: "Historique détaillé de vos sessions, comparaisons et métriques pour mesurer vos améliorations.",
    benefit: "Progression mesurable"
  },
  {
    icon: "🏆",
    title: "Mode Compétition",
    description: "Optimisations spécifiques pour les contre-la-montre et triathlons avec configurations personnalisées.",
    benefit: "Avantage compétitif"
  },
  {
    icon: "🌐",
    title: "Compatibilité Totale",
    description: "Fonctionne avec tous les vélos, capteurs existants et s'intègre parfaitement à votre setup actuel.",
    benefit: "Pas de changement"
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-gradient-surface relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-aerox-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 mb-6">
            ⚡ Technologie de pointe
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Pourquoi choisir{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              AeroX
            </span>{" "}
            ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La seule application qui combine intelligence artificielle, 
            analyse biomécanique et simplicité d'utilisation pour maximiser 
            votre efficacité aérodynamique.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--aerox-cyan)/0.2)] group"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4 group-hover:animate-bounce">{feature.icon}</div>
                <Badge variant="secondary" className="mb-2 bg-primary/10 text-primary border-0">
                  {feature.benefit}
                </Badge>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Rejoignez plus de <span className="text-primary font-semibold">2,500 cyclistes</span> qui 
            ont déjà amélioré leurs performances
          </p>
          <div className="flex justify-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div 
                  key={i} 
                  className="w-8 h-8 rounded-full bg-gradient-hero border-2 border-background"
                ></div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              ⭐⭐⭐⭐⭐ 4.9/5 sur l'App Store
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};