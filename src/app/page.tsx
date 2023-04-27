'use client';
import { ToastGen, Teste } from '@/components/toastGen';
import toast from 'react-hot-toast';
import Button from './components/Button';

const toastSucces = () => {
  toast.success(
    <ToastGen
      type='success'
      origin='login'
    />
  );
};

const toastFail = () => {
  toast.error(
    <ToastGen
      type='error'
      origin='login'
    />
  );
};

const toastLoading = () => {
  toast.loading(
    <ToastGen
      type='loading'
      origin='login'
    />,
    {
      duration: 4000,
    }
  );
};

export default function Home() {
  return (
    <main>
      <h1 className='text-2xl underline'>Welcome To Jester! 👋</h1>
      <Teste />
      <div className='w-52'>
        <div className='flex flex-col gap-2 p-6'>
          <Button
            small
            label='Click for Success Toast'
            onClick={toastSucces}
          />
          <Button
            small
            label='Click for Fail Toast'
            onClick={toastFail}
          />
          <Button
            small
            label='Click for Loading Toast'
            onClick={toastLoading}
          />
        </div>
      </div>
    </main>
  );
}
