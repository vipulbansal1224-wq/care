import Link from "next/link";
import products from "../data/products.json";

export default function Home() {
  return (
    <>
      {/* 100vw Full Width Slider */}
      <section className="slider-container">
        {/* Just mapping the first product image as a static slide for now, mimicking Loadmate's big banner */}
        <div className="slide active">
          {/* We use an industrial background, or default to black if missing */}
          <div style={{width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/wp-content/uploads/2023/02/product-jpeg-250x250-1.webp") center/cover no-repeat'}} className="slide-img"></div>
          
          <div className="slide-content container">
            <span className="slide-subtitle">Welcome to KD Cranes</span>
            <h1 className="slide-title">EOT Crane Manufacturer & Supplier</h1>
            <p className="slide-desc">
              India's leading manufacturer of heavy duty Material Handling Equipments, EOT Crane Spare Parts, DSL Busbar Systems, and Wireless Remote Controls.
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              <Link href="#products" className="btn-primary">Our Products</Link>
              <Link href="/contact" className="btn-outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Split Section */}
      <section className="section-padding" style={{background: '#f9f9f9'}}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
            <div>
              <div className="section-title" style={{textAlign: 'left', marginBottom: '30px'}}>
                <h2 style={{fontSize: '2rem'}}>Crafting Trust in Every Turn</h2>
                <p>Est. 2016 in Ludhiana</p>
              </div>
              <p style={{ fontSize: "1.1rem", marginBottom: "20px", lineHeight: 1.6 }}>
                <strong>KD Enterprises</strong> stands as a leading Manufacturer of a wide range of Crane Spare Parts & Accessories. Situated in Ludhiana, we have constructed a wide and well functional infrastructural unit.
              </p>
              <p style={{ marginBottom: "30px", lineHeight: 1.6 }}>
                We offer high-quality products at reasonable rates and deliver these within the promised time-frame. Under the headship of “Mr. Pankesh Thakur”, we have gained a huge clientele across the nation.
              </p>
              <Link href="/" className="btn-primary">Read More</Link>
            </div>
            <div>
              {/* placeholder image for About Us */}
              <div style={{width: '100%', height: '400px', background: '#e0e0e0', borderRadius: '4px', overflow: 'hidden'}}>
                <img src="/wp-content/uploads/2023/02/product-jpeg-250x250-2.webp" style={{width: '100%', height: '100%', objectFit: 'cover'}} alt="Factory" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products" className="section-padding">
        <div className="container">
          <div className="section-title">
            <h2>Our Products</h2>
            <p>High quality industrial material handling solutions</p>
          </div>

          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-img-wrapper">
                  <img src={product.image} alt={product.title} className="product-img" />
                </div>
                <div className="product-info">
                  <h3 className="product-title">{product.title}</h3>
                </div>
                <Link href={`/product/${product.slug}`} className="product-btn">
                  Read More
                </Link>
              </div>
            ))}
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
