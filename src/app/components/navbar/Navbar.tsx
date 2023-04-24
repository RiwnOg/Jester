'use client';
import React, { useState, useEffect } from 'react';

import NavLoading from './NavLoading';
import Logo from '@/navbar/Logo';
import UserMenu from '@/navbar/UserMenu';
import Container from '@/components/Container';

const Navbar = () => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <NavLoading />;

  return (
    <div className='fixed z-10 w-full bg-white shadow-sm dark:bg-stone-950'>
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
