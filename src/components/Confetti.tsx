import { useEffect, useState } from "react";

const Confetti = () => {
  const [pieces, setPieces] = useState<Array<{ id: number; left: number; color: string; delay: number; size: number }>>([]);

  useEffect(() => {
    const colors = ['#ff69b4', '#9d4edd', '#f72585', '#4361ee', '#4cc9f0', '#ffd60a'];
    
    const generateConfetti = () => {
      const newPieces = Array.from({ length: 50 }, (_, i) => ({
        id: Date.now() + i,
        left: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 3,
        size: Math.random() * 8 + 4,
      }));
      setPieces(newPieces);
    };

    generateConfetti();
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="confetti absolute w-2 h-2 rounded-sm"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            animationDelay: `${piece.delay}s`,
            width: `${piece.size}px`,
            height: `${piece.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;