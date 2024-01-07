'use client';
import { useSnackbar } from '@/components/alert/alert.context';
import InputField from '@/components/form/input.component';
import SVGComponent from '@/components/svg/svg.component';
import Button from '@/components/ui/button.component';
import { AuthAPI } from '@/services/api-calls/auth.api-calls';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const SignupPage = () => {
  const router = useRouter();
  const { toastMessage } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const confirmPassword = watch('confirm_password', '');
  const password = watch('password', '');

  const submitHandler = async (user: any) => {
    try {
      setIsLoading((_prev) => true);
      let { confirm_password, ...rest } = user;
      let data = await AuthAPI.registration(rest);
      toastMessage(data.msg, 'success');
      setIsLoading((_prev) => false);
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    } catch (error) {
      toastMessage(error, 'error');
      setIsLoading((_prev) => false);
    }
  };

  return (
    <>
      <div className="bg-gray-900 flex items-center justify-center h-[91vh] px-2 sm:px-0">
        <div
          className="bg-gray-100 text-gray-500 rounded-md  sm:rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: '1000px' }}
        >
          <div className="md:flex w-full">
            <SVGComponent />
            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-3">
                <h1 className="font-bold text-3xl text-gray-900">Register </h1>
                <p>Enter your information to register</p>
              </div>
              <form onSubmit={handleSubmit(submitHandler)}>
                <div className="w-full my-8">
                  <InputField
                    label="Email"
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                    startIcon={
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <MdEmail />
                      </div>
                    }
                    InputProps={{
                      ...register('email', {
                        required: true,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: 'Invalid email address'
                        }
                      })
                    }}
                    errors={errors.email}
                  />

                  <InputField
                    name="password"
                    label="Password"
                    type={isPassword == true ? 'password' : 'text'}
                    startIcon={
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <FaLock />
                      </div>
                    }
                    InputProps={{
                      ...register('password', {
                        required: true,
                        validate: (value) => value === confirmPassword || 'Passwords do not match'
                      })
                    }}
                    errors={errors.password}
                  />
                  <InputField
                    name="confirm_password"
                    label="Confirm Password"
                    type={isPassword == true ? 'password' : 'text'}
                    startIcon={
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <FaLock />
                      </div>
                    }
                    InputProps={{
                      ...register('confirm_password', {
                        required: true,
                        validate: (value) => value === password || 'Passwords do not match'
                      })
                    }}
                    errors={errors.confirm_password}
                  />
                  <div className="w-full mt-4 mb-3">
                    <Button title="Signup" loading={isLoading} />
                  </div>
                </div>
              </form>

              <div className="my-1">
                <p>
                  Already have an account,
                  <span className="mx-1 text-indigo-600 hover:text-indigo-400">
                    <Link href="/login">login here</Link>{' '}
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
