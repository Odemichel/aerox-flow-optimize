import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { HeroButton } from "./ui/hero-button";
const features = [
  {
    icon: "📱",
    title: "Feedback aéro en temps réel",
    description:
      "Jauge aéro, surface frontale (A) et gain direct en km/h ou en W vs ta position de référence. Vois et ressens l’impact de chaque réglage, instantanément.",
    benefit: "Visuel & quantifié",
    cta: "Tu veux voir un exemple ? Dis-le nous ici !"
  },
  {
    icon: "⚡",
    title: "Modes d’entraînement asservis",
    description:
      "Vitesse cible, CLM, défi aéro ou simulation GPX : la résistance de ton home-trainer s’ajuste à ta position en temps réel. Tu peux aussi t’entraîner à la puissance ou au cardio.",
    benefit: "Gain immédiat"
  },
  {
    icon: "🔬",
    title: "Plans d’entraînement AeroX",
    description:
      "Cycles de 4 à 12 semaines (2–4 séances/sem) pour tenir ta position aéro sous puissance. Objectifs au choix : découverte, stabilisation, puissance en position.",
    benefit: "Structuré & spécifique"
  },
  {
    icon: "📊",
    title: "Suivi de progression",
    description:
      "Historique, temps passé en position, stabilité (%), économies en W et km/h, comparaisons par posture. Prouve tes gains semaine après semaine.",
    benefit: "Progrès objectivés",
    cta: "Besoin d’un nouveau graphe ? Demande-le ici !"
  },
  {
    icon: "🏁",
    title: "Défis aéro & CLM",
    description:
      "Tests guidés, segments de référence et classements par niveau pour te motiver à progresser en posture aéro.",
    benefit: "Motivation durable",
    cta: "Teste ton 10 km CLM : plus rapide en posture aéro ?"
  },
  {
    icon: "🏆",
    title: "Éditeur de séances",
    description:
      "Ajoute tes séances (avec ou sans aéro) en moins de 2 minutes. Intègre l’aéro à ton plan actuel sans tout changer.",
    benefit: "Liberté totale",
    cta: "Une séance type à importer ? Dis-nous laquelle."
  },
  {
    icon: "🌐",
    title: "Compatibilité & installation",
    description:
      "Home-trainers FTMS (Wahoo, Elite, Tacx, Saris…), cardio BLE/ANT+ (Garmin, Polar, Suunto, COROS). Installation < 2 min. Une simple webcam suffit.",
    benefit: "Zéro friction",
    cta: "Un doute sur ton setup ? Dis-nous tout ici !"
  }
];


export const Features = () => {
  return (
    
    <section id="features" className="py-24 relative overflow-hidden" style= {{ background: 'var(--gradient-surface)' }}>
      
      {/* Background effects */}
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-aerox-purple/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 mb-6" >
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
            La seule application qui analyse ton aérodynamisme en temps réel pour booster tes performances à vélo. Intègre l'aéro au coeur de ton plan d'entrainement, à chaque séance, simplement.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
               style= {{ background: 'var(--gradient-surface)' }}
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
            Rejoignez la communauté de plus de <span className="text-primary font-semibold">300 pionniers AeroX</span>.
          </p>
           {/* CTA */}
              <div className="flex justify-center  ">
                <HeroButton size="md" className="animate-glow">
                  📱 Tester & soutenir AeroX
                </HeroButton>
              </div>
          {/* <div className="flex justify-center gap-4">
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
          </div> */}
        </div>
      </div>
    </section>
  );
};