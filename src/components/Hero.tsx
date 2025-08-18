import videoAeroX from "../assets/entrainement-aerox.mp4";
import { HeroButton } from "./ui/hero-button";

export const Hero = () => {
  return (
    <section
      aria-labelledby="herotitle"
      className="relative z-10 py-8 px-2 h-full"
      style={{ background: "var(--gradient-surface)" }}
    >
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 backdrop-blur-xl h-full flex items-center">
        {/* <Card
          className="p-6 sm:p-8 lg:p-12 border border-primary/60 rounded-2xl shadow-[0_0_10px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)] transition-shadow duration-500"
          style={{ background: "var(--gradient-surface)" }}
        > */}
          <div className="grid gap-10 items-center">
            {/* Titre */}
            <div className="space-y-3 text-center">
              <h1 id="herotitle" className="text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight  font-light">
                Libère <span className="font-semibold text-primary">ta vitesse</span>  <span className=" italic"> avec AeroX</span>
              </h1>
              <h2 className="text-sm sm:text-base md:text-lg text-neutral-200 font-light">
                L’unique application qui mesure ton aérodynamisme en temps réel.
              </h2>
            </div>

            {/* === Bloc responsive : Vidéo <-> Texte === */}
            <div className="grid gap-8 items-center md:grid-cols-[55%_45%] lg:grid-cols-[65%_35%]">
              {/* Vidéo : centrée en mobile, taille contrôlée */}
              

              {/* Texte “+3 km/h / -40W” + piliers */}
              <div className="space-y-5">
                <p className="text-lg sm:text-xl md:text-2xl font-light text-neutral-200">
                  Gagne jusqu’à <span className="font-semibold text-neutral-100">+3&nbsp;km/h</span> et économise <span className="font-semibold text-neutral-100">40&nbsp;W</span> en intègrant l'aérodynamique dans ton plan d’entraînement.<br />
                  <span className="text-sm sm:text-base text-neutral-100 italic">
                  Sans dispositif complexe ni coûteux.
                </span>
                </p>

                <div className="space-y-1">
                  <div className="text-base sm:text-xl font-semibold text-neutral-200">
                    Mesure-le <span className="font-normal text-muted-foreground">en temps réel.</span>
                  </div>
                  <div className="text-base sm:text-xl font-semibold text-neutral-200 md:translate-x-4">
                    Ressens-le <span className="font-normal text-muted-foreground">sur ta vitesse.</span>
                  </div>
                  <div className="text-base sm:text-xl font-semibold text-neutral-200 md:translate-x-8">
                    Maîtrise-le <span className="font-normal text-muted-foreground">à chaque sortie, sans y penser.</span>
                  </div>
                </div>

                {/* Preuve sociale */}
            <div className="rounded-xl border border-primary/30 bg-black/30 p-4 sm:p-5 backdrop-blur">
              <figure className="flex flex-col gap-3">
                <blockquote className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                  “AeroX m’a fait passer de <span className="font-semibold">36</span> à{" "}
                  <span className="font-semibold">39&nbsp;km/h</span> sur mon premier tri de l’année.
                  Même vélo, même puissance — juste une meilleure maîtrise de ma position.”
                </blockquote>
                <figcaption className="mt-1 flex items-center gap-3">
                  <span className="text-sm font-medium text-neutral-100">Olivier</span>
                  <span className="text-xs text-muted-foreground">Triathlète amateur · Fondateur d’AeroX</span>
                  <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                      <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                    </svg>
                    Vérifié
                  </span>
                </figcaption>
              </figure>
            </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <video
                  src={videoAeroX}
                  className="w-full max-w-full p-2 md:p-0 rounded-xl shadow-lg "
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              </div>
            </div>
            {/* === Fin bloc responsive === */}

            {/* CTA */}
            <div className="flex flex-col items-center">
              <HeroButton
                size="md"
                className="w-full sm:w-auto"
                aria-label="Tester AeroX maintenant"
                data-cta="hero-primary"
              >
                Libère ta vitesse, maintenant
              </HeroButton>
              <p className="mt-3 text-xs text-muted-foreground text-center">Une simple webcam suffit.</p>
            </div>

            
          </div>
        {/* </Card> */}
      </div>
    </section>
  );
};
