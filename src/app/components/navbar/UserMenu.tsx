'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import { GiArchiveRegister } from 'react-icons/gi';
import { BiLogIn, BiLogOut } from 'react-icons/bi';
import { RxMoon, RxSun } from 'react-icons/rx';
import Avatar from '@/components/Avatar';
import { useCallback, useState } from 'react';
import MenuItem from '@/navbar/MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { SafeUser } from '@/types';

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <div
          onClick={toggleOpen}
          className='
            flex
            cursor-pointer
            flex-row
            items-center
            gap-3
            rounded-full
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
          {!currentUser ? <p>Sign in</p> : <Avatar src={currentUser?.image} />}
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
              {currentUser ? (
                <>
                  <MenuItem
                    onClick={() => {}}
                    label='My Trips'
                  />
                  <MenuItem
                    onClick={() => {}}
                    label='My Favorites'
                  />
                  <hr />
                  <MenuItem
                    onClick={() => signOut()}
                    label='Logout'
                    icon={BiLogOut}
                  />
                </>
              ) : (
                <>
                  <MenuItem
                    onClick={() => {
                      toggleOpen();
                      loginModal.onOpen();
                    }}
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
                </>
              )}
              <>
                <hr />
                <MenuItem
                  onClick={() => {
                    setTheme(theme === 'light' ? 'dark' : 'light');
                  }}
                  label={`Theme: ${
                    theme && theme[0].toUpperCase() + theme.slice(1)
                  }`}
                  icon={theme === 'light' ? RxSun : RxMoon}
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
