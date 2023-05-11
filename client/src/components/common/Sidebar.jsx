import React from "react";
import {BsBookmarkDashFill, BsFillPenFill, BsFillSunFill} from 'react-icons/bs'
import {
  MdHome,
  MdStackedBarChart,
  MdQuestionAnswer,
  MdAccessAlarms,
  MdStorefront,
  MdLogout,
  MdDarkMode,
  MdCategory,
  MdLibraryAdd
} from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { FaBookOpen, FaRobot } from "react-icons/fa";
import { useRouter } from "next/router";
import { useMutation } from "react-query";
import { logoutUserAPI } from "@/API/auth";
import { toast } from "react-hot-toast";



const SideBarIcon = ({ icon, text = "tooltip 💡", link, onClick }) => {
  const router = useRouter();
  const handleClick = ()=>router.push(link)
  const isActive = router.pathname===link;
  return (
    <div onClick={link?handleClick:onClick} className={`sidebar-icon group ${isActive?'activeIcon':''}`}>
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

const Sidebar = ({setDarkMode, darkMode}) => {
  const router = useRouter();
  const {mutate,isLoading} = useMutation(logoutUserAPI, {
    onSuccess : (data)=>{
      router.push('/auth/login')
    },
    onError : (err)=>{
      console.log(err)
      toast.error('Something went wrong!');
    }

  });

  const handleLogout = ()=>{
    mutate();
  }
  return (
    <div className="fixed z-[10000] top-0 rounded-tr-2xl rounded-br-2xl scale-0 sm:scale-100 left-0 h-screen w-24 m-0 flex flex-col pt-36 bg-primary dark:bg-darkElevation-100 text-white shadow-lg">
      <SideBarIcon
        link="/app"
        icon={<MdHome size="28" />}
        text="Explore 🌍"
      />
      <SideBarIcon
        link="/app/blog"
        icon={<MdCategory size="27" />}
        text="Content 📑"
      />
      <SideBarIcon icon={<FaBookOpen size="23" />} link="/app/my-courses" text="My Courses 📚" />
      <SideBarIcon icon={<MdLibraryAdd size="22" />} link="/app/course/create" text="Create Course ⚡" />
      {/* <SideBarIcon icon={<MdStorefront size="26" />} link="/" text="Store💊" /> */}
      <SideBarIcon icon={darkMode?<BsFillPenFill size="24" />:<BsFillPenFill size="24" />} link='/app/blog/create'  text={`Write Blogs ✏`} />
      <div  className="logout-icon group" onClick={handleLogout}>
        <MdLogout></MdLogout>
        <span className="sidebar-tooltip group-hover:scale-100" >Logout</span>
      </div>
    </div>
  );
};

export default Sidebar;