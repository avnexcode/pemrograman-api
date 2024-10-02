"use client"
import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function LiveDate() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center p-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg">
      <Clock className="w-8 h-8 text-white mr-3" />
      <div className="text-center">
        <p className="text-white text-3xl font-bold">
          {time.toLocaleTimeString()}
        </p>
        <p className="text-blue-100 text-sm mt-1">
          {time.toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}