import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Heart, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import FloatingHearts from "@/components/FloatingHearts";

const Index = () => {
  const navigate = useNavigate();
  const [birthdayDate] = useState(new Date("2024-12-25")); // Set Suppu's birthday date
  const [isBirthdayTime, setIsBirthdayTime] = useState(false);

  useEffect(() => {
    const checkBirthdayTime = () => {
      const now = new Date();
      const timeDifference = birthdayDate.getTime() - now.getTime();
      setIsBirthdayTime(timeDifference <= 0);
    };

    checkBirthdayTime();
    const interval = setInterval(checkBirthdayTime, 1000);

    return () => clearInterval(interval);
  }, [birthdayDate]);

  const handleStart = () => {
    if (isBirthdayTime) {
      navigate("/celebration");
    } else {
      navigate("/countdown");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <FloatingHearts />
      
      <div className="text-center z-10">
        <div className="mb-8 bounce-in">
          <div className="relative">
            <Heart className="w-24 h-24 mx-auto text-magical-pink magical-glow heart-beat" />
            <div className="absolute inset-0 flex items-center justify-center">
              <Sparkles className="w-12 h-12 text-celebration animate-pulse" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 bounce-in" style={{ animationDelay: "0.2s" }}>
          Happy Birthday
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-magical-pink mb-8 bounce-in" style={{ animationDelay: "0.4s" }}>
          Dear Suppu! 💖
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl bounce-in" style={{ animationDelay: "0.6s" }}>
          Welcome to your magical birthday celebration! This special website was created just for you, 
          filled with love, memories, and birthday wishes.
        </p>
        
        <div className="bounce-in" style={{ animationDelay: "0.8s" }}>
          <Button
            variant="magical"
            size="lg"
            onClick={handleStart}
            className="text-xl px-12 py-6"
          >
            <Gift className="w-6 h-6 mr-2" />
            {isBirthdayTime ? "Let's Celebrate!" : "Start the Magic"}
            <Sparkles className="w-6 h-6 ml-2" />
          </Button>
        </div>
        
        <p className="text-magical-purple mt-8 font-medium bounce-in" style={{ animationDelay: "1s" }}>
          Click to begin your special birthday journey! ✨
        </p>
      </div>
      
      {/* Magical elements */}
      <div className="absolute top-20 left-10">
        <div className="w-4 h-4 bg-celebration rounded-full animate-ping"></div>
      </div>
      <div className="absolute top-40 right-20">
        <div className="w-3 h-3 bg-magical-pink rounded-full animate-pulse"></div>
      </div>
      <div className="absolute bottom-32 left-20">
        <div className="w-5 h-5 bg-magical-purple rounded-full animate-bounce"></div>
      </div>
      <div className="absolute bottom-40 right-10">
        <div className="w-4 h-4 bg-heart rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default Index;
