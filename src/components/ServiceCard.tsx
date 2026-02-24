import type { LucideIcon } from 'lucide-react';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: LucideIcon;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, features, icon: Icon }) => {
  return (
    <div className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:bg-white/[0.08] hover:-translate-y-1 hover:border-cyan-500/30 transition-all duration-300 flex flex-col h-full backdrop-blur-md relative overflow-hidden group">
      <div className="mb-6 text-cyan-400 relative z-10">
        <div className="p-3 bg-cyan-500/10 rounded-2xl w-fit ring-1 ring-cyan-500/20 group-hover:ring-cyan-500/40 transition-all">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-white mb-3 relative z-10">{title}</h3>
      <p className="text-zinc-400 mb-6 flex-grow relative z-10">{description}</p>
      <ul className="space-y-3 relative z-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-zinc-300">
            <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 shrink-0" />
            <span className="leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>
      {/* Glow effect on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
    </div>
  );
};
