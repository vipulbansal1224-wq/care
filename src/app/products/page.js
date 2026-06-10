import Link from "next/link";
import products from "../../data/products.json";

export default function ProductsPage() {
  return (
    <>
      <div className="page-banner">
        <div className="container">
          <h1 className="page-title">Our Products</h1>
          <div className="breadcrumb">
            <Link href="/">Home</Link> &gt; Products
          </div>
        </div>
      </div>

      <section className="section-padding">
        <div className="container">
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
    </>
  );
}
