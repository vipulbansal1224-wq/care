import productsData from '../../../data/products.json';
import Link from 'next/link';

export async function generateStaticParams() {
  return productsData.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link href="/" className="contact-btn" style={{ marginTop: '20px', display: 'inline-block' }}>Return Home</Link>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '60px' }}>
      <section className="section-padding" style={{ background: 'var(--secondary)' }}>
        <div className="container">
          <Link href="/" style={{ color: 'var(--primary)', fontWeight: 600, display: 'inline-block', marginBottom: '30px' }}>
            &larr; Back to Products
          </Link>
          
          <div className="glass-card" style={{ padding: '40px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'flex-start' }}>
            <div style={{ background: '#fff', borderRadius: '12px', padding: '20px', border: '1px solid var(--border)' }}>
              <img 
                src={product.image || '/images/1-1.jpg'} 
                alt={product.title} 
                style={{ width: '100%', height: 'auto', objectFit: 'contain', mixBlendMode: 'multiply' }} 
              />
            </div>
            
            {/* Product Info */}
            <div>
              <span style={{ color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', letterSpacing: '0.1em' }}>
                KD Cranes Equipment
              </span>
              <h1 style={{ fontSize: '2.5rem', marginTop: '12px', marginBottom: '24px' }}>
                {product.title}
              </h1>
              
              <div style={{ background: 'var(--secondary)', padding: '20px', borderRadius: '8px', marginBottom: '30px', borderLeft: '4px solid var(--primary)' }}>
                <h4 style={{ marginBottom: '12px', fontSize: '1.1rem' }}>Specifications</h4>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <tbody>
                    {Object.entries(product.specs || {}).map(([key, value]) => (
                      <tr key={key} style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <td style={{ padding: '8px 0', fontWeight: 'bold', width: '40%' }}>{key}</td>
                        <td style={{ padding: '8px 0', color: 'var(--foreground)' }}>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginTop: '40px' }}>
                <button className="contact-btn" style={{ padding: '14px 40px', fontSize: '1.05rem' }}>Request Quote</button>
                <button className="filter-btn" style={{ padding: '14px 40px', fontSize: '1.05rem' }}>Download Specs</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
