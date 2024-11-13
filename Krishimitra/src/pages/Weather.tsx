import React from 'react';
import { Sun, Cloud, CloudRain, Wind, Thermometer, Droplets } from 'lucide-react';

const Weather = () => {
  const [location, setLocation] = React.useState('Portland, OR');
  const [forecast, setForecast] = React.useState([
    { day: 'Today', temp: 75, condition: 'Sunny', humidity: 65, wind: 8 },
    { day: 'Tomorrow', temp: 72, condition: 'Partly Cloudy', humidity: 70, wind: 10 },
    { day: 'Wednesday', temp: 68, condition: 'Rain', humidity: 80, wind: 12 },
    { day: 'Thursday', temp: 70, condition: 'Cloudy', humidity: 75, wind: 9 },
    { day: 'Friday', temp: 73, condition: 'Sunny', humidity: 60, wind: 7 }
  ]);

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'sunny':
        return <Sun className="text-yellow-500" size={32} />;
      case 'partly cloudy':
        return <Cloud className="text-gray-500" size={32} />;
      case 'rain':
        return <CloudRain className="text-blue-500" size={32} />;
      case 'cloudy':
        return <Cloud className="text-gray-400" size={32} />;
      default:
        return <Sun className="text-yellow-500" size={32} />;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Weather Forecast</h2>
          <div className="relative">
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full md:w-64 pl-4 pr-10 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter location..."
            />
          </div>
        </div>

        {/* Current Weather */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-6 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-4 mb-4 md:mb-0">
              {getWeatherIcon(forecast[0].condition)}
              <div>
                <h3 className="text-3xl font-bold">{forecast[0].temp}°F</h3>
                <p className="text-lg">{forecast[0].condition}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <Droplets size={20} />
                <span>Humidity: {forecast[0].humidity}%</span>
              </div>
              <div className="flex items-center gap-2">
                <Wind size={20} />
                <span>Wind: {forecast[0].wind} mph</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {forecast.map((day, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <h4 className="font-semibold mb-2">{day.day}</h4>
              {getWeatherIcon(day.condition)}
              <p className="text-xl font-bold my-2">{day.temp}°F</p>
              <p className="text-sm text-gray-600">{day.condition}</p>
              <div className="text-sm text-gray-500 mt-2">
                <div className="flex items-center justify-center gap-1">
                  <Droplets size={14} />
                  {day.humidity}%
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Wind size={14} />
                  {day.wind} mph
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Weather Alerts */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-xl font-semibold mb-4">Weather Alerts</h3>
        <div className="space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <div className="flex items-center gap-2">
              <Thermometer className="text-yellow-500" />
              <p className="text-yellow-700">High temperature expected this weekend</p>
            </div>
          </div>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
            <div className="flex items-center gap-2">
              <CloudRain className="text-blue-500" />
              <p className="text-blue-700">Rain forecast for Wednesday</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;