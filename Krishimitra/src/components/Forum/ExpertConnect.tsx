import React from 'react';
import { Award, Calendar, Clock, MessageSquare } from 'lucide-react';

const experts = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Organic Farming',
    experience: '15 years',
    rating: 4.9,
    availability: 'Available Now',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    name: 'Michael Chen',
    specialty: 'Sustainable Agriculture',
    experience: '12 years',
    rating: 4.8,
    availability: 'Available in 1 hour',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
  }
];

const ExpertConnect = () => {
  const [selectedExpert, setSelectedExpert] = React.useState<number | null>(null);
  const [message, setMessage] = React.useState('');

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experts.map((expert) => (
          <div key={expert.id} className="border rounded-lg p-4 hover:shadow-lg transition">
            <div className="flex gap-4">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg flex items-center gap-2">
                  {expert.name}
                  <Award className="text-yellow-500" size={16} />
                </h3>
                <p className="text-gray-600">{expert.specialty}</p>
                <p className="text-sm text-gray-500">{expert.experience} experience</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-sm font-semibold">Rating: {expert.rating}/5.0</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {expert.availability}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <button
                onClick={() => setSelectedExpert(expert.id)}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
              >
                <MessageSquare size={18} />
                Message
              </button>
              <button className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition flex items-center justify-center gap-2">
                <Calendar size={18} />
                Schedule
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedExpert && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">
                Message {experts.find(e => e.id === selectedExpert)?.name}
              </h3>
              <button
                onClick={() => setSelectedExpert(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </div>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3 border rounded-lg h-32 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setSelectedExpert(null)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  alert('Message sent!');
                  setSelectedExpert(null);
                  setMessage('');
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpertConnect;