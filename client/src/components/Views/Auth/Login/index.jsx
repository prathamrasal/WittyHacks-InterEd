import React, { useState } from "react";
import Link from "next/link";
import GoogleAuthButton from "../GoogleAuthButton";
import Input from "../Input";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { loginUserAPI } from "@/API/auth";
import { toast } from "react-hot-toast";
import { useAppStore } from "@/hooks/useAppStore";


const SignIn = () => {
    const router = useRouter();
    const [loginForm,setLoginForm] = useState({
      email : "",
      password : ""
    })
    const setUser = useAppStore(state=>state.setUser);
    const handleChange = (e)=>setLoginForm(prev=>({...prev,[e.target.name] : e.target.value}));
    const {mutate,isLoading} = useMutation(loginUserAPI, {
      onSuccess: (data) => {
        toast.success("Loggedin Successfully!");
        router.push("/app");
        setUser(data.user);
      },
      onError : (err)=>{
        console.log(err)
        toast.error(err.response.data.message)
      }
    })
    const handleLogin = ()=>{
      console.log(loginForm);
      mutate({
        data : loginForm
      })
    }
  return (
    <div className="">
      <div className="w-full flex justify-between items-center py-10 max-md:px-10 max-sm:px-6 px-24">
        <Link href='/'>
        <div className="flex jus items-center gap-2 uppercase">
          <span className="font-[700] text-xl">InterEd</span>{" "}
        </div>
        </Link>
        <button className="py-2 px-6 font-[600] text-sm text-white bg-black rounded-md"><Link href='/pricing'>Join InterEd</Link></button>
      </div>
      <div className="mt-18  flex flex-col items-center justify-center mx-auto w-[30%] 2max-xl:w-[40%] max-xl:w-[50%] max-lg:w-[55%] max-lg:mt-20 max-sm:mt-12 max-xs:mt-10 max-md:w-[70%] max-sm:w-[90%]  pb-10">
        <div className="text-5xl font-bold text-gray-800">Welcome.</div>
        <div className="mt-14 w-full">
            <GoogleAuthButton/>
            <div className="grid mt-6 grid-cols-[1fr_2fr_1fr] max-sm:grid-cols-[1fr_2.5fr_1fr] gap-1 items-center">
                <span className="w-full h-[2px] bg-gray-300"></span>
                <span className="text-center tracking-wide text-lg max-xs:text-base">Or, signin with your email</span>
                <span className="w-full h-[2px] bg-gray-300"></span>
            </div>
            <div className="mt-7 space-y-5">
                <Input onChange={handleChange} name='email' value={loginForm.email} label='Email' placeholder='name@gmail.com'/>
                <Input type='password' onChange={handleChange} name='password'  value={loginForm.password} label='Password' placeholder='password'/>
            </div>
            <div className="flex items-center mt-5 justify-between">
                <div className="flex items-center gap-1">
                    <input type='checkbox'/>
                    <div className="text-[17px]">Keep me signed in</div>
                </div>
                <div className="underline text-[16px] font-light">Forget Password?</div>
            </div>
            <button disabled={isLoading} onClick={handleLogin} className="mt-8 w-full rounded-lg bg-black font-bold text-white py-3">{isLoading?'Loading..':'Sign in'}</button>
            <div onClick={()=>router.push('/auth/register')} className="text-center underline mt-4 cursor-pointer">Don't have an account?</div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
