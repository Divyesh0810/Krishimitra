import React from 'react';
import { BarChart3 } from 'lucide-react';

const MarketPrices = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        <BarChart3 className="text-green-600" size={24} />
        <h3 className="text-xl font-semibold">Market Prices</h3>
      </div>
      
      <div className="space-y-4">
        {[
          { crop: 'Tomatoes', price: '$2.99/lb', trend: '+0.20' },
          { crop: 'Potatoes', price: '$1.49/lb', trend: '-0.10' },
          { crop: 'Corn', price: '$0.99/ear', trend: '+0.05' },
          { crop: 'Lettuce', price: '$2.49/head', trend: '+0.15' }
        ].map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <span>{item.crop}</span>
            <div className="flex items-center gap-3">
              <span className="font-semibold">{item.price}</span>
              <span className={`text-sm ${
                item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {item.trend}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full bg-green-50 text-green-600 py-2 rounded-lg hover:bg-green-100 transition">
        View All Prices
      </button>
    </div>
  );
};

export default MarketPrices;