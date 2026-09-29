import { type ReactElement, useState } from 'react';
import { cn } from '@libs/cn';

/* ── Logos ── */

const UMCLogo = () => (
  <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
    <rect width='48' height='48' rx='10' fill='#1a1f3c' />
    <path
      d='M10 14 L10 28 Q10 38 24 38 Q38 38 38 28 L38 14'
      stroke='#818cf8'
      strokeWidth='3.5'
      strokeLinecap='round'
    />
    <path
      d='M10 14 L24 24 L38 14'
      stroke='#818cf8'
      strokeWidth='3.5'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <circle cx='24' cy='24' r='3' fill='#a78bfa' />
  </svg>
);

const GurumtonLogo = () => (
  <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
    <rect width='48' height='48' rx='10' fill='#1a2a1a' />
    <path d='M24 8 C14 8 8 14 8 22 C8 30 14 36 24 38 C34 36 40 30 40 22 C40 14 34 8 24 8Z' fill='#4ade80' opacity='0.15' />
    <path d='M24 8 C14 8 8 14 8 22 C8 30 14 36 24 38 C34 36 40 30 40 22 C40 14 34 8 24 8Z' stroke='#4ade80' strokeWidth='2.5' fill='none' />
    <path d='M17 22 L22 27 L31 18' stroke='#4ade80' strokeWidth='3' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M24 38 L24 44' stroke='#4ade80' strokeWidth='2.5' strokeLinecap='round' />
    <path d='M18 42 L30 42' stroke='#4ade80' strokeWidth='2.5' strokeLinecap='round' />
  </svg>
);

const AwardLogo = () => (
  <svg viewBox='0 0 48 48' fill='none' className='w-full h-full'>
    <rect width='48' height='48' rx='10' fill='#1f1a0a' />
    <polygon
      points='24,8 28,18 39,18 31,25 34,36 24,30 14,36 17,25 9,18 20,18'
      fill='#fbbf24'
      opacity='0.2'
      stroke='#fbbf24'
      strokeWidth='2'
      strokeLinejoin='round'
    />
    <polygon
      points='24,12 27,19 35,19 29,24 31,32 24,27 17,32 19,24 13,19 21,19'
      fill='#fbbf24'
      opacity='0.6'
    />
  </svg>
);

/* ── Types ── */

type Activity = {
  title: string;
  period: string;
  part: string;
  description: string;
  highlights: string[];
  tags: string[];
};

type ExperienceGroup = {
  id: string;
  logo: () => ReactElement;
  name: string;
  subtitle: string;
  accentColor: string;
  borderColor: string;
  activities: Activity[];
};

/* ── Data ── */

const EXPERIENCE_GROUPS: ExperienceGroup[] = [
  {
    id: 'umc',
    logo: UMCLogo,
    name: 'UMC (University MakeUs Challenge)',
    subtitle: '7기 ~ 9기 · Web & SpringBoot 파트',
    accentColor: 'text-indigo-300',
    borderColor: 'hover:border-indigo-500/30',
    activities: [
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
    ],
  },
  {
    id: 'gurumton',
    logo: GurumtonLogo,
    name: '구름톤',
    subtitle: '해커톤 참여 활동',
    accentColor: 'text-green-300',
    borderColor: 'hover:border-green-500/30',
    activities: [
      {
        title: '구름톤 X기',
        period: '0000.00 — 0000.00',
        part: '참여 파트',
        description: '구름톤 참여 내용을 여기에 작성해 주세요.',
        highlights: ['활동 내용 1', '활동 내용 2'],
        tags: ['태그1', '태그2'],
      },
    ],
  },
  {
    id: 'awards',
    logo: AwardLogo,
    name: '수상 활동',
    subtitle: '각종 대회 및 수상 이력',
    accentColor: 'text-yellow-300',
    borderColor: 'hover:border-yellow-500/30',
    activities: [
      {
        title: '수상명',
        period: '0000.00',
        part: '주최 기관',
        description: '수상 내용을 여기에 작성해 주세요.',
        highlights: ['수상 세부 내용'],
        tags: ['태그1'],
      },
    ],
  },
];

/* ── Sub-components ── */

