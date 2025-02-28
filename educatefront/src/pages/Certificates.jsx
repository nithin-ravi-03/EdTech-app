// src/pages/Certificate.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiDownload, FiArrowLeft } from "react-icons/fi";
import courses from "../data/courses";

const Certificate = () => {
  const [certificates, setCertificates] = useState([]);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  useEffect(() => {
    // Get certificates from localStorage
    const storedCertificates = JSON.parse(localStorage.getItem('certificates') || '[]');
    setCertificates(storedCertificates);
    
    if (storedCertificates.length > 0) {
      setSelectedCertificate(storedCertificates[0]);
    }
  }, []);

  const getCourseDetails = (courseId) => {
    return courses.find(course => course.id === courseId) || {};
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <Link to="/profile" className="btn btn-secondary flex items-center">
            <FiArrowLeft className="mr-2" /> Back to Profile
          </Link>
        </div>
        
        <h1 className="text-3xl font-bold mb-8">Your Certificates</h1>
        
        {certificates.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h2 className="text-xl mb-4">You haven't earned any certificates yet.</h2>
            <Link to="/courses" className="btn btn-primary">
              Browse Courses
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">My Certificates</h2>
                <div className="space-y-3">
                  {certificates.map((cert) => (
                    <div 
                      key={cert.id}
                      className={`p-3 rounded-lg cursor-pointer ${
                        selectedCertificate?.id === cert.id ? "bg-primary-50 border border-primary-100" : "hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedCertificate(cert)}
                    >
                      <h3 className="font-medium">{cert.title}</h3>
                      <p className="text-sm text-gray-500">Issued: {cert.issueDate}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              {selectedCertificate && (
                <div className="bg-white rounded-lg shadow-md p-8">
                  <div className="border-4 border-primary-100 p-8 rounded-lg">
                    <div className="text-center">
                      <h2 className="text-3xl font-bold text-primary-600 mb-2">Certificate of Completion</h2>
                      <p className="text-lg mb-8">This certifies that</p>
                      <p className="text-2xl font-semibold mb-8">John Doe</p>
                      <p className="text-lg mb-8">has successfully completed the course</p>
                      <p className="text-2xl font-bold mb-8">{selectedCertificate.title}</p>
                      <p className="text-lg mb-4">Issued on: {selectedCertificate.issueDate}</p>
                      <p className="text-sm text-gray-500">Credential ID: {selectedCertificate.credentialID}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-4">
                    <button className="btn btn-secondary flex items-center">
                      <FiDownload className="mr-2" /> Download Certificate
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificate;