'use client';

import { IconType } from 'react-icons';

interface MenuItemProps {
  onClick: () => void;
  label: string;
  icon?: IconType;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, icon: Icon }) => {
  return (
    <div
      onClick={onClick}
      className='
        group
        flex
        cursor-pointer
        flex-row
        gap-2
        p-2
        font-semibold 
        transition
        hover:bg-slate-200
        dark:hover:bg-slate-300
        dark:hover:text-black
        '
    >
      {Icon && <Icon size={20} />}
      <p
        className={`${
          Icon && 'border-s border-slate-300 pl-2 dark:group-hover:border-black'
        }`}
      >
        {label}
      </p>
    </div>
  );
};

export default MenuItem;
