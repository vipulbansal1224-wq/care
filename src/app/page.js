import Link from "next/link";
import HeroSlider from "../components/HeroSlider";

export default function Home() {
  return (
    <>
      <HeroSlider />      {/* About Us Split Section */}
      <section className="section-padding" style={{background: '#f9f9f9'}}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <div className="section-title" style={{textAlign: 'left', marginBottom: '30px'}}>
                <h2 style={{fontSize: '2rem'}}>Crafting Trust in Every Turn</h2>
                <p>Est. 2016 in Ludhiana</p>
              </div>
              <p style={{ fontSize: "1.1rem", marginBottom: "20px", lineHeight: 1.6 }}>
                Established as a Sole Proprietorship firm in the year 2016, we <strong>KD Enterprises</strong> are a leading Manufacturer of a wide range of Crane Spare Parts & Accessories. Situated in Ludhiana (Punjab, India), we have constructed a wide and well functional infrastructural unit that plays an important role in the growth of our company.
              </p>
              <p style={{ marginBottom: "30px", lineHeight: 1.6 }}>
                We offer these products at reasonable rates and deliver these within the promised time-frame. Under the headship of <strong>“Mr. Pankesh Thakur”</strong>, we have gained a huge clientele across the nation.
              </p>
              <Link href="/contact" className="btn-primary">Get in Touch</Link>
            </div>
            <div>
              <div style={{width: '100%', height: '400px', background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden'}}>
                <img src="/wp-content/uploads/2023/02/product-jpeg-250x250-2.webp" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Factory" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories (Instead of 24 products) */}
      <section id="categories" className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Product Categories</h2>
            <p>Explore our premium range of industrial solutions</p>
          </div>

          <div className="products-grid">
            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/wp-content/uploads/2023/02/eot-crane-spares-parts-250x250-1.webp" alt="EOT Crane Spares" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">EOT Crane Spares</h3>
              </div>
              <Link href="/products" className="product-btn">View Category</Link>
            </div>

            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/wp-content/uploads/2023/02/dsl-busbar-systems-250x250-1.webp" alt="DSL Busbar Systems" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">DSL Busbar Systems</h3>
              </div>
              <Link href="/products" className="product-btn">View Category</Link>
            </div>

            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/wp-content/uploads/2023/02/wireless-cable-remote-250x250-1.webp" alt="Wireless Radio Remote" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Wireless Radio Remote</h3>
              </div>
              <Link href="/products" className="product-btn">View Category</Link>
            </div>

            <div className="product-card">
              <div className="product-img-wrapper">
                <img src="/wp-content/uploads/2023/02/eot-cranes-current-collector-250x250-1.webp" alt="Current Collectors" className="product-img" />
              </div>
              <div className="product-info">
                <h3 className="product-title">Current Collectors</h3>
              </div>
              <Link href="/products" className="product-btn">View Category</Link>
            </div>
          </div>
          
          <div style={{ textAlign: "center", marginTop: "40px" }}>
             <Link href="/products" className="btn-primary" style={{ padding: "15px 40px", fontSize: "1.1rem" }}>View All Products</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding" style={{background: 'var(--secondary)', color: 'white'}}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="section-title">
            <h2 style={{color: 'white'}}>Why Choose Us</h2>
            <p style={{color: '#aaa'}}>Trusted Across the Nation</p>
          </div>
          
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px", marginTop: '40px' }}>
            <div>
              <div style={{ fontSize: "3rem", marginBottom: "20px", color: 'var(--primary)' }}>🏭</div>
              <h3 style={{ marginBottom: "12px", fontSize: '1.2rem' }}>Manufacturing Sector</h3>
              <p style={{ fontSize: "0.9rem", color: '#ccc' }}>Supplying robust components for heavy industrial manufacturing.</p>
            </div>
            <div>
              <div style={{ fontSize: "3rem", marginBottom: "20px", color: 'var(--primary)' }}>🏗️</div>
              <h3 style={{ marginBottom: "12px", fontSize: '1.2rem' }}>Construction</h3>
              <p style={{ fontSize: "0.9rem", color: '#ccc' }}>Providing reliable hoisting solutions for major construction projects.</p>
            </div>
            <div>
              <div style={{ fontSize: "3rem", marginBottom: "20px", color: 'var(--primary)' }}>⚙️</div>
              <h3 style={{ marginBottom: "12px", fontSize: '1.2rem' }}>Material Handling</h3>
              <p style={{ fontSize: "0.9rem", color: '#ccc' }}>Complete systems including Busbars, Current Collectors, and Pendants.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