const TimelineItem = ({
  activity,
  index,
  isLast,
  accentColor,
}: {
  activity: Activity;
  index: number;
  isLast: boolean;
  accentColor: string;
}) => (
  <div className='relative flex gap-5'>
    {/* Dot + line */}
    <div className='flex flex-col items-center pt-1'>
      <div className='w-2.5 h-2.5 rounded-full bg-indigo-500/60 flex-shrink-0 ring-2 ring-indigo-500/20' />
      {!isLast && <div className='flex-1 w-px bg-gradient-to-b from-white/10 to-transparent mt-1.5' />}
    </div>

    {/* Card */}
    <div className={`flex-1 ${isLast ? '' : 'pb-6'}`}>
      <div className='glass-card rounded-xl p-5 hover:border-white/12 transition-all duration-200'>
        <div className='flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 mb-3'>
          <div>
            <div className='flex items-center gap-2 mb-0.5'>
              <span className='text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-0.5 rounded border border-white/5'>
                {index + 1 < 10 ? `0${index + 1}` : `${index + 1}`}
              </span>
              <h4 className={`font-semibold text-sm text-white`}>{activity.title}</h4>
            </div>
            <p className={`text-xs font-medium ${accentColor}`}>{activity.part}</p>
          </div>
          <span className='text-slate-600 text-xs font-mono whitespace-nowrap'>{activity.period}</span>
        </div>

        <p className='text-slate-400 text-sm leading-relaxed mb-3'>{activity.description}</p>

        <ul className='flex flex-col gap-1.5 mb-3'>
          {activity.highlights.map(h => (
            <li key={h} className='flex items-start gap-2 text-xs text-slate-500'>
              <span className='text-indigo-500 mt-0.5 flex-shrink-0'>▸</span>
              {h}
            </li>
          ))}
        </ul>

        <div className='flex flex-wrap gap-1.5 pt-3 border-t border-white/5'>
          {activity.tags.map(tag => (
            <span
              key={tag}
              className='px-2 py-0.5 rounded text-[10px] font-mono text-slate-500 bg-white/5 border border-white/5'
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const AccordionCard = ({ group }: { group: ExperienceGroup }) => {
  const [open, setOpen] = useState(false);
  const Logo = group.logo;

  return (
    <div className={cn('glass-card rounded-2xl overflow-hidden transition-all duration-300', group.borderColor)}>
      {/* Header — clickable */}
      <button
        type='button'
        onClick={() => setOpen(prev => !prev)}
        className='w-full flex items-center justify-between gap-4 px-6 py-5 hover:bg-white/[0.02] transition-colors'
      >
        <div className='flex items-center gap-4'>
          <div className='w-10 h-10 rounded-xl overflow-hidden flex-shrink-0'>
            <Logo />
          </div>
          <div className='text-left'>
            <p className='text-white font-semibold text-sm'>{group.name}</p>
            <p className='text-slate-500 text-xs mt-0.5'>{group.subtitle}</p>
          </div>
        </div>

        {/* Chevron */}
        <svg
          className={cn(
            'w-4 h-4 text-slate-500 flex-shrink-0 transition-transform duration-300',
            open ? 'rotate-180' : '',
          )}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {/* Expandable content */}
      <div
        className={cn(
          'overflow-hidden transition-all duration-500 ease-in-out',
          open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <div className='px-6 pb-6 pt-2 border-t border-white/5 flex flex-col gap-0'>
          {group.activities.map((activity, idx) => (
            <TimelineItem
              key={activity.title}
              activity={activity}
              index={idx}
              isLast={idx === group.activities.length - 1}
              accentColor={group.accentColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Section ── */

const ExperienceSection = () => {
  return (
    <section id='experience' className='py-32 px-6 relative'>
      <div className='absolute top-1/2 left-0 w-96 h-96 bg-indigo-700/8 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-4xl mx-auto relative z-10'>
        {/* Header */}
        <div className='text-center mb-16'>
          <p className='text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3'>
            Activities
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>Experience</h2>
          <p className='text-slate-500 mt-4 max-w-xl mx-auto text-sm leading-relaxed'>
            동아리 활동, 해커톤, 수상 이력을 소개합니다.
          </p>
        </div>

        {/* Accordion list */}
        <div className='flex flex-col gap-4'>
          {EXPERIENCE_GROUPS.map(group => (
            <AccordionCard key={group.id} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
