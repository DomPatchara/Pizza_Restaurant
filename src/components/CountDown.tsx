"use client";

import { useState, useEffect } from "react";
import Countdown from "react-countdown";

const CountDown = () => {
  const [endingDate, setEndingDate] = useState<Date | null>(null);

  useEffect(() => {
    setEndingDate(new Date("2025-04-07")); // Set date only on the client
  }, []);

  if (!endingDate) return null; // Prevent rendering until date is set
  return (
    <div>
        <Countdown 
            className='font-bold text-yellow-300 text-5xl' 
            date={endingDate}
        />
    </div>
  )
}

export default CountDown