import { useState, useEffect } from "react";

interface StartupSequenceProps {
  onComplete: () => void;
}

const StartupSequence = ({ onComplete }: StartupSequenceProps) => {
  const [currentLine, setCurrentLine] = useState(0);
  
  const bootLines = [
    "INITIALIZING BRIAN'S TERMINAL...",
    "LOADING RETRO-FUTURISTIC INTERFACE v1.0",
    "CHECKING BRASS COMPONENTS... OK",
    "CALIBRATING CRT DISPLAY... OK",
    "WARMING UP VACUUM TUBES... OK",
    "LOADING 8-BIT GRAPHICS MODULE... OK",
    "ESTABLISHING TELEGRAPH CONNECTION... OK",
    "SYSTEM READY",
  ];

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setCurrentLine(currentLine + 1);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      const completeTimer = setTimeout(() => {
        onComplete();
      }, 500);
      return () => clearTimeout(completeTimer);
    }
  }, [currentLine, bootLines.length, onComplete]);

  return (
    <div className="fixed inset-0 bg-background z-50 flex items-center justify-center animate-power-on">
      <div className="w-full max-w-2xl px-4">
        <div className="grain-texture retro-border bg-card p-8">
          {/* Terminal Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-brass">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-accent animate-flicker" />
              <div className="w-3 h-3 rounded-full bg-brass" />
              <div className="w-3 h-3 rounded-full bg-muted" />
            </div>
            <span className="terminal-font text-sm brass-text">BOOT SEQUENCE</span>
          </div>

          {/* Boot Lines */}
          <div className="space-y-2 terminal-font text-sm">
            {bootLines.slice(0, currentLine).map((line, index) => (
              <div
                key={index}
                className={`
                  terminal-glow
                  ${index === currentLine - 1 ? "animate-flicker" : ""}
                `}
              >
                {"> "}{line}
              </div>
            ))}
            {currentLine < bootLines.length && (
              <div className="terminal-glow">
                {">"} <span className="inline-block w-2 h-4 bg-primary animate-blink-caret ml-1" />
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mt-6 pt-4 border-t border-brass">
            <div className="h-4 bg-muted border-2 border-brass overflow-hidden">
              <div
                className="h-full bg-primary terminal-glow transition-all duration-300"
                style={{ width: `${(currentLine / bootLines.length) * 100}%` }}
              />
            </div>
            <div className="mt-2 terminal-font text-xs brass-text text-center">
              LOADING: {Math.round((currentLine / bootLines.length) * 100)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupSequence;
