import React from 'react';
import { ShoppingBag, Heart, Clock, Package } from 'lucide-react';

const CustomerDashboard = () => {
  const [products, setProducts] = React.useState([
    {
      id: 1,
      name: 'Organic Tomatoes',
      farm: 'Green Valley Farm',
      price: 4.99,
      unit: 'lb',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 2,
      name: 'Fresh Lettuce',
      farm: 'Sunshine Farms',
      price: 2.99,
      unit: 'head',
      image: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=300&q=80'
    },
    {
      id: 3,
      name: 'Organic Carrots',
      farm: 'Root Valley',
      price: 3.49,
      unit: 'lb',
      image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=300&q=80'
    }
  ]);

  const [orders, setOrders] = React.useState([
    { id: 1, items: 'Tomatoes, Lettuce', total: 15.97, status: 'In Transit' },
    { id: 2, items: 'Carrots', total: 10.47, status: 'Delivered' }
  ]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <ShoppingBag className="text-blue-600" />
            <h3 className="font-semibold">Total Orders</h3>
          </div>
          <p className="text-2xl font-bold">12</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Heart className="text-red-600" />
            <h3 className="font-semibold">Favorite Farms</h3>
          </div>
          <p className="text-2xl font-bold">5</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Clock className="text-green-600" />
            <h3 className="font-semibold">Active Orders</h3>
          </div>
          <p className="text-2xl font-bold">2</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center gap-3 mb-2">
            <Package className="text-purple-600" />
            <h3 className="font-semibold">Delivered</h3>
          </div>
          <p className="text-2xl font-bold">10</p>
        </div>
      </div>

      {/* Featured Products */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.farm}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">
                    ${product.price}/{product.unit}
                  </span>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Orders */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Recent Orders</h2>
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">Order #{order.id}</p>
                  <p className="text-gray-600">{order.items}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-green-600">${order.total}</p>
                  <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                    order.status === 'Delivered' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                    {order.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;