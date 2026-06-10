import Link from 'next/link';
import productsData from '../data/products.json';

export default function Home() {
  const products = productsData.slice(0, 6); // Just show the first 6 products in the spotlight

  return (
    <div style={{ paddingBottom: '60px' }}>
      {/* Hero Slider */}
      <section className="container" style={{ paddingTop: '20px' }}>
        <div className="slider-container animate-fade">
          <div className="slide active">
            <img src="/images/1-1.jpg" alt="EOT Crane Manufacturer" className="slide-img" />
            <div className="slide-overlay">
              <span style={{ color: 'var(--primary)', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.15em', marginBottom: '8px', display: 'inline-block' }}>
                K.D.Crane Spare Parts & Accessories
              </span>
              <h1 className="slide-title">EOT Crane Manufacturer</h1>
              <p className="slide-desc">Leading Manufacturer of a wide range of Busbar System, Conductor Bus Bar, Current Collector, etc.</p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '16px' }}>
                <Link href="/" className="contact-btn">Explore Products</Link>
                <Link href="/" className="filter-btn" style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(4px)', color: 'white' }}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Profile Section */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                Corporate Profile
              </span>
              <h2 style={{ fontSize: '2.5rem', marginTop: '12px', marginBottom: '24px' }}>
                Crafting Trust in Every Turn
              </h2>
              <p style={{ fontSize: '1.05rem', marginBottom: '20px' }}>
                <strong>KD Enterprises</strong>, established as a Sole Proprietorship firm in the year 2016 in Ludhiana (Punjab, India), stands as a leading Manufacturer of a wide range of Crane Spare Parts & Accessories.
              </p>
              <p style={{ marginBottom: '24px' }}>
                Situated in Ludhiana, we have constructed a wide and well functional infrastructural unit that plays an important role in the growth of our company. Under the headship of “Mr. Pankesh Thakur” (Owner), we have gained a huge clientele across the nation.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>🏢</div>
                  <div>
                    <h4 style={{ fontWeight: 800 }}>Est. 2016</h4>
                    <p style={{ fontSize: '0.8rem' }}>Of Engineering Trust</p>
                  </div>
                </div>
                <div className="glass-card" style={{ padding: '20px', display: 'flex', gap: '16px', alignItems: 'center' }}>
                  <div style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>⚙️</div>
                  <div>
                    <h4 style={{ fontWeight: 800 }}>Manufacturer</h4>
                    <p style={{ fontSize: '0.8rem' }}>11 to 25 People</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="glass-card" style={{ padding: '40px', borderLeft: '4px solid var(--primary)' }}>
              <h3 style={{ marginBottom: '20px', fontSize: '1.5rem' }}>Our Product Range</h3>
              <p style={{ marginBottom: '30px' }}>
                We offer high-quality products at reasonable rates and deliver these within the promised time-frame.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ background: 'rgba(237,9,9,0.1)', color: 'var(--primary)', padding: '8px', borderRadius: '8px', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Heavy Duty Material</h4>
                    <p style={{ fontSize: '0.88rem' }}>Hydraulic Thruster Brake & DSL Busbar Systems.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ background: 'rgba(237,9,9,0.1)', color: 'var(--primary)', padding: '8px', borderRadius: '8px', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Wireless Radio Remote</h4>
                    <p style={{ fontSize: '0.88rem' }}>For overhead cranes, customized to industrial needs.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <span style={{ background: 'rgba(237,9,9,0.1)', color: 'var(--primary)', padding: '8px', borderRadius: '8px', fontWeight: 'bold' }}>✓</span>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700 }}>Hoist & Crane Accessories</h4>
                    <p style={{ fontSize: '0.88rem' }}>Wirerope Hoist, Chain Hoist, and various Travelling Trolleys.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Spotlight */}
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px' }}>
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                Product Spotlight
              </span>
              <h2 style={{ fontSize: '2.3rem', marginTop: '12px', color: 'var(--foreground)' }}>
                Our Latest Innovations
              </h2>
            </div>
            <Link href="/" className="product-link">View All Products &gt;&gt;</Link>
          </div>
          
          <div className="products-grid">
            {products.map((product) => (
              <div className="glass-card product-card animate-fade" key={product.ID || product.slug}>
                <div className="product-img-wrapper">
                  <img src={product.image_url || '/images/1-1.jpg'} alt={product.post_title} className="product-img" />
                </div>
                <span className="product-cat">Equipment</span>
                <h3 className="product-title">{product.post_title}</h3>
                <p className="product-desc" dangerouslySetInnerHTML={{ __html: (product.post_content || '').substring(0, 80) + '...' }} />
                <div className="product-footer">
                  <Link href={`/product/${product.slug}`} className="product-link">View Details &gt;</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Distribution */}
      <section className="section-padding">
        <div className="container" style={{ textAlign: 'center' }}>
          <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
            National Reach
          </span>
          <h2 style={{ fontSize: '2.3rem', marginTop: '12px', marginBottom: '20px' }}>
            Trusted Across the Nation
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 60px auto' }}>
            With years of experience in the domain, we supply high-quality hoist and crane accessories to industries nationwide.
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
            <div className="glass-card" style={{ padding: '40px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏭</div>
              <h3 style={{ marginBottom: '12px' }}>Manufacturing Sector</h3>
              <p style={{ fontSize: '0.9rem' }}>Supplying robust components for heavy industrial manufacturing.</p>
            </div>
            <div className="glass-card" style={{ padding: '40px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>🏗️</div>
              <h3 style={{ marginBottom: '12px' }}>Construction</h3>
              <p style={{ fontSize: '0.9rem' }}>Providing reliable hoisting solutions for major construction projects.</p>
            </div>
            <div className="glass-card" style={{ padding: '40px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '20px' }}>⚙️</div>
              <h3 style={{ marginBottom: '12px' }}>Material Handling</h3>
              <p style={{ fontSize: '0.9rem' }}>Complete systems including Busbars, Current Collectors, and Pendants.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bulk Distributions Banner */}
      <section className="container">
        <div className="glass-card" style={{ padding: '60px 40px', textAlign: 'center', background: 'linear-gradient(135deg, #f8f9fa 0%, #ffece6 100%)', border: '1px solid rgba(237,9,9,0.2)' }}>
          <h2 style={{ fontSize: '2.3rem', marginBottom: '20px', color: 'var(--foreground)' }}>
            Inquire About Bulk Orders
          </h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 32px auto', fontSize: '1.05rem' }}>
            Whether you need customized systems or bulk supplies of our crane accessories, our sales team is ready to assist.
          </p>
          <Link href="/" className="contact-btn" style={{ padding: '14px 40px', fontSize: '1.05rem', display: 'inline-block' }}>
            Request Quotation & Pricing
          </Link>
        </div>
      </section>
    </div>
  );
}
