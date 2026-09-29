import {
  ReactIcon,
  TypeScriptIcon,
  JavaScriptIcon,
  NextJsIcon,
  TailwindIcon,
  ViteIcon,
  SpringIcon,
  JavaIcon,
  GitHubIcon,
  FigmaIcon,
  TanstackIcon,
  ZustandIcon,
  NodeIcon,
} from '@components/icons/tech-icons';

type Skill = {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  level: 'Expert' | 'Advanced' | 'Intermediate' | 'Familiar';
};

const FRONTEND_SKILLS: Skill[] = [
  { name: 'React', icon: ReactIcon, level: 'Expert' },
  { name: 'TypeScript', icon: TypeScriptIcon, level: 'Advanced' },
  { name: 'JavaScript', icon: JavaScriptIcon, level: 'Advanced' },
  { name: 'Next.js', icon: NextJsIcon, level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: TailwindIcon, level: 'Expert' },
  { name: 'Vite', icon: ViteIcon, level: 'Advanced' },
];

const STATE_SKILLS: Skill[] = [
  { name: 'TanStack Query', icon: TanstackIcon, level: 'Advanced' },
  { name: 'Zustand', icon: ZustandIcon, level: 'Advanced' },
  { name: 'Node.js', icon: NodeIcon, level: 'Intermediate' },
];

const BACKEND_SKILLS: Skill[] = [
  { name: 'Spring Boot', icon: SpringIcon, level: 'Intermediate' },
  { name: 'Java', icon: JavaIcon, level: 'Intermediate' },
];

const OTHER_SKILLS: Skill[] = [
  { name: 'GitHub', icon: GitHubIcon, level: 'Advanced' },
  { name: 'Figma', icon: FigmaIcon, level: 'Intermediate' },
];

const LEVEL_COLOR: Record<Skill['level'], string> = {
  Expert: 'text-indigo-300 bg-indigo-500/10 border-indigo-500/20',
  Advanced: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
  Intermediate: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
  Familiar: 'text-slate-400 bg-slate-500/10 border-slate-500/20',
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  const Icon = skill.icon;
  return (
    <div className='group flex flex-col items-center gap-3 p-4 rounded-2xl glass-card hover:border-white/15 hover:-translate-y-1 transition-all duration-200 cursor-default'>
      <div className='w-14 h-14 rounded-xl overflow-hidden'>
        <Icon className='w-full h-full' />
      </div>
      <p className='text-slate-300 text-sm font-medium group-hover:text-white transition-colors text-center'>
        {skill.name}
      </p>
      <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${LEVEL_COLOR[skill.level]}`}>
        {skill.level}
      </span>
    </div>
  );
};

const SkillGroup = ({ title, skills }: { title: string; skills: Skill[] }) => (
  <div className='flex flex-col gap-4'>
    <p className='text-xs font-mono text-slate-500 tracking-widest uppercase'>{title}</p>
    <div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3'>
      {skills.map(skill => (
        <SkillCard key={skill.name} skill={skill} />
      ))}
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section id='skills' className='py-32 px-6 relative'>
      <div className='max-w-6xl mx-auto'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <p className='text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3'>
            Tech Stack
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>Skills</h2>
          <p className='text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed'>
            프론트엔드부터 백엔드까지, 다양한 기술 스택을 활용합니다.
          </p>
        </div>

        {/* Skills grid */}
        <div className='grid md:grid-cols-2 gap-12'>
          <div className='flex flex-col gap-10'>
            <SkillGroup title='Frontend' skills={FRONTEND_SKILLS} />
          </div>
          <div className='flex flex-col gap-10'>
            <SkillGroup title='State & Runtime' skills={STATE_SKILLS} />
            <SkillGroup title='Backend' skills={BACKEND_SKILLS} />
            <SkillGroup title='Tools' skills={OTHER_SKILLS} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
