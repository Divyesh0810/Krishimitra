import React, { useState } from 'react';
import { Sprout, Package, TrendingUp, Users, Sun, ShoppingCart, Settings, Edit3, Save } from 'lucide-react';
import WeatherWidget from '../components/WeatherWidget';
import MarketPrices from '../components/MarketPrices';
import DiseaseScanner from '../components/DiseaseDetection/DiseaseScanner';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const FarmerDashboard = () => {
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [farmData, setFarmData] = useState({
    name: 'Green Valley Farm',
    location: 'Portland, OR',
    size: '50 acres',
    owner: 'John Smith',
    email: 'john@greenvalley.farm',
    phone: '(555) 123-4567',
    crops: [
      { name: 'Tomatoes', status: 'Growing', quantity: '2000 lbs', readyDate: '2024-04-15' },
      { name: 'Lettuce', status: 'Ready', quantity: '500 lbs', readyDate: '2024-03-20' },
      { name: 'Carrots', status: 'Planted', quantity: '1000 lbs', readyDate: '2024-05-01' }
    ]
  });

  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for charts
  const yieldData = [
    { month: 'Jan', yield: 2400 },
    { month: 'Feb', yield: 1398 },
    { month: 'Mar', yield: 9800 },
    { month: 'Apr', yield: 3908 },
    { month: 'May', yield: 4800 },
    { month: 'Jun', yield: 3800 }
  ];

  const soilData = [
    { name: 'Nitrogen', value: 65 },
    { name: 'Phosphorus', value: 45 },
    { name: 'Potassium', value: 80 },
    { name: 'pH Level', value: 70 }
  ];

  const waterQualityData = [
    { parameter: 'pH', value: 7.2, ideal: 7.0 },
    { parameter: 'TDS', value: 350, ideal: 300 },
    { parameter: 'Hardness', value: 150, ideal: 180 },
    { parameter: 'Chlorine', value: 0.5, ideal: 0.6 }
  ];

  const fertilizerData = [
    { name: 'Organic', value: 60 },
    { name: 'Chemical', value: 40 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  const handleProfileEdit = () => {
    if (isEditingProfile) {
      // Save changes
      setIsEditingProfile(false);
    } else {
      setIsEditingProfile(true);
    }
  };

  const renderProfileSection = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <Sprout className="text-green-600" size={32} />
          <div>
            {isEditingProfile ? (
              <input
                type="text"
                value={farmData.name}
                onChange={(e) => setFarmData({ ...farmData, name: e.target.value })}
                className="text-2xl font-bold text-gray-800 border rounded px-2"
              />
            ) : (
              <h2 className="text-2xl font-bold text-gray-800">{farmData.name}</h2>
            )}
            <p className="text-gray-600">{farmData.location} • {farmData.size}</p>
          </div>
        </div>
        <button
          onClick={handleProfileEdit}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-50 text-green-600 hover:bg-green-100"
        >
          {isEditingProfile ? (
            <>
              <Save size={20} />
              Save
            </>
          ) : (
            <>
              <Edit3 size={20} />
              Edit Profile
            </>
          )}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Owner Name</label>
          {isEditingProfile ? (
            <input
              type="text"
              value={farmData.owner}
              onChange={(e) => setFarmData({ ...farmData, owner: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          ) : (
            <p className="font-semibold">{farmData.owner}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Email</label>
          {isEditingProfile ? (
            <input
              type="email"
              value={farmData.email}
              onChange={(e) => setFarmData({ ...farmData, email: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          ) : (
            <p className="font-semibold">{farmData.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <label className="text-sm text-gray-600">Phone</label>
          {isEditingProfile ? (
            <input
              type="tel"
              value={farmData.phone}
              onChange={(e) => setFarmData({ ...farmData, phone: e.target.value })}
              className="w-full border rounded px-3 py-2"
            />
          ) : (
            <p className="font-semibold">{farmData.phone}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderAnalyticsTabs = () => (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div className="flex space-x-4 border-b mb-6">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'overview' ? 'border-green-500 text-green-600' : 'border-transparent'
          }`}
        >
          Overview
        </button>
        <button
          onClick={() => setActiveTab('soil')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'soil' ? 'border-green-500 text-green-600' : 'border-transparent'
          }`}
        >
          Soil Analysis
        </button>
        <button
          onClick={() => setActiveTab('water')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'water' ? 'border-green-500 text-green-600' : 'border-transparent'
          }`}
        >
          Water Quality
        </button>
        <button
          onClick={() => setActiveTab('fertilizer')}
          className={`px-4 py-2 border-b-2 transition-colors ${
            activeTab === 'fertilizer' ? 'border-green-500 text-green-600' : 'border-transparent'
          }`}
        >
          Fertilizer Usage
        </button>
      </div>

      {activeTab === 'overview' && (
        <div className="h-96">
          <h3 className="text-xl font-semibold mb-4">Crop Yield Trends</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={yieldData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="yield" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {activeTab === 'soil' && (
        <div className="h-96">
          <h3 className="text-xl font-semibold mb-4">Soil Nutrient Levels</h3>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={soilData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {activeTab === 'water' && (
        <div className="h-96">
          <h3 className="text-xl font-semibold mb-4">Water Quality Parameters</h3>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={waterQualityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="parameter" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
              <Line type="monotone" dataKey="ideal" stroke="#82ca9d" strokeDasharray="5 5" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}

      {activeTab === 'fertilizer' && (
        <div className="h-96">
          <h3 className="text-xl font-semibold mb-4">Fertilizer Distribution</h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={fertilizerData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {fertilizerData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-8">
      {renderProfileSection()}
      {renderAnalyticsTabs()}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <WeatherWidget />
        <MarketPrices />
      </div>

      <DiseaseScanner />
    </div>
  );
};

export default FarmerDashboard;