'use client';
import { useSnackbar } from '@/components/alert/alert.context';
import InputField from '@/components/form/input.component';
import SVGComponent from '@/components/svg/svg.component';
import Button from '@/components/ui/button.component';
import { AuthAPI } from '@/services/api-calls/auth.api-calls';
import { CookieProvider } from '@/utils/cookies.util';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const LoginPage = () => {
  const router = useRouter();
  const { toastMessage } = useSnackbar();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(true);

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const submitHandler = async (data: any) => {
    try {
      setIsLoading((_prev) => true);
      let res: any = await AuthAPI.login(data);
      await CookieProvider.saveCookies('token', res.token);
      await CookieProvider.saveCookies('_id', res._id);
      setIsLoading((_prev) => false);
    } catch (error) {
      console.log(error);
      toastMessage('Something went wrong', 'error');
      setIsLoading((_prev) => false);
    }
  };

  return (
    <>
      <div className="bg-gray-900 flex items-center justify-center h-[91vh] px-2 sm:px-0">
        <div
          className="bg-gray-100 text-gray-500  rounded-md sm:rounded-3xl shadow-xl w-full overflow-hidden"
          style={{ maxWidth: '1000px' }}
        >
          <div className="md:flex w-full">
            <SVGComponent />
            <div className="w-full md:w-1/2 py-3 sm:py-6 px-2 sm:py-10 sm:px-5 md:px-10">
              <div className="text-center mb-3">
                <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                <p>Enter your information to login</p>
              </div>
              <div className="w-full my-8">
                <form onSubmit={handleSubmit(submitHandler)} className="w-full">
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
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    startIcon={
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <FaLock />
                      </div>
                    }
                    InputProps={{ ...register('password', { required: true }) }}
                    errors={errors.password}
                  />

                  <div className="w-full mt-4 mb-3">
                    <Button title="Login" type="submit" loading={isLoading} />
                  </div>
                </form>
              </div>

              <div className="my-1">
                <p>
                  Don't have an account,
                  <span className="mx-1 text-indigo-600 hover:text-indigo-400">
                    <Link href="/signup">create one</Link>{' '}
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

export default LoginPage;
