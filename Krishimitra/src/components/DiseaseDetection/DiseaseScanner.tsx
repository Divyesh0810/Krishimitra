import React, { useState } from 'react';
import { Scan, AlertCircle, Check, X, Loader } from 'lucide-react';

interface Disease {
  id: string;
  name: string;
  severity: 'low' | 'medium' | 'high';
  description: string;
  recommendations: string[];
  affectedArea: string;
}

const DiseaseScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [selectedArea, setSelectedArea] = useState('');
  const [detectedDiseases, setDetectedDiseases] = useState<Disease[]>([]);
  const [showResults, setShowResults] = useState(false);

  const farmAreas = [
    'North Field - Tomatoes',
    'South Field - Lettuce',
    'East Field - Carrots',
    'West Field - Potatoes'
  ];

  const possibleDiseases: Disease[] = [
    {
      id: 'd1',
      name: 'Early Blight',
      severity: 'medium',
      description: 'Fungal disease causing dark spots on leaves with concentric rings.',
      recommendations: [
        'Apply copper-based fungicide',
        'Improve air circulation',
        'Remove infected leaves'
      ],
      affectedArea: 'North Field - Tomatoes'
    },
    {
      id: 'd2',
      name: 'Downy Mildew',
      severity: 'high',
      description: 'Yellow to white patches on leaf surfaces with gray mold underneath.',
      recommendations: [
        'Use resistant varieties',
        'Apply fungicide preventively',
        'Reduce leaf wetness'
      ],
      affectedArea: 'South Field - Lettuce'
    }
  ];

  const startScan = async () => {
    if (!selectedArea) return;
    
    setIsScanning(true);
    setShowResults(false);

    // Simulate scanning process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const diseases = possibleDiseases.filter(d => d.affectedArea === selectedArea);
    setDetectedDiseases(diseases);
    setIsScanning(false);
    setShowResults(true);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'low':
        return 'bg-yellow-100 text-yellow-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      case 'high':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center gap-3 mb-6">
        <Scan className="text-purple-600" size={24} />
        <h3 className="text-xl font-semibold">Disease Detection Scanner</h3>
      </div>

      <div className="space-y-6">
        {/* Area Selection */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Field Area
          </label>
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={isScanning}
          >
            <option value="">Choose an area</option>
            {farmAreas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>
        </div>

        {/* Scan Button */}
        <button
          onClick={startScan}
          disabled={!selectedArea || isScanning}
          className={`w-full py-3 rounded-lg flex items-center justify-center gap-2 ${
            isScanning
              ? 'bg-gray-100 text-gray-500'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {isScanning ? (
            <>
              <Loader className="animate-spin" size={20} />
              Scanning...
            </>
          ) : (
            <>
              <Scan size={20} />
              Start Scan
            </>
          )}
        </button>

        {/* Results Section */}
        {showResults && (
          <div className="mt-6 space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="text-purple-600" size={20} />
              <h4 className="font-semibold">Scan Results</h4>
            </div>

            {detectedDiseases.length === 0 ? (
              <div className="flex items-center gap-2 text-green-600 bg-green-50 p-4 rounded-lg">
                <Check size={20} />
                <p>No diseases detected in this area.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {detectedDiseases.map((disease) => (
                  <div
                    key={disease.id}
                    className="border rounded-lg p-4 hover:shadow-md transition"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h5 className="font-semibold">{disease.name}</h5>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${getSeverityColor(
                          disease.severity
                        )}`}
                      >
                        {disease.severity.charAt(0).toUpperCase() + disease.severity.slice(1)} Risk
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{disease.description}</p>
                    <div className="space-y-2">
                      <h6 className="text-sm font-medium">Recommended Actions:</h6>
                      <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                        {disease.recommendations.map((rec, index) => (
                          <li key={index}>{rec}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiseaseScanner;