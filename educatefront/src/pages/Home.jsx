import { Link } from 'react-router-dom'
import { FiArrowRight, FiBook, FiUsers, FiAward, FiCheck } from 'react-icons/fi'

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Learn, Grow, and Get Certified
              </h1>
              <p className="text-xl mb-8">
                Expand your knowledge and skills with our comprehensive courses and earn recognized certificates.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/courses" className="btn bg-white text-primary-600 hover:bg-gray-100">
                  Explore Courses
                </Link>
                <Link to="/community" className="btn bg-transparent border-2 border-white hover:bg-white hover:text-primary-600">
                  Join Community
                </Link>
              </div>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80" 
                alt="Students learning" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Auro.edu?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive learning experience with features designed to help you succeed.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card text-center">
              <div className="bg-primary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiBook className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Courses</h3>
              <p className="text-gray-600">
                Access high-quality courses created by industry experts and designed for effective learning.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-secondary-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiUsers className="h-8 w-8 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Active Community</h3>
              <p className="text-gray-600">
                Join our vibrant community of learners to share knowledge, ask questions, and collaborate.
              </p>
            </div>
            
            <div className="card text-center">
              <div className="bg-accent-100 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FiAward className="h-8 w-8 text-accent-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Recognized Certificates</h3>
              <p className="text-gray-600">
                Earn certificates that are recognized by employers and showcase your achievements.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Popular Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Popular Courses</h2>
            <Link to="/courses" className="flex items-center text-primary-600 hover:text-primary-800 font-medium">
              View All <FiArrowRight className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development Fundamentals",
                category: "Programming",
                level: "Beginner",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
              },
              {
                title: "Data Science Essentials",
                category: "Data Science",
                level: "Intermediate",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              },
              {
                title: "Mobile App Development",
                category: "Programming",
                level: "Advanced",
                image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              }
            ].map((course, index) => (
              <div key={index} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden mb-4">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-primary-600">{course.category}</span>
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded-full">{course.level}</span>
                </div>
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <Link to="/courses" className="btn btn-primary w-full">
                  Enroll Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Hear from our students about their learning experience with Auro.edu.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "Web Developer",
                image: "https://randomuser.me/api/portraits/women/44.jpg",
                quote: "The courses at Auro.edu helped me transition from a beginner to a professional web developer. The content is well-structured and easy to follow."
              },
              {
                name: "Michael Chen",
                role: "Data Scientist",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                quote: "I completed the Data Science track and immediately applied what I learned to my job. The practical exercises and projects were incredibly valuable."
              },
              {
                name: "Emily Rodriguez",
                role: "UX Designer",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                quote: "The UX Design course was comprehensive and up-to-date with industry standards. The certificate helped me land my dream job!"
              }
            ].map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent-600 to-accent-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Join thousands of students who are already learning and growing with Auro.edu.
          </p>
          <Link to="/courses" className="btn bg-white text-accent-700 hover:bg-gray-100 px-8 py-3 text-lg">
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Home