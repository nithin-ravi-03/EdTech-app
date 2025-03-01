// src/pages/CourseContent/RealWorldReactJS.jsx
import React, { useState } from 'react';
import { realWorldReactJS } from '../../data/courseContent/realWorldReactJS';

const RealWorldReactJS = () => {
  const [currentLesson, setCurrentLesson] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResults, setQuizResults] = useState(null);

  const handleNextLesson = () => {
    setCurrentLesson(prev => prev + 1);
  };

  const handleQuizSubmit = (lessonId) => {
    const lesson = realWorldReactJS.lessons.find(l => l.id === lessonId);
    const correctAnswers = lesson.quiz.filter(q => q.answer === quizAnswers[q.question]).length;
    setQuizResults({ lessonId, score: (correctAnswers / lesson.quiz.length) * 100 });
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">{realWorldReactJS.title}</h1>
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">{realWorldReactJS.lessons[currentLesson].title}</h2>
          <p className="text-gray-600 mb-4">{realWorldReactJS.lessons[currentLesson].content}</p>
          <div className="mb-4">
            {realWorldReactJS.lessons[currentLesson].quiz.map((q, index) => (
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
          <button onClick={() => handleQuizSubmit(realWorldReactJS.lessons[currentLesson].id)} className="btn btn-primary">
            Submit Quiz
          </button>
          {quizResults && quizResults.lessonId === realWorldReactJS.lessons[currentLesson].id && (
            <p className="mt-4">Your score: {quizResults.score}%</p>
          )}
        </div>
        <button onClick={handleNextLesson} className="btn btn-primary">
          Next Lesson
        </button>
      </div>
    </div>
  );
};

export default RealWorldReactJS;