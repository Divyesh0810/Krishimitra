import React from 'react';
import { Store } from 'lucide-react';

const Marketplace = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        <Store className="text-purple-600" size={24} />
        <h3 className="text-xl font-semibold">Marketplace</h3>
      </div>
      
      <div className="space-y-4">
        {[
          {
            product: 'Organic Tomatoes',
            seller: 'Green Valley Farm',
            price: '$4.99/lb',
            stock: 'In Stock'
          },
          {
            product: 'Fresh Eggs',
            seller: 'Happy Hens Farm',
            price: '$6.99/dozen',
            stock: 'Limited'
          },
          {
            product: 'Local Honey',
            seller: 'Bee Haven',
            price: '$8.99/jar',
            stock: 'In Stock'
          }
        ].map((item, index) => (
          <div key={index} className="border-b last:border-b-0 pb-3 last:pb-0">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-semibold text-gray-800">{item.product}</div>
                <div className="text-sm text-gray-600">{item.seller}</div>
              </div>
              <div className="text-right">
                <div className="font-semibold text-green-600">{item.price}</div>
                <div className="text-xs text-gray-500">{item.stock}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full bg-purple-50 text-purple-600 py-2 rounded-lg hover:bg-purple-100 transition">
        Visit Marketplace
      </button>
    </div>
  );
};

export default Marketplace;