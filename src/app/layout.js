import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "KD Cranes | EOT Crane Manufacturers & Spare Parts",
  description: "Leading Manufacturer of a wide range of Busbar System, Conductor Bus Bar, Current Collector, etc. Established 2016 in Ludhiana.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        {/* Top Bar (Loadmate Style) */}
        <div className="top-bar">
          <div className="container top-bar-inner">
            <div className="top-bar-contact">
              <span>📧 <a href="mailto:info@kdcranes.com">info@kdcranes.com</a></span>
              <span>📞 <a href="tel:+919876543210">+91 98765 43210</a></span>
            </div>
            <div className="top-bar-social">
              {/* Add social links if needed */}
              <span>Welcome to KD Cranes India</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <header className="header">
          <div className="container header-container">
            <Link href="/" className="logo-link">
              {/* We don't have a specific logo, so text logo or placeholder */}
              <h1 style={{color: 'var(--primary)', fontWeight: 900, margin: 0, fontSize: '2rem'}}>KD CRANES</h1>
            </Link>
            
            <nav className="nav-menu">
              <Link href="/" className="nav-link active">Home</Link>
              <Link href="/" className="nav-link">Products</Link>
              <Link href="/" className="nav-link">Applications</Link>
              <Link href="/" className="nav-link">Spares</Link>
              <Link href="/" className="btn-primary">Get Quote</Link>
            </nav>
          </div>
        </header>

        <main style={{ minHeight: "100vh" }}>
          {children}
        </main>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h3 style={{color: '#fff', fontSize: '1.8rem', fontWeight: 900, marginBottom: '20px'}}>KD CRANES</h3>
                <p style={{marginBottom: "24px", color: '#ccc', lineHeight: 1.6}}>
                  Established as a Sole Proprietorship firm in the year 2016, we "KD Enterprises" are a leading Manufacturer of a wide range of Crane Spare Parts & Accessories.
                </p>
              </div>
              
              <div>
                <h4 className="footer-heading">Quick Links</h4>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/">About Us</Link></li>
                  <li><Link href="/">Products</Link></li>
                  <li><Link href="/">Contact Us</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="footer-heading">Our Products</h4>
                <ul className="footer-links">
                  <li><Link href="/">EOT Crane Spares</Link></li>
                  <li><Link href="/">Hydraulic Thruster Brake</Link></li>
                  <li><Link href="/">DSL Busbar System</Link></li>
                  <li><Link href="/">Current Collector</Link></li>
                  <li><Link href="/">Wireless Radio Remote</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="footer-heading">Contact Us</h4>
                <ul className="footer-links" style={{color: '#ccc', lineHeight: 1.6}}>
                  <li>📍 Ludhiana - Punjab, India.</li>
                  <li>📞 +91 98765 43210</li>
                  <li>📧 info@kdcranes.com</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2026 KD Enterprises. All rights reserved. Made in India 🇮🇳</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
