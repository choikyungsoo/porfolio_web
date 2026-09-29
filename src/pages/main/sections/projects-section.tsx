import devineImg from '@assets/devine.svg';
import TomyongjiImg from '@assets/tomyongji.svg';
import NaviImg from '@assets/nabi.svg';
import LightUpImg from '@assets/lightup.svg';
import FillmateImg from '@assets/filmate.svg';
import MamonImg from '@assets/mindon.svg';
import { cn } from '@libs/cn';
import { useState } from 'react';

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
      <svg viewBox="0 0 340 180" fill="none" className="h-full w-full">
        <rect width="340" height="180" fill="url(#b1)" />
        <rect x="20" y="15" width="300" height="150" rx="10" fill="rgba(0,0,0,0.4)" />
        <rect x="20" y="15" width="300" height="28" rx="10" fill="rgba(0,0,0,0.5)" />
        <circle cx="38" cy="29" r="5" fill="#ff5f57" />
        <circle cx="54" cy="29" r="5" fill="#ffbd2e" />
        <circle cx="70" cy="29" r="5" fill="#28ca41" />
        <rect x="85" y="21" width="180" height="16" rx="8" fill="rgba(255,255,255,0.08)" />
        <rect x="35" y="54" width="120" height="10" rx="5" fill="rgba(255,255,255,0.4)" />
        <rect x="35" y="70" width="80" height="7" rx="3.5" fill="rgba(255,255,255,0.2)" />
        <rect x="35" y="84" width="100" height="7" rx="3.5" fill="rgba(255,255,255,0.15)" />
        <rect x="35" y="102" width="70" height="26" rx="6" fill="rgba(255,255,255,0.2)" />
        <rect x="190" y="50" width="110" height="90" rx="8" fill="rgba(255,255,255,0.06)" />
        <rect x="200" y="60" width="90" height="55" rx="5" fill="rgba(255,255,255,0.08)" />
        <defs>
          <linearGradient id="b1" x1="0" y1="0" x2="340" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradient.split(' ')[0]} />
            <stop offset="1" stopColor={gradient.split(' ')[1] ?? gradient.split(' ')[0]} />
          </linearGradient>
        </defs>
      </svg>
    ),
    mobile: (
      <svg viewBox="0 0 340 180" fill="none" className="h-full w-full">
        <rect width="340" height="180" fill="url(#m1)" />
        <rect
          x="105"
          y="10"
          width="65"
          height="115"
          rx="10"
          fill="rgba(0,0,0,0.45)"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />
        <rect
          x="183"
          y="25"
          width="65"
          height="115"
          rx="10"
          fill="rgba(0,0,0,0.35)"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <rect x="115" y="28" width="45" height="7" rx="3.5" fill="rgba(255,255,255,0.3)" />
        <rect x="115" y="40" width="35" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        <rect x="115" y="52" width="45" height="38" rx="5" fill="rgba(255,255,255,0.08)" />
        <rect x="115" y="97" width="20" height="5" rx="2.5" fill="rgba(255,255,255,0.25)" />
        <rect x="140" y="97" width="20" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
        <rect x="193" y="43" width="45" height="7" rx="3.5" fill="rgba(255,255,255,0.25)" />
        <rect x="193" y="55" width="35" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
        <rect x="193" y="67" width="45" height="38" rx="5" fill="rgba(255,255,255,0.06)" />
        <defs>
          <linearGradient id="m1" x1="0" y1="0" x2="340" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradient.split(' ')[0]} />
            <stop offset="1" stopColor={gradient.split(' ')[1] ?? gradient.split(' ')[0]} />
          </linearGradient>
        </defs>
      </svg>
    ),
    dashboard: (
      <svg viewBox="0 0 340 180" fill="none" className="h-full w-full">
        <rect width="340" height="180" fill="url(#d1)" />
        <rect x="20" y="15" width="60" height="150" rx="8" fill="rgba(0,0,0,0.4)" />
        <rect x="90" y="15" width="230" height="68" rx="8" fill="rgba(0,0,0,0.3)" />
        <rect x="90" y="90" width="110" height="75" rx="8" fill="rgba(0,0,0,0.3)" />
        <rect x="210" y="90" width="110" height="75" rx="8" fill="rgba(0,0,0,0.3)" />
        <rect x="30" y="30" width="40" height="6" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="30" y="48" width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.15)" />
        <rect x="30" y="62" width="35" height="5" rx="2.5" fill="rgba(255,255,255,0.12)" />
        <rect x="30" y="76" width="25" height="5" rx="2.5" fill="rgba(255,255,255,0.1)" />
        <rect x="100" y="50" width="15" height="20" rx="3" fill="rgba(255,255,255,0.25)" />
        <rect x="122" y="40" width="15" height="30" rx="3" fill="rgba(255,255,255,0.3)" />
        <rect x="144" y="45" width="15" height="25" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="166" y="35" width="15" height="35" rx="3" fill="rgba(255,255,255,0.35)" />
        <rect x="188" y="42" width="15" height="28" rx="3" fill="rgba(255,255,255,0.22)" />
        <rect x="102" y="106" width="50" height="12" rx="4" fill="rgba(255,255,255,0.35)" />
        <rect x="102" y="122" width="30" height="8" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="222" y="106" width="50" height="12" rx="4" fill="rgba(255,255,255,0.3)" />
        <rect x="222" y="122" width="30" height="8" rx="3" fill="rgba(255,255,255,0.12)" />
        <defs>
          <linearGradient id="d1" x1="0" y1="0" x2="340" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradient.split(' ')[0]} />
            <stop offset="1" stopColor={gradient.split(' ')[1] ?? gradient.split(' ')[0]} />
          </linearGradient>
        </defs>
      </svg>
    ),
    api: (
      <svg viewBox="0 0 340 180" fill="none" className="h-full w-full">
        <rect width="340" height="180" fill="url(#a1)" />
        <rect x="20" y="15" width="300" height="150" rx="10" fill="rgba(0,0,0,0.5)" />
        <rect x="20" y="15" width="300" height="24" rx="10" fill="rgba(0,0,0,0.6)" />
        <rect x="30" y="50" width="40" height="7" rx="3.5" fill="#34d399" opacity="0.8" />
        <rect x="78" y="50" width="120" height="7" rx="3.5" fill="rgba(255,255,255,0.5)" />
        <rect x="30" y="65" width="50" height="7" rx="3.5" fill="#60a5fa" opacity="0.8" />
        <rect x="88" y="65" width="80" height="7" rx="3.5" fill="rgba(255,255,255,0.4)" />
        <rect x="30" y="82" width="60" height="7" rx="3.5" fill="#f59e0b" opacity="0.8" />
        <rect x="98" y="82" width="100" height="7" rx="3.5" fill="rgba(255,255,255,0.35)" />
        <rect x="46" y="96" width="130" height="6" rx="3" fill="rgba(255,255,255,0.2)" />
        <rect x="46" y="108" width="100" height="6" rx="3" fill="rgba(255,255,255,0.15)" />
        <rect x="46" y="120" width="150" height="6" rx="3" fill="rgba(255,255,255,0.18)" />
        <rect x="30" y="136" width="15" height="15" rx="3" fill="#34d399" opacity="0.3" />
        <rect x="52" y="139" width="60" height="6" rx="3" fill="rgba(255,255,255,0.25)" />
        <defs>
          <linearGradient id="a1" x1="0" y1="0" x2="340" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor={gradient.split(' ')[0]} />
            <stop offset="1" stopColor={gradient.split(' ')[1] ?? gradient.split(' ')[0]} />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return patterns[pattern];
};

/* ── Types ── */

type TabId = '전체' | '프로젝트' | '해커톤' | '대회' | '기타';

type Project = {
  title: string;
  description: string;
  tags: string[];
  github: string;
  demo: string;
  gradient: string;
  pattern: 'browser' | 'mobile' | 'dashboard' | 'api';
  category: Exclude<TabId, '전체'>;
  image?: string;
  period?: string; // 예: '2025.03 — 2025.06'
  role?: string; // 예: 'Frontend Developer'
  details?: string[]; // 담당 작업 bullet points
};

/* ── Data ── */

const TABS: TabId[] = ['전체', '프로젝트', '해커톤', '대회', '기타'];

const PROJECTS: Project[] = [
  {
    title: '디바인 [Devine]',
    description:
      'GitHub 코드 분석 기반 사이드 프로젝트 매칭 플랫폼으로 UMC 9기에서 시작한 프로젝트 입니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/DeVine-2025/DeVine_FrontEnd',
    demo: '#',
    gradient: '#3730a3 #6d28d9',
    pattern: 'browser',
    category: '프로젝트',
    image: devineImg,
    period: '2025.09 — 진행 중',
    role: 'Frontend Developer',
    details: [
      'GitHub API 연동 및 레포지토리 분석 기능 개발',
      '프로젝트 매칭 UI/UX 설계 및 구현',
      'Tailwind CSS v4 기반 디자인 시스템 구축',
      'Vite 환경 세팅 및 path alias 구성',
    ],
  },
  {
    title: '투명지 [Tomyongji]',
    description:
      '학생회의 장부를 투명하게 운영할 수 있는 온라인 웹 서비스로 현재 실제 운영하고 있는 프로젝트입니다.',
    tags: ['React','JavaScript','TypeScript', 'Tailwind CSS', 'Vite', 'StoryBook'],
    github: 'https://github.com/ToMyongJi/ToMyongJi-front',
    demo: '#',
    gradient: '#0e7490 #0369a1',
    pattern: 'browser',
    image: TomyongjiImg,
    category: '프로젝트',
    period: '2025.06 — 진행중',
    role: 'Frontend Developer',
    details: [
      'JavaScript에서 TypeScript로 재개발 진행',
      'PWA를 활용한 웹앱 제공',
      '서비스 운영 및 배포 참여(Vercel을 활용한 배포)',
    ],
  },
  {
    title: '나의 비밀친구, 나비 [Nabi]',
    description: '사용자의 일기 내용을 바탕으로 개인 맞춤형 대화를 나눠주는 챗봇 앱입니다',
    tags: ['React Native', 'JavaScript', 'StyleSheet', 'Redux-Toolkit'],
    github: 'https://github.com/MSF-Nabi',
    demo: '#',
    gradient: '#14532d #065f46',
    pattern: 'mobile',
    category: '프로젝트',
    image: NaviImg,
    period: '2024.03 — 진행중',
    role: 'Frontend Developer',
    details: [
      'React Native 기반 크로스플랫폼 앱 개발',
      'FCM을 활용한 앱 푸시 알림 기능 개발',
      '일기 작성 및 AI 감정 분석 기능 구현',
      '명지대학교 창업혁신센터 주최 우수상 수상',
    ],
  },
  {
    title: '라이트 업[lightup]',
    description: '대학생 창업도모 플랫폼으로 첫 백엔드 개발로 나선 프로젝트 입니다.',
    tags: ['Java', 'SpringBoot','SSE', 'SMTP'],
    github: 'https://github.com/1ronPark/Back-end',
    demo: '#',
    gradient: '#064e3b #065f46',
    image: LightUpImg,
    pattern: 'api',
    category: '프로젝트',
    period: '2025.04',
    role: 'Backend Developer',
    details: [
      'SpringBoot 기반 실시간 알림 기능 개발',
      'SSE를 활용한 사용자별 실시간 푸시 알림 구현',
      '대학 이메일 도메인 검증 및 인증코드 기반 학교 인증 기능 개발',
    ],
  },
  {
    title: '필메이트 [Fillmate]',
    description: '명지대학교 SW 경진대회에서 우수상을 받은 AI 기반 영화 추천·해설 플랫폼입니다.',
    tags: ['React', 'JavaScript', 'Zustand'],
    github: 'https://github.com/2025-MJU-SW-CONTEST/SW_FE',
    demo: '#',
    gradient: '#78350f #92400e',
    image: FillmateImg,
    pattern: 'dashboard',
    category: '대회',
    period: '2025.02',
    role: 'Frontend Developer',
    details: [
      'AI 영화 해설 API 연동 및 채팅형 화면 구현',
      '실시간 채팅 기능 개발',
      '감상평 작성·조회 기능 및 UI 구현',
      '회원가입·로그인 API 연동 및 공통 컴포넌트 개발',
      '명지대학교 SW 경진대회 우수상 수상',
    ],
  },
  {
    title: '마몬 [Mamon]',
    description: 'AI 감정 분석을 기반으로 일기를 기록하고 공감을 나누는 감정 일기 서비스입니다.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/9oormthon-univ/2025_SEASONTHON_TEAM_17_FE',
    demo: '#',
    gradient: '#7c2d12 #9a3412',
    pattern: 'dashboard',
    category: '해커톤',
    image: MamonImg,
    period: '2025',
    role: 'Frontend Developer',
    details: [
      '일기 작성·수정 및 날짜별 일기 조회 API 연동',
      '오늘의 일기 중복 작성 방지 및 토스트 메시지 구현',
      '감정 선택 칩과 감정·일기 카드 공통 컴포넌트 개발',
      '감정 반응 토글 API 연동 및 상태 관리 구현',
    ],
  },
];

/* ── GitHub icon (reused on both faces) ── */

const GitHubIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

/* ── Components ── */

const ProjectCard = ({ project }: { project: Project }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      className="h-[400px] cursor-pointer"
      style={{ perspective: '1200px' }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className="relative h-full w-full transition-all duration-700"
        style={{
          transformStyle: 'preserve-3d',
          transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
        }}
      >
        {/* ── Front face ── */}
        <div
          className="glass-card absolute inset-0 flex flex-col overflow-hidden rounded-2xl"
          style={{ backfaceVisibility: 'hidden' }}
        >
          <div className="relative aspect-[16/9] flex-shrink-0 overflow-hidden">
            {project.image ? (
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            ) : (
              <ProjectThumbnail gradient={project.gradient} pattern={project.pattern} />
            )}
          </div>
          <div className="flex flex-1 flex-col gap-3 overflow-hidden p-5">
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-base text-white">{project.title}</h3>
              <span className="flex-shrink-0 rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-500">
                {project.category}
              </span>
            </div>
            <p className="line-clamp-2 flex-1 text-slate-500 text-sm leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/5 bg-white/5 px-2.5 py-0.5 font-mono text-slate-400 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Back face ── */}
        <div
          className="glass-card absolute inset-0 flex flex-col overflow-hidden rounded-2xl p-6"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {/* Header */}
          <div className="mb-5 flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg text-white leading-snug">{project.title}</h3>
            <span className="mt-0.5 flex-shrink-0 rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-slate-500">
              {project.category}
            </span>
          </div>

          {/* Meta */}
          <div className="mb-4 flex flex-col gap-2">
            {project.period && (
              <div className="flex items-center gap-3">
                <span className="w-8 font-mono text-[10px] text-indigo-400 uppercase tracking-widest">
                  기간
                </span>
                <span className="text-slate-300 text-xs">{project.period}</span>
              </div>
            )}
            {project.role && (
              <div className="flex items-center gap-3">
                <span className="w-8 font-mono text-[10px] text-indigo-400 uppercase tracking-widest">
                  역할
                </span>
                <span className="text-slate-300 text-xs">{project.role}</span>
              </div>
            )}
          </div>

          {/* Details */}
          {project.details && project.details.length > 0 && (
            <ul className="mb-5 flex flex-1 flex-col gap-2 overflow-hidden">
              {project.details.map((detail) => (
                <li
                  key={detail}
                  className="flex items-start gap-2 text-slate-400 text-xs leading-relaxed"
                >
                  <span className="mt-0.5 flex-shrink-0 text-indigo-500">▸</span>
                  {detail}
                </li>
              ))}
            </ul>
          )}

          {/* Action buttons */}
          <div className="mt-auto flex gap-2 border-white/5 border-t pt-4">
            {project.github !== '#' ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-white/10 px-4 py-2 font-medium text-white text-xs transition-colors hover:bg-white/20"
                onClick={(e) => e.stopPropagation()}
              >
                <GitHubIcon />
                GitHub
              </a>
            ) : (
              <span className="flex flex-1 cursor-not-allowed items-center justify-center gap-1.5 rounded-lg bg-white/5 px-4 py-2 font-medium text-slate-600 text-xs">
                <GitHubIcon />
                Private
              </span>
            )}
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-indigo-600/80 px-4 py-2 font-medium text-white text-xs transition-colors hover:bg-indigo-500"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState<TabId>('전체');

  const filtered =
    activeTab === '전체' ? PROJECTS : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <section id="projects" className="relative px-6 py-32">
      <div className="pointer-events-none absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-violet-700/8 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-mono text-indigo-400 text-sm uppercase tracking-widest">
            My Work
          </p>
          <h2 className="font-bold text-4xl text-white md:text-5xl">Projects</h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-500 text-sm leading-relaxed">
            진행한 프로젝트들을 소개합니다. 더 많은 작업은 GitHub에서 확인하세요.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-10 flex-row-center">
          <div className="glass-card flex items-center gap-1.5 rounded-xl p-1">
            {TABS.map((tab) => {
              const count =
                tab === '전체'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.category === tab).length;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={cn(
                    'flex items-center gap-1.5 rounded-lg px-4 py-2 font-medium text-sm transition-all duration-200',
                    activeTab === tab
                      ? 'bg-indigo-600 text-white shadow-indigo-600/20 shadow-lg'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white',
                  )}
                >
                  {tab}
                  <span
                    className={cn(
                      'rounded-full px-1.5 py-0.5 font-mono text-[10px]',
                      activeTab === tab ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-500',
                    )}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        ) : (
          <div className="flex-col-center py-24 text-slate-600">
            <p className="mb-4 text-4xl">🗂️</p>
            <p className="text-sm">해당 카테고리의 프로젝트가 없습니다.</p>
          </div>
        )}

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            href="https://github.com/choikyungsoo"
            target="_blank"
            rel="noreferrer"
            className="group glass-card inline-flex items-center gap-2 rounded-xl border border-white/10 px-6 py-3 font-medium text-slate-400 text-sm transition-all duration-200 hover:border-white/20 hover:text-white"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            View More on GitHub
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
