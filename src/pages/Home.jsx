import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Interiors designed around how you actually live</h1>
        <p>Luma Interiors plans homes and small offices with simple layouts, honest materials, and good light.</p>
        <Link to="/contact" className="btn">Start a project</Link>
        <Link to="/services" className="btn btn-outline">View services</Link>
      </section>

      <section>
        <div className="container welcome">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=500&q=80"
            alt="A bright living room with a linen sofa"
          />
          <div className="welcome-text">
            <h2>Welcome to Luma Interiors</h2>
            <p>We're a small design studio that works closely with a handful of clients at a time. From the first walkthrough to the final piece of furniture, you work with the same designer throughout — so nothing gets lost along the way.</p>
          </div>
        </div>
      </section>

      <section className="bg-alt">
        <div className="container">
          <h2 className="section-title">Why work with us</h2>
          <p className="section-subtitle">A few things every client can expect from a Luma project.</p>
          <div className="grid">
            <div className="card">
              <div className="icon">◆</div>
              <h3>Thoughtful space planning</h3>
              <p>Layouts are based on how you move through a room, not just how it looks in a photo.</p>
            </div>
            <div className="card">
              <div className="icon">◆</div>
              <h3>Trusted material sourcing</h3>
              <p>A supplier list built over years of small projects, so every material is one we'd use ourselves.</p>
            </div>
            <div className="card">
              <div className="icon">◆</div>
              <h3>One point of contact</h3>
              <p>You speak to the same designer from the first sketch to the final walkthrough.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
