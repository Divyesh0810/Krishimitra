import React from 'react';
import { MessageSquare, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

interface Post {
  id: number;
  author: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  comments: number;
  timestamp: string;
  isLiked: boolean;
}

const ForumPosts = ({ searchQuery }: { searchQuery: string }) => {
  const [posts, setPosts] = React.useState<Post[]>([
    {
      id: 1,
      author: 'John Farmer',
      title: 'Best practices for organic tomato growing',
      content: "I have been growing organic tomatoes for 5 years now, and I would like to share some tips...",
      category: 'Organic Farming',
      likes: 24,
      comments: 12,
      timestamp: '2h ago',
      isLiked: false
    },
    {
      id: 2,
      author: 'Sarah Consumer',
      title: 'Looking for local honey suppliers',
      content: 'Can anyone recommend good local honey suppliers in the Portland area?',
      category: 'Local Products',
      likes: 15,
      comments: 8,
      timestamp: '4h ago',
      isLiked: false
    }
  ]);

  const [newPost, setNewPost] = React.useState({ title: '', content: '', category: '' });
  const [isPostingOpen, setIsPostingOpen] = React.useState(false);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  const handleSubmitPost = (e: React.FormEvent) => {
    e.preventDefault();
    const newPostObj = {
      id: posts.length + 1,
      author: 'Current User',
      title: newPost.title,
      content: newPost.content,
      category: newPost.category,
      likes: 0,
      comments: 0,
      timestamp: 'Just now',
      isLiked: false
    };
    setPosts([newPostObj, ...posts]);
    setNewPost({ title: '', content: '', category: '' });
    setIsPostingOpen(false);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <button
        onClick={() => setIsPostingOpen(!isPostingOpen)}
        className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition flex items-center justify-center gap-2"
      >
        <MessageSquare size={20} />
        Create New Post
      </button>

      {isPostingOpen && (
        <form onSubmit={handleSubmitPost} className="bg-gray-50 p-4 rounded-lg space-y-4">
          <input
            type="text"
            placeholder="Post title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          />
          <textarea
            placeholder="Post content"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            className="w-full p-2 border rounded-lg h-32"
            required
          />
          <select
            value={newPost.category}
            onChange={(e) => setNewPost({ ...newPost, category: e.target.value })}
            className="w-full p-2 border rounded-lg"
            required
          >
            <option value="">Select category</option>
            <option value="Organic Farming">Organic Farming</option>
            <option value="Local Products">Local Products</option>
            <option value="Farming Tips">Farming Tips</option>
          </select>
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setIsPostingOpen(false)}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Post
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {filteredPosts.map((post) => (
          <div key={post.id} className="bg-white border rounded-lg p-4 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{post.title}</h3>
                <p className="text-sm text-gray-600">
                  Posted by {post.author} · {post.timestamp}
                </p>
              </div>
              <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                {post.category}
              </span>
            </div>
            <p className="text-gray-700 mb-4">{post.content}</p>
            <div className="flex items-center gap-4 text-gray-600">
              <button
                onClick={() => handleLike(post.id)}
                className={`flex items-center gap-1 ${
                  post.isLiked ? 'text-green-600' : ''
                }`}
              >
                <ThumbsUp size={18} />
                <span>{post.likes}</span>
              </button>
              <button className="flex items-center gap-1">
                <MessageCircle size={18} />
                <span>{post.comments}</span>
              </button>
              <button className="flex items-center gap-1">
                <Share2 size={18} />
                <span>Share</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForumPosts;