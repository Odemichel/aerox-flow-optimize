import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";

const testimonials = [
  {
    name: "Marc Dubois",
    role: "Triathlete Pro",
    avatar: "🏆",
    rating: 5,
    text: "J'ai gagné 3 minutes sur mon dernier Ironman grâce à AeroX. L'analyse en temps réel m'a permis d'optimiser ma position sans compromettre le confort.",
    achievement: "-3min sur IM"
  },
  {
    name: "Sarah Martinez",
    role: "Cycliste Amateur",
    avatar: "🚴‍♀️",
    rating: 5,
    text: "Incroyable ! En 2 semaines j'ai économisé 25 watts en moyenne. L'app est super intuitive et les conseils sont précis.",
    achievement: "-25W économisés"
  },
  {
    name: "Thomas Leclerc",
    role: "Coach Professionnel",
    avatar: "👨‍💼",
    rating: 5,
    text: "J'utilise AeroX avec tous mes athlètes. Les données sont précises et l'interface permet un suivi optimal. Un must-have !",
    achievement: "15 athlètes suivis"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-aerox-cyan/5 via-transparent to-aerox-purple/5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="border-primary text-primary bg-primary/10 mb-6">
            💬 Témoignages
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ce que disent nos{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              champions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Plus de 300 cyclistes nous font confiance pour améliorer leurs performances. 
            Découvrez leurs résultats exceptionnels.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-card/50 backdrop-blur-sm border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_hsl(var(--aerox-cyan)/0.2)] relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-hero opacity-10 rounded-bl-full"></div>
              
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                  <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary">
                    {testimonial.achievement}
                  </Badge>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              300+
            </div>
            <div className="text-sm text-muted-foreground">Utilisateurs actifs</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              98%
            </div>
            <div className="text-sm text-muted-foreground">Satisfaction</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              35W
            </div>
            <div className="text-sm text-muted-foreground">Économie moyenne</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              4.9★
            </div>
            <div className="text-sm text-muted-foreground">Note App Store</div>
          </div>
        </div>
      </div>
    </section>
  );
};