import { useState } from 'react';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/choikyungsoo',
    icon: (
      <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
        <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
      </svg>
    ),
  },
  {
    label: 'Email',
    href: 'mailto:ryana1954@gmail.com',
    icon: (
      <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
        />
      </svg>
    ),
  },
];

const ContactSection = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Connect to email service (EmailJS, Formspree, etc.)
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id='contact' className='py-32 px-6 relative'>
      {/* Background blobs */}
      <div className='absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none' />

      <div className='max-w-6xl mx-auto relative z-10'>
        {/* Section header */}
        <div className='text-center mb-16'>
          <p className='text-indigo-400 text-sm font-mono tracking-widest uppercase mb-3'>
            Get In Touch
          </p>
          <h2 className='text-4xl md:text-5xl font-bold text-white'>Contact</h2>
          <p className='text-slate-500 mt-4 max-w-xl mx-auto'>
            새로운 기회나 협업 제안은 언제든 환영합니다. 메시지를 남겨주세요!
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-12 max-w-4xl mx-auto'>
          {/* Left: Info */}
          <div className='flex-col-items-start gap-8'>
            <div className='space-y-4'>
              <h3 className='text-xl font-semibold text-white'>연락하기</h3>
              <p className='text-slate-400 leading-relaxed'>
                프로젝트 문의, 협업 제안, 또는 단순한 인사도 좋습니다.
                최대한 빠르게 답변드리겠습니다.
              </p>
            </div>

            {/* Social links */}
            <div className='flex-col-items-start gap-3 w-full'>
              {SOCIAL_LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className='group flex items-center gap-3 w-full px-4 py-3 rounded-xl glass-card hover:border-indigo-500/20 transition-all duration-200 hover:-translate-y-0.5'
                >
                  <span className='text-indigo-400 group-hover:text-indigo-300 transition-colors'>
                    {link.icon}
                  </span>
                  <span className='text-slate-400 group-hover:text-white transition-colors text-sm'>
                    {link.label}
                  </span>
                  <span className='ml-auto text-slate-600 group-hover:text-slate-400 transition-colors'>
                    →
                  </span>
                </a>
              ))}
            </div>

            {/* Location */}
            <div className='flex items-center gap-2 text-slate-500 text-sm'>
              <svg className='w-4 h-4 text-indigo-400' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' />
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 11a3 3 0 11-6 0 3 3 0 016 0z' />
              </svg>
              Seoul, South Korea
            </div>
          </div>

          {/* Right: Form */}
          <div className='glass-card rounded-2xl p-6'>
            {submitted ? (
              <div className='flex-col-center gap-4 h-full py-8 text-center'>
                <div className='w-16 h-16 rounded-full bg-indigo-500/10 flex-row-center text-3xl'>
                  ✅
                </div>
                <p className='text-white font-semibold'>메시지가 전송되었습니다!</p>
                <p className='text-slate-500 text-sm'>최대한 빠르게 답변드리겠습니다.</p>
                <button
                  type='button'
                  onClick={() => setSubmitted(false)}
                  className='text-xs text-indigo-400 hover:text-indigo-300 transition-colors'
                >
                  새 메시지 작성
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='flex-col-items-start gap-4 w-full'>
                <div className='w-full space-y-1'>
                  <label className='text-xs text-slate-500' htmlFor='name'>
                    Name
                  </label>
                  <input
                    id='name'
                    name='name'
                    type='text'
                    required
                    value={formState.name}
                    onChange={handleChange}
                    placeholder='Your name'
                    className='w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors'
                  />
                </div>
                <div className='w-full space-y-1'>
                  <label className='text-xs text-slate-500' htmlFor='email'>
                    Email
                  </label>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={formState.email}
                    onChange={handleChange}
                    placeholder='your@email.com'
                    className='w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors'
                  />
                </div>
                <div className='w-full space-y-1'>
                  <label className='text-xs text-slate-500' htmlFor='message'>
                    Message
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder='Tell me about your project or just say hi!'
                    className='w-full px-4 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 transition-colors resize-none'
                  />
                </div>
                <button
                  type='submit'
                  className='w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-600/30'
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
