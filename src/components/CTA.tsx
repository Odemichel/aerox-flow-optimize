import { HeroButton } from "./ui/hero-button";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-aerox-cyan/10 via-aerox-purple/10 to-aerox-cyan/10 animate-gradient-shift"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-radial from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Card className="max-w-4xl mx-auto bg-card/30 backdrop-blur-sm border-primary/20 overflow-hidden relative">
          {/* Animated border glow */}
          <div className="absolute inset-0 bg-gradient-hero opacity-20 blur-xl"></div>
          
          <CardContent className="p-12 text-center relative z-10">
            <Badge variant="outline" className="border-primary text-primary bg-primary/10 mb-6 animate-pulse">
              🎯 Offre limitée
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Prêt à{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                dominer
              </span>{" "}
              vos courses ?
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Rejoignez l'élite des cyclistes qui utilisent la science pour gagner. 
              <span className="text-primary font-semibold"> 30 jours d'essai gratuit</span>, 
              sans engagement.
            </p>
            
            {/* Urgency and scarcity */}
            <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 mb-8 max-w-2xl mx-auto">
              <p className="text-destructive font-semibold">
                ⏰ Plus que 48h pour profiter de -50% sur l'abonnement annuel
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Seulement 127 places restantes ce mois-ci
              </p>
            </div>
            
            {/* Benefits recap */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl mb-2">⚡</div>
                <div className="font-semibold text-primary">40W économisés</div>
                <div className="text-sm text-muted-foreground">en moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">📱</div>
                <div className="font-semibold text-primary">Installation 2min</div>
                <div className="text-sm text-muted-foreground">Prêt à rouler</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-semibold text-primary">Résultats garantis</div>
                <div className="text-sm text-muted-foreground">ou remboursé</div>
              </div>
            </div>
            
            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <HeroButton size="lg" className="animate-glow text-lg px-12 py-4">
                🚀 Télécharger maintenant
              </HeroButton>
              <HeroButton variant="secondary" size="lg" className="text-lg px-12 py-4">
                📊 Voir les tarifs
              </HeroButton>
            </div>
            
            {/* Trust signals */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                30 jours gratuits
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Annulation en 1 clic
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Support 7j/7
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                Garantie satisfait
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Bottom disclaimer */}
        <p className="text-center text-xs text-muted-foreground mt-8 max-w-2xl mx-auto">
          * Résultats basés sur l'analyse de 2,500+ sessions utilisateurs. 
          Les performances individuelles peuvent varier selon l'usage et la morphologie.
        </p>
      </div>
    </section>
  );
};