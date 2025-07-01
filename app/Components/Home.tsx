import React from 'react';
import Link from 'next/link';

const HomePage = () => {
  const products = [
    {
      name: 'Kaareen Pulse Runner',
      description: 'Lightweight for optimal speed',
      price: 109.99,
      bgGradient: 'from-gray-200 to-gray-300',
      innerBg: 'bg-gray-400',
      textColor: 'text-gray-700',
    },
    {
      name: 'Kaareen Pulse Runner',
      description: 'Lightweight for optimal speed',
      price: 109.99,
      bgGradient: 'from-gray-600 to-gray-500',
      innerBg: 'bg-gray-700',
      textColor: 'text-white',
    },
    {
      name: 'Kaareen Pulse Runner',
      description: 'Lightweight for optimal speed',
      price: 109.99,
      bgGradient: 'from-blue-400 to-teal-400',
      innerBg: 'bg-blue-500',
      textColor: 'text-white',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-blue-900 to-blue-500 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.2),transparent_50%)] opacity-30 z-10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-24 text-center z-20 md:py-32">
          <h1 className="text-4xl font-extrabold mb-5 leading-tight md:text-6xl animate-[fadeIn_1s_ease-in-out]">
            StrideForm: Step into Your Potential
          </h1>
          <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed opacity-90 md:text-xl">
            Discover footwear that blends comfort, style, and performance. Perfect for urban adventures or rugged trails.
          </p>
          <Link href="/product">
            <button className="bg-white text-blue-900 font-semibold py-3 px-10 rounded-full text-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center tracking-tight md:text-4xl">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-103 hover:shadow-xl transition-transform duration-300"
            >
              <div
                className={`h-64 bg-gradient-to-br ${product.bgGradient} flex items-center justify-center relative overflow-hidden`}
              >
                <div
                  className={`w-[70%] h-3/5 ${product.innerBg} rounded-lg flex items-center justify-center -rotate-12 shadow-md`}
                >
                  <span className={`font-semibold text-lg ${product.textColor}`}>
                    {product.name.split(' ')[1]}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <p className="text-xl font-bold text-blue-900">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD for Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: products.map((product, index) => ({
              '@type': 'Product',
              position: index + 1,
              name: product.name,
              description: product.description,
              offers: {
                '@type': 'Offer',
                price: product.price,
                priceCurrency: 'USD',
              },
            })),
          }),
        }}
      />
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default HomePage;