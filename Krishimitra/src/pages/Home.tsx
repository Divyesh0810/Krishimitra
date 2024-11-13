import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sprout, ShoppingCart } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-4">
          KrishiMitra.In
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Growing Smarter, Farming Better
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate('/farmer-dashboard')}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
          >
            <Sprout size={20} />
            I'm a Farmer
          </button>
          <button
            onClick={() => navigate('/customer-dashboard')}
            className="bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-700 transition flex items-center gap-2"
          >
            <ShoppingCart size={20} />
            I'm a Customer
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">For Farmers</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Manage your farm inventory</li>
            <li>• Track market prices</li>
            <li>• Access weather forecasts</li>
            <li>• Connect with customers</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">For Customers</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Buy fresh produce</li>
            <li>• Support local farmers</li>
            <li>• Track orders</li>
            <li>• Access seasonal deals</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
          <h3 className="text-xl font-semibold mb-4">Community</h3>
          <ul className="space-y-2 text-gray-600">
            <li>• Join discussions</li>
            <li>• Share farming tips</li>
            <li>• Get expert advice</li>
            <li>• Build connections</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Home;