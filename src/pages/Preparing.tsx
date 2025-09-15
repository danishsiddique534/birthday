import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";

const Preparing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/cake");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <div className="text-center">
        <div className="mb-8">
          <Heart className="w-24 h-24 mx-auto text-magical-pink heart-beat magical-glow" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full animate-ping"></div>
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 bounce-in">
          Preparing Something Special
        </h1>
        
        <p className="text-xl text-muted-foreground bounce-in" style={{ animationDelay: "0.3s" }}>
          For someone very special...
        </p>
        
        <div className="mt-8 flex justify-center bounce-in" style={{ animationDelay: "0.6s" }}>
          <div className="flex space-x-2">
            <div className="w-3 h-3 bg-magical-pink rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-magical-purple rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preparing;