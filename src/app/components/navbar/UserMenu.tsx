'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '@/components/Avatar';
import { useCallback, useState } from 'react';
import MenuItem from '@/navbar/MenuItem';

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => {}}
          className='
            block
            cursor-pointer
            rounded-full
            border-[1px]
            border-purple-200
            px-3
            py-2
            text-sm
            font-semibold
            transition
            hover:bg-slate-200
            dark:hover:bg-slate-300
            dark:hover:text-black
            '
        >
          Your Home
        </div>
        <div
          onClick={toggleOpen}
          className='
            flex
            cursor-pointer
            flex-row
            items-center
            gap-3
            rounded-full
            border-[1px]
            border-purple-200
            p-4
            px-2
            py-1 
            shadow-md
            transition
            hover:bg-slate-200
            dark:hover:bg-slate-300
            dark:hover:text-black
            '
        >
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar />
          </div>
        </div>
        {isOpen && (
          <div
            className='
                absolute
                right-0
                top-12
                w-3/4
                overflow-hidden
                rounded-xl
                text-sm
                shadow-md
                dark:bg-slate-600
                '
          >
            <div className='flex cursor-pointer flex-col'>
              <>
                <MenuItem
                  onClick={() => {}}
                  label='Login'
                />
                <MenuItem
                  onClick={() => {}}
                  label='Sign up'
                />
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
