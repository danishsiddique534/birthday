import { useNavigate } from "react-router-dom";
import { Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Confetti from "@/components/Confetti";

const Celebration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <Confetti />
      
      <div className="text-center z-10">
        <div className="mb-8 bounce-in">
          <div className="relative">
            <div className="w-24 h-24 mx-auto bg-gradient-celebration rounded-full flex items-center justify-center magical-glow">
              <Gift className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-6 bounce-in" style={{ animationDelay: "0.2s" }}>
          Time to
        </h1>
        <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-8 bounce-in" style={{ animationDelay: "0.4s" }}>
          Celebrate!
        </h1>
        
        <p className="text-xl text-muted-foreground mb-12 bounce-in" style={{ animationDelay: "0.6s" }}>
          The countdown is over... Let's celebrate! 🎉
        </p>
        
        <div className="bounce-in" style={{ animationDelay: "0.8s" }}>
          <Button
            variant="celebration"
            size="lg"
            onClick={() => navigate("/preparing")}
            className="text-xl px-12 py-6"
          >
            <Gift className="w-6 h-6 mr-2" />
            Let's Celebrate!
            <Sparkles className="w-6 h-6 ml-2" />
          </Button>
        </div>
        
        <p className="text-celebration mt-8 font-medium bounce-in" style={{ animationDelay: "1s" }}>
          Click to start the magic! ✨
        </p>
      </div>
    </div>
  );
};

export default Celebration;