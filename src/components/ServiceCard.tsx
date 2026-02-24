import React from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export type VisualId = 'software' | 'web' | 'architecture' | 'support';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  visualId: VisualId;
  className?: string;
  index: number;
}

const Visuals: Record<VisualId, React.ReactNode> = {
  software: (
    <div className="w-full h-32 bg-[#050505] rounded-xl border border-white/10 p-4 font-mono text-xs flex flex-col gap-2 relative overflow-hidden group-hover:border-cyan-500/50 transition-colors">
      <div className="flex gap-1.5 mb-2">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50"></div>
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/50"></div>
      </div>
      <div className="flex text-emerald-400"><span className="mr-2">&gt;</span><span>init build_system</span></div>
      <div className="flex text-zinc-500"><span className="mr-2"></span><span className="animate-pulse">compiling modules...</span></div>
      <div className="flex text-blue-400"><span className="mr-2"></span><span>[SUCCESS] Ready in 120ms</span></div>
      <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-cyan-500/20 blur-2xl"></div>
    </div>
  ),
  web: (
    <div className="w-full h-32 bg-gradient-to-br from-[#0a0a0a] to-[#050505] rounded-xl border border-white/10 p-4 flex items-center justify-center relative overflow-hidden group-hover:border-cyan-500/50 transition-colors">
      <div className="flex items-center gap-4 relative z-10 w-full px-2">
        <div className="w-3/5 h-16 bg-white/5 rounded-lg border border-white/10 flex flex-col justify-center gap-2 p-3 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
          <div className="w-full h-2 bg-zinc-800 rounded-full"></div>
          <div className="w-2/3 h-2 bg-zinc-800 rounded-full"></div>
        </div>
        <div className="w-8 h-[2px] bg-cyan-500/50 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
        </div>
        <div className="w-1/3 h-12 bg-indigo-500/10 rounded-lg border border-indigo-500/30 flex items-center justify-center">
          <div className="w-4 h-4 rounded pr-1 flex items-center justify-center gap-[2px]">
            <div className="w-1 h-3 bg-indigo-400 rounded-full"></div>
            <div className="w-1 h-3 bg-indigo-400 rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  ),
  architecture: (
    <div className="w-full h-32 bg-[#050505] rounded-xl border border-white/10 p-4 flex flex-col justify-center gap-3 relative overflow-hidden group-hover:border-indigo-500/50 transition-colors">
      <div className="flex justify-center gap-2 relative z-10">
        <div className="w-10 h-6 bg-zinc-800 rounded border border-zinc-700"></div>
        <div className="w-10 h-6 bg-zinc-800 rounded border border-zinc-700"></div>
        <div className="w-10 h-6 bg-cyan-900/40 rounded border border-cyan-700 shadow-[0_0_10px_rgba(6,182,212,0.3)]"></div>
      </div>
      <div className="flex justify-center h-4 relative z-10">
        <div className="w-[1px] h-full bg-zinc-700"></div>
      </div>
      <div className="flex justify-center relative z-10">
        <div className="w-20 h-8 bg-indigo-900/30 rounded border border-indigo-500/50 flex items-center relative gap-[2px] px-2 shadow-[0_0_15px_rgba(99,102,241,0.2)]">
          <div className="w-full h-1 bg-indigo-400/50 rounded-full"></div>
          <div className="w-full h-1 bg-indigo-400/50 rounded-full"></div>
          <div className="w-full h-1 bg-indigo-400/50 rounded-full"></div>
        </div>
      </div>
      <div className="absolute -top-10 -left-10 w-24 h-24 bg-indigo-500/20 blur-2xl"></div>
    </div>
  ),
  support: (
    <div className="w-full h-32 bg-[#050505] rounded-xl border border-white/10 p-4 flex items-end gap-1 relative overflow-hidden group-hover:border-emerald-500/50 transition-colors">
      {[40, 60, 45, 80, 55, 90, 65, 100].map((h, i) => (
        <div key={i} className="flex-1 bg-white/5 rounded-t-sm relative group-hover:bg-white/10 transition-colors duration-500" style={{ height: `${h}%` }}>
          {i === 7 && (
            <div className="absolute -top-1 left-0 w-full h-[2px] bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,1)]"></div>
          )}
        </div>
      ))}
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-20 bg-emerald-500/20 blur-2xl"></div>
    </div>
  )
};

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, visualId, className = '', index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      className={`group relative flex flex-col bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden hover:border-white/20 hover:shadow-2xl transition-all duration-500 ${className}`}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(6, 182, 212, 0.15),
              transparent 80%
            )
          `,
        }}
      />
      
      <div className="relative z-10 w-full mb-8">
        {Visuals[visualId] || Visuals.software}
      </div>

      <h3 className="text-2xl font-display font-bold text-white mb-4 relative z-10 tracking-tight leading-tight">{title}</h3>
      <p className="text-zinc-400 mb-8 flex-grow relative z-10 leading-relaxed">{description}</p>
      
      <ul className="space-y-4 relative z-10">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-zinc-300 group/item">
            <CheckCircle className="w-5 h-5 text-cyan-500/50 mt-0.5 shrink-0 group-hover/item:text-cyan-400 transition-colors" />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
