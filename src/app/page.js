import Link from 'next/link';
import products from '@/data/products.json';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-blue-600 tracking-tight">CareStore</h1>
          <nav className="space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Shop</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Latest Products</h2>
          <p className="mt-4 text-xl text-gray-500">Discover our carefully curated collection for your everyday needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.ID} href={`/product/${product.slug}`} className="group block">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
                <div className="relative h-64 overflow-hidden bg-gray-200">
                  <img 
                    src={product.image_url || 'https://via.placeholder.com/400x500?text=No+Image'} 
                    alt={product.post_title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  {product.regular_price && product.regular_price !== product.price && (
                    <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Sale
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{product.post_title}</h3>
                  <div className="flex items-baseline space-x-2">
                    <span className="text-xl font-extrabold text-blue-600">${product.price}</span>
                    {product.regular_price && product.regular_price !== product.price && (
                      <span className="text-sm font-medium text-gray-400 line-through">${product.regular_price}</span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-blue-400">CareStore</h4>
            <p className="text-gray-400">Providing the best quality products with utmost care since 2026.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Email: support@carestore.com</li>
              <li>Phone: +1 234 567 8900</li>
              <li>Address: 123 Care Avenue, NY 10001</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
