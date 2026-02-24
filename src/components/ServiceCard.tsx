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
    <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 flex flex-col h-full">
      <div className="mb-6 text-indigo-600">
        <div className="p-3 bg-indigo-50 rounded-lg w-fit">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
