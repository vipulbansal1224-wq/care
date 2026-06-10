import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'KD Cranes | Over Head Cranes & Spare Parts',
  description: 'Leading Manufacturer of a wide range of Busbar System, Conductor Bus Bar, Current Collector, etc. Established 2016 in Ludhiana.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <header className="header">
          <div className="container header-container">
            <Link href="/" className="logo-link">
              <img src="/images/logo.jpg" alt="KD Cranes" style={{ height: '40px', width: 'auto' }} />
            </Link>
            
            <nav className="nav-menu">
              <Link href="/" className="nav-link active">Home</Link>
              
              <div className="dropdown">
                <button className="nav-link dropbtn">Products ▼</button>
                <div className="dropdown-content glass-card">
                  <Link href="/product/circlip-plier">Pliers</Link>
                  <Link href="/product/hydraulic-thruster-brake">Hydraulic Brake</Link>
                  <Link href="/product/dsl-busbar-system">Busbar System</Link>
                  <Link href="/">All Products</Link>
                </div>
              </div>
              
              <Link href="/" className="nav-link">Download</Link>
              <Link href="/" className="contact-btn">Get In Touch</Link>
            </nav>
            
            <button className="mobile-menu-btn" aria-label="Toggle mobile menu">☰</button>
          </div>
        </header>

        <main style={{ minHeight: '100vh', paddingTop: '80px' }}>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <Link href="/" className="logo-link" style={{ marginBottom: '20px', display: 'inline-flex' }}>
                  <img src="/images/logo.jpg" alt="KD Cranes" style={{ height: '50px', width: 'auto', backgroundColor: '#fff', padding: '4px', borderRadius: '4px' }} />
                </Link>
                <p style={{ marginBottom: '24px' }}>
                  Established as a Sole Proprietorship firm in the year 2016, we "KD Enterprises" are a leading Manufacturer of a wide range of Crane Spare Parts & Accessories.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <span className="glass-card" style={{ padding: '6px 12px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>EST. 2016</span>
                  <span className="glass-card" style={{ padding: '6px 12px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--primary)' }}>PREMIUM QUALITY</span>
                </div>
              </div>
              
              <div>
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/">Products</Link></li>
                  <li><Link href="/">Download Brochure</Link></li>
                  <li><Link href="/">Contact Us</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="footer-heading">Product Types</h4>
                <ul className="footer-links">
                  <li><Link href="/">EOT Crane Manufacturer</Link></li>
                  <li><Link href="/">Hydraulic Thruster Brake</Link></li>
                  <li><Link href="/">DSL Busbar System</Link></li>
                  <li><Link href="/">Current Collector</Link></li>
                  <li><Link href="/">Wireless Radio Remote</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="footer-heading">Corporate Office</h4>
                <ul className="footer-contact">
                  <li>
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>📍</span>
                    <span>Ludhiana - Punjab, India.</span>
                  </li>
                  <li>
                    <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>📞</span>
                    <span>+91 98765 43210</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="footer-bottom">
              <p>© 2026 KD Enterprises. All rights reserved. Made in India 🇮🇳</p>
              <div style={{ display: 'flex', gap: '24px' }}>
                <Link href="/" style={{ color: 'var(--text-muted)' }}>Privacy Policy</Link>
                <Link href="/" style={{ color: 'var(--text-muted)' }}>Terms & Conditions</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
