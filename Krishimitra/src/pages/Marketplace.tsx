import React from 'react';
import { Search, Filter, ShoppingCart, Star } from 'lucide-react';

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('all');
  const [cart, setCart] = React.useState<any[]>([]);

  const categories = [
    'all',
    'vegetables',
    'fruits',
    'dairy',
    'meat',
    'grains',
    'herbs'
  ];

  const products = [
    {
      id: 1,
      name: 'Organic Tomatoes',
      category: 'vegetables',
      farm: 'Green Valley Farm',
      rating: 4.8,
      reviews: 124,
      price: 4.99,
      unit: 'lb',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Fresh Strawberries',
      category: 'fruits',
      farm: 'Berry Fields',
      rating: 4.9,
      reviews: 89,
      price: 6.99,
      unit: 'lb',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Local Honey',
      category: 'dairy',
      farm: 'Bee Haven',
      rating: 5.0,
      reviews: 156,
      price: 8.99,
      unit: 'jar',
      image: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 4,
      name: 'Fresh Eggs',
      category: 'dairy',
      farm: 'Happy Hens Farm',
      rating: 4.7,
      reviews: 203,
      price: 6.99,
      unit: 'dozen',
      image: 'https://images.unsplash.com/photo-1569288052389-dac9b0ac9efd?auto=format&fit=crop&w=300&q=80'
    }
  ];

  const filteredProducts = products.filter(product => 
    (selectedCategory === 'all' || product.category === selectedCategory) &&
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product: any) => {
    setCart([...cart, product]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search and Filter Section */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          
          <div className="flex items-center gap-4">
            <Filter className="text-gray-600" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-500 focus:border-transparent"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <button className="relative bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2">
            <ShoppingCart size={20} />
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg">{product.name}</h3>
                <div className="flex items-center gap-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm">{product.rating}</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-2">{product.farm}</p>
              <p className="text-sm text-gray-500 mb-4">{product.reviews} reviews</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-bold">
                  ${product.price}/{product.unit}
                </span>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Featured Farms */}
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Featured Farms</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {['Green Valley Farm', 'Berry Fields', 'Happy Hens Farm'].map((farm) => (
            <div key={farm} className="border rounded-lg p-4 hover:shadow-lg transition">
              <h3 className="font-semibold mb-2">{farm}</h3>
              <div className="flex items-center gap-1 mb-2">
                <Star className="text-yellow-400 fill-current" size={16} />
                <span className="text-sm">4.8 (200+ reviews)</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">Specializing in organic produce and sustainable farming practices.</p>
              <button className="text-green-600 hover:text-green-700 text-sm font-semibold">
                View Farm Profile →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;