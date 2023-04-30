'use client';
import { useRouter } from 'next/navigation';
import {
  MdOutlineRequestPage,
  MdOutlineLocalGroceryStore,
} from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import { SafeUser } from '@/types';
import RouteItem from '@/navbar/RouteItem';

interface RouteMenuProps {
  currentUser?: SafeUser | null;
}

const RouteMenu: React.FC<RouteMenuProps> = ({ currentUser }) => {
  const router = useRouter();

  if (!currentUser) {
    return null;
  }

  return (
    <>
      <div className='flex flex-row gap-10'>
        <RouteItem
          label='Workload'
          onClick={() => router.push('/workload')}
          icon={RiTodoLine}
        />
        <RouteItem
          label='Budget'
          onClick={() => {}}
          icon={MdOutlineRequestPage}
        />
        <RouteItem
          label='Groceries'
          onClick={() => {}}
          icon={MdOutlineLocalGroceryStore}
        />
      </div>
    </>
  );
};

export default RouteMenu;
