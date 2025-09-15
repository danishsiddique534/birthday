import { useNavigate } from "react-router-dom";
import { Camera, ArrowRight, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Memories = () => {
  const navigate = useNavigate();

  // These would be replaced with actual memories
  const memories = [
    {
      id: 1,
      title: "Beautiful Sunset",
      description: "That magical evening we spent together",
      color: "from-orange-400 to-pink-500",
    },
    {
      id: 2,
      title: "Adventure Time",
      description: "Our incredible journey and laughs",
      color: "from-blue-400 to-purple-500",
    },
    {
      id: 3,
      title: "Sweet Moments",
      description: "All those precious times we shared",
      color: "from-green-400 to-teal-500",
    },
    {
      id: 4,
      title: "Happy Days",
      description: "Celebrating life together",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 5,
      title: "Special Occasions",
      description: "Making every moment count",
      color: "from-purple-400 to-pink-500",
    },
    {
      id: 6,
      title: "Friendship Goals",
      description: "Being there for each other always",
      color: "from-indigo-400 to-purple-500",
    },
  ];

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Camera className="w-16 h-16 mx-auto text-magical-pink mb-4 bounce-in" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4 bounce-in" style={{ animationDelay: "0.2s" }}>
            Moments With You
          </h1>
          <p className="text-xl text-muted-foreground bounce-in" style={{ animationDelay: "0.4s" }}>
            Beautiful moments with Mustab Jii 📸
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="bounce-in group cursor-pointer"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className={`relative h-64 bg-gradient-to-br ${memory.color} rounded-2xl shadow-card-magical overflow-hidden group-hover:scale-105 transition-transform duration-300`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 text-white">
                  <Heart className="w-8 h-8 mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-bold mb-2">{memory.title}</h3>
                  <p className="text-sm opacity-90">{memory.description}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured memory */}
        <div className="mb-12 bounce-in" style={{ animationDelay: "1.2s" }}>
          <div className="relative h-80 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-3xl shadow-card-magical overflow-hidden">
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-white">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6 magical-glow">
                <Camera className="w-12 h-12" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Our Beautiful Journey</h3>
              <p className="text-lg opacity-90 max-w-2xl">
                Every moment we've shared has been a treasure. From our first meeting to all the adventures we've had together, 
                each memory is a precious gem in the story of our friendship. Here's to many more beautiful moments ahead! 💖
              </p>
            </div>
          </div>
        </div>

        <div className="text-center bounce-in" style={{ animationDelay: "1.4s" }}>
          <Button
            variant="celebration"
            size="lg"
            onClick={() => navigate("/letter")}
            className="text-xl px-8 py-4"
          >
            One Last Thing
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Memories;