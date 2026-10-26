"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/shared/config/site";

const filters = [
  { label: "Todo", value: "all", icon: "" },
  { label: "Soft & coquette", value: "soft", icon: "bi-heart" },
  { label: "Glow", value: "glow", icon: "bi-stars" },
  { label: "Atrevidos", value: "bold", icon: "bi-eye" },
];

const designs = [
  {
    title: "Dulce fantasía",
    category: "soft",
    image: "WhatsApp Image 2026-10-26 at 12.57.40 AM.jpeg",
    alt: "Uñas rosa coquette con detalles de lazo",
  },
  {
    title: "Encaje romántico",
    category: "soft",
    image: "WhatsApp Image 2026-10-26 at 12.57.41 AM (1).jpeg",
    alt: "Uñas almendradas con encaje negro y rosa",
  },
  {
    title: "Efecto espejo",
    category: "glow",
    image: "WhatsApp Image 2026-10-26 at 12.57.46 AM.jpeg",
    alt: "Uñas efecto espejo cromado en plata y dorado",
  },
  {
    title: "Noche de brillo",
    category: "bold",
    image: "WhatsApp Image 2026-10-26 at 12.57.43 AM.jpeg",
    alt: "Uñas negras con destellos rojo rubí",
  },
  {
    title: "Lace love",
    category: "soft",
    image: "WhatsApp Image 2026-10-26 at 12.57.49 AM (1).jpeg",
    alt: "Diseño de uñas rosa con encaje negro delicado",
  },
  {
    title: "Glitter de hada",
    category: "glow",
    image: "WhatsApp Image 2026-10-26 at 12.57.49 AM (2).jpeg",
    alt: "Uñas blancas con glitter y reflejos iridiscentes",
  },
  {
    title: "Dark romance",
    category: "bold",
    image: "WhatsApp Image 2026-10-26 at 12.57.49 AM.jpeg",
    alt: "Manicure negra y blanca con estrellas y destellos",
  },
  {
    title: "Brillito de hada",
    category: "soft",
    image: "WhatsApp Image 2026-10-26 at 12.57.58 AM (1).jpeg",
    alt: "Manicure blanca brillante con detalles iridiscentes",
  },
];

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedDesign, setSelectedDesign] =
    useState<(typeof designs)[number] | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedDesign) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedDesign(null);
    };

    document.addEventListener("keydown", closeOnEscape);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.body.style.overflow = previousOverflow;
      triggerButtonRef.current?.focus();
    };
  }, [selectedDesign]);

  return (
    <section className="gallery-section section-padding" id="galeria">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up">
          <span className="eyebrow">Un poquito de inspiración</span>
          <h2>
            Hecho a mano,
            <br />
            <em>hecho para brillar.</em>
          </h2>
          <p>Cada set tiene su propia historia. ¿Cuál será la tuya?</p>
        </div>
        <div
          className="gallery-filters d-flex flex-wrap justify-content-center gap-2"
          role="group"
          aria-label="Filtrar diseños de la galería"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;

            return (
              <button
                className={`filter-btn${isActive ? " active" : ""}`}
                type="button"
                data-filter={filter.value}
                aria-pressed={isActive}
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
              >
                {filter.icon && <i className={`bi ${filter.icon}`} />}{" "}
                {filter.label}
              </button>
            );
          })}
        </div>
        <div className="row g-3 gallery-grid">
          {designs
            .filter(
              (design) =>
                activeFilter === "all" || design.category === activeFilter,
            )
            .map((design) => (
              <div
                className="col-6 col-lg-3 gallery-item"
                data-aos="zoom-in"
                data-category={design.category}
                key={design.image}
              >
                <button
                  className="gallery-card"
                  type="button"
                  aria-label={`Ampliar diseño: ${design.title}`}
                  onClick={(event) => {
                    triggerButtonRef.current = event.currentTarget;
                    setSelectedDesign(design);
                  }}
                >
                  <Image
                    src={assetPath(`/assets/images/${design.image}`)}
                    alt={design.alt}
                    fill
                    sizes="(max-width: 575px) 50vw, (max-width: 991px) 33vw, 25vw"
                  />
                  <span className="gallery-caption">
                    {design.title} <i className="bi bi-arrows-angle-expand" />
                  </span>
                </button>
              </div>
            ))}
        </div>
      </div>
      {selectedDesign && (
        <div
          className="lightbox-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedDesign(null);
          }}
        >
          <div
            className="lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightboxTitle"
            onKeyDown={(event) => {
              if (event.key === "Tab") {
                event.preventDefault();
                closeButtonRef.current?.focus();
              }
            }}
          >
            <button
              ref={closeButtonRef}
              className="lightbox-close"
              type="button"
              aria-label="Cerrar imagen"
              onClick={() => setSelectedDesign(null)}
            >
              <i className="bi bi-x-lg" />
            </button>
            <Image
              className="lightbox-image"
              id="lightboxImage"
              src={assetPath(`/assets/images/${selectedDesign.image}`)}
              alt={selectedDesign.alt}
              width={768}
              height={1024}
              sizes="(max-width: 767px) 95vw, 900px"
            />
            <p className="lightbox-title" id="lightboxTitle">
              {selectedDesign.title}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
