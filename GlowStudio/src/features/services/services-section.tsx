const services = [
  {
    name: "Pintado en gel",
    description: "Color impecable y brillo bonito para todos tus días.",
    tag: "El clásico favorito",
    price: 60,
    icon: "bi-brush",
    color: "pink",
  },
  {
    name: "Pedicura",
    description: "Un respiro para tus pies y un acabado suave y bonito.",
    tag: "Un ratito de mimo",
    price: 70,
    icon: "bi-flower1",
    color: "lilac",
  },
  {
    name: "Acrílicas esculpidas",
    description: "Tu largo y forma favoritos, creados desde cero.",
    tag: "Diseño a tu medida",
    price: 150,
    icon: "bi-gem",
    color: "mint",
  },
  {
    name: "Acrílicas con tips",
    description: "Una base perfecta para darle vida a tu inspiración.",
    tag: "Un extra de longitud",
    price: 120,
    icon: "bi-stars",
    color: "lilac",
  },
  {
    name: "Poly gel",
    description: "Un acabado natural con la forma que más te encanta.",
    tag: "Ligero y resistente",
    price: 130,
    icon: "bi-heart",
    color: "pink",
  },
  {
    name: "Lifting de pestañas",
    description: "Realza tu mirada con una curva natural y delicada.",
    tag: "Mirada despierta",
    price: 50,
    icon: "bi-eye",
    color: "mint",
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding services-section" id="servicios">
      <div className="container">
        <div className="section-heading text-center" data-aos="fade-up">
          <span className="eyebrow">Un menú hecho para ti</span>
          <h2>
            Pequeños lujos,
            <br />
            <em>grandes momentos.</em>
          </h2>
          <p>Elige tu favorito y nosotras ponemos toda la magia.</p>
        </div>
        <div className="row g-4 service-grid">
          {services.map((service, index) => (
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay={String((index % 3) * 75)}
              key={service.name}
            >
              <article className="service-card">
                <span className={`service-icon icon-${service.color}`}>
                  <i className={`bi ${service.icon}`} />
                </span>
                <span className="service-tag">{service.tag}</span>
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <div className="service-bottom">
                  <span>Desde</span>
                  <strong>Bs {service.price}</strong>
                </div>
              </article>
            </div>
          ))}
        </div>
        <p className="service-footnote">
          <i className="bi bi-stars" /> Todos los largos y decoraciones
          incluidos en los servicios de uñas.
        </p>
      </div>
    </section>
  );
}
