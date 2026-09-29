/** UMC logo SVG illustration */
const UMCLogo = () => (
  <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
    <rect width='48' height='48' rx='10' fill='#1a1f3c' />
    <path d='M10 14 L10 28 Q10 38 24 38 Q38 38 38 28 L38 14' stroke='#818cf8' strokeWidth='3.5' strokeLinecap='round' />
    <path d='M10 14 L24 24 L38 14' stroke='#818cf8' strokeWidth='3.5' strokeLinecap='round' strokeLinejoin='round' />
    <circle cx='24' cy='24' r='3' fill='#a78bfa' />
  </svg>
);

type Activity = {
  title: string;
  period: string;
  part: string;
  description: string;
  highlights: string[];
  tags: string[];
};

const UMC_ACTIVITIES: Activity[] = [
  {
    title: 'UMC 7기',
    period: '2023.03 — 2023.08',
    part: 'Web 파트',
    description:
      'React 기반의 프론트엔드 개발을 학습하고 팀 프로젝트를 진행했습니다. 처음으로 협업 개발 프로세스를 경험하며 Git Flow와 코드 리뷰 문화를 익혔습니다.',
    highlights: [
      '팀 프로젝트 프론트엔드 개발 참여',
      'React + JavaScript 기반 SPA 구현',
      '주간 스터디 및 세미나 참여',
    ],
    tags: ['React', 'JavaScript', 'Git'],
  },
  {
    title: 'UMC 8기',
    period: '2023.09 — 2024.02',
    part: 'Web 파트',
    description:
      'TypeScript를 도입하여 타입 안전성을 높이고, TanStack Query를 활용한 서버 상태 관리를 적용했습니다. 리더 역할을 맡아 팀원 코드 리뷰와 일정 조율을 담당했습니다.',
    highlights: [
      'TypeScript 전환 및 React 심화 학습',
      'TanStack Query 기반 서버 상태 관리',
      '팀 리더로서 코드 리뷰 및 스프린트 관리',
    ],
    tags: ['React', 'TypeScript', 'TanStack Query', 'Zustand'],
  },
  {
    title: 'UMC 9기',
    period: '2024.03 — 2024.08',
    part: 'Web & SpringBoot 파트',
    description:
      'Web 파트와 SpringBoot 파트 동시 활동으로 풀스택 역량을 키웠습니다. 프론트엔드와 백엔드를 모두 이해하면서 API 설계와 협업 효율을 크게 향상시켰습니다.',
    highlights: [
      'Spring Boot + JPA 기반 REST API 개발',
      'React + Spring Boot 풀스택 프로젝트 진행',
      'Web & Backend 파트 크로스 협업 경험',
    ],
    tags: ['React', 'TypeScript', 'Spring Boot', 'Java', 'JPA'],
  },
];

const TimelineItem = ({
  activity,
  index,
  isLast,
}: {
  activity: Activity;
  index: number;
  isLast: boolean;
}) => (
  <div className='relative flex gap-6 md:gap-10'>
    {/* Timeline line + dot */}
    <div className='flex flex-col items-center'>
      <div className='w-10 h-10 rounded-xl overflow-hidden flex-shrink-0 z-10'>
        <UMCLogo />
      </div>
      {!isLast && (
        <div className='flex-1 w-px bg-gradient-to-b from-indigo-500/30 to-transparent mt-2' />
      )}
    </div>

    {/* Content */}
    <div className={`flex-1 pb-${isLast ? '0' : '14'}`}>
      <div className='glass-card rounded-2xl p-6 hover:border-indigo-500/20 transition-all duration-300 group'>
        {/* Header */}
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4'>
          <div>
            <div className='flex items-center gap-2 mb-1'>
              <span className='text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-full border border-indigo-500/20'>
                {index + 1 < 10 ? `0${index + 1}` : index + 1}
              </span>
              <h3 className='text-white font-bold text-lg group-hover:text-indigo-300 transition-colors'>
                {activity.title}
              </h3>
            </div>
            <p className='text-indigo-300 text-sm font-medium'>{activity.part}</p>
          </div>
          <span className='text-slate-500 text-xs font-mono whitespace-nowrap pt-0.5'>
            {activity.period}
          </span>
        </div>

        <p className='text-slate-400 text-sm leading-relaxed mb-4'>{activity.description}</p>

        {/* Highlights */}
        <ul className='flex flex-col gap-2 mb-4'>
          {activity.highlights.map(h => (
            <li key={h} className='flex items-start gap-2 text-sm text-slate-500'>
              <span className='text-indigo-500 mt-0.5 flex-shrink-0'>▸</span>
              {h}
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className='flex flex-wrap gap-2 pt-3 border-t border-white/5'>
          {activity.tags.map(tag => (
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
  </div>
);

const ExperienceSection = () => {
  return (
    <section id='experience' className='py-32 px-6 relative'>
      <div className='absolute top-1/2 left-0 w-96 h-96 bg-indigo-700/8 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <p className='text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3'>
            Activities
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>Experience</h2>
          <p className='text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed'>
            UMC (University MakeUs Challenge) 동아리에서 7기부터 9기까지 활동하며
            실전 개발 경험을 쌓았습니다.
          </p>
        </div>

        {/* UMC badge */}
        <div className='flex-row-center mb-12'>
          <div className='flex items-center gap-3 px-5 py-3 rounded-2xl glass-card border border-indigo-500/15'>
            <div className='w-8 h-8 rounded-lg overflow-hidden'>
              <UMCLogo />
            </div>
            <div>
              <p className='text-white font-semibold text-sm'>UMC (University MakeUs Challenge)</p>
              <p className='text-slate-500 text-xs'>7기 ~ 9기 · Web & SpringBoot 파트</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className='flex flex-col gap-10'>
          {UMC_ACTIVITIES.map((activity, idx) => (
            <TimelineItem
              key={activity.title}
              activity={activity}
              index={idx}
              isLast={idx === UMC_ACTIVITIES.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
