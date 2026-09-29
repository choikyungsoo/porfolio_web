/** Hero illustration — developer workspace SVG */
const DeveloperIllustration = () => (
  <svg viewBox="0 0 420 340" fill="none" className="w-full max-w-lg mx-auto">
    {/* Monitor */}
    <rect x="80" y="40" width="260" height="170" rx="12" fill="#0f1629" stroke="#2d3748" strokeWidth="2" />
    <rect x="80" y="40" width="260" height="20" rx="12" fill="#1a2035" />
    <circle cx="106" cy="50" r="4" fill="#ff5f57" />
    <circle cx="122" cy="50" r="4" fill="#ffbd2e" />
    <circle cx="138" cy="50" r="4" fill="#28ca41" />
    {/* Code lines on screen */}
    <rect x="100" y="76" width="60" height="6" rx="3" fill="#6366f1" opacity="0.9" />
    <rect x="168" y="76" width="40" height="6" rx="3" fill="#a78bfa" opacity="0.7" />
    <rect x="216" y="76" width="30" height="6" rx="3" fill="#64748b" opacity="0.5" />
    <rect x="116" y="90" width="90" height="6" rx="3" fill="#22d3ee" opacity="0.8" />
    <rect x="214" y="90" width="50" height="6" rx="3" fill="#64748b" opacity="0.5" />
    <rect x="108" y="104" width="45" height="6" rx="3" fill="#f59e0b" opacity="0.7" />
    <rect x="161" y="104" width="70" height="6" rx="3" fill="#6366f1" opacity="0.6" />
    <rect x="239" y="104" width="35" height="6" rx="3" fill="#64748b" opacity="0.4" />
    <rect x="116" y="118" width="100" height="6" rx="3" fill="#34d399" opacity="0.7" />
    <rect x="224" y="118" width="45" height="6" rx="3" fill="#64748b" opacity="0.4" />
    <rect x="100" y="132" width="55" height="6" rx="3" fill="#f472b6" opacity="0.7" />
    <rect x="163" y="132" width="80" height="6" rx="3" fill="#a78bfa" opacity="0.6" />
    <rect x="108" y="146" width="130" height="6" rx="3" fill="#22d3ee" opacity="0.5" />
    <rect x="100" y="160" width="75" height="6" rx="3" fill="#6366f1" opacity="0.8" />
    <rect x="183" y="160" width="50" height="6" rx="3" fill="#64748b" opacity="0.4" />
    {/* Cursor blink */}
    <rect x="241" y="160" width="3" height="14" rx="1" fill="#818cf8">
      <animate attributeName="opacity" values="1;0;1" dur="1.2s" repeatCount="indefinite" />
    </rect>
    {/* Stand */}
    <rect x="190" y="210" width="40" height="12" rx="4" fill="#1a2035" />
    <rect x="155" y="218" width="110" height="10" rx="5" fill="#2d3748" />
    {/* Keyboard */}
    <rect x="120" y="238" width="180" height="50" rx="8" fill="#0f1629" stroke="#2d3748" strokeWidth="1.5" />
    {/* Keyboard keys */}
    {[130, 148, 166, 184, 202, 220, 238, 256, 274].map(x => (
      <rect key={x} x={x} y="250" width="12" height="10" rx="2" fill="#1a2035" stroke="#2d3748" strokeWidth="1" />
    ))}
    {[136, 154, 172, 190, 208, 226, 244, 262].map(x => (
      <rect key={x} x={x} y="268" width="12" height="10" rx="2" fill="#1a2035" stroke="#2d3748" strokeWidth="1" />
    ))}
    <rect x="163" y="286" width="94" height="8" rx="2" fill="#1a2035" stroke="#2d3748" strokeWidth="1" />
    {/* Floating elements */}
    <g>
      <animate attributeName="transform" values="translate(0,0);translate(0,-8);translate(0,0)" dur="3s" repeatCount="indefinite" />
      <rect x="345" y="55" width="52" height="36" rx="8" fill="#1a2035" stroke="#6366f1" strokeWidth="1.5" opacity="0.9" />
      <text x="353" y="70" fill="#818cf8" fontSize="9" fontFamily="monospace">const</text>
      <text x="353" y="82" fill="#22d3ee" fontSize="9" fontFamily="monospace">App</text>
    </g>
    <g transform="translate(0, 0)">
      <rect x="18" y="130" width="50" height="36" rx="8" fill="#1a2035" stroke="#22d3ee" strokeWidth="1.5" opacity="0.9">
        <animate attributeName="transform" values="translate(0,0);translate(0,7);translate(0,0)" dur="2.5s" repeatCount="indefinite" />
      </rect>
      <text x="26" y="149" fill="#22d3ee" fontSize="9" fontFamily="monospace">{'<div>'}</text>
      <text x="26" y="161" fill="#a78bfa" fontSize="9" fontFamily="monospace">{'</div>'}</text>
    </g>
    {/* Floating tech dots */}
    <circle cx="360" cy="180" r="6" fill="#6366f1" opacity="0.6">
      <animate attributeName="r" values="6;9;6" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="30" cy="90" r="4" fill="#22d3ee" opacity="0.5">
      <animate attributeName="r" values="4;7;4" dur="2.8s" repeatCount="indefinite" />
    </circle>
    <circle cx="380" cy="260" r="5" fill="#a78bfa" opacity="0.5">
      <animate attributeName="r" values="5;8;5" dur="3.2s" repeatCount="indefinite" />
    </circle>
    {/* Stars / particles */}
    {[
      { x: 42, y: 220, d: '2.5' },
      { x: 375, y: 115, d: '2' },
      { x: 350, y: 295, d: '2.5' },
      { x: 60, y: 300, d: '2' },
    ].map(({ x, y, d }) => (
      <circle key={`${x}-${y}`} cx={x} cy={y} r={d} fill="#818cf8" opacity="0.4" />
    ))}
  </svg>
);

const HeroSection = () => {
  return (
    <section
      id='hero'
      className='relative min-h-screen overflow-hidden px-6 pt-24 pb-16'
    >
      {/* Background blobs */}
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute top-1/4 -left-40 w-[500px] h-[500px] bg-indigo-700/15 rounded-full blur-[100px]' />
        <div className='absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-violet-700/15 rounded-full blur-[100px]' />
      </div>

      {/* Grid overlay */}
      <div
        className='absolute inset-0 opacity-[0.025]'
        style={{
          backgroundImage:
            'linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)',
          backgroundSize: '70px 70px',
        }}
      />

      <div className='relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-[calc(100vh-6rem)]'>
        {/* Left: Text */}
        <div className='flex-1 flex-col-items-start gap-6 text-left'>
          <div className='flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/5 animate-fade-in-up animate-delay-1'>
            <span className='w-2 h-2 rounded-full bg-green-400 animate-pulse' />
            <span className='text-xs text-indigo-300 font-mono'>Available for work</span>
          </div>

          <h1 className='text-5xl md:text-7xl font-black leading-tight animate-fade-in-up animate-delay-2'>
            <span className='text-white block'>Kyungsoo</span>
            <span className='gradient-text block cursor-blink'>Choi.</span>
          </h1>

          <div className='flex items-center gap-3 animate-fade-in-up animate-delay-3'>
            <span className='h-px w-8 bg-indigo-500' />
            <p className='text-lg text-indigo-300 font-medium tracking-wide'>
              Frontend & Backend Developer
            </p>
          </div>

          <p className='text-slate-400 text-base md:text-lg leading-relaxed max-w-lg animate-fade-in-up animate-delay-4'>
            사용자 경험을 중심으로 생각하는 개발자입니다.
            React와 TypeScript로 아름다운 웹을 만들고,
            Spring Boot로 안정적인 서버를 설계합니다.
          </p>

          <div className='flex items-center gap-4 flex-wrap animate-fade-in-up animate-delay-5'>
            <a
              href='#projects'
              className='group px-7 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all duration-200 hover:shadow-xl hover:shadow-indigo-600/30 hover:-translate-y-0.5'
            >
              View Projects
              <span className='ml-2 inline-block group-hover:translate-x-1 transition-transform'>→</span>
            </a>
            <a
              href='#contact'
              className='px-7 py-3 rounded-xl border border-white/10 hover:border-indigo-500/30 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 glass-card'
            >
              Contact Me
            </a>
          </div>

          {/* Social */}
          <div className='flex items-center gap-5 mt-2 animate-fade-in-up animate-delay-6'>
            <a
              href='https://github.com/choikyungsoo'
              target='_blank'
              rel='noreferrer'
              className='text-slate-600 hover:text-white transition-colors duration-200'
              aria-label='GitHub'
            >
              <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
              </svg>
            </a>
            <div className='w-px h-4 bg-white/10' />
            <a
              href='mailto:ryana1954@gmail.com'
              className='text-slate-600 hover:text-white transition-colors duration-200'
              aria-label='Email'
            >
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <div className='flex-1 flex-col-center animate-fade-in-up animate-delay-3 animate-float'>
          <DeveloperIllustration />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 -translate-x-1/2 animate-float'>
        <a href='#about' className='flex-col-center gap-1.5 text-slate-700 hover:text-slate-500 transition-colors'>
          <span className='text-[10px] tracking-[0.2em] font-mono'>SCROLL</span>
          <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={1.5} d='M19 9l-7 7-7-7' />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
