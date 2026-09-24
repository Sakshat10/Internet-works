"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

export function QuizSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const questions = [
    {
      question: "What is the Internet?",
      options: [
        "Wi-Fi",
        "A network of networks",
        "Google",
        "A browser",
      ],
      correctAnswer: 1,
      explanation: "The Internet is a global network of interconnected networks that allows devices to communicate and share information.",
    },
    {
      question: "What does DNS help with?",
      options: [
        "Finding the IP address associated with a domain",
        "Charging your phone",
        "Increasing Wi-Fi speed",
        "Creating passwords",
      ],
      correctAnswer: 0,
      explanation: "DNS (Domain Name System) is like the Internet's phonebook - it translates domain names like 'google.com' into IP addresses.",
    },
    {
      question: "What does a router do?",
      options: [
        "Directs network traffic",
        "Stores every website",
        "Creates electricity",
        "Writes programs",
      ],
      correctAnswer: 0,
      explanation: "A router directs network traffic between your devices and the Internet, like a traffic controller for data.",
    },
    {
      question: "What is an IP address used for?",
      options: [
        "Identifying/addressing a network interface/device",
        "Increasing screen brightness",
        "Creating websites",
        "Playing videos",
      ],
      correctAnswer: 0,
      explanation: "An IP address is like a mailing address for devices on a network - it tells data where to go.",
    },
    {
      question: "What are packets?",
      options: [
        "Small units/chunks of data sent across networks",
        "Wi-Fi passwords",
        "Computers",
        "Websites",
      ],
      correctAnswer: 0,
      explanation: "Data is broken into smaller packets that can take different routes across the network and are reassembled at the destination.",
    },
  ];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showResult) return;
    
    setSelectedAnswer(answerIndex);
    setShowResult(true);

    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowResult(false);
    } else {
      setQuizComplete(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setQuizComplete(false);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage === 100) return "text-neon-green";
    if (percentage >= 80) return "text-neon-blue";
    if (percentage >= 60) return "text-neon-purple";
    return "text-neon-pink";
  };

  return (
    <section
      id="section-11"
      className="min-h-screen flex items-center justify-center py-20 px-6 bg-gradient-to-b from-black via-purple-900/10 to-black"
    >
      <div className="max-w-4xl mx-auto w-full">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-6 bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Test Your Knowledge! 🧠
        </motion.h2>

        <motion.p
          className="text-xl text-gray-300 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's see how much you've learned!
        </motion.p>

        {!quizComplete ? (
          <div className="bg-gray-900/50 border border-neon-purple/30 rounded-3xl p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">
                  Question {currentQuestion + 1} of {questions.length}
                </span>
                <span className="text-neon-blue font-semibold">
                  Score: {score}/{questions.length}
                </span>
              </div>
              <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-neon-purple to-neon-pink"
                  initial={{ width: 0 }}
                  animate={{
                    width: `${((currentQuestion + 1) / questions.length) * 100}%`,
                  }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>

            {/* Question */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-3xl font-bold text-white mb-8">
                  {questions[currentQuestion].question}
                </h3>

                {/* Options */}
                <div className="space-y-4 mb-8">
                  {questions[currentQuestion].options.map((option, index) => {
                    const isCorrect =
                      index === questions[currentQuestion].correctAnswer;
                    const isSelected = selectedAnswer === index;
                    const showCorrectAnswer = showResult && isCorrect;
                    const showWrongAnswer = showResult && isSelected && !isCorrect;

                    return (
                      <motion.button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        disabled={showResult}
                        className={`w-full p-6 rounded-xl border-2 text-left text-lg transition-all ${
                          showCorrectAnswer
                            ? "border-neon-green bg-neon-green/20"
                            : showWrongAnswer
                            ? "border-red-500 bg-red-500/20"
                            : isSelected
                            ? "border-neon-purple bg-neon-purple/20"
                            : "border-gray-600 bg-gray-800/50 hover:border-neon-purple/50"
                        }`}
                        whileHover={!showResult ? { scale: 1.02 } : {}}
                        whileTap={!showResult ? { scale: 0.98 } : {}}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-white font-medium">{option}</span>
                          {showCorrectAnswer && (
                            <CheckCircle className="w-6 h-6 text-neon-green" />
                          )}
                          {showWrongAnswer && (
                            <XCircle className="w-6 h-6 text-red-500" />
                          )}
                        </div>
                      </motion.button>
                    );
                  })}
                </div>

                {/* Explanation */}
                <AnimatePresence>
                  {showResult && (
                    <motion.div
                      className={`p-6 rounded-xl mb-6 ${
                        selectedAnswer === questions[currentQuestion].correctAnswer
                          ? "bg-neon-green/10 border border-neon-green/50"
                          : "bg-red-500/10 border border-red-500/50"
                      }`}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                    >
                      <p
                        className={`text-xl font-bold mb-2 ${
                          selectedAnswer === questions[currentQuestion].correctAnswer
                            ? "text-neon-green"
                            : "text-red-400"
                        }`}
                      >
                        {selectedAnswer === questions[currentQuestion].correctAnswer
                          ? "✓ Correct!"
                          : "✗ Not quite right"}
                      </p>
                      <p className="text-gray-300">
                        {questions[currentQuestion].explanation}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Next Button */}
                {showResult && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-center"
                  >
                    <Button onClick={handleNext} variant="neon" size="lg">
                      {currentQuestion < questions.length - 1
                        ? "Next Question"
                        : "See Results"}
                    </Button>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        ) : (
          /* Results Screen */
          <motion.div
            className="bg-gradient-to-br from-gray-900 to-gray-800 border border-neon-purple/50 rounded-3xl p-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring" }}
          >
            <motion.div
              className="text-9xl mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 0.5 }}
            >
              {score === questions.length
                ? "🏆"
                : score >= 4
                ? "🌟"
                : score >= 3
                ? "👍"
                : "📚"}
            </motion.div>

            <h3 className="text-5xl font-bold text-white mb-4">Quiz Complete!</h3>

            <p className="text-3xl mb-8">
              Your Score:{" "}
              <span className={`font-bold ${getScoreColor()}`}>
                {score} / {questions.length}
              </span>
            </p>

            <div className="mb-8">
              {score === questions.length && (
                <p className="text-2xl text-neon-green mb-4">
                  Perfect score! You're an Internet expert! 🎉
                </p>
              )}
              {score >= 4 && score < questions.length && (
                <p className="text-2xl text-neon-blue mb-4">
                  Great job! You understand how the Internet works! 🌟
                </p>
              )}
              {score >= 3 && score < 4 && (
                <p className="text-2xl text-neon-purple mb-4">
                  Good effort! Review the topics and try again! 👍
                </p>
              )}
              {score < 3 && (
                <p className="text-2xl text-neon-pink mb-4">
                  Keep learning! Go through the lessons again! 📚
                </p>
              )}
            </div>

            <div className="bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 border border-neon-blue/50 rounded-2xl p-6 mb-8">
              <h4 className="text-2xl font-bold text-white mb-4">
                You just learned how the Internet works! 🌐
              </h4>
              <p className="text-lg text-gray-300">
                From your device to servers around the world and back - all in milliseconds!
              </p>
            </div>

            <Button onClick={handleRestart} variant="neon" size="xl" className="text-xl">
              <RotateCcw className="mr-2" />
              Take Quiz Again
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
