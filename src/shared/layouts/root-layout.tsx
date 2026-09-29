import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div className='min-h-screen bg-[#080d1a] text-slate-100'>
      <Outlet />
    </div>
  );
};

export default RootLayout;
