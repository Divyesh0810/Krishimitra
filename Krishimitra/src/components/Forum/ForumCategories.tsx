import React from 'react';
import { Users, Sprout, ShoppingCart, BookOpen, Heart, Leaf } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Organic Farming',
    icon: Leaf,
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    members: 1234,
    topics: 156
  },
  {
    id: 2,
    name: 'Market Discussion',
    icon: ShoppingCart,
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    members: 892,
    topics: 98
  },
  {
    id: 3,
    name: 'Farming Tips',
    icon: Sprout,
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
    members: 1567,
    topics: 234
  },
  {
    id: 4,
    name: 'Learning Resources',
    icon: BookOpen,
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    members: 678,
    topics: 87
  },
  {
    id: 5,
    name: 'Community Support',
    icon: Heart,
    color: 'text-red-600',
    bgColor: 'bg-red-100',
    members: 2341,
    topics: 312
  }
];

const ForumCategories = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <div
            key={category.id}
            className="border rounded-lg p-6 hover:shadow-lg transition cursor-pointer"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-full ${category.bgColor}`}>
                <Icon className={category.color} size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Users size={16} />
                    {category.members} members
                  </span>
                  <span>{category.topics} topics</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-gray-50 text-gray-700 py-2 rounded-lg hover:bg-gray-100 transition">
              View Discussions
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ForumCategories;