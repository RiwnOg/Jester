'use client';
import { SafeUser } from '@/types';
import {
  MdOutlineRequestPage,
  MdOutlineLocalGroceryStore,
} from 'react-icons/md';
import { RiTodoLine } from 'react-icons/ri';
import RouteItem from '@/navbar/RouteItem';

interface RouteMenuProps {
  currentUser?: SafeUser | null;
}

const RouteMenu: React.FC<RouteMenuProps> = ({ currentUser }) => {
  if (!currentUser) {
    return null;
  }
  return (
    <>
      <div className='flex flex-row gap-10'>
        <RouteItem
          label='Chores'
          onClick={() => {}}
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
