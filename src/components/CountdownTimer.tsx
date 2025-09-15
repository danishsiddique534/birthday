import { useState, useEffect } from "react";
import { Heart, Gift, Clock, Sparkles } from "lucide-react";

interface CountdownTimerProps {
  targetDate: Date;
  onComplete?: () => void;
}

const CountdownTimer = ({ targetDate, onComplete }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        onComplete?.();
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  const timeUnits = [
    { value: timeLeft.days, label: "DAYS", icon: Heart, gradient: "from-magical-pink to-magical-purple" },
    { value: timeLeft.hours, label: "HOURS", icon: Clock, gradient: "from-magical-purple to-accent" },
    { value: timeLeft.minutes, label: "MINUTES", icon: Gift, gradient: "from-accent to-magical-purple" },
    { value: timeLeft.seconds, label: "SECONDS", icon: Sparkles, gradient: "from-magical-purple to-celebration" },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
      {timeUnits.map(({ value, label, icon: Icon, gradient }, index) => (
        <div
          key={label}
          className={`relative p-6 rounded-2xl bg-gradient-to-br ${gradient} shadow-card-magical bounce-in`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="text-center">
            <Icon className="w-6 h-6 mx-auto mb-2 text-white/80" />
            <div className="text-3xl font-bold text-white mb-1">
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-xs text-white/70 font-medium tracking-wider">
              {label}
            </div>
          </div>
          <div className="absolute -top-1 -right-1">
            <Sparkles className="w-4 h-4 text-celebration animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;