import { Link } from 'react-router-dom'

const services = [
  {
    name: 'Full home design',
    description: 'End-to-end planning for a whole home — layout, materials, furniture, and styling.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Single room refresh',
    description: "A focused redesign for one room that's stopped working for you.",
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Kitchen & bath planning',
    description: 'Layout, cabinetry, and fixture selection for the two rooms that cost the most to get wrong.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=500&q=80',
  },
  {
    name: 'Lighting design',
    description: 'Layered lighting plans so each room works well at every hour of the day.',
    image: 'https://images.unsplash.com/photo-1524634126442-357e0eac3c14?auto=format&fit=crop&w=500&q=80',
  },
]

function Services() {
  return (
    <div>
      <section>
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">Every project starts with a walkthrough, so we can recommend the right service for your space.</p>
          <div className="grid">
            {services.map((service) => (
              <div className="card" key={service.name}>
                <img
                  src={service.image}
                  alt={service.name}
                  style={{
                    width: '100%',
                    height: '160px',
                    objectFit: 'cover',
                    borderRadius: '8px',
                    marginBottom: '16px',
                  }}
                />
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-alt" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="section-title">Not sure which service you need?</h2>
          <p className="section-subtitle">Tell us about your space and we'll suggest a starting point.</p>
          <Link to="/contact" className="btn">Get in touch</Link>
        </div>
      </section>
    </div>
  )
}

export default Services