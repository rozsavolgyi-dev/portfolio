import React from 'react';
import { motion } from 'framer-motion';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export const ProcessTimeline: React.FC<ProcessTimelineProps> = ({ steps }) => {
  return (
    <div className="relative border-l-2 border-white/10 ml-4 py-4 space-y-12">
      {steps.map((step, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: index * 0.15 }}
          className="relative pl-10 group"
        >
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-[#050505] border-2 border-cyan-500 rounded-full flex items-center justify-center group-hover:shadow-[0_0_15px_rgba(6,182,212,0.8)] transition-shadow duration-300">
            <div className="w-2 h-2 bg-cyan-400 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
          </div>
          <h3 className="text-xl font-display font-bold text-white mb-2 tracking-tight group-hover:text-cyan-400 transition-colors duration-300">{step.title}</h3>
          <p className="text-zinc-400 leading-relaxed max-w-2xl">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
