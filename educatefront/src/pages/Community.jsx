import { useState } from 'react'
import { FiMessageSquare, FiHeart, FiShare2, FiUser, FiClock, FiThumbsUp, FiThumbsDown, FiSend, FiFilter } from 'react-icons/fi'

const Community = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      type: 'question',
      title: 'How to implement authentication in React?',
      content: 'I\'m building a React application and need to implement user authentication. What are the best practices and libraries to use for this purpose?',
      author: {
        name: 'Sarah Johnson',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        role: 'Student'
      },
      date: '2025-04-08',
      likes: 24,
      comments: [
        {
          id: 1,
          author: {
            name: 'Michael Chen',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            role: 'Instructor'
          },
          content: 'I recommend using Firebase Authentication or Auth0. They provide easy-to-use SDKs and handle most of the complexity for you.',
          date: '2025-04-08',
          likes: 8
        },
        {
          id: 2,
          author: {
            name: 'Emily Rodriguez',
            avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
            role: 'Student'
          },
          content: 'I\'ve had success with JWT authentication implemented with a custom backend. It gives you more control but requires more work.',
          date: '2025-04-09',
          likes: 5
        }
      ]
    },
    {
      id: 2,
      type: 'discussion',
      title: 'The future of web development in 2025',
      content: 'With the rapid advancement of AI and new frameworks, what do you think the landscape of web development will look like by the end of 2025? Will traditional roles still exist?',
      author: {
        name: 'David Wilson',
        avatar: 'https://randomuser.me/api/portraits/men/46.jpg',
        role: 'Student'
      },
      date: '2025-04-05',
      likes: 42,
      comments: [
        {
          id: 1,
          author: {
            name: 'Lisa Thompson',
            avatar: 'https://randomuser.me/api/portraits/women/22.jpg',
            role: 'Instructor'
          },
          content: 'I believe AI will augment developers rather than replace them. We\'ll see more focus on problem-solving and less on repetitive coding tasks.',
          date: '2025-04-06',
          likes: 15
        }
      ]
    },
    {
      id: 3,
      type: 'resource',
      title: 'Free resources for learning data visualization',
      content: 'I\'ve compiled a list of free resources for learning data visualization with D3.js and other libraries. These helped me a lot in my journey.',
      author: {
        name: 'Alex Martinez',
        avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
        role: 'Student'
      },
      date: '2025-04-03',
      likes: 56,
      comments: []
    }
  ])
  
  const [activePost, setActivePost] = useState(null)
  const [newComment, setNewComment] = useState('')
  const [filter, setFilter] = useState('all')
  
  const handleOpenPost = (postId) => {
    setActivePost(posts.find(post => post.id === postId))
  }
  
  const handleClosePost = () => {
    setActivePost(null)
    setNewComment('')
  }
  
  const handleAddComment = (e) => {
    e.preventDefault()
    if (!newComment.trim()) return
    
    const updatedPosts = posts.map(post => {
      if (post.id === activePost.id) {
        const newCommentObj = {
          id: post.comments.length + 1,
          author: {
            name: 'You',
            avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
            role: 'Student'
          },
          content: newComment,
          date: new Date().toISOString().split('T')[0],
          likes: 0
        }
        return {
          ...post,
          comments: [...post.comments, newCommentObj]
        }
      }
      return post
    })
    
    setPosts(updatedPosts)
    setActivePost(updatedPosts.find(post => post.id === activePost.id))
    setNewComment('')
  }
  
  const handleLikePost = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.likes + 1
        }
      }
      return post
    })
    
    setPosts(updatedPosts)
    if (activePost && activePost.id === postId) {
      setActivePost(updatedPosts.find(post => post.id === postId))
    }
  }
  
  const filteredPosts = filter === 'all' 
    ? posts 
    : posts.filter(post => post.type === filter)

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with fellow learners, ask questions, share resources, and participate in discussions.
          </p>
        </div>
        
        {/* Filters and Create Post */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <FiFilter className="mr-2 text-gray-500" />
              <span className="mr-2 text-gray-700">Filter by:</span>
              <div className="flex space-x-2">
                <button 
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filter === 'all' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button 
                  onClick={() => setFilter('question')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filter === 'question' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Questions
                </button>
                <button 
                  onClick={() => setFilter('discussion')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filter === 'discussion' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Discussions
                </button>
                <button 
                  onClick={() => setFilter('resource')}
                  className={`px-3 py-1 rounded-full text-sm ${
                    filter === 'resource' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Resources
                </button>
              </div>
            </div>
            
            <button className="btn btn-primary">
              Create New Post
            </button>
          </div>
        </div>
        
        {/* Posts List */}
        <div className="space-y-6">
          {filteredPosts.length > 0 ? (
            filteredPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start">
                    <img 
                      src={post.author.avatar} 
                      alt={post.author.name} 
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div className="flex-grow">
                      <div className="flex items-center mb-1">
                        <h3 className="font-bold mr-2">{post.author.name}</h3>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                          {post.author.role}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <FiClock className="mr-1" /> {post.date}
                      </div>
                      
                      <div className="mb-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          post.type === 'question' ? 'bg-blue-100 text-blue-700' :
                          post.type === 'discussion' ? 'bg-purple-100 text-purple-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                        </span>
                      </div>
                      
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="text-gray-700 mb-4">{post.content}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <button 
                            onClick={() => handleLikePost(post.id)}
                            className="flex items-center text-gray-500 hover:text-primary-600"
                          >
                            <FiHeart className="mr-1" /> {post.likes}
                          </button>
                          <button 
                            onClick={() => handleOpenPost(post.id)}
                            className="flex items-center text-gray-500 hover:text-primary-600"
                          >
                            <FiMessageSquare className="mr-1" /> {post.comments.length}
                          </button>
                          <button className="flex items-center text-gray-500 hover:text-primary-600">
                            <FiShare2 className="mr-1" /> Share
                          </button>
                        </div>
                        
                        <button 
                          onClick={() => handleOpenPost(post.id)}
                          className="text-primary-600 hover:text-primary-800 font-medium"
                        >
                          {post.comments.length > 0 ? 'View all comments' : 'Add a comment'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <div className="bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <FiMessageSquare className="h-10 w-10 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">No posts found</h3>
              <p className="text-gray-600 mb-6">
                There are no posts matching your current filter.
              </p>
              <button 
                onClick={() => setFilter('all')}
                className="btn btn-primary"
              >
                View All Posts
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Post Detail Modal */}
      {activePost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
            <div className="p-6 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-xl font-bold">{activePost.title}</h2>
              <button 
                onClick={handleClosePost}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto p-6">
              <div className="flex items-start mb-6">
                <img 
                  src={activePost.author.avatar} 
                  alt={activePost.author.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="flex items-center mb-1">
                    <h3 className="font-bold mr-2">{activePost.author.name}</h3>
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                      {activePost.author.role}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FiClock className="mr-1" /> {activePost.date}
                  </div>
                  <p className="text-gray-700">{activePost.content}</p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-6">
                <h3 className="font-bold mb-4">
                  {activePost.comments.length} {activePost.comments.length === 1 ? 'Comment' : 'Comments'}
                </h3>
                
                {activePost.comments.length > 0 ? (
                  <div className="space-y-6">
                    {activePost.comments.map(comment => (
                      <div key={comment.id} className="flex items-start">
                        <img 
                          src={comment.author.avatar} 
                          alt={comment.author.name} 
                          className="w-10 h-10 rounded-full mr-3"
                        />
                        <div className="flex-grow bg-gray-50 rounded-lg p-4">
                          <div className="flex items-center mb-1">
                            <h4 className="font-bold mr-2">{comment.author.name}</h4>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {comment.author.role}
                            </span>
                          </div>
                          <div className="flex items-center text-xs text-gray-500 mb-2">
                            <FiClock className="mr-1" /> {comment.date}
                          </div>
                          <p className="text-gray-700 mb-2">{comment.content}</p>
                          <div className="flex items-center text-sm">
                            <button className="flex items-center text-gray-500 hover:text-primary-600 mr-3">
                              <FiThumbsUp className="mr-1" /> {comment.likes}
                            </button>
                            <button className="flex items-center text-gray-500 hover:text-primary-600">
                              <FiThumbsDown className="mr-1" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">
                    No comments yet. Be the first to comment!
                  </p>
                )}
              </div>
            </div>
            
            <div className="p-6 border-t border-gray-200">
              <form onSubmit={handleAddComment}>
                <div className="flex items-start">
                  <img 
                    src="https://randomuser.me/api/portraits/men/32.jpg" 
                    alt="Your avatar" 
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div className="flex-grow relative">
                    <textarea
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      placeholder="Add a comment..."
                      className="input py-3 pr-12"
                      rows="2"
                      required
                    ></textarea>
                    <button 
                      type="submit"
                      className="absolute right-3 bottom-3 text-primary-600 hover:text-primary-800"
                    >
                      <FiSend className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Community