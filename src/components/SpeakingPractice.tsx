import React, { useState, useRef } from 'react';
import { Mic, MicOff, Play, Pause, RotateCcw, CheckCircle } from 'lucide-react';

const SpeakingPractice = ({ onClose }: { onClose: () => void }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasRecording, setHasRecording] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentParagraph, setCurrentParagraph] = useState(0);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);

  const paragraphs = [
    {
      title: "Describe your hometown",
      text: "I would like you to describe your hometown. You should say: where it is located, what it is famous for, what you like most about it, and explain whether you would recommend it to visitors."
    },
    {
      title: "Talk about a memorable journey",
      text: "Describe a memorable journey you have taken. You should say: where you went, who you went with, what made it memorable, and explain what you learned from this experience."
    },
    {
      title: "Discuss a skill you would like to learn",
      text: "Talk about a skill you would like to learn in the future. You should say: what the skill is, why you want to learn it, how you plan to learn it, and explain how this skill would benefit you."
    }
  ];

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      
      const chunks: BlobPart[] = [];
      mediaRecorder.ondataavailable = (event) => {
        chunks.push(event.data);
      };
      
      mediaRecorder.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/wav' });
        setAudioBlob(blob);
        setHasRecording(true);
        stream.getTracks().forEach(track => track.stop());
      };
      
      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
      alert('Unable to access microphone. Please check your permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const playRecording = () => {
    if (audioBlob) {
      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);
      audioRef.current = audio;
      
      audio.onended = () => setIsPlaying(false);
      audio.play();
      setIsPlaying(true);
    }
  };

  const pauseRecording = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const resetRecording = () => {
    setHasRecording(false);
    setAudioBlob(null);
    setIsSubmitted(false);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const submitRecording = () => {
    if (hasRecording) {
      setIsSubmitted(true);
    }
  };

  const nextParagraph = () => {
    setCurrentParagraph((prev) => (prev + 1) % paragraphs.length);
    resetRecording();
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Recording Submitted!</h3>
          <p className="text-gray-600 mb-6">
            Your speaking practice has been submitted successfully. Our AI will analyze your pronunciation, 
            fluency, and vocabulary usage.
          </p>
          <div className="space-y-3">
            <button
              onClick={() => setIsSubmitted(false)}
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Practice Another Topic
            </button>
            <button
              onClick={onClose}
              className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg hover:bg-gray-50 transition-colors"
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
      <div className="bg-white rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Speaking Practice</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 text-2xl"
          >
            ×
          </button>
        </div>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold text-gray-800">
              Topic {currentParagraph + 1} of {paragraphs.length}
            </h3>
            <button
              onClick={nextParagraph}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Next Topic →
            </button>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <h4 className="font-semibold text-blue-900 mb-2">
              {paragraphs[currentParagraph].title}
            </h4>
            <p className="text-blue-800 leading-relaxed">
              {paragraphs[currentParagraph].text}
            </p>
          </div>

          <div className="text-sm text-gray-600 mb-4">
            <p>💡 <strong>Tips:</strong> Speak clearly, take your time, and try to speak for 1-2 minutes.</p>
          </div>
        </div>

        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            {!isRecording && !hasRecording && (
              <button
                onClick={startRecording}
                className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors"
              >
                <Mic className="h-5 w-5" />
                <span>Start Recording</span>
              </button>
            )}

            {isRecording && (
              <button
                onClick={stopRecording}
                className="flex items-center space-x-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors animate-pulse"
              >
                <MicOff className="h-5 w-5" />
                <span>Stop Recording</span>
              </button>
            )}

            {hasRecording && !isPlaying && (
              <button
                onClick={playRecording}
                className="flex items-center space-x-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
              >
                <Play className="h-5 w-5" />
                <span>Play Recording</span>
              </button>
            )}

            {hasRecording && isPlaying && (
              <button
                onClick={pauseRecording}
                className="flex items-center space-x-2 bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition-colors"
              >
                <Pause className="h-5 w-5" />
                <span>Pause</span>
              </button>
            )}

            {hasRecording && (
              <button
                onClick={resetRecording}
                className="flex items-center space-x-2 bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="h-5 w-5" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {hasRecording && (
            <button
              onClick={submitRecording}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              Submit Recording
            </button>
          )}

          {isRecording && (
            <div className="text-center">
              <div className="text-red-600 font-semibold">🔴 Recording in progress...</div>
              <div className="text-sm text-gray-600 mt-1">Speak clearly into your microphone</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpeakingPractice;