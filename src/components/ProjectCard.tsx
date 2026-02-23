interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  href: string;
}

export default function ProjectCard({ title, description, tags, href }: ProjectCardProps) {
  return (
    <a href={href} className="block group h-full">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 transition-all duration-300 hover:shadow-lg hover:border-blue-200 hover:-translate-y-1 flex flex-col h-full">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        
        {/* Tagek listázása */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}