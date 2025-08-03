import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroButton } from "@/components/ui/hero-button";
import { CTA } from "@/components/CTA";

const aeroPrinciples = [
  {
    icon: "🌪️",
    title: "Traînée Aérodynamique",
    description: "La force qui vous ralentit. À 40 km/h, elle représente 90% de la résistance totale.",
    formula: "Traînée = ½ × ρ × v² × CdA",
    impact: "Réduire CdA de 10% = 20W économisés"
  },
  {
    icon: "📐",
    title: "Position Corporelle",
    description: "Votre position détermine 70% de votre aérodynamisme. Chaque degré compte.",
    formula: "Surface frontale × Coefficient de traînée",
    impact: "Position optimale = 15% d'économie"
  },
  {
    icon: "💨",
    title: "Écoulement d'Air",
    description: "Créer un flux laminaire autour de votre corps minimise les turbulences.",
    formula: "Reynolds = ρvL/μ",
    impact: "Flux optimisé = -25W de traînée"
  },
  {
    icon: "⚖️",
    title: "Équilibre Performance",
    description: "Trouver le sweet spot entre aérodynamisme, puissance et confort.",
    formula: "Efficacité = Puissance / (Traînée + Roulement)",
    impact: "Balance parfaite = +3-8% performance"
  }
];

const positions = [
  {
    name: "Position Droite",
    cda: "0.45-0.50",
    watts: "350W à 40km/h",
    description: "Position de base, moins aérodynamique mais plus confortable.",
    color: "destructive"
  },
  {
    name: "Position Aéro Modérée",
    cda: "0.35-0.40",
    watts: "295W à 40km/h",
    description: "Bon compromis entre aéro et confort pour la plupart des cyclistes.",
    color: "primary"
  },
  {
    name: "Position Aéro Extrême",
    cda: "0.25-0.30",
    watts: "245W à 40km/h",
    description: "Maximum d'aérodynamisme, réservé aux spécialistes et courses courtes.",
    color: "aerox-cyan"
  }
];

const tips = [
  {
    icon: "👤",
    title: "Tête et Épaules",
    tip: "Regardez 3-5m devant vous, épaules basses et rentrées",
    gain: "+5-8W"
  },
  {
    icon: "🤲",
    title: "Position des Bras",
    tip: "Coudes rentrés, avant-bras parallèles au sol",
    gain: "+8-12W"
  },
  {
    icon: "🦵",
    title: "Jambes et Pieds",
    tip: "Genoux serrés, pieds droits, pédalage fluide",
    gain: "+3-6W"
  },
  {
    icon: "👕",
    title: "Équipement",
    tip: "Combinaison aéro, casque TT, roues profilées",
    gain: "+15-25W"
  }
];

export default function Aerodynamisme() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden bg-gradient-to-br from-background via-aerox-surface to-background">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-aerox-cyan/10 rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="border-aerox-cyan text-aerox-cyan bg-aerox-cyan/10 mb-6">
              🧬 Science Aérodynamique
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Maîtrisez la{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Science
              </span>{" "}
              qui Fait les Champions
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Découvrez les principes physiques qui régissent la performance cycliste 
              et comment AeroX les applique pour vous faire gagner des watts précieux.
            </p>
            
            <div className="flex justify-center gap-4 mb-12">
              <HeroButton size="lg">
                📱 Tester AeroX Maintenant
              </HeroButton>
              <HeroButton variant="secondary" size="lg">
                📊 Calculer Mon Potentiel
              </HeroButton>
            </div>
            
            {/* Key Stats */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">90%</div>
                  <div className="text-sm text-muted-foreground">de la résistance à 40km/h</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-aerox-cyan/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-aerox-cyan mb-2">40W</div>
                  <div className="text-sm text-muted-foreground">économisés en moyenne</div>
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-aerox-purple/20">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-aerox-purple mb-2">3-5min</div>
                  <div className="text-sm text-muted-foreground">gagnées sur 40km</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Principes Aérodynamiques */}
      <section className="py-16 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Les 4 Piliers de l'Aérodynamisme
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprenez la physique qui détermine votre vitesse
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {aeroPrinciples.map((principle, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105">
                <CardHeader>
                  <div className="text-4xl mb-3">{principle.icon}</div>
                  <CardTitle className="text-xl">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{principle.description}</p>
                  <div className="bg-aerox-surface/50 p-3 rounded-lg font-mono text-sm">
                    {principle.formula}
                  </div>
                  <div className="text-primary font-semibold">
                    💡 {principle.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparaison Positions */}
      <section className="py-16 bg-gradient-surface relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Impact des Positions sur la Performance
            </h2>
            <p className="text-xl text-muted-foreground">
              Visualisez l'impact de votre position sur votre puissance requise
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {positions.map((position, index) => (
              <Card key={index} className={`bg-card/50 backdrop-blur-sm border-${position.color}/20 hover:border-${position.color}/40 transition-all duration-500`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-lg">{position.name}</CardTitle>
                  <div className={`text-3xl font-bold text-${position.color}`}>
                    CdA: {position.cda}
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <div className={`text-2xl font-bold text-${position.color}`}>
                    {position.watts}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {position.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8 p-6 bg-primary/10 rounded-xl border border-primary/20">
            <h3 className="text-xl font-bold mb-2">Économie Potentielle</h3>
            <p className="text-muted-foreground">
              Passer d'une position droite à une position aéro optimisée peut vous faire économiser 
              <span className="text-primary font-bold"> jusqu'à 105W à 40km/h</span>
            </p>
          </div>
        </div>
      </section>

      {/* Conseils Pratiques */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Optimisations Immédiates
            </h2>
            <p className="text-xl text-muted-foreground">
              4 ajustements simples pour des gains instantanés
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-aerox-cyan/10 hover:border-aerox-cyan/30 transition-all duration-500 text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{tip.icon}</div>
                  <h3 className="font-bold mb-3">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tip.tip}</p>
                  <Badge variant="secondary" className="bg-aerox-cyan/10 text-aerox-cyan">
                    {tip.gain}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}