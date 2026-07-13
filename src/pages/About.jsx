function About() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="about-block">
            <div className="about-text">
              <h1>About Luma Interiors</h1>
              <p>Luma Interiors started in 2016 with one designer taking on a handful of home projects directly. Today we're a team of six, but we still take on a small number of projects at a time, so every client gets real attention from start to finish.</p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
              alt="Design studio table with material samples"
            />
          </div>
        </div>
      </section>

      <section className="bg-alt">
        <div className="container mv-grid">
          <div className="mv-card mission">
            <h3>Mission</h3>
            <h2>Design rooms people actually want to spend time in.</h2>
            <p>We measure a finished project by how it's used months later, not just how it looks on handover day.</p>
          </div>
          <div className="mv-card vision">
            <h3>Vision</h3>
            <h2 style={{ color: '#2c2620' }}>Stay small enough that every project still gets our full attention.</h2>
            <p>We'd rather grow slowly and keep the quality consistent than take on more than we can do well.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Why choose us</h2>
          <p className="section-subtitle">Three things clients mention most often.</p>
          <div className="grid">
            <div className="card">
              <h3>We visit in person</h3>
              <p>Renderings help, but we always walk the space with you before finalizing a plan.</p>
            </div>
            <div className="card">
              <h3>We're honest about fit</h3>
              <p>If a trend doesn't suit your home or budget, we'll say so before you spend on it.</p>
            </div>
            <div className="card">
              <h3>We follow up</h3>
              <p>Every project includes a check-in a few months after completion to see how it's holding up.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
