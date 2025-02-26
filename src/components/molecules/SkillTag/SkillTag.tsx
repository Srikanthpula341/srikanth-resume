import { cn } from '@/lib/utils';

interface SkillTagProps {
  skill: string;
  className?: string;
}

const SkillTag = ({ skill, className }: SkillTagProps) => {
  return (
    <span className={cn(
      'inline-block px-3 py-1 rounded-full text-sm',
      'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
      'mr-2 mb-2',
      className
    )}>
      {skill}
    </span>
  );
};

export default SkillTag; 