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
    <div className="relative border-l-2 border-indigo-500 ml-4 py-4 space-y-12">
      {steps.map((step, index) => (
        <div key={index} className="relative pl-10">
          <div className="absolute -left-[11px] top-1.5 w-5 h-5 bg-white border-2 border-indigo-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
          <p className="text-gray-600 leading-relaxed max-w-2xl">{step.description}</p>
        </div>
      ))}
    </div>
  );
};
