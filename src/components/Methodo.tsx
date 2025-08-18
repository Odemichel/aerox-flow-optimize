import * as React from "react";
import { Card } from "./ui/card";
import { HeroButton } from "./ui/hero-button";

/* ----------------------------- Données étapes ----------------------------- */

type Step = {
  title: string;
  description: string;
  details?: string[];      // lignes “En savoir plus”
  icon?: React.ReactNode;  // optionnel si tu veux des pictos plus tard
};
const STEPS: Step[] = [
  {
    title: "Installe une webcam devant ton home trainer (30 sec)",
    description: "",

    details: [
      "Une simple webcam suffit — aucun matériel exotique.",
      "Place-la face à ton home-trainer à ~1,5 m de toi et à hauteur du cintre.",
      "Assure-toi que tu es bien visible en entier sur ton vélo.",
      "Utilise celle de ton ordi, de ton téléphone, en USB ou en Wi-Fi.",
    ],
  },
  {
    title: "Calibre-la en 2 clics seulement (10 sec)",
    description:
      "",
    details: ["Clique sur les deux extrémités du cintre. Ajuste si besoin… et c’est prêt.",
      "Mesure une fois la largeur de ton cintre et la distance caméra-cintre.",
      "Ces réglages resteront enregistrés si ton setup ne change pas.",
    ],
  },
  {
    title: "Connecte ton HT en bluetooth (20 sec)",
    description:
      "",
    details: [
      "La détection se fait en Bluetooth — rapide et sans configuration complexe.",
      "AeroX détecte ton home-trainer et ton cardio.",
      "Choisis tes équipements, la connexion sera ensuite automatique.",
      "Compatible avec Wahoo, Elite, Tacx, Saris, Kickr, Suito, Zwift, etc.",
      "Fonctionne avec Garmin, Polar, Suunto pour la fréquence cardiaque.",
    ],
  },
  {
    title: "Choisis ton mode d’entraînement (15 sec)",
    description: "",
    details: [
      "Plans AeroX, séances perso, simulation de parcours, défis ou CLM : tu décides.",

      "Plans pensés pour progresser en puissance et en tenue de position.",
    ],
  },
];


/* ----------------------------- Composant étape ---------------------------- */

const StepItem: React.FC<{ index: number; step: Step }> = ({ index, step }) => {
  return (
    <li className="relative mb-6 last:mb-0">
      {/* pastille numéro */}
      <span className="absolute -left-8 top-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-semibold ring-1 ring-primary/40">
        {index + 1}
      </span>

      <div className="ml-2 space-y-2">
        <h3 className="text-lg font-semibold text-neutral-100">{step.title}</h3>
        <p className="text-sm text-muted-foreground">{step.description}</p>

        {step.details && step.details.length > 0 && (
          <details className="text-sm text-muted-foreground/90">
            <summary className="cursor-pointer list-none underline underline-offset-4 decoration-white/20 hover:decoration-white/60 text-neutral-300">
              En savoir plus
            </summary>
            <div className="mt-2 space-y-1">
              {step.details.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </details>
        )}
      </div>
    </li>
  );
};

/* -------------------------------- Méthodo -------------------------------- */

export const Methodo: React.FC = () => {
  return (
    <section
      id="methodo"
      className="py-20 sm:py-24 relative overflow-hidden"
      style={{ background: "var(--gradient-surface-inv)" }}
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card
          className="p-6 sm:p-8 border border-primary/50 rounded-2xl shadow-[0_0_10px_hsl(var(--primary)/0.15)] hover:shadow-[0_0_16px_hsl(var(--primary)/0.30)] transition-shadow duration-500"
          style={{ background: "var(--gradient-surface)" }}
        >
          <h2 className="text-2xl sm:text-3xl font-semibold text-white text-center mb-3">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Pensé par des cyclistes pour des cyclistes et triathlètes, <span className="font-semibold text-primary">AeroX</span>
            <span className=" text-neutral-100">
              {" "}
              est prêt en moins de 2 minutes, </span>sans matériel complexe.
          </p>


          {/* Stepper vertical */}
          <ol role="list" className="relative ml-6">
            {/* ligne verticale */}
            <span
              className="absolute left-0 top-0 h-full w-px bg-white/10"
              aria-hidden
            />
            {STEPS.map((step, idx) => (
              <StepItem key={idx} index={idx} step={step} />
            ))}
          </ol>

          {/* mini CTA + anti-friction */}
          <div className="mt-8 flex flex-col items-center gap-2">
            <HeroButton
              size="md"
              className="w-full sm:w-auto"
              data-cta="howitworks-cta"
            >
              Roule avec AeroX dans 2 minutes
            </HeroButton>
            <p className="text-xs text-muted-foreground">
              Pas besoin de capteurs spéciaux, une simple webcam suffit.            </p>
          </div>
          {/* Preuve sociale optimisée */}
          <div className="mt-8">
            <div className="rounded-xl border border-primary/30 bg-black/30 p-4 sm:p-5 backdrop-blur">
              {/* Témoignage */}
              <figure className="flex flex-col gap-3">
                <blockquote className="text-sm sm:text-base text-neutral-200 leading-relaxed">
                  “C'est incroyable qu'un setup aussi simple puisse autant révolutionner l'entrainement sur Home-Trainer. Ca rend accessible l'aéro à tous les amateurs et pros, juste incroyable. ”
                </blockquote>

                {/* Auteur + vérification */}
                <figcaption className="mt-1 flex items-center gap-3">
                  {/* Avatar (optionnel) */}
                  {/* <img src="/assets/olivier.jpg" alt="" className="h-8 w-8 rounded-full object-cover" /> */}
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-neutral-100">Milan Larivière</span>
                    <span className="text-xs text-muted-foreground">Triathlète élite U23 · 2<sup className="text-[0.7em] align-super">ème</sup> Coupe d'Europe 2025 (Tabor)</span>
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" aria-hidden><path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" /></svg>
                      Vérifié
                    </span>
                  </div>
                </figcaption>
              </figure>


            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
