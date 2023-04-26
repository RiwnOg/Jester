'use client';
import ToastGen from '@/components/toastGen/ToastGen';
import toast from 'react-hot-toast';

const handleClick = () => {
  toast.success(<ToastGen type='success' />);
};

export default function Home() {
  return (
    <main>
      <h1 className='text-2xl underline'>Welcome To Jester! 👋</h1>
      <button onClick={handleClick}>click for toast</button>
    </main>
  );
}
