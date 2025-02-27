import { useState } from 'react'
import { FiAward, FiDownload, FiShare2, FiCalendar, FiCheckCircle } from 'react-icons/fi'

const Certificates = () => {
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      title: "Web Development Fundamentals",
      issueDate: "2025-03-15",
      validUntil: "2028-03-15",
      credentialID: "WD-2025-78945",
      image: "https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 2,
      title: "Data Science Essentials",
      issueDate: "2025-02-10",
      validUntil: "2028-02-10",
      credentialID: "DS-2025-45678",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    },
    {
      id: 3,
      title: "UI/UX Design Principles",
      issueDate: "2025-01-20",
      validUntil: "2028-01-20",
      credentialID: "UX-2025-12345",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    }
  ])
  
  const [showVerifyModal, setShowVerifyModal] = useState(false)
  const [verificationCode, setVerificationCode] = useState('')
  const [verificationResult, setVerificationResult] = useState(null)
  
  const handleVerify = (e) => {
    e.preventDefault()
    // Simulate verification process
    setTimeout(() => {
      if (verificationCode.length > 5) {
        setVerificationResult({
          valid: true,
          certificate: {
            title: "Web Development Fundamentals",
            issueDate: "2025-03-15",
            recipient: "John Doe",
            issuer: "Auro.edu"
          }
        })
      } else {
        setVerificationResult({
          valid: false,
          message: "Invalid certificate ID. Please check and try again."
        })
      }
    }, 1000)
  }

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Your Certificates</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            View and manage your earned certificates. Share them with potential employers or verify their authenticity.
          </p>
          
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={() => setShowVerifyModal(true)}
              className="btn bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 flex items-center justify-center"
            >
              <FiCheckCircle className="mr-2" /> Verify a Certificate
            </button>
          </div>
        </div>
        
        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map(certificate => (
              <div key={certificate.id} className="card overflow-hidden group">
                <div className="h-48 overflow-hidden mb-4 relative">
                  <img 
                    src={certificate.image} 
                    alt={certificate.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-bold">{certificate.title}</h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <FiCalendar className="mr-2" /> Issued on: {certificate.issueDate}
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <FiAward className="mr-2" /> Credential ID: {certificate.credentialID}
                  </div>
                  
                  <div className="flex justify-between gap-2">
                    <button className="btn btn-primary flex-1 flex items-center justify-center">
                      <FiDownload className="mr-2" /> Download
                    </button>
                    <button className="btn btn-secondary flex-1 flex items-center justify-center">
                      <FiShare2 className="mr-2" /> Share
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <div className="bg-gray-100 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <FiAward className="h-10 w-10 text-gray-500" />
            </div>
            <h3 className="text-2xl font-bold mb-2">No Certificates Yet</h3>
            <p className="text-gray-600 mb-6">
              Complete courses to earn certificates that showcase your skills and achievements.
            </p>
            <button className="btn btn-primary">
              Explore Courses
            </button>
          </div>
        )}
        
        {/* Verify Certificate Modal */}
        {showVerifyModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-md mx-4 relative">
              <button 
                onClick={() => {
                  setShowVerifyModal(false)
                  setVerificationResult(null)
                  setVerificationCode('')
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <FiCheckCircle className="h-6 w-6" />
              </button>
              
              <h2 className="text-2xl font-bold mb-6 text-center">
                Verify Certificate
              </h2>
              
              <form onSubmit={handleVerify} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Certificate ID or Verification Code
                  </label>
                  <input
                    type="text"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="input"
                    placeholder="Enter certificate ID"
                    required
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full btn btn-primary py-3"
                >
                  Verify
                </button>
              </form>
              
              {verificationResult && (
                <div className={`mt-6 p-4 rounded-lg ${verificationResult.valid ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                  {verificationResult.valid ? (
                    <div>
                      <div className="flex items-center text-green-600 mb-2">
                        <FiCheckCircle className="mr-2" /> Valid Certificate
                      </div>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Title:</strong> {verificationResult.certificate.title}
                      </p>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Issued to:</strong> {verificationResult.certificate.recipient}
                      </p>
                      <p className="text-sm text-gray-700 mb-1">
                        <strong>Issued on:</strong> {verificationResult.certificate.issueDate}
                      </p>
                      <p className="text-sm text-gray-700">
                        <strong>Issuer:</strong> {verificationResult.certificate.issuer}
                      </p>
                    </div>
                  ) : (
                    <div className="text-red-600">
                      {verificationResult.message}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Certificates