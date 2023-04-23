'use client';

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div
      onClick={onClick}
      className='
        px-2
        py-2
        font-semibold
        transition
        hover:bg-slate-200
        
        dark:hover:bg-slate-300
        dark:hover:text-black
        '
    >
      {label}
    </div>
  );
};

export default MenuItem;
