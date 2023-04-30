'use client';

import { IconType } from 'react-icons';

interface RouteItemProps {
  label: string;
  onClick: () => void;
  icon?: IconType;
}

const RouteItem: React.FC<RouteItemProps> = ({
  label,
  onClick,
  icon: Icon,
}) => {
  return (
    <div
      onClick={onClick}
      className='
        group
        flex
        cursor-pointer
        flex-row
        items-center
        gap-2
        rounded-lg
        border-[1px]
        border-black
        bg-slate-200
        p-1
        shadow-sm
        hover:bg-slate-400
        dark:border-white
        dark:bg-slate-600
        dark:hover:bg-slate-300
        dark:hover:text-black
      '
    >
      {!!Icon ? <Icon size={20} /> : <p className='block sm:hidden'>✖️</p>}
      <p
        className={`${
          Icon && 'border-s border-slate-300 px-2 dark:group-hover:border-black'
        } hidden sm:block`}
      >
        {label}
      </p>
    </div>
  );
};

export default RouteItem;
