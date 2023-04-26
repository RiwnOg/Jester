'use client';

import { useCallback, useState } from 'react';
import { toast } from 'react-hot-toast';
import { signIn } from 'next-auth/react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import { useRouter } from 'next/navigation';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';

import Modal from './Modal';
import Input from '../inputs/Input';
import Heading from '../Heading';
import Button from '../Button';

const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onCloseModal = useCallback(() => {
    reset();
    loginModal.onClose();
  }, [loginModal, reset]);

  const onToggle = useCallback(() => {
    onCloseModal();
    registerModal.onOpen();
  }, [onCloseModal, registerModal]);

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const toastId = toast.loading('Login In...');
    signIn('credentials', {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success('Welcome to Jester! 👋', {
          id: toastId,
          duration: 4000,
        });
        router.refresh();
        onCloseModal();
      }

      if (callback?.error) {
        toast.error(callback.error, { id: toastId, duration: 5000 });
      }
    });
  };

  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='I forgot who you are. 😅'
        subtitle='Login to your account!'
      />
      <Input
        id='email'
        label='Email'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        label='Password'
        type='password'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className='mt-3 flex flex-col gap-4'>
      <hr />
      <Button
        outline
        label='Continue with Google'
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div
        className='
          mt-4
          text-center
          font-light
          text-neutral-500
          dark:text-white
        '
      >
        <div
          className='
            flex
            flex-row
            items-center
            justify-center
            gap-2
          '
        >
          <div>First time around here?</div>
          <div
            onClick={onToggle}
            className='
              cursor-pointer
              text-neutral-800
              hover:underline
              dark:text-neutral-400
            '
          >
            Create an Account
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title='Login'
      actionLabel='Continue'
      onClose={onCloseModal}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
