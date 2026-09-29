const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className='border-t border-white/5 py-10 px-6'>
      <div className='max-w-6xl mx-auto flex-col-center gap-4 md:flex-row-between'>
        <p className='text-slate-600 text-sm'>
          © {year} <span className='text-slate-500'>Kyungsoo Choi</span>. All rights reserved.
        </p>
        <p className='text-slate-700 text-xs'>
          Built with React + TypeScript + Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
