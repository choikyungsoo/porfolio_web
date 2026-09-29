import { useEffect, useState } from 'react';

const FULL_NAME = 'KYUNGSOO CHOI';

const useTypewriter = (text: string, speed = 100, startDelay = 500) => {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setDisplayed(text.slice(0, i + 1));
        i++;
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
      return () => clearInterval(interval);
    }, startDelay);
    return () => clearTimeout(timeout);
  }, [text, speed, startDelay]);

  return { displayed, done };
};

const HeroSection = () => {
  const { displayed, done } = useTypewriter(FULL_NAME, 90, 600);

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden px-6 pt-24 pb-16">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="-left-40 absolute top-1/4 h-[500px] w-[500px] rounded-full bg-indigo-700/15 blur-[100px]" />
        <div className="-right-40 absolute bottom-1/4 h-[500px] w-[500px] rounded-full bg-violet-700/15 blur-[100px]" />
      </div>

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] max-w-6xl flex-col items-center justify-center text-center">
        <div className="w-full flex-col-center gap-6">
          {/* Badge */}
          <div className="flex animate-delay-1 animate-fade-in-up items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/5 px-3 py-1.5">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            <span className="font-mono text-indigo-300 text-xs">Available for work</span>
          </div>

          {/* Name — typewriter */}
          <h1 className="font-black text-5xl leading-tight md:text-7xl lg:text-8xl">
            <span className="gradient-text">{displayed}</span>
            {/* Blinking cursor: stops blinking after done */}
            <span
              className={done ? 'animate-[blink_1s_step-end_infinite]' : ''}
              style={{ color: '#818cf8', marginLeft: '2px' }}
            >
              |
            </span>
          </h1>

          {/* Subtitle */}
          <div className="flex animate-delay-3 animate-fade-in-up items-center gap-3">
            <span className="h-px w-8 bg-indigo-500" />
            <p className="font-medium text-indigo-300 text-lg tracking-wide">
              Software Engineer
            </p>
            <span className="h-px w-8 bg-indigo-500" />
          </div>

          {/* Description */}
          <p className="max-w-xl animate-delay-4 animate-fade-in-up text-base text-slate-400 leading-relaxed md:text-lg">
            사용자 경험을 중심으로 생각하는 개발자입니다. React와 TypeScript로 아름다운 웹을 만들고,
            Spring Boot로 안정적인 서버를 설계합니다.
          </p>

          {/* CTA buttons */}
          <div className="flex animate-delay-5 animate-fade-in-up flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="group hover:-translate-y-0.5 rounded-xl bg-indigo-600 px-7 py-3 font-semibold text-sm text-white transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-600/30 hover:shadow-xl"
            >
              View Projects
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>

          {/* Social links */}
          <div className="mt-2 flex animate-delay-6 animate-fade-in-up items-center gap-5">
            <a
              href="https://github.com/choikyungsoo"
              target="_blank"
              rel="noreferrer"
              className="text-slate-600 transition-colors duration-200 hover:text-white"
              aria-label="GitHub"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <div className="h-4 w-px bg-white/10" />
            <a
              href="mailto:ryana1954@gmail.com"
              className="text-slate-600 transition-colors duration-200 hover:text-white"
              aria-label="Email"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="-translate-x-1/2 absolute bottom-8 left-1/2 animate-float">
        <a
          href="#about"
          className="flex-col-center gap-1.5 text-slate-700 transition-colors hover:text-slate-500"
        >
          <span className="font-mono text-[10px] tracking-[0.2em]">SCROLL</span>
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
