"use client";

import { useEffect, useState, type FormEvent } from "react";
import { siteConfig } from "@/shared/config/site";

function getLocalDate(): string {
  const now = new Date();
  return new Date(now.getTime() - now.getTimezoneOffset() * 60_000)
    .toISOString()
    .slice(0, 10);
}

export function BookingSection() {
  const [requestUrl, setRequestUrl] = useState("");
  const [clientName, setClientName] = useState("");
  const [minimumDate, setMinimumDate] = useState("");

  useEffect(() => {
    setMinimumDate(getLocalDate());
  }, []);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const date = String(formData.get("date") || "");
    const service = String(formData.get("service") || "");
    const note = String(formData.get("note") || "").trim();

    const message = [
      "Hola, GlowStudio. Quisiera solicitar una cita.",
      `Nombre: ${name}`,
      `Mi WhatsApp: ${phone}`,
      `Fecha deseada: ${date}`,
      `Servicio: ${service}`,
      note ? `Idea o detalle: ${note}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setClientName(name);
    setRequestUrl(
      `https://wa.me/${siteConfig.whatsappPhone}?text=${encodeURIComponent(message)}`,
    );
  }

  return (
    <section className="booking-section section-padding" id="reservar">
      <div className="container">
        <div className="row g-4 align-items-center">
          <div className="col-lg-5" data-aos="fade-up">
            <span className="eyebrow">
              La parte más bonita empieza aquí
            </span>
            <h2>
              Tu próxima cita
              <br />
              te está <em>esperando.</em>
            </h2>
            <p>
              Cuéntanos qué tienes en mente y nos pondremos de acuerdo con tu
              día ideal.
            </p>
            <div className="booking-perks">
              <span>
                <i className="bi bi-heart" /> Atención con cariño
              </span>
              <span>
                <i className="bi bi-stars" /> Diseños a tu medida
              </span>
              <span>
                <i className="bi bi-chat-heart" /> Respuesta personalizada
              </span>
            </div>
            <div className="booking-doodle" aria-hidden="true">
              ✳ <span>un ratito</span> para ti ♡
            </div>
          </div>
          <div className="col-lg-7" data-aos="fade-up" data-aos-delay="100">
            <form
              className="booking-form"
              id="bookingForm"
              onSubmit={handleSubmit}
            >
              <div className="form-heading">
                <span>♡</span>
                <div>
                  <h3>Hagamos espacio para ti</h3>
                  <p>Déjanos tus datos y cuéntanos qué te gustaría.</p>
                </div>
              </div>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="clientName">
                    Tu nombre
                  </label>
                  <input
                    className="form-control"
                    id="clientName"
                    name="name"
                    type="text"
                    placeholder="¿Cómo te llamas?"
                    autoComplete="name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="clientPhone">
                    Teléfono / WhatsApp
                  </label>
                  <input
                    className="form-control"
                    id="clientPhone"
                    name="phone"
                    type="tel"
                    placeholder="Tu número de contacto"
                    autoComplete="tel"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="appointmentDate">
                    Fecha deseada
                  </label>
                  <input
                    className="form-control"
                    id="appointmentDate"
                    name="date"
                    type="date"
                    min={minimumDate}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="serviceChoice">
                    ¿Qué te gustaría?
                  </label>
                  <select
                    className="form-select"
                    id="serviceChoice"
                    name="service"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Elige un servicio
                    </option>
                    <option>Pintado en gel</option>
                    <option>Pedicura</option>
                    <option>Acrílicas esculpidas</option>
                    <option>Acrílicas con tips</option>
                    <option>Poly gel</option>
                    <option>Lifting de pestañas</option>
                  </select>
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="bookingNote">
                    Una idea, un color, un detalle{" "}
                    <span className="optional-label">(opcional)</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="bookingNote"
                    name="note"
                    rows={3}
                    placeholder="Cuéntanos qué tienes en mente..."
                  />
                </div>
                <div className="col-12">
                  <button
                    className="btn btn-primary-soft btn-lg w-100"
                    type="submit"
                  >
                    Enviar solicitud <i className="bi bi-arrow-right" />
                  </button>
                  <p className="form-privacy">
                    <i className="bi bi-lock" /> No almacenamos tus datos. La
                    solicitud se envía por WhatsApp solo cuando lo confirmes.
                  </p>
                </div>
              </div>
              {requestUrl && (
                <>
                  <div
                    className="alert alert-success booking-success"
                    role="status"
                    aria-live="polite"
                    tabIndex={-1}
                  >
                    ¡Gracias, {clientName}! Tu solicitud está lista. Pulsa el
                    botón de abajo para enviarla por WhatsApp y coordinar tu
                    cita.
                  </div>
                  <a
                    className="btn btn-whatsapp-submit"
                    id="bookingWhatsappLink"
                    href={requestUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enviar solicitud por WhatsApp{" "}
                    <i className="bi bi-whatsapp" />
                  </a>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
