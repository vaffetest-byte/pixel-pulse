import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { type: "keyword", content: "const ", delay: 0 },
  { type: "function", content: "buildSuccess", delay: 0.1 },
  { type: "default", content: " = ", delay: 0.2 },
  { type: "keyword", content: "async", delay: 0.3 },
  { type: "default", content: " () => {", delay: 0.4 },
  { type: "newline", content: "", delay: 0.5 },
  { type: "indent", content: "  ", delay: 0.6 },
  { type: "keyword", content: "const ", delay: 0.6 },
  { type: "variable", content: "design", delay: 0.7 },
  { type: "default", content: " = ", delay: 0.8 },
  { type: "keyword", content: "await ", delay: 0.9 },
  { type: "function", content: "createPremium", delay: 1 },
  { type: "default", content: "();", delay: 1.1 },
  { type: "newline", content: "", delay: 1.2 },
  { type: "indent", content: "  ", delay: 1.3 },
  { type: "keyword", content: "const ", delay: 1.3 },
  { type: "variable", content: "conversion", delay: 1.4 },
  { type: "default", content: " = ", delay: 1.5 },
  { type: "function", content: "optimize", delay: 1.6 },
  { type: "default", content: "(design);", delay: 1.7 },
  { type: "newline", content: "", delay: 1.8 },
  { type: "indent", content: "  ", delay: 1.9 },
  { type: "keyword", content: "return ", delay: 1.9 },
  { type: "string", content: "'🚀 Success'", delay: 2 },
  { type: "default", content: ";", delay: 2.1 },
  { type: "newline", content: "", delay: 2.2 },
  { type: "default", content: "};", delay: 2.3 },
];

const colorMap: Record<string, string> = {
  keyword: "text-violet-400",
  function: "text-cyan-400",
  variable: "text-emerald-400",
  string: "text-amber-400",
  default: "text-slate-300",
  indent: "",
  newline: "",
};

export const GlowingCodeEditor = () => {
  const [visibleChars, setVisibleChars] = useState(0);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const totalChars = codeLines.reduce((acc, line) => acc + line.content.length, 0);
    
    const interval = setInterval(() => {
      setVisibleChars((prev) => {
        if (prev >= totalChars) {
          setTimeout(() => setVisibleChars(0), 2000);
          return prev;
        }
        return prev + 1;
      });
    }, 50);

    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 530);

    return () => {
      clearInterval(interval);
      clearInterval(cursorInterval);
    };
  }, []);

  let charCount = 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-md"
    >
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-2xl blur-xl opacity-50"
        style={{
          background: "linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(250 100% 60% / 0.3))",
        }}
      />
      
      {/* Editor container */}
      <div 
        className="relative rounded-2xl overflow-hidden border border-border/50"
        style={{
          background: "linear-gradient(180deg, hsl(222 47% 11%) 0%, hsl(224 47% 8%) 100%)",
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Window controls */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
          <span className="ml-4 text-xs text-slate-500 font-mono">index.tsx</span>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-sm leading-relaxed">
          <div className="flex">
            {/* Line numbers */}
            <div className="pr-4 text-slate-600 select-none text-right" style={{ minWidth: "2rem" }}>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div key={num}>{num}</div>
              ))}
            </div>
            
            {/* Code */}
            <div className="flex-1 overflow-hidden">
              <div className="whitespace-pre-wrap">
                {codeLines.map((line, lineIndex) => {
                  if (line.type === "newline") {
                    return <br key={lineIndex} />;
                  }
                  
                  const chars = line.content.split("");
                  return chars.map((char, charIndex) => {
                    const currentCharIndex = charCount++;
                    const isVisible = currentCharIndex < visibleChars;
                    
                    return (
                      <motion.span
                        key={`${lineIndex}-${charIndex}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isVisible ? 1 : 0 }}
                        className={colorMap[line.type]}
                      >
                        {char}
                      </motion.span>
                    );
                  });
                })}
                
                {/* Cursor */}
                <motion.span
                  animate={{ opacity: cursorVisible ? 1 : 0 }}
                  className="inline-block w-2 h-5 bg-primary ml-0.5 align-middle"
                  style={{ boxShadow: "0 0 10px hsl(var(--primary))" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom glow line */}
        <motion.div
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
            scaleX: [0.9, 1, 0.9]
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
        />
      </div>
    </motion.div>
  );
};
