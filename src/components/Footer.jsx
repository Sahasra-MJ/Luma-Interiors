import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <p className="copyright">&copy; 2026 Luma Interiors. All rights reserved.</p>
    </footer>
  )
}

export default Footer
