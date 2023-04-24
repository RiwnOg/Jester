'use client';

import axios from 'axios';
import toast from 'react-hot-toast';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import Modal from '@/components/modals/Modal';
import Heading from '@/components/Heading';
import Button from '@/components/Button';
import Input from '@/components/inputs/Input';
import useRegisterModal from '@/app/hooks/useRegisterModal';

interface RegisterModalProps {}

const RegisterModal: React.FC<RegisterModalProps> = ({}) => {
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    const toastId = toast.loading('Saving...');
    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('Welcome to Jester! 👋', { id: toastId, duration: 1000 });
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error('Something went wrong. 😢\n' + error.message, {
          id: toastId,
          duration: 6000,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  const bodyContent = (
    <div className='flex flex-col gap-4'>
      <Heading
        title='I humbly request some information. 👑'
        subtitle='Create an Account!'
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
        id='name'
        label='Name'
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id='password'
        type='password'
        label='Password'
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
        onClick={() => {}}
      />
      <Button
        outline
        label='Continue with Github'
        icon={AiFillGithub}
        onClick={() => {}}
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
          <div>Already have an Account?</div>
          <div
            onClick={registerModal.onClose}
            className='
              cursor-pointer
              text-neutral-800
              hover:underline
              dark:text-neutral-400
            '
          >
            Log In
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title='Register'
      actionLabel='Continue'
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default RegisterModal;
