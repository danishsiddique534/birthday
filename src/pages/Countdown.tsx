import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Cake, Gift } from "lucide-react";
import CountdownTimer from "@/components/CountdownTimer";
import FloatingHearts from "@/components/FloatingHearts";

const Countdown = () => {
  const navigate = useNavigate();
  const [birthdayDate] = useState(new Date("2024-12-25")); // Set Suppu's birthday date

  const handleCountdownComplete = () => {
    navigate("/celebration");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="text-center mb-8 z-10">
        <div className="mb-6 bounce-in">
          <Cake className="w-16 h-16 mx-auto text-magical-pink magical-glow" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4 bounce-in" style={{ animationDelay: "0.2s" }}>
          Birthday Countdown
        </h1>
        
        <p className="text-lg text-muted-foreground mb-8 bounce-in" style={{ animationDelay: "0.4s" }}>
          The magical moment approaches...
        </p>
        
        <div className="bounce-in" style={{ animationDelay: "0.6s" }}>
          <CountdownTimer targetDate={birthdayDate} onComplete={handleCountdownComplete} />
        </div>
      </div>
      
      <div className="mt-8 text-center bounce-in" style={{ animationDelay: "0.8s" }}>
        <Gift className="w-8 h-8 mx-auto mb-4 text-celebration animate-pulse" />
        <p className="text-magical-pink font-medium">
          The surprise is just moments away 💖
        </p>
      </div>
    </div>
  );
};

export default Countdown;