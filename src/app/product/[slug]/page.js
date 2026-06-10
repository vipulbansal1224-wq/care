import products from '@/data/products.json';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default function ProductPage({ params }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      <header className="bg-white shadow-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-extrabold text-blue-600 tracking-tight">CareStore</Link>
          <Link href="/" className="text-sm font-semibold text-gray-500 hover:text-blue-600 flex items-center">
            &larr; Back to Shop
          </Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          <div className="w-full md:w-1/2 bg-gray-50 rounded-3xl overflow-hidden shadow-inner p-8 flex justify-center items-center">
            <img 
              src={product.image_url || 'https://via.placeholder.com/600x600?text=No+Image'} 
              alt={product.post_title}
              className="max-w-full h-auto rounded-xl shadow-lg object-cover"
            />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col pt-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              {product.post_title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-8 pb-8 border-b border-gray-200">
              <span className="text-4xl font-black text-blue-600">${product.price}</span>
              {product.regular_price && product.regular_price !== product.price && (
                <span className="text-2xl font-semibold text-gray-400 line-through">${product.regular_price}</span>
              )}
            </div>

            <div className="prose prose-lg text-gray-600 mb-10">
              <p>{product.post_content || 'No description available for this product.'}</p>
            </div>

            <button className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-blue-600/30 transition-all transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50">
              Add to Cart - ${product.price}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
