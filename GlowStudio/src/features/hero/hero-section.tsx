import Image from "next/image";
import { assetPath } from "@/shared/config/site";

export function HeroSection() {
  return (
    <section className="hero-section" id="inicio">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="container position-relative">
        <div className="row align-items-center gy-5">
          <div className="col-lg-6 hero-copy" data-aos="fade-up">
            <span className="eyebrow">
              <i className="bi bi-stars" /> Un espacio para sentirte tú
            </span>
            <h1>
              Tu belleza,
              <br />
              en su versión <em>más glow.</em>
            </h1>
            <p className="hero-description">
              Uñitas hechas con amor, detalles que cuentan tu historia y un
              ratito solo para ti. Bienvenida a tu nuevo lugar feliz.
            </p>
            <div className="d-flex flex-wrap gap-3 align-items-center">
              <a className="btn btn-primary-soft btn-lg" href="#reservar">
                Quiero mi cita <i className="bi bi-arrow-right" />
              </a>
              <a className="text-link" href="#servicios">
                Descubre el menú <i className="bi bi-arrow-down-right" />
              </a>
            </div>
            <div className="hero-note">
              <span className="note-sparkle">✳</span>
              <span>
                Soft beauty <b>·</b> buena energía <b>·</b> mucho amor
              </span>
            </div>
          </div>
          <div className="col-lg-6" data-aos="zoom-in" data-aos-delay="100">
            <div className="hero-visual">
              <div className="hero-image-wrap">
                <Image
                  src={assetPath(
                    "/assets/images/WhatsApp Image 2026-10-26 at 12.57.41 AM.jpeg",
                  )}
                  alt="Diseño de uñas lila con detalles delicados hecho en GlowStudio"
                  fill
                  priority
                  sizes="(max-width: 991px) 90vw, 45vw"
                />
              </div>
              <div className="floating-note floating-note-top">
                <span>✧</span> tu momento de brillar
              </div>
              <div className="floating-note floating-note-bottom">
                <span className="note-dot" /> Manicure con amor
              </div>
              <span className="hero-sticker" aria-hidden="true">
                ♡
              </span>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#servicios">
          <span /> Desliza para descubrir
        </a>
      </div>
    </section>
  );
}
