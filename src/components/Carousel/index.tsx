'use client'
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Relief & Repair Moisturizer',
    description: 'A moisturizer for dry, sensitive skin.',
    price: '$100',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/products/Hydraglow_Thumbnail2_large.png?v=1671115856',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Afterglow Serum',
    description: 'Peptide Firming Moisturizer',
    price: '$150',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/products/FreshLift_Thumbnail2_585x585.png?v=1677011443',
    rating: 4,
  },
  {
    id: 3,
    name: 'Clean Slate Serum',
    description: 'Vitamins C, E, B5, Squalane ',
    price: '$200',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/products/AfterglowSerum-Hover_585x585.png?v=1713273942',
    rating: 3.5,
  },
  {
    id: 4,
    name: 'Product 4',
    description: 'This is a brief description of Product 4.',
    price: '$250',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/files/ClarityClay_Thumbnail2_07b3c8ff-e9c2-40fe-83fd-862a2d022713_585x585.png?v=1685456508',
    rating: 5,
  },
  {
    id: 5,
    name: 'Product 5',
    description: 'This is a brief description of Product 5.',
    price: '$300',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/files/RadianceRenewal_1080x1080_1_585x585.png?v=1704282596',
    rating: 4.5,
  },
  {
    id: 6,
    name: 'Product 6',
    description: 'This is a brief description of Product 6.',
    price: '$350',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/files/Tranquility_1080x1080_1797ccf8-18ed-4c3e-ad7e-afb85e4baae9_585x585.png?v=1704282627',
    rating: 4,
  },
  {
    id: 7,
    name: 'Product 7',
    description: 'This is a brief description of Product 7.',
    price: '$400',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/products/I_mAllIn_Thumbnail2_585x585.png?v=1671115901',
    rating: 4.5,
  },
  {
    id: 8,
    name: 'Product 8',
    description: 'This is a brief description of Product 8.',
    price: '$450',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/products/NoFilterNeeded_Thumbnail2_585x585.png?v=1671115945',
    rating: 3,
  },
  {
    id: 9,
    name: 'Product 9',
    description: 'This is a brief description of Product 9.',
    price: '$500',
    imageUrl: 'https://lumaandleaf.com/cdn/shop/files/MakeupBag_Thumbnail_585x585.png?v=1682609901',
    rating: 4.5,
  },
];

const ITEMS_PER_PAGE = 3;

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + ITEMS_PER_PAGE >= products.length
        ? 0
        : prevIndex + ITEMS_PER_PAGE
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - ITEMS_PER_PAGE < 0
        ? Math.max(products.length - ITEMS_PER_PAGE, 0)
        : prevIndex - ITEMS_PER_PAGE
    );
  };

  const openQuickView = (product) => {
    setSelectedProduct(product);
  };

  const closeQuickView = () => {
    setSelectedProduct(null);
    setQuantity(1);
  };

  return (
    <div className="relative max-w-screen-lg mx-auto">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${(currentIndex / ITEMS_PER_PAGE) * 100}%)` }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-full md:w-1/3 px-4">
              <div className="flex flex-col h-full border border-gray-200 rounded-lg shadow-md">
                <div className="flex-grow relative group">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="object-cover h-80 w-full rounded-md"
                  />
                  <button
                    onClick={() => openQuickView(product)}
                    className="absolute top-[95%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-green-400 text-xs w-full px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 tracking-widest uppercase"
                  >
                    Quick View
                  </button>
                </div>
                <div className="flex flex-col justify-between flex-grow p-4 bg-[#f5f3ef]">
                  <h3 className="text-base font-semibold">{product.name}</h3>
                  <p className="text-xs text-gray-600 py-2">{product.description}</p>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-lg font-bold">{product.price}</span>
                    <button className="uppercase px-5 py-1 bg-black hover:bg-white text-white hover:text-black text-sm rounded-3xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white hover:bg-black text-black hover:text-white px-5 py-3 rounded-full border"
      >
        {'<'}
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white hover:bg-black text-black hover:text-white px-5 py-3 rounded-full border"
      >
        {'>'}
      </button>

      {/* Quick View */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg max-w-3xl w-full p-6 relative">
            <button onClick={closeQuickView} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              &times;
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="flex md:flex-col md:w-1/4 space-y-2 overflow-y-auto max-h-40 md:max-h-[400px]">
                {products.map((product) => (
                  <img
                    key={product.id}
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-1/5 md:w-full cursor-pointer border border-gray-200 rounded-full"
                    onClick={() => setSelectedProduct(product)}
                  />
                ))}
              </div>
              <div className="md:w-3/4 mt-4 md:mt-0 md:pl-4">
                <img
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="text-2xl font-semibold mt-4">{selectedProduct.name}</h3>
                <div className="flex items-center mt-2">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      className={`h-5 w-5 ${index < Math.round(selectedProduct.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.1 3.381a1 1 0 00.95.69h3.557c.969 0 1.371 1.24.588 1.81l-2.877 2.09a1 1 0 00-.364 1.118l1.1 3.381c.3.921-.755 1.688-1.54 1.118l-2.877-2.09a1 1 0 00-1.175 0l-2.877 2.09c-.784.57-1.838-.197-1.539-1.118l1.1-3.381a1 1 0 00-.364-1.118l-2.877-2.09c-.784-.57-.38-1.81.588-1.81h3.557a1 1 0 00.95-.69l1.1-3.381z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-500">{selectedProduct.rating}</span>
                </div>
                <hr className="my-4" />
                <p>{selectedProduct.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-2xl font-bold">{selectedProduct.price}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                      className="px-3 py-1 bg-gray-300 rounded-md"
                    >
                      -
                    </button>
                    <span>{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 bg-gray-300 rounded-md"
                    >
                      +
                    </button>
                    <button className="px-4 py-1 bg-black hover:bg-white text-white hover:text-black text-sm rounded-3xl">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
