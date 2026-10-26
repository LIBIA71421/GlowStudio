import Image from "next/image";
import { assetPath } from "@/shared/config/site";

const vipServices = [
  { name: "Acrílicas esculpidas", price: 250 },
  { name: "Acrílicas con tips", price: 210 },
  { name: "Poly gel", price: 180 },
];

export function VipSection() {
  return (
    <section className="vip-section section-padding">
      <div className="container">
        <div className="vip-card" data-aos="zoom-in">
          <div className="vip-content">
            <span className="eyebrow">
              <i className="bi bi-stars" /> Tu glow, sin límites
            </span>
            <h2>
              El toque <em>VIP.</em>
            </h2>
            <p>
              Tu diseño completo, con el largo y los detallitos que sueñas.
              Aquí el brillo va incluido.
            </p>
            <ul className="vip-list">
              {vipServices.map((service) => (
                <li key={service.name}>
                  <i className="bi bi-check2-circle" /> {service.name}
                  <strong>Bs {service.price}</strong>
                </li>
              ))}
            </ul>
            <p className="vip-includes">
              <i className="bi bi-stars" /> Todos los largos y decoraciones
              incluidos
            </p>
            <a href="#reservar" className="btn btn-light-soft btn-lg">
              Quiero mi momento VIP <i className="bi bi-arrow-right" />
            </a>
          </div>
          <div className="vip-art">
            <Image
              src={assetPath(
                "/assets/images/WhatsApp Image 2026-10-26 at 12.57.58 AM (3).jpeg",
              )}
              alt="GlowStudio VIP: todos los largos incluidos y decoraciones especiales"
              fill
              sizes="(max-width: 767px) 76vw, 310px"
            />
            <p className="vip-image-caption">
              Precios expresados en Bs · Decoraciones incluidas
            </p>
          </div>
          <span className="vip-sparkle vip-sparkle-one" aria-hidden="true">
            ✦
          </span>
          <span className="vip-sparkle vip-sparkle-two" aria-hidden="true">
            ✧
          </span>
        </div>
      </div>
    </section>
  );
}
