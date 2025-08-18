// Welcomevideo.tsx
import { useEffect, useRef } from "react";

export const Welcomevideo = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (!videoRef.current) return;

    // On envoie la hauteur au document via une CSS var (global), mise à jour dynamiquement
    const update = () => {
      const h = videoRef.current?.getBoundingClientRect().height ?? 0;
      document.documentElement.style.setProperty("--welcome-video-h", `${h}px`);
    };

    update();

    // Réagit aux resize/orientation + aux changements de layout de la vidéo
    const ro = new ResizeObserver(update);
    ro.observe(videoRef.current);

    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);

    // Quand les métadonnées sont prêtes, la taille peut changer
    videoRef.current.addEventListener("loadedmetadata", update);
    videoRef.current.addEventListener("loadeddata", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
      videoRef.current?.removeEventListener("loadedmetadata", update);
      videoRef.current?.removeEventListener("loadeddata", update);
    };
  }, []);

  return (
    <section className="h-screen fixed top-0 left-0 w-full z-0 overflow-hidden pointer-events-none pt-[64px]">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="w-full object-cover aspect-video max-h-[100vh]"
      >
        <source src="/assets/hero_aerox.mp4" type="video/mp4" />
      </video>
    </section>
  );
};
