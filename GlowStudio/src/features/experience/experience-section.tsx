import Image from "next/image";
import { assetPath } from "@/shared/config/site";

export function ExperienceSection() {
  return (
    <section className="experience-section section-padding" id="experiencia">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up">
          <span className="eyebrow">Tu ratito feliz</span>
          <h2>
            Más que una cita,
            <br />
            <em>un momento para ti.</em>
          </h2>
          <p>
            Desde el primer color hasta el último destellito, cuidamos cada
            detalle.
          </p>
        </div>
        <div className="row g-4 align-items-stretch">
          <div className="col-lg-7" data-aos="fade-up">
            <article className="video-card">
              <video
                controls
                playsInline
                preload="metadata"
                poster={assetPath(
                  "/assets/images/WhatsApp Image 2026-10-26 at 12.57.41 AM.jpeg",
                )}
                aria-label="Un vistazo al trabajo de uñas en GlowStudio"
              >
                <source
                  src={assetPath(
                    "/assets/video/WhatsApp Video 2026-10-26 at 12.57.43 AM.mp4",
                  )}
                  type="video/mp4"
                />
                Tu navegador no puede reproducir este video.
              </video>
              <div className="video-caption">
                <span className="video-play">
                  <i className="bi bi-play-fill" />
                </span>
                <span>
                  <small>UN VISTAZO A NUESTRO MUNDO</small>
                  <strong>El proceso de tus acrílicas</strong>
                </span>
                <i className="bi bi-stars ms-auto" />
              </div>
            </article>
          </div>
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
            <div className="experience-aside">
              <div className="aside-image">
                <Image
                  src={assetPath(
                    "/assets/images/WhatsApp Image 2026-10-26 at 12.57.48 AM (1).jpeg",
                  )}
                  alt="Manicure negro mate para una inspiración diferente"
                  fill
                  sizes="(max-width: 991px) 100vw, 40vw"
                />
                <span className="aside-sticker">
                  hecho con
                  <br />
                  mucho amor <i className="bi bi-heart-fill" />
                </span>
              </div>
              <div className="aside-copy">
                <span className="eyebrow">Tu espacio, tus reglas</span>
                <h3>
                  Ven como eres.
                  <br />
                  Sal brillando.
                </h3>
                <p>
                  Una pausa rica, tu playlist favorita y un diseño que se siente
                  muy tú.
                </p>
                <a href="#reservar" className="text-link">
                  Reserva tu ratito <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
