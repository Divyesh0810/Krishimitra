import React from 'react';
import { Sun, Cloud, Droplets, Wind } from 'lucide-react';

const WeatherWidget = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        <Sun className="text-yellow-500" size={24} />
        <h3 className="text-xl font-semibold">Weather Forecast</h3>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sun className="text-yellow-500" size={20} />
            <span>Temperature</span>
          </div>
          <span className="font-semibold">75°F</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cloud className="text-gray-500" size={20} />
            <span>Humidity</span>
          </div>
          <span className="font-semibold">65%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplets className="text-blue-500" size={20} />
            <span>Precipitation</span>
          </div>
          <span className="font-semibold">20%</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Wind className="text-teal-500" size={20} />
            <span>Wind Speed</span>
          </div>
          <span className="font-semibold">8 mph</span>
        </div>
      </div>
      
      <button className="mt-4 w-full bg-blue-50 text-blue-600 py-2 rounded-lg hover:bg-blue-100 transition">
        View Detailed Forecast
      </button>
    </div>
  );
};

export default WeatherWidget;