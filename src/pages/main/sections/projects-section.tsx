/** Behance/Pinterest style project card thumbnails using SVG art */
const ProjectThumbnail = ({
  gradient,
  pattern,
}: {
  gradient: string;
  pattern: 'browser' | 'mobile' | 'dashboard' | 'api';
}) => {
  const patterns = {
    browser: (
      <svg viewBox='0 0 340 180' fill='none' className='w-full h-full'>
        {/* Browser frame */}
        <rect width='340' height='180' fill='url(#b1)' />
        <rect x='20' y='15' width='300' height='150' rx='10' fill='rgba(0,0,0,0.4)' />
        <rect x='20' y='15' width='300' height='28' rx='10' fill='rgba(0,0,0,0.5)' />
        <circle cx='38' cy='29' r='5' fill='#ff5f57' />
        <circle cx='54' cy='29' r='5' fill='#ffbd2e' />
        <circle cx='70' cy='29' r='5' fill='#28ca41' />
        <rect x='85' y='21' width='180' height='16' rx='8' fill='rgba(255,255,255,0.08)' />
        {/* Content lines */}
        <rect x='35' y='54' width='120' height='10' rx='5' fill='rgba(255,255,255,0.4)' />
        <rect x='35' y='70' width='80' height='7' rx='3.5' fill='rgba(255,255,255,0.2)' />
        <rect x='35' y='84' width='100' height='7' rx='3.5' fill='rgba(255,255,255,0.15)' />
        <rect x='35' y='102' width='70' height='26' rx='6' fill='rgba(255,255,255,0.2)' />
        <rect x='190' y='50' width='110' height='90' rx='8' fill='rgba(255,255,255,0.06)' />
        <rect x='200' y='60' width='90' height='55' rx='5' fill='rgba(255,255,255,0.08)' />
        <defs>
          <linearGradient id='b1' x1='0' y1='0' x2='340' y2='180' gradientUnits='userSpaceOnUse'>
            <stop stopColor={gradient.split(' ')[0]} />
            <stop offset='1' stopColor={gradient.split(' ')[1] ?? gradient.split(' ')[0]} />
          </linearGradient>
        </defs>
      </svg>
    ),
    mobile: (
      <svg viewBox='0 0 340 180' fill='none' className='w-full h-full'>
        <rect width='340' height='180' fill='url(#m1)' />
        {/* Mobile frames */}
        <rect x='105' y='10' width='65' height='115' rx='10' fill='rgba(0,0,0,0.45)' stroke='rgba(255,255,255,0.1)' strokeWidth='1' />
        <rect x='183' y='25' width='65' height='115' rx='10' fill='rgba(0,0,0,0.35)' stroke='rgba(255,255,255,0.08)' strokeWidth='1' />
        <rect x='115' y='28' width='45' height='7' rx='3.5' fill='rgba(255,255,255,0.3)' />
        <rect x='115' y='40' width='35' height='5' rx='2.5' fill='rgba(255,255,255,0.15)' />
        <rect x='115' y='52' width='45' height='38' rx='5' fill='rgba(255,255,255,0.08)' />
        <rect x='115' y='97' width='20' height='5' rx='2.5' fill='rgba(255,255,255,0.25)' />
        <rect x='140' y='97' width='20' height='5' rx='2.5' fill='rgba(255,255,255,0.1)' />
        <rect x='193' y='43' width='45' height='7' rx='3.5' fill='rgba(255,255,255,0.25)' />
        <rect x='193' y='55' width='35' height='5' rx='2.5' fill='rgba(255,255,255,0.12)' />
        <rect x='193' y='67' width='45' height='38' rx='5' fill='rgba(255,255,255,0.06)' />
        <defs>
          <linearGradient id='m1' x1='0' y1='0' x2='340' y2='180' gradientUnits='userSpaceOnUse'>
            <stop stopColor={gradient.split(' ')[0]} />
            <stop offset='1' stopColor={gradient.split(' ')[1] ?? gradient.split(' ')[0]} />
          </linearGradient>
        </defs>
      </svg>
    ),
    dashboard: (
      <svg viewBox='0 0 340 180' fill='none' className='w-full h-full'>
        <rect width='340' height='180' fill='url(#d1)' />
        {/* Sidebar */}
        <rect x='20' y='15' width='60' height='150' rx='8' fill='rgba(0,0,0,0.4)' />
        {/* Content area */}
        <rect x='90' y='15' width='230' height='68' rx='8' fill='rgba(0,0,0,0.3)' />
        <rect x='90' y='90' width='110' height='75' rx='8' fill='rgba(0,0,0,0.3)' />
        <rect x='210' y='90' width='110' height='75' rx='8' fill='rgba(0,0,0,0.3)' />
        {/* Sidebar items */}
        <rect x='30' y='30' width='40' height='6' rx='3' fill='rgba(255,255,255,0.3)' />
        <rect x='30' y='48' width='30' height='5' rx='2.5' fill='rgba(255,255,255,0.15)' />
        <rect x='30' y='62' width='35' height='5' rx='2.5' fill='rgba(255,255,255,0.12)' />
        <rect x='30' y='76' width='25' height='5' rx='2.5' fill='rgba(255,255,255,0.1)' />
        {/* Chart bars */}
        <rect x='100' y='50' width='15' height='20' rx='3' fill='rgba(255,255,255,0.25)' />
        <rect x='122' y='40' width='15' height='30' rx='3' fill='rgba(255,255,255,0.3)' />
        <rect x='144' y='45' width='15' height='25' rx='3' fill='rgba(255,255,255,0.2)' />
        <rect x='166' y='35' width='15' height='35' rx='3' fill='rgba(255,255,255,0.35)' />
        <rect x='188' y='42' width='15' height='28' rx='3' fill='rgba(255,255,255,0.22)' />
        {/* Stats numbers */}
        <rect x='102' y='106' width='50' height='12' rx='4' fill='rgba(255,255,255,0.35)' />
        <rect x='102' y='122' width='30' height='8' rx='3' fill='rgba(255,255,255,0.15)' />
        <rect x='222' y='106' width='50' height='12' rx='4' fill='rgba(255,255,255,0.3)' />
        <rect x='222' y='122' width='30' height='8' rx='3' fill='rgba(255,255,255,0.12)' />
        <defs>
          <linearGradient id='d1' x1='0' y1='0' x2='340' y2='180' gradientUnits='userSpaceOnUse'>
            <stop stopColor={gradient.split(' ')[0]} />
            <stop offset='1' stopColor={gradient.split(' ')[1] ?? gradient.split(' ')[0]} />
          </linearGradient>
        </defs>
      </svg>
    ),
    api: (
      <svg viewBox='0 0 340 180' fill='none' className='w-full h-full'>
        <rect width='340' height='180' fill='url(#a1)' />
        {/* API terminal look */}
        <rect x='20' y='15' width='300' height='150' rx='10' fill='rgba(0,0,0,0.5)' />
        <rect x='20' y='15' width='300' height='24' rx='10' fill='rgba(0,0,0,0.6)' />
        <rect x='30' y='50' width='40' height='7' rx='3.5' fill='#34d399' opacity='0.8' />
        <rect x='78' y='50' width='120' height='7' rx='3.5' fill='rgba(255,255,255,0.5)' />
        <rect x='30' y='65' width='50' height='7' rx='3.5' fill='#60a5fa' opacity='0.8' />
        <rect x='88' y='65' width='80' height='7' rx='3.5' fill='rgba(255,255,255,0.4)' />
        <rect x='88' y='65' width='80' height='7' rx='3.5' fill='rgba(255,255,255,0.4)' />
        <rect x='30' y='82' width='60' height='7' rx='3.5' fill='#f59e0b' opacity='0.8' />
        <rect x='98' y='82' width='100' height='7' rx='3.5' fill='rgba(255,255,255,0.35)' />
        <rect x='46' y='96' width='130' height='6' rx='3' fill='rgba(255,255,255,0.2)' />
        <rect x='46' y='108' width='100' height='6' rx='3' fill='rgba(255,255,255,0.15)' />
        <rect x='46' y='120' width='150' height='6' rx='3' fill='rgba(255,255,255,0.18)' />
        <rect x='30' y='136' width='15' height='15' rx='3' fill='#34d399' opacity='0.3' />
        <rect x='52' y='139' width='60' height='6' rx='3' fill='rgba(255,255,255,0.25)' />
        <defs>
          <linearGradient id='a1' x1='0' y1='0' x2='340' y2='180' gradientUnits='userSpaceOnUse'>
            <stop stopColor={gradient.split(' ')[0]} />
            <stop offset='1' stopColor={gradient.split(' ')[1] ?? gradient.split(' ')[0]} />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return patterns[pattern];
};

const PROJECTS = [
  {
    title: 'Portfolio Website',
    description: '개인 포트폴리오 웹사이트. React + TypeScript + Tailwind CSS로 제작한 반응형 SPA입니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/choikyungsoo/porfolio_web',
    demo: '#',
    gradient: '#3730a3 #6d28d9',
    pattern: 'browser' as const,
    size: 'large',
  },
  {
    title: 'UMC 프로젝트 A',
    description: 'UMC 동아리에서 진행한 웹 서비스. 실제 사용자를 대상으로 배포까지 완료한 프로젝트입니다.',
    tags: ['React', 'TanStack Query', 'Zustand'],
    github: '#',
    demo: '#',
    gradient: '#0e7490 #0369a1',
    pattern: 'mobile' as const,
    size: 'normal',
  },
  {
    title: 'UMC 프로젝트 B',
    description: 'Spring Boot 백엔드와 React 프론트엔드를 연동한 풀스택 프로젝트입니다.',
    tags: ['Spring Boot', 'Java', 'React', 'TypeScript'],
    github: '#',
    demo: '#',
    gradient: '#14532d #065f46',
    pattern: 'api' as const,
    size: 'normal',
  },
  {
    title: '대시보드 프로젝트',
    description: '데이터 시각화 대시보드. 복잡한 데이터를 사용자가 이해하기 쉽게 표현했습니다.',
    tags: ['Next.js', 'TypeScript', 'TanStack Query'],
    github: '#',
    demo: '#',
    gradient: '#4c1d95 #831843',
    pattern: 'dashboard' as const,
    size: 'large',
  },
];

type Project = (typeof PROJECTS)[number];

const ProjectCard = ({ project }: { project: Project }) => (
  <div className='group glass-card rounded-2xl overflow-hidden hover:border-white/15 transition-all duration-300 hover:-translate-y-1.5 flex flex-col'>
    {/* Thumbnail */}
    <div className='relative overflow-hidden aspect-[16/9]'>
      <ProjectThumbnail gradient={project.gradient} pattern={project.pattern} />
      {/* Hover overlay */}
      <div className='absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex-row-center gap-4'>
        <a
          href={project.github}
          target='_blank'
          rel='noreferrer'
          className='flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium backdrop-blur-sm transition-colors'
        >
          <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
            <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
          </svg>
          GitHub
        </a>
        {project.demo !== '#' && (
          <a
            href={project.demo}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-1.5 px-4 py-2 rounded-lg bg-indigo-600/80 hover:bg-indigo-500 text-white text-xs font-medium backdrop-blur-sm transition-colors'
          >
            Live Demo ↗
          </a>
        )}
      </div>
    </div>

    {/* Card body */}
    <div className='flex flex-col gap-3 p-5 flex-1'>
      <h3 className='text-white font-semibold text-base group-hover:text-indigo-300 transition-colors'>
        {project.title}
      </h3>
      <p className='text-slate-500 text-sm leading-relaxed flex-1'>{project.description}</p>
      <div className='flex flex-wrap gap-1.5 pt-1'>
        {project.tags.map(tag => (
          <span
            key={tag}
            className='px-2.5 py-0.5 rounded-md text-xs font-mono text-slate-400 bg-white/5 border border-white/5'
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id='projects' className='py-32 px-6 relative'>
      <div className='absolute top-1/3 right-0 w-[500px] h-[500px] bg-violet-700/8 rounded-full blur-[120px] pointer-events-none' />

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <p className='text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3'>
            My Work
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>Projects</h2>
          <p className='text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed'>
            진행한 프로젝트들을 소개합니다. 더 많은 작업은 GitHub에서 확인하세요.
          </p>
        </div>

        {/* Pinterest/Behance grid */}
        <div
          className='columns-1 sm:columns-2 lg:columns-2 gap-6 space-y-6'
          style={{ columnFill: 'balance' }}
        >
          {PROJECTS.map(project => (
            <div key={project.title} className='break-inside-avoid mb-6'>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className='text-center mt-14'>
          <a
            href='https://github.com/choikyungsoo'
            target='_blank'
            rel='noreferrer'
            className='group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 text-slate-400 hover:text-white text-sm font-medium transition-all duration-200 glass-card'
          >
            <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 24 24'>
              <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
            </svg>
            View More on GitHub
            <span className='group-hover:translate-x-1 transition-transform'>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
