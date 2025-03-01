import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { advancedjQuery } from '../../data/courseContent/advancedjQuery';

const AdvancedjQuery = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState({});
  const [isCourseComplete, setIsCourseComplete] = useState(false);
  const [totalScore, setTotalScore] = useState(0);
  const navigate = useNavigate();

  const handleNextLesson = () => {
    if (currentLesson < advancedjQuery.lessons.length - 1) {
      setCurrentLesson(prev => prev + 1);
    } else {
      setIsCourseComplete(true);
      calculateTotalScore();
    }
  };

  const handleQuizSubmit = (lessonId) => {
    const lesson = advancedjQuery.lessons.find(l => l.id === lessonId);
    const correctAnswers = lesson.quiz.filter(q => q.answer === quizAnswers[q.question]).length;
    const score = (correctAnswers / lesson.quiz.length) * 100;
    setQuizResults({ ...quizResults, [lessonId]: score });
  };

  const calculateTotalScore = () => {
    const scores = Object.values(quizResults);
    const total = scores.reduce((sum, score) => sum + score, 0);
    const averageScore = total / scores.length;
    setTotalScore(averageScore);
  };

  const handleRetakeCourse = () => {
    setCurrentLesson(0);
    setQuizAnswers({});
    setQuizResults({});
    setIsCourseComplete(false);
    setTotalScore(0);
  };

  if (isCourseComplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4">Course Complete!</h2>
          <p className="text-gray-600 mb-6">
            Congratulations! You have completed the course.
          </p>
          <p className="text-lg font-semibold mb-6">
            Your Total Score: <span className="text-primary-600">{totalScore.toFixed(1)}%</span>
          </p>

          {totalScore >= 70 ? (
            <div>
              <div className="mb-6 p-4 bg-green-50 rounded-lg">
                <h3 className="text-xl font-bold text-green-600 mb-2">🎉 You are eligible for a certificate!</h3>
                <p className="text-gray-600">
                  Candidates who achieve distinction will receive guaranteed opportunities with Auroville Investment Management or other companies within the Auro group.
                </p>
              </div>
              <button
                onClick={() => alert("Certificate generation logic here")}
                className="btn btn-primary w-full mb-4"
              >
                Download Certificate
              </button>
            </div>
          ) : (
            <div className="mb-6 p-4 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-red-600 mb-2">😢 Not Eligible for Certificate</h3>
              <p className="text-gray-600">
                You need a score of 70% or above to be eligible for a certificate and sponsorship opportunities.
              </p>
            </div>
          )}

          <div className="flex flex-col gap-4">
            <button
              onClick={handleRetakeCourse}
              className="btn btn-primary"
            >
              Retake Course
            </button>
            <button
              onClick={() => navigate('/courses')}
              className="btn btn-outline"
            >
              Back to Courses
            </button>
          </div>
        </div>
      </div>
    );
  }

  const lesson = advancedjQuery.lessons[currentLesson];

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">{advancedjQuery.title}</h1>
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">{lesson.title}</h2>
          <p className="text-gray-600 mb-4">{lesson.content}</p>
          <div className="mb-4">
            {lesson.quiz.map((q, index) => (
              <div key={index} className="mb-2">
                <p className="font-bold">{q.question}</p>
                {q.options.map((option, i) => (
                  <label key={i} className="block">
                    <input
                      type="radio"
                      name={q.question}
                      value={option}
                      onChange={(e) => setQuizAnswers({ ...quizAnswers, [q.question]: e.target.value })}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
          </div>
          <button
            onClick={() => handleQuizSubmit(lesson.id)}
            className="btn btn-primary"
          >
            Submit Quiz
          </button>
          {quizResults[lesson.id] !== undefined && (
            <p className="mt-4">
              Your score: {quizResults[lesson.id]}%
              {quizResults[lesson.id] === 100 ? (
                <span className="text-green-600 ml-2">🎉 Perfect!</span>
              ) : quizResults[lesson.id] >= 70 ? (
                <span className="text-yellow-600 ml-2">👍 Good job!</span>
              ) : (
                <span className="text-red-600 ml-2">😢 Keep trying!</span>
              )}
            </p>
          )}
        </div>
        <button
          onClick={handleNextLesson}
          className="btn btn-primary"
        >
          {currentLesson < advancedjQuery.lessons.length - 1 ? 'Next Lesson' : 'Finish Course'}
        </button>
      </div>
    </div>
  );
};

export default AdvancedjQuery;