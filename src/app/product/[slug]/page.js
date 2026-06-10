import products from "../../../data/products.json";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductDetail({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      {/* Page Banner with Breadcrumbs */}
      <div className="page-banner">
        <div className="container">
          <h1 className="page-title">{product.title}</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> &gt; <Link href="/#products">Products</Link> &gt; {product.title}
          </div>
        </div>
      </div>

      {/* Main Product Layout */}
      <section className="section-padding">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '50px' }}>
            
            {/* Left Column: Product Image */}
            <div>
              <div style={{ border: '1px solid var(--border-color)', padding: '20px', background: '#fff' }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'contain' }} 
                />
              </div>
            </div>

            {/* Right Column: Product Specs */}
            <div>
              <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '20px', color: 'var(--secondary)' }}>
                {product.title}
              </h2>
              <p style={{ color: 'var(--primary)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '30px' }}>
                Request For Price
              </p>

              <div style={{ marginBottom: '30px' }}>
                <Link href="/" className="btn-primary">Enquire Now</Link>
              </div>

              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '15px', borderBottom: '2px solid var(--border-color)', paddingBottom: '10px' }}>
                Product Specifications
              </h3>
              
              {Object.keys(product.specs).length > 0 ? (
                <table className="spec-table">
                  <tbody>
                    {Object.entries(product.specs).map(([key, value]) => (
                      <tr key={key}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No detailed specifications available.</p>
              )}
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
