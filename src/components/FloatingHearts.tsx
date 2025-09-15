import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Array<{ id: number; left: number; delay: number; size: number }>>([]);

  useEffect(() => {
    const generateHearts = () => {
      const newHearts = Array.from({ length: 8 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        delay: Math.random() * 4,
        size: Math.random() * 0.5 + 0.8,
      }));
      setHearts(newHearts);
    };

    generateHearts();
    const interval = setInterval(generateHearts, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="floating-hearts">
      {hearts.map((heart) => (
        <Heart
          key={heart.id}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            animationDelay: `${heart.delay}s`,
            transform: `scale(${heart.size})`,
            fontSize: '1.5rem',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;