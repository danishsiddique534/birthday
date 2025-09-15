import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, ArrowRight, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const SpecialMessages = () => {
  const navigate = useNavigate();
  const [openCards, setOpenCards] = useState<Set<number>>(new Set());

  const messages = [
    {
      id: 1,
      title: "You're Amazing",
      content: "You're absolutely wonderful and deserve all the happiness in the world! 🌟",
      color: "from-green-400 to-emerald-500",
    },
    {
      id: 2,
      title: "Best Friend Ever",
      content: "Having you as a friend is one of life's greatest gifts. Thank you for being you! 💝",
      color: "from-blue-400 to-purple-500",
    },
    {
      id: 3,
      title: "Special Wishes",
      content: "Wishing you a year filled with love, laughter, and endless adventures! 🎈",
      color: "from-pink-400 to-rose-500",
    },
    {
      id: 4,
      title: "Always Shining",
      content: "Your smile lights up every room and your kindness touches every heart! ✨",
      color: "from-yellow-400 to-orange-500",
    },
  ];

  const toggleCard = (id: number) => {
    const newOpenCards = new Set(openCards);
    if (newOpenCards.has(id)) {
      newOpenCards.delete(id);
    } else {
      newOpenCards.add(id);
    }
    setOpenCards(newOpenCards);
  };

  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Mail className="w-16 h-16 mx-auto text-magical-pink mb-4 bounce-in" />
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4 bounce-in" style={{ animationDelay: "0.2s" }}>
            Special Messages
          </h1>
          <p className="text-xl text-muted-foreground bounce-in" style={{ animationDelay: "0.4s" }}>
            For Mustab Jii 💌
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="bounce-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <div className="relative h-48 perspective-1000">
                <div
                  className={`card-reveal cursor-pointer w-full h-full ${
                    openCards.has(message.id) ? "flipped" : ""
                  }`}
                  onClick={() => toggleCard(message.id)}
                >
                  {/* Front of card */}
                  <div className="card-front bg-gradient-card rounded-2xl p-6 shadow-card-magical border border-border">
                    <div className="h-full flex flex-col items-center justify-center text-center">
                      <Heart className="w-8 h-8 text-heart mb-4" />
                      <p className="text-foreground font-medium mb-4">
                        Tap to open your message
                      </p>
                      <div className="flex space-x-1">
                        <Star className="w-4 h-4 text-celebration" />
                        <Star className="w-4 h-4 text-celebration" />
                      </div>
                    </div>
                  </div>

                  {/* Back of card */}
                  <div className={`card-back bg-gradient-to-br ${message.color} rounded-2xl p-6 shadow-card-magical`}>
                    <div className="h-full flex flex-col justify-center text-center text-white">
                      <Star className="w-6 h-6 mx-auto mb-4 animate-pulse" />
                      <h3 className="text-xl font-bold mb-4">{message.title}</h3>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <Star className="w-4 h-4 mx-auto mt-4 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bounce-in" style={{ animationDelay: "1.2s" }}>
          <Button
            variant="celebration"
            size="lg"
            onClick={() => navigate("/memories")}
            className="text-xl px-8 py-4"
          >
            See Our Moments
            <ArrowRight className="w-6 h-6 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialMessages;