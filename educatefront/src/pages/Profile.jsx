import { useState } from 'react'
import { FiUser, FiMail, FiPhone, FiMapPin, FiEdit2, FiBook, FiAward, FiActivity, FiSave, FiX } from 'react-icons/fi'

const Profile = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Frontend developer passionate about creating beautiful and functional user interfaces. Always learning and exploring new technologies.',
    profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
    coverImage: 'https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  })
  
  const [isEditing, setIsEditing] = useState(false)
  const [editedUser, setEditedUser] = useState({...user})
  
  const [activeTab, setActiveTab] = useState('courses')
  
  const enrolledCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      progress: 85,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
    },
    {
      id: 2,
      title: "Data Science Essentials",
      progress: 42,
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      progress: 16,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ]
  
  const certificates = [
    {
      id: 1,
      title: "JavaScript Mastery",
      issueDate: "2024-12-10",
      credentialID: "JS-2024-12345"
    },
    {
      id: 2,
      title: "React Development",
      issueDate: "2024-11-05",
      credentialID: "RD-2024-67890"
    }
  ]
  
  const activities = [
    {
      id: 1,
      type: "course_progress",
      title: "Completed Module 5 in Web Development Fundamentals",
      date: "2025-04-10"
    },
    {
      id: 2,
      type: "certificate",
      title: "Earned JavaScript Mastery Certificate",
      date: "2024-12-10"
    },
    {
      id: 3,
      type: "course_enrollment",
      title: "Enrolled in Data Science Essentials",
      date: "2024-11-20"
    },
    {
      id: 4,
      type: "community",
      title: "Posted a question in Community Forum",
      date: "2024-11-15"
    },
    {
      id: 5,
      type: "certificate",
      title: "Earned React Development Certificate",
      date: "2024-11-05"
    }
  ]
  
  const handleInputChange = (e) => {
    setEditedUser({
      ...editedUser,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSaveProfile = () => {
    setUser({...editedUser})
    setIsEditing(false)
  }
  
  const handleCancelEdit = () => {
    setEditedUser({...user})
    setIsEditing(false)
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Cover Image and Profile Info */}
      <div className="relative">
        <div className="h-64 w-full overflow-hidden">
          <img 
            src={user.coverImage} 
            alt="Cover" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16 sm:-mt-24 mb-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="relative -mt-20 md:-mt-24">
                  <img 
                    src={user.profileImage} 
                    alt={user.name} 
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                </div>
                
                <div className="flex-grow text-center md:text-left">
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={editedUser.name}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={editedUser.email}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="text"
                          name="phone"
                          value={editedUser.phone}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                          type="text"
                          name="location"
                          value={editedUser.location}
                          onChange={handleInputChange}
                          className="input"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
                        <textarea
                          name="bio"
                          value={editedUser.bio}
                          onChange={handleInputChange}
                          rows="3"
                          className="input"
                        ></textarea>
                      </div>
                      
                      <div className="flex space-x-4">
                        <button 
                          onClick={handleSaveProfile}
                          className="btn btn-primary flex items-center"
                        >
                          <FiSave className="mr-2" /> Save Changes
                        </button>
                        <button 
                          onClick={handleCancelEdit}
                          className="btn bg-gray-200 text-gray-800 hover:bg-gray-300 flex items-center"
                        >
                          <FiX className="mr-2" /> Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <h1 className="text-3xl font-bold mb-2 md:mb-0">{user.name}</h1>
                        <button 
                          onClick={() => setIsEditing(true)}
                          className="btn btn-primary flex items-center justify-center"
                        >
                          <FiEdit2 className="mr-2" /> Edit Profile
                        </button>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4 mt-4">
                        <div className="flex items-center text-gray-600">
                          <FiMail className="mr-2" /> {user.email}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FiPhone className="mr-2" /> {user.phone}
                        </div>
                        <div className="flex items-center text-gray-600">
                          <FiMapPin className="mr-2" /> {user.location}
                        </div>
                      </div>
                      
                      <p className="mt-4 text-gray-700">{user.bio}</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Tabs and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex">
              <button
                onClick={() => setActiveTab('courses')}
                className={`px-6 py-4 text-sm font-medium flex items-center ${
                  activeTab === 'courses'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FiBook className="mr-2" /> My Courses
              </button>
              <button
                onClick={() => setActiveTab('certificates')}
                className={`px-6 py-4 text-sm font-medium flex items-center ${
                  activeTab === 'certificates'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FiAward className="mr-2" /> Certificates
              </button>
              <button
                onClick={() => setActiveTab('activity')}
                className={`px-6 py-4 text-sm font-medium flex items-center ${
                  activeTab === 'activity'
                    ? 'border-b-2 border-primary-600 text-primary-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <FiActivity className="mr-2" /> Activity
              </button>
            </nav>
          </div>
          
          <div className="p-6">
            {activeTab === 'courses' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">My Courses</h2>
                
                {enrolledCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {enrolledCourses.map(course => (
                      <div key={course.id} className="card overflow-hidden group">
                        <div className="h-40 overflow-hidden">
                          <img 
                            src={course.image} 
                            alt={course.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-4">
                          <h3 className="text-lg font-bold mb-2">{course.title}</h3>
                          <div className="mb-2">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{course.progress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2.5">
                              <div 
                                className="bg-primary-600 h-2.5 rounded-full" 
                                style={{ width: `${course.progress}%` }}
                              ></div>
                            </div>
                          </div>
                          <button className="btn btn-primary w-full mt-2">
                            Continue Learning
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">You haven't enrolled in any courses yet.</p>
                    <button className="btn btn-primary">
                      Explore Courses
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'certificates' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">My Certificates</h2>
                
                {certificates.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificates.map(certificate => (
                      <div key={certificate.id} className="card p-6 border border-gray-200">
                        <div className="flex items-center justify-between mb-4">
                          <div className="bg-primary-100 p-2 rounded-full">
                            <FiAward className="h-6 w-6 text-primary-600" />
                          </div>
                          <div className="text-sm text-gray-500">
                            Issued on {certificate.issueDate}
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-2">{certificate.title}</h3>
                        <p className="text-sm text-gray-500 mb-4">
                          Credential ID: {certificate.credentialID}
                        </p>
                        <div className="flex space-x-2">
                          <button className="btn btn-primary flex-1">
                            View
                          </button>
                          <button className="btn bg-gray-100 text-gray-700 hover:bg-gray-200 flex-1">
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">You haven't earned any certificates yet.</p>
                    <button className="btn btn-primary">
                      Complete a Course
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {activeTab === 'activity' && (
              <div>
                <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
                
                {activities.length > 0 ? (
                  <div className="space-y-4">
                    {activities.map(activity => (
                      <div key={activity.id} className="flex p-4 border-b border-gray-100">
                        <div className={`
                          p-2 rounded-full mr-4 flex-shrink-0
                          ${activity.type === 'course_progress' ? 'bg-blue-100' : ''}
                          ${activity.type === 'certificate' ? 'bg-green-100' : ''}
                          ${activity.type === 'course_enrollment' ? 'bg-purple-100' : ''}
                          ${activity.type === 'community' ? 'bg-yellow-100' : ''}
                        `}>
                          {activity.type === 'course_progress' && <FiBook className="h-5 w-5 text-blue-600" />}
                          {activity.type === 'certificate' && <FiAward className="h-5 w-5 text-green-600" />}
                          {activity.type === 'course_enrollment' && <FiBook className="h-5 w-5 text-purple-600" />}
                          {activity.type === 'community' && <FiUser className="h-5 w-5 text-yellow-600" />}
                        </div>
                        <div>
                          <p className="font-medium">{activity.title}</p>
                          <p className="text-sm text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500">No recent activity to display.</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile