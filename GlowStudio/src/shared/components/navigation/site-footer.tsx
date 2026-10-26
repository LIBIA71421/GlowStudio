import { siteConfig } from "@/shared/config/site";

export function SiteFooter() {
  return (
    <>
      <footer className="site-footer" id="contacto">
        <div className="container">
          <div className="footer-main row gy-4 align-items-center">
            <div className="col-lg-5">
              <a className="navbar-brand brand-lockup footer-brand" href="#inicio">
                <span className="brand-mark" aria-hidden="true">
                  <i className="bi bi-stars" />
                </span>
                <span>
                  Glow<span className="brand-light">Studio</span>
                  <small>SOFT BEAUTY</small>
                </span>
              </a>
              <p className="footer-tagline">
                Un poquito de magia, mucho amor y uñas que se sienten como tú.
              </p>
            </div>
            <div className="col-lg-4">
              <span className="footer-label">Sigue el brillo</span>
              <div className="social-links">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram de GlowStudio"
                >
                  <i className="bi bi-instagram" />
                </a>
                <a
                  href={siteConfig.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok de GlowStudio"
                >
                  <i className="bi bi-tiktok" />
                </a>
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp de GlowStudio"
                >
                  <i className="bi bi-whatsapp" />
                </a>
              </div>
            </div>
            <div className="col-lg-3 text-lg-end">
              <a
                href={siteConfig.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-book"
              >
                Hablemos de tu cita <i className="bi bi-arrow-up-right" />
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} GlowStudio. Todos los derechos
              reservados.
            </span>
            <span>
              Hecho con amor <i className="bi bi-heart-fill" /> Soft Beauty ✨
            </span>
          </div>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={siteConfig.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a GlowStudio por WhatsApp"
      >
        <i className="bi bi-whatsapp" />
        <span>¿Hablamos?</span>
      </a>
    </>
  );
}
