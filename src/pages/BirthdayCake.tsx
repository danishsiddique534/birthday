import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Cake, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const BirthdayCake = () => {
  const navigate = useNavigate();
  const [candlesBlown, setCandlesBlown] = useState(false);

  const blowCandles = () => {
    setCandlesBlown(true);
    setTimeout(() => {
      navigate("/messages");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="text-center">
        <div className="mb-8 bounce-in">
          <div className="relative">
            {/* Cake */}
            <div className="mx-auto">
              {/* Top tier */}
              <div className="w-32 h-16 bg-gradient-to-br from-purple-300 to-purple-400 rounded-t-2xl mx-auto relative">
                <div className="absolute inset-0 bg-white/20 rounded-t-2xl"></div>
                <div className="absolute top-2 left-4 w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="absolute top-2 right-4 w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white/40 rounded-full"></div>
              </div>
              
              {/* Middle tier */}
              <div className="w-40 h-20 bg-gradient-to-br from-pink-300 to-pink-400 mx-auto relative">
                <div className="absolute inset-0 bg-white/20"></div>
                <div className="absolute top-3 left-6 w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="absolute top-3 right-6 w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="absolute top-8 left-12 w-2 h-2 bg-white/40 rounded-full"></div>
                <div className="absolute top-8 right-12 w-2 h-2 bg-white/40 rounded-full"></div>
              </div>
              
              {/* Bottom tier */}
              <div className="w-48 h-24 bg-gradient-to-br from-yellow-300 to-orange-400 rounded-b-2xl mx-auto relative">
                <div className="absolute inset-0 bg-white/20 rounded-b-2xl"></div>
                <div className="absolute top-3 left-8 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-3 right-8 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-8 left-12 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-8 right-12 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-12 left-16 w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="absolute top-12 right-16 w-3 h-3 bg-red-400 rounded-full"></div>
              </div>
              
              {/* Base plate */}
              <div className="w-52 h-4 bg-gray-200 rounded-full mx-auto mt-2 shadow-lg"></div>
              
              {/* Candles */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[1, 2, 3].map((candle, index) => (
                  <div key={candle} className="relative">
                    <div className="w-1 h-6 bg-yellow-200 rounded-t"></div>
                    {!candlesBlown && (
                      <div 
                        className={`absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-orange-400 rounded-full animate-pulse`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <div className="absolute inset-0 bg-yellow-400 rounded-full animate-ping"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4 bounce-in" style={{ animationDelay: "0.2s" }}>
          Happy Birthday!
        </h1>
        <h2 className="text-3xl font-bold text-magical-pink mb-8 bounce-in" style={{ animationDelay: "0.4s" }}>
          Mustab Jii 💖
        </h2>
        
        <p className="text-xl text-muted-foreground mb-8 bounce-in" style={{ animationDelay: "0.6s" }}>
          🎉 It's your special day! 🎉
        </p>
        
        {!candlesBlown ? (
          <div className="bounce-in" style={{ animationDelay: "0.8s" }}>
            <Button
              variant="magical"
              size="lg"
              onClick={blowCandles}
              className="text-xl px-8 py-4"
            >
              <Sparkles className="w-6 h-6 mr-2" />
              Blow the Candles!
            </Button>
            <p className="text-sm text-muted-foreground mt-4">Make a wish! ✨</p>
          </div>
        ) : (
          <div className="bounce-in">
            <Button
              variant="celebration"
              size="lg"
              onClick={() => navigate("/messages")}
              className="text-xl px-8 py-4"
            >
              Continue the Magic
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
          </div>
        )}
      </div>
      
      {/* Floating colorful balloons at bottom */}
      <div className="fixed bottom-0 left-0 right-0 flex justify-center space-x-4 pb-8 bounce-in" style={{ animationDelay: "1s" }}>
        {['bg-red-400', 'bg-blue-400', 'bg-green-400', 'bg-yellow-400', 'bg-purple-400', 'bg-pink-400', 'bg-orange-400'].map((color, index) => (
          <div
            key={index}
            className={`w-8 h-10 ${color} rounded-full shadow-lg animate-bounce`}
            style={{ animationDelay: `${index * 0.1}s`, animationDuration: '2s' }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BirthdayCake;