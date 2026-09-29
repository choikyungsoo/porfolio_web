const STATS = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '5+', label: 'Technologies' },
];

const AboutSection = () => {
  return (
    <section id='about' className='py-32 px-6'>
      <div className='max-w-6xl mx-auto'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <p className='text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3'>
            Who I Am
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>
            About Me
          </h2>
        </div>

        <div className='grid md:grid-cols-2 gap-16 items-center'>
          {/* Left: Visual */}
          <div className='flex-col-center'>
            <div className='relative'>
              {/* Profile image placeholder */}
              <div className='w-64 h-64 md:w-80 md:h-80 rounded-2xl glass-card flex-col-center overflow-hidden'>
                <div className='w-full h-full bg-gradient-to-br from-indigo-600/20 via-violet-600/20 to-cyan-600/20 flex-col-center'>
                  <span className='text-8xl'>👨‍💻</span>
                </div>
              </div>

              {/* Decorative elements */}
              <div className='absolute -top-4 -right-4 w-24 h-24 border border-indigo-500/30 rounded-xl' />
              <div className='absolute -bottom-4 -left-4 w-16 h-16 bg-indigo-600/20 rounded-xl blur-sm' />

              {/* Floating badge */}
              <div className='absolute -bottom-3 -right-3 glass-card rounded-xl px-4 py-2 border border-indigo-500/20'>
                <p className='text-xs text-slate-400'>Available for</p>
                <p className='text-sm font-semibold text-indigo-300'>New Projects</p>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className='flex-col-items-start gap-6'>
            <div className='space-y-4 text-slate-400 leading-relaxed'>
              <p>
                안녕하세요! 저는 사용자 중심의 웹 경험을 만드는 것에 열정을 가진
                프론트엔드 개발자 <span className='text-white font-medium'>최경수</span>입니다.
              </p>
              <p>
                React, TypeScript를 주력으로 사용하며, 컴포넌트 설계와 성능 최적화에
                관심이 많습니다. 단순히 동작하는 코드를 넘어서 유지보수하기 쉽고,
                팀원과 협업하기 좋은 코드를 추구합니다.
              </p>
              <p>
                새로운 기술을 빠르게 습득하고, 문제를 체계적으로 분석하여
                최선의 솔루션을 찾아내는 것을 즐깁니다.
              </p>
            </div>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-4 w-full mt-4'>
              {STATS.map(stat => (
                <div
                  key={stat.label}
                  className='glass-card rounded-xl p-4 text-center hover:border-indigo-500/20 transition-colors'
                >
                  <p className='text-2xl font-bold gradient-text'>{stat.value}</p>
                  <p className='text-xs text-slate-500 mt-1'>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href='/resume.pdf'
              target='_blank'
              rel='noreferrer'
              className='group flex items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-indigo-500/40 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 glass-card'
            >
              <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
              </svg>
              Download Resume
              <span className='ml-auto group-hover:translate-x-1 transition-transform'>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
