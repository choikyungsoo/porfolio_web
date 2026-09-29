import { useState, useEffect } from 'react';
import { cn } from '@libs/cn';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-[#080d1a]/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent',
      )}
    >
      <nav className='max-w-6xl mx-auto px-6 h-16 flex-row-between'>
        {/* Logo */}
        <a
          href='#hero'
          className='text-xl font-bold gradient-text hover:opacity-80 transition-opacity'
        >
          KS.
        </a>

        {/* Desktop Nav */}
        <ul className='hidden md:flex items-center gap-8'>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className='text-sm text-slate-400 hover:text-white transition-colors duration-200 relative group'
              >
                {link.label}
                <span className='absolute -bottom-0.5 left-0 w-0 h-px bg-indigo-400 group-hover:w-full transition-all duration-300' />
              </a>
            </li>
          ))}
          <li>
            <a
              href='#contact'
              className='px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors duration-200'
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          type='button'
          className='md:hidden p-2 text-slate-400 hover:text-white transition-colors'
          onClick={() => setIsMobileMenuOpen(prev => !prev)}
          aria-label='Toggle menu'
        >
          <div className='w-5 flex flex-col gap-1'>
            <span
              className={cn(
                'h-0.5 bg-current transition-transform duration-300',
                isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : '',
              )}
            />
            <span
              className={cn(
                'h-0.5 bg-current transition-opacity duration-300',
                isMobileMenuOpen ? 'opacity-0' : '',
              )}
            />
            <span
              className={cn(
                'h-0.5 bg-current transition-transform duration-300',
                isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : '',
              )}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden border-t border-white/5 bg-[#080d1a]/95 backdrop-blur-xl transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-64' : 'max-h-0',
        )}
      >
        <ul className='px-6 py-4 flex flex-col gap-4'>
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className='block text-slate-400 hover:text-white transition-colors'
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navigation;