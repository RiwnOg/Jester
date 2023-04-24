'use client';

import React, { useState, useEffect } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

interface ClientOnlyProps {
  children: React.ReactNode;
}

const ClientOnly: React.FC<ClientOnlyProps> = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted)
    return (
      <div
        className='
            fixed
            z-10
            h-12
            w-full
            border-b-[1px]
            border-b-purple-500
            bg-white
            shadow-sm
            dark:bg-stone-950
        '
      >
        <AiOutlineLoading className='h-10 w-10 animate-spin dark:text-slate-200' />
      </div>
    );

  return <>{children}</>;
};

export default ClientOnly;
