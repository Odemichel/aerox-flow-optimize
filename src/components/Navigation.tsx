import { HeroButton } from "./ui/hero-button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-aerox-dark font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold bg-gradient-hero bg-clip-text text-transparent">
              AeroX
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Fonctionnalités
            </a>
            <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">
              Témoignages
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Tarifs
            </a>
            <a href="#support" className="text-muted-foreground hover:text-primary transition-colors">
              Support
            </a>
          </div>
          
          {/* CTA Button */}
          <HeroButton size="sm">
            Télécharger
          </HeroButton>
        </div>
      </div>
    </nav>
  );
};