import { Heart, Star } from "lucide-react";

const SpecialLetter = () => {
  return (
    <div className="min-h-screen p-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4 bounce-in">
            A Special Letter
          </h1>
          <p className="text-xl text-muted-foreground bounce-in" style={{ animationDelay: "0.2s" }}>
            Just for you, on your special day 💌
          </p>
        </div>

        <div className="bounce-in" style={{ animationDelay: "0.4s" }}>
          <div className="relative bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card-magical border border-border">
            {/* Decorative elements */}
            <Star className="absolute top-6 left-6 w-6 h-6 text-celebration" />
            <Heart className="absolute top-6 right-6 w-6 h-6 text-heart" />
            <Heart className="absolute bottom-6 left-6 w-6 h-6 text-magical-purple" />
            <Star className="absolute bottom-6 right-6 w-6 h-6 text-magical-pink" />

            {/* Main heart */}
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 mx-auto text-heart magical-glow" />
            </div>

            {/* Letter content */}
            <div className="prose prose-lg prose-invert max-w-none text-foreground">
              <p className="text-xl text-muted-foreground mb-6 text-center font-medium">
                My Dearest Mustab Jii,
              </p>

              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  On this incredibly special day, as you turn 22, I wanted to take a moment to celebrate not just your birthday, 
                  but the amazing person you are and the incredible friendship we share.
                </p>

                <p>
                  From the moment we became friends, you've brought so much joy, laughter, and light into my life. Your kindness, 
                  your beautiful smile, and your wonderful heart make every day brighter. You have this incredible ability to 
                  make everyone around you feel special and loved.
                </p>

                <p>
                  As you step into this new year of your life, I want you to know how much you mean to me. You're not just a friend; 
                  you're family. Your support, your understanding, and your presence have been some of life's greatest gifts.
                </p>

                <p>
                  I hope this new year brings you everything your heart desires – endless happiness, exciting adventures, 
                  dreams coming true, and love in abundance. You deserve all the beautiful things life has to offer because 
                  you make the world a more beautiful place just by being in it.
                </p>

                <p>
                  Thank you for being the incredible person you are. Thank you for your friendship, your laughter, and for 
                  all the wonderful memories we've created together. I'm so grateful to have you in my life, Suppu.
                </p>

                <p className="text-center font-semibold text-magical-pink">
                  Happy 22nd Birthday, my dear friend! 🎉💖
                </p>

                <p className="text-center text-lg">
                  Here's to another year of amazing adventures, beautiful moments, and our wonderful friendship! 
                  May all your wishes come true! ✨
                </p>
              </div>

              <div className="text-center mt-12">
                <p className="text-xl font-medium text-magical-purple">
                  With all my love and best wishes,
                </p>
                <p className="text-2xl font-bold gradient-text mt-4">
                  Your Best Friend Forever 💕
                </p>
              </div>
            </div>

            {/* Floating hearts decoration */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <Heart
                  key={i}
                  className="absolute w-4 h-4 text-heart opacity-20 animate-pulse"
                  style={{
                    top: `${Math.random() * 80 + 10}%`,
                    left: `${Math.random() * 80 + 10}%`,
                    animationDelay: `${i * 0.5}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12 bounce-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-magical-pink text-lg font-medium">
            🎂 Happy Birthday, Suppu! 🎂
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpecialLetter;