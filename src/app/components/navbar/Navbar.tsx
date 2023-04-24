'use client';
import Container from '@/components/Container';
import Logo from '@/navbar/Logo';
import UserMenu from '@/navbar/UserMenu';

const Navbar = () => {
  return (
    <div
      className='
          fixed
          z-10
          w-full
          border-b-[1px]
          border-b-purple-500
          bg-white
          shadow-sm
          dark:bg-stone-950
      '
    >
      <Container>
        <div className='flex flex-row items-center justify-between gap-3'>
          <Logo />
          <div className='flex flex-row items-center justify-between gap-3'>
            <UserMenu />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
