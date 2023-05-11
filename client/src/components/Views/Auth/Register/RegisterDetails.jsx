import React, { useState } from 'react';
import GoogleAuthButton from '../GoogleAuthButton';
import Input from '../Input';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';

const RegisterDetails = ({ setStep,registerForm, setRegisterForm }) => {
  const router = useRouter();

  const [errorForm, setErrorForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isTerms: '',
  });
  const handleChange = (e) =>
    setRegisterForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    const handleSubmit = (e)=>{
      if (e) e.preventDefault();
      toast.success('Registered processed!')
      setStep(1);
    }
  return (
    <div className=" flex flex-col items-center justify-center mx-auto w-[30%] 2max-xl:w-[40%] max-xl:w-[50%] max-lg:w-[55%] max-lg:mt-20 max-sm:mt-12 max-xs:mt-10 max-md:w-[70%] max-sm:w-[90%]  pb-10">
      <div className="text-3xl text-center font-bold text-gray-800">
        Join Most Amazing Learning Community
      </div>
      <form onSubmit={handleSubmit} className="mt-8 w-full">
        <GoogleAuthButton text="Register With Google" />
        <div className="grid mt-6 grid-cols-[1fr_2.5fr_1fr] max-sm:grid-cols-[1fr_2.5fr_1fr] gap-1 items-center">
          <span className="w-full h-[2px] bg-gray-300"></span>
          <span className="text-center tracking-wide text-lg max-xs:text-base">
            Or, register with your email
          </span>
          <span className="w-full h-[2px] bg-gray-300"></span>
        </div>
        <div className="mt-4 space-y-3">
          <Input
            onChange={handleChange}
            name="fullName"
            error={errorForm.fullName}
            label="Full Name"
            placeholder="Full Name"
          />
          <Input
            onChange={handleChange}
            name="email"
            label="Email"
            error={errorForm.email}
            placeholder="name@gmail.com"
          />
          <div className="grid grid-cols-2 gap-5">
            <Input
              onChange={handleChange}
              name="password"
              label="Password"
              placeholder="password"
              type='password'
              error={errorForm.password}
            />
            <Input
              onChange={handleChange}
              name="confirmPassword"
              label="Confirm Password"
              placeholder="Confirm Password"
              type='password'
              error={errorForm.confirmPassword}
            />
          </div>
        </div>
        <div className="flex items-center mt-5 justify-between">
          <div className="flex cursor-pointer items-center gap-1">
            <input
              checked={registerForm.isTerms}
              name="isTerms"
              onChange={(e) =>
                setRegisterForm((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.checked,
                }))
              }
              className="cursor-pointer"
              type="checkbox"
            />
            <div className="text-[14px]  hover:text-primary cursor-pointer hover:underline">
              Terms and conditions
            </div>
          </div>
          <div
            onClick={() => router.push(`/auth/login`)}
            className="underline cursor-pointer text-[16px] font-light"
          >
            Already have an account?
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="mt-8 w-full rounded-lg bg-black font-bold text-white py-3"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterDetails;
