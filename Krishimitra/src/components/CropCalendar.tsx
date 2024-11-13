import React from 'react';
import { Calendar } from 'lucide-react';

const CropCalendar = () => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition">
      <div className="flex items-center gap-3 mb-4">
        <Calendar className="text-orange-600" size={24} />
        <h3 className="text-xl font-semibold">Crop Calendar</h3>
      </div>
      
      <div className="space-y-4">
        {[
          { month: 'March', crops: 'Tomatoes, Peppers', status: 'Planting' },
          { month: 'April', crops: 'Corn, Beans', status: 'Growing' },
          { month: 'May', crops: 'Lettuce, Carrots', status: 'Harvesting' },
          { month: 'June', crops: 'Squash, Cucumbers', status: 'Planning' }
        ].map((item, index) => (
          <div key={index} className="border-l-4 border-orange-200 pl-3">
            <div className="font-semibold text-gray-800">{item.month}</div>
            <div className="text-sm text-gray-600">{item.crops}</div>
            <div className="text-xs text-orange-600">{item.status}</div>
          </div>
        ))}
      </div>
      
      <button className="mt-4 w-full bg-orange-50 text-orange-600 py-2 rounded-lg hover:bg-orange-100 transition">
        View Full Calendar
      </button>
    </div>
  );
};

export default CropCalendar;