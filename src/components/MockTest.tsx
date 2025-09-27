import React, { useState } from 'react';
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const MockTest = ({ onClose }: { onClose: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(10).fill(-1));
  const [showResults, setShowResults] = useState(false);
  const [testCompleted, setTestCompleted] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the main purpose of the IELTS test?",
      options: [
        "To test English grammar only",
        "To assess English language proficiency for study/work abroad",
        "To teach English vocabulary",
        "To provide entertainment"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "How many sections are there in the IELTS Listening test?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2
    },
    {
      id: 3,
      question: "What is the maximum band score in IELTS?",
      options: ["8", "9", "10", "12"],
      correctAnswer: 1
    },
    {
      id: 4,
      question: "Which of the following is NOT a part of IELTS test?",
      options: ["Listening", "Reading", "Writing", "Grammar"],
      correctAnswer: 3
    },
    {
      id: 5,
      question: "How long is the IELTS Speaking test?",
      options: ["10-12 minutes", "11-14 minutes", "15-20 minutes", "20-25 minutes"],
      correctAnswer: 1
    },
    {
      id: 6,
      question: "In IELTS Writing Task 1 (Academic), you typically need to:",
      options: [
        "Write an essay",
        "Describe visual information",
        "Write a letter",
        "Answer multiple choice questions"
      ],
      correctAnswer: 1
    },
    {
      id: 7,
      question: "What is the minimum word count for IELTS Writing Task 2?",
      options: ["200 words", "250 words", "300 words", "350 words"],
      correctAnswer: 1
    },
    {
      id: 8,
      question: "How many parts are there in the IELTS Speaking test?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 1
    },
    {
      id: 9,
      question: "Which version of IELTS is required for UK visa applications?",
      options: ["IELTS Academic", "IELTS General Training", "IELTS UKVI", "Any IELTS version"],
      correctAnswer: 2
    },
    {
      id: 10,
      question: "How long are IELTS test results valid?",
      options: ["1 year", "2 years", "3 years", "5 years"],
      correctAnswer: 1
    }
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const submitTest = () => {
    setShowResults(true);
    setTestCompleted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const resetTest = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(10).fill(-1));
    setShowResults(false);
    setTestCompleted(false);
  };

  const getScoreMessage = (score: number) => {
    if (score >= 9) return "Excellent! You're ready for IELTS!";
    if (score >= 7) return "Great job! You have good IELTS knowledge.";
    if (score >= 5) return "Good effort! Keep studying to improve.";
    return "You need more preparation. Don't give up!";
  };

  if (testCompleted && showResults) {
    const score = calculateScore();
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Test Results</h2>
            <div className="text-6xl font-bold text-blue-600 mb-2">{score}/10</div>
            <p className="text-lg text-gray-600">{getScoreMessage(score)}</p>
          </div>

          <div className="space-y-4 mb-6">
            {questions.map((question, index) => {
              const userAnswer = selectedAnswers[index];
              const isCorrect = userAnswer === question.correctAnswer;
              
              return (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start space-x-3 mb-3">
                    {isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        Question {index + 1}: {question.question}
                      </h3>
                      <div className="space-y-2">
                        {question.options.map((option, optionIndex) => {
                          let className = "p-2 rounded border ";
                          
                          if (optionIndex === question.correctAnswer) {
                            className += "bg-green-100 border-green-500 text-green-800";
                          } else if (optionIndex === userAnswer && userAnswer !== question.correctAnswer) {
                            className += "bg-red-100 border-red-500 text-red-800";
                          } else {
                            className += "bg-gray-50 border-gray-200 text-gray-700";
                          }
                          
                          return (
                            <div key={optionIndex} className={className}>
                              {option}
                              {optionIndex === question.correctAnswer && (
                                <span className="ml-2 text-green-600 font-semibold">✓ Correct</span>
                              )}
                              {optionIndex === userAnswer && userAnswer !== question.correctAnswer && (
                                <span className="ml-2 text-red-600 font-semibold">✗ Your answer</span>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center space-x-4">
            <button
              onClick={resetTest}
              className="flex items-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <RotateCcw className="h-5 w-5" />
              <span>Take Test Again</span>
            </button>
            <button
              onClick={onClose}
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">IELTS Mock Test</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <div className="text-sm text-gray-600">
              Score: {calculateScore()}/{questions.length}
            </div>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            {questions[currentQuestion].question}
          </h3>
          
          <div className="space-y-3">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full text-left p-4 rounded-lg border transition-colors ${
                  selectedAnswers[currentQuestion] === index
                    ? 'border-blue-500 bg-blue-50 text-blue-900'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <span className="font-medium mr-3">
                  {String.fromCharCode(65 + index)}.
                </span>
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          <div className="flex space-x-3">
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={submitTest}
                className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-semibold"
              >
                Submit Test
              </button>
            ) : (
              <button
                onClick={nextQuestion}
                disabled={selectedAnswers[currentQuestion] === -1}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockTest;