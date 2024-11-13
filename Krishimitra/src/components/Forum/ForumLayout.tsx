import React from 'react';
import { MessageSquare, Users, Award, Search } from 'lucide-react';
import ForumCategories from './ForumCategories';
import ForumPosts from './ForumPosts';
import ExpertConnect from './ExpertConnect';

const ForumLayout = () => {
  const [activeTab, setActiveTab] = React.useState('discussions');
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 md:mb-0">Community Forum</h2>
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>

        <div className="flex space-x-4 border-b mb-6">
          <button
            onClick={() => setActiveTab('discussions')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === 'discussions'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-600 hover:text-green-600'
            }`}
          >
            <MessageSquare size={20} />
            <span>Discussions</span>
          </button>
          <button
            onClick={() => setActiveTab('experts')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === 'experts'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-600 hover:text-green-600'
            }`}
          >
            <Award size={20} />
            <span>Connect with Experts</span>
          </button>
          <button
            onClick={() => setActiveTab('categories')}
            className={`flex items-center gap-2 px-4 py-2 border-b-2 transition-colors ${
              activeTab === 'categories'
                ? 'border-green-500 text-green-600'
                : 'border-transparent text-gray-600 hover:text-green-600'
            }`}
          >
            <Users size={20} />
            <span>Categories</span>
          </button>
        </div>

        {activeTab === 'discussions' && <ForumPosts searchQuery={searchQuery} />}
        {activeTab === 'experts' && <ExpertConnect />}
        {activeTab === 'categories' && <ForumCategories />}
      </div>
    </div>
  );
};

export default ForumLayout;