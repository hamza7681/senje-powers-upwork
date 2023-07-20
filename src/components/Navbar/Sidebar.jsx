import { useState } from "react";
import { Link } from "react-router-dom";
import { ImCross } from "react-icons/im";
import { AiFillHome } from "react-icons/ai";
const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const handleCloseSidebar = () => {
    setOpen(false);
  };

  const Menus = [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: <AiFillHome></AiFillHome>,
    },
    { title: "Profiles", url: "/profiles", icon: <AiFillHome></AiFillHome> },
    {
      title: "Investment Area",
      url: "/dashboard",
      icon: <AiFillHome></AiFillHome>,
    },
    { title: "Network", url: "/dashboard", icon: <AiFillHome></AiFillHome> },
    {
      title: "Income Area",
      url: "/dashboard",
      icon: <AiFillHome></AiFillHome>,
    },
    {
      title: "Withdrawl Area",
      url: "/dashboard",
      icon: <AiFillHome></AiFillHome>,
    },
    {
      title: "Get Help",
      url: "/dashboard",
      gap: true,
      icon: <AiFillHome></AiFillHome>,
    },
    { title: "Settings", url: "/dashboard", icon: <AiFillHome></AiFillHome> },
    { title: "Logout", url: "/dashboard", icon: <AiFillHome></AiFillHome> },

  ];

  return (
    <div className="flex">
        
      <div
        className={` ${
            open ? "w-72 translate-x-0" : "-translate-x-full"
        } fixed h-screen p-5 pt-8 top-0 left-0 text-black transition-transform duration-300`}
  
      >
      <ImCross
        className={`lg:hidden absolute cursor-pointer -right-0 top-9 w-7 text-2xl
          rounded-full ${!open && "rotate-180"}`}
        onClick={handleCloseSidebar}
      />


        <div className="flex gap-x-4 items-center">
          {/* <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          /> */}
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Logo
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex rounded-md p-2 cursor-pointer  text-black text-sm items-center gap-x-4 
      ${Menu.gap ? "mt-52" : "mt-0"} ${index === 6 && ""} 
      `}
            >
              <Link
                to={Menu.url}
                className={`${
                  !open && "hidden"
                } flex gap-x-3 origin-left duration-200`}
              >
                {Menu.icon}
                {Menu.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Sidebar;
