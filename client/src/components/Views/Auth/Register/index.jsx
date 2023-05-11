import React, { useState } from 'react';
import Link from 'next/link';
import GoogleAuthButton from '../GoogleAuthButton';
import Input from '../Input';
import { useRouter } from 'next/router';
import RegisterPreferences from './RegisterPreferences';
import RegisterDetails from './RegisterDetails';
import { Toaster, toast } from 'react-hot-toast';
import { useMutation } from 'react-query';
import { registerUserAPI } from '@/API/auth';

const Register = () => {
  const router = useRouter();
  const [step,setStep] = useState(0);
  const [studyPreferences,setStudyPreference] = useState([]);
  const [interestedTopics,setInterestedTopics] = useState([]);
  const [registerForm, setRegisterForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    isTerms: '',
  });
  const {mutate, isLoading} = useMutation(registerUserAPI, {
    onSuccess: (data) => {
      console.log(data);
      toast.success('Registered Successfully!');
      router.push('/auth/login')
    },
    onError : (err)=>{
      console.log(err)
      toast.error(err.response.data.message)
    }
  })
  const handleRegisterCall = ()=>{
    mutate({
      data : registerForm
    });

  }
  return (
    <div className="">
      <Toaster position='bottom-center'/>
      <div className="w-full flex justify-between items-center py-10 max-md:px-10 max-sm:px-6 px-24">
        <Link href="/">
          <div className="flex jus items-center gap-2 uppercase">
            <span className="font-[700] text-xl">InterEd</span>{' '}
          </div>
        </Link>
        <button className="py-2 px-6 font-[600] text-sm text-white bg-black rounded-md">
          <Link href="/auth/login">Join InterEd</Link>
        </button>
      </div>
      <div className="mt-18">
        {
          step === 0 ? <RegisterDetails registerForm={registerForm} setRegisterForm={setRegisterForm}  setStep={setStep}/>:<RegisterPreferences isLoading={isLoading} handleRegisterCall={handleRegisterCall} interestedTopics={interestedTopics} setInterestedTopics={setInterestedTopics} setStudyPreference={setStudyPreference} studyPreferences={studyPreferences}/>
        }
      </div>
    </div>
  );
};

export default Register;
