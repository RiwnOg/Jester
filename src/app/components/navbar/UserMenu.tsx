'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { GiArchiveRegister } from 'react-icons/gi';
import { BiLogIn } from 'react-icons/bi';
import { RxMoon, RxSun } from 'react-icons/rx';
import Avatar from '@/components/Avatar';
import { useCallback, useState } from 'react';
import MenuItem from '@/navbar/MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const UserMenu = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={() => router.push('/home')}
          className='
          hidden
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
            md:block
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
              top-7
              w-48
              overflow-hidden
              rounded-xl
              border
              border-slate-400
              bg-white
              text-sm
              shadow-md
              dark:border-white
              dark:bg-slate-600
              md:top-10
            '
          >
            <div
              className='fixed inset-0 z-[-1]'
              onClick={toggleOpen}
            />

            <div className='flex cursor-pointer flex-col'>
              <>
                <MenuItem
                  onClick={() => {}}
                  label='Login'
                  icon={BiLogIn}
                />
                <MenuItem
                  onClick={() => {
                    toggleOpen();
                    registerModal.onOpen();
                  }}
                  label='Sign up'
                  icon={GiArchiveRegister}
                />
                <hr />
                {theme === 'light' ? (
                  <MenuItem
                    onClick={() => {
                      setTheme('dark');
                      toggleOpen();
                    }}
                    label='Theme: Light'
                    icon={RxSun}
                  />
                ) : (
                  <MenuItem
                    onClick={() => {
                      setTheme('light');
                      toggleOpen();
                    }}
                    label='Theme: Dark'
                    icon={RxMoon}
                  />
                )}
              </>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserMenu;
