import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { HeroButton } from "./ui/hero-button";

export const Origin = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-aerox-surface/50 to-background">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-radial from-aerox-purple/10 via-transparent to-aerox-cyan/10"></div>
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-aerox-cyan/5 rounded-full blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="border-aerox-purple text-aerox-purple bg-aerox-purple/10 mb-6">
              🧬 L'Histoire d'AeroX
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Né de la{" "}
              <span className="bg-gradient-hero bg-clip-text text-transparent">
                Frustration
              </span>{" "}
              d'un Champion
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comment un ingénieur aéronautique et triple champion national a révolutionné 
              l'analyse aérodynamique pour tous les cyclistes.
            </p>
          </div>

          {/* Story Timeline */}
          <div className="space-y-12">
            {/* Problème */}
            <Card className="bg-card/50 backdrop-blur-sm border-destructive/20 hover:border-destructive/40 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">❌</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-destructive">Le Problème qui Coûte des Victoires</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      "J'ai perdu le championnat national 2019 pour 8 secondes. Huit secondes qui auraient pu être économisées 
                      avec une meilleure position aérodynamique. Les analyses en soufflerie coûtent 15 000€ et ne sont 
                      accessibles qu'aux équipes pros."
                    </p>
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                      <p className="text-destructive font-semibold">
                        💸 Soufflerie : 15 000€ • 📅 Délais : 3-6 mois • 🏢 Réservé aux pros
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solution */}
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">💡</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-primary">L'Innovation qui Change Tout</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                      "Avec mon équipe d'ingénieurs chez Airbus, nous avons développé un algorithme d'IA capable d'analyser 
                      l'aérodynamique en temps réel via smartphone. La précision d'une soufflerie, l'accessibilité d'une app."
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">2 ans</div>
                        <div className="text-sm text-muted-foreground">de R&D</div>
                      </div>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">50+</div>
                        <div className="text-sm text-muted-foreground">algorithmes testés</div>
                      </div>
                      <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-primary">98.7%</div>
                        <div className="text-sm text-muted-foreground">de précision</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Impact */}
            <Card className="bg-card/50 backdrop-blur-sm border-aerox-cyan/20 hover:border-aerox-cyan/40 transition-all duration-500">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="text-4xl">🏆</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-aerox-cyan">L'Impact sur Votre Performance</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                      Aujourd'hui, AeroX a permis à plus de 2 847 cyclistes d'optimiser leur position. 
                      Des amateurs passionnés aux champions du World Tour, tous utilisent notre technologie 
                      pour gagner ces précieuses secondes qui font la différence.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <h4 className="font-semibold text-aerox-cyan">Résultats Mesurés :</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Économie moyenne</span>
                            <span className="font-bold text-primary">35W</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Temps gagné (40km)</span>
                            <span className="font-bold text-aerox-purple">3.2min</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">ROI moyen</span>
                            <span className="font-bold text-aerox-cyan">2400%</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-semibold text-aerox-purple">Témoignages Pro :</h4>
                        <blockquote className="text-sm italic text-muted-foreground border-l-2 border-aerox-purple pl-3">
                          "AeroX m'a fait gagner 4 positions au dernier championnat. 
                          Un outil indispensable pour tout cycliste sérieux."
                          <br />
                          <cite className="text-aerox-purple font-medium">- Marc D., Champion National</cite>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Final */}
          <div className="text-center mt-16 p-8 bg-gradient-to-r from-primary/10 to-aerox-cyan/10 rounded-2xl border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à Écrire Votre Propre Histoire de Victoire ?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Rejoignez les champions qui utilisent AeroX pour transformer leur performance. 
              Votre prochaine victoire commence maintenant.
            </p>
            <HeroButton size="lg" className="animate-glow">
              🏆 Commencer Ma Transformation
            </HeroButton>
          </div>
        </div>
      </div>
    </section>
  );
};