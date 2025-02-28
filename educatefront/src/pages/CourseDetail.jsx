// src/pages/CourseDetail.jsx
import { useState, useEffect } from "react";
import { FiCheck, FiBook, FiClock, FiArrowLeft } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

import { useParams, Link } from "react-router-dom";
import courses from "../data/courses"; // Import default export

const CourseDetail = () => {
  const { courseId } = useParams();
  const course = courses.find((c) => c.id === parseInt(courseId));
  
  const [currentChapter, setCurrentChapter] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [chapterCompleted, setChapterCompleted] = useState({});
  const [showFinalExam, setShowFinalExam] = useState(false);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  useEffect(() => {
    if (course && course.chapters && course.chapters.length > 0) {
      setCurrentChapter(course.chapters[0]);
    }
  }, [course]);

  if (!course) {
    return (
      <div className="py-12 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold">Course not found</h2>
          <Link to="/courses" className="btn btn-primary mt-4">Back to Courses</Link>
        </div>
      </div>
    );
  }

  if (!currentChapter) {
    return <div className="text-center py-12">Loading course...</div>;
  }

  const handleQuizSubmit = () => {
    const correctAnswers = currentChapter.quiz.questions.filter(
      (q) => quizAnswers[q.id] === q.correctAnswer
    ).length;
    const score = (correctAnswers / currentChapter.quiz.questions.length) * 100;
    const passed = score >= 70;
    
    setQuizResult(passed ? "Passed" : "Failed");
    
    if (passed) {
      setChapterCompleted({
        ...chapterCompleted,
        [currentChapter.id]: true
      });
      
      // Check if all chapters are completed
      const allCompleted = course.chapters.every(
        chapter => chapterCompleted[chapter.id] || chapter.id === currentChapter.id
      );
      
      if (allCompleted) {
        setShowFinalExam(true);
      }
    }
  };
  
  const handleFinalExamSubmit = () => {
    const correctAnswers = course.finalExam.questions.filter(
      (q) => quizAnswers[q.id] === q.correctAnswer
    ).length;
    const score = (correctAnswers / course.finalExam.questions.length) * 100;
    
    if (score >= 70) {
      setQuizResult("Passed");
      setCertificateGenerated(true);
      
      // Generate certificate data
      const newCertificate = {
        id: Date.now(),
        courseId: course.id,
        title: course.title,
        issueDate: new Date().toISOString().split("T")[0],
        credentialID: `CERT-${course.id}-${Date.now()}`,
      };
      
      // Save certificate to localStorage
      const certificates = JSON.parse(localStorage.getItem('certificates') || '[]');
      certificates.push(newCertificate);
      localStorage.setItem('certificates', JSON.stringify(certificates));
    } else {
      setQuizResult("Failed");
    }
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-6">
          <Link to="/courses" className="btn btn-secondary flex items-center">
            <FiArrowLeft className="mr-2" /> Back to Courses
          </Link>
        </div>
        <h1 className="text-3xl font-bold mb-6">{course.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            {certificateGenerated ? (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h2 className="text-2xl font-bold mb-4 text-green-600">Congratulations!</h2>
                <p className="text-xl mb-4">You've completed this course and earned a certificate!</p>
                <Link to="/certificate" className="btn btn-primary">
                  View Certificate
                </Link>
              </div>
            ) : showFinalExam ? (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold mb-4">Final Exam</h2>
                {course.finalExam.questions.map((q) => (
                  <div key={q.id} className="mb-4">
                    <p className="font-medium mb-2">{q.question}</p>
                    {q.options.map((option, index) => (
                      <label key={index} className="block mb-2">
                        <input
                          type="radio"
                          name={`question-${q.id}`}
                          value={option}
                          onChange={() =>
                            setQuizAnswers({ ...quizAnswers, [q.id]: option })
                          }
                          className="mr-2"
                        />
                        {option}
                      </label>
                    ))}
                  </div>
                ))}
                <button
                  onClick={handleFinalExamSubmit}
                  className="btn btn-primary"
                >
                  Submit Final Exam
                </button>
                {quizResult && (
                  <div className={`mt-4 font-medium ${quizResult === "Passed" ? "text-green-600" : "text-red-600"}`}>
                    {quizResult}
                  </div>
                )}
              </div>
            ) : (
              <>
                <h2 className="text-xl font-bold mb-4">{currentChapter.title}</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <FiClock className="mr-2" /> {currentChapter.duration}
                  </div>
                  <div className="prose max-w-none mb-6">
                    <p>This chapter covers essential concepts and techniques related to {currentChapter.title}. 
                    Complete the quiz below to test your understanding.</p>
                  </div>
                  
                  {!chapterCompleted[currentChapter.id] && (
                    <div className="mt-6">
                      <h3 className="text-lg font-bold mb-4">Chapter Quiz</h3>
                      {currentChapter.quiz.questions.map((q) => (
                        <div key={q.id} className="mb-4">
                          <p className="font-medium mb-2">{q.question}</p>
                          {q.options.map((option, index) => (
                            <label key={index} className="block mb-2">
                              <input
                                type="radio"
                                name={`question-${q.id}`}
                                value={option}
                                onChange={() =>
                                  setQuizAnswers({ ...quizAnswers, [q.id]: option })
                                }
                                className="mr-2"
                              />
                              {option}
                            </label>
                          ))}
                        </div>
                      ))}
                      <button
                        onClick={handleQuizSubmit}
                        className="btn btn-primary"
                      >
                        Submit Quiz
                      </button>
                      {quizResult && (
                        <div className={`mt-4 font-medium ${quizResult === "Passed" ? "text-green-600" : "text-red-600"}`}>
                          {quizResult}
                        </div>
                      )}
                    </div>
                  )}
                  
                  {chapterCompleted[currentChapter.id] && (
                    <div className="mt-4 bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-center text-green-600">
                        <FiCheck className="mr-2" /> 
                        <span className="font-medium">Chapter Completed</span>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Course Chapters</h3>
              {course.chapters.map((chapter) => (
                <div
                  key={chapter.id}
                  className={`flex items-center justify-between p-3 rounded-lg cursor-pointer mb-2 ${
                    currentChapter.id === chapter.id ? "bg-primary-50 border border-primary-100" : "hover:bg-gray-50"
                  }`}
                  onClick={() => !showFinalExam && setCurrentChapter(chapter)}
                >
                  <div className="flex items-center">
                    <FiBook className="mr-2 text-gray-500" />
                    <span className="truncate">{chapter.title}</span>
                  </div>
                  {chapterCompleted[chapter.id] && (
                    <FiCheck className="text-green-500 flex-shrink-0" />
                  )}
                </div>
              ))}
              
              {Object.keys(chapterCompleted).length === course.chapters.length && !showFinalExam && !certificateGenerated && (
                <button 
                  onClick={() => setShowFinalExam(true)}
                  className="btn btn-primary w-full mt-4"
                >
                  Take Final Exam
                </button>
              )}
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 mt-6">
              <h3 className="text-xl font-bold mb-4">Course Information</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium">{course.level}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating:</span>
                  <span className="font-medium flex items-center">
                    <FiStar className="text-yellow-500 mr-1" /> {course.rating}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Students:</span>
                  <span className="font-medium">{course.students}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;