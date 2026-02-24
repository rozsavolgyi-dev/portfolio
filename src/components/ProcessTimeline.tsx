import React from 'react';

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
        <div key={index} className="relative pl-10 group">
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-[#050505] border-2 border-cyan-500 rounded-full flex items-center justify-center group-hover:shadow-[0_0_10px_rgba(6,182,212,0.8)] transition-shadow">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
          <p className="text-zinc-400 leading-relaxed max-w-2xl">{step.description}</p>
        </div>
      ))}
    </div>
  );
};
