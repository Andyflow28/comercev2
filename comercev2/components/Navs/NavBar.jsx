import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const close = "bg-cyan-700 hidden sm:flex";
  const open = "bg-cyan-700";
  const menu_icon = "/img/navegacion.png";
  const logo_icon = "/c.png";
  const search =
    "bg-gradient-to-r from-violet-500 to-violet-700 flex items-center justify-center py-5";
  const search_out =
    "bg-gradient-to-r from-violet-500 to-violet-700 flex items-center justify-center py-5 hidden sm:flex sm:py-7";
  const [menu, setMenu] = useState(close);
  const [menuIcon, setMenuIcon] = useState(menu_icon);
  const [searchs, setSearchs] = useState(search_out);
  const [session, setSession] = useState()

  return (
    <>
      <div>
        <div className="bg-cyan-700 flex w-full py-4 items-center px-5 justify-between sm:py-0">
          <div
            className="sm:hidden flex"
            onClick={() => {
              if (menu === close) {
                setMenu(open);
                setMenuIcon(logo_icon);
              } else {
                setMenu(close);
                setMenuIcon(menu_icon);
              }
            }}
          >
            <Image
              src={menuIcon}
              alt="menu icon"
              className="md:hidden"
              width="56px"
              height="56px"
            />
          </div>
          <div
            className="sm:hidden flex"
            onClick={() => {
              if (searchs === search_out) {
                setSearchs(search);
              } else {
                setSearchs(search_out);
              }
            }}
          >
            <Image
              src="/img/search.png"
              alt="menu icon"
              className="md:hidden"
              width="56px"
              height="56px"
            />
          </div>
        </div>
      </div>

      <div className={menu}>
        <div className="flex flex-col items-start ml-3 py-3 sm:flex-row sm:justify-between sm:w-full">
          <div className="sm:flex">
            <Link href="/">
              <div className="cursor-pointer flex items-center my-1">
                <div className="flex w-7 h-6 justify-center sm:hidden">
                  <Image
                    src="/img/navegation/home.png"
                    alt="menu icon"
                    className="md:hidden"
                    width="56px"
                    height="56px"
                  />
                </div>
                <a className="text-2xl text-white ml-1 sm:p-3">Home</a>
              </div>
            </Link>
            <div className="w-28 h-[1px] bg-white sm:hidden"></div>
            <Link href="/Blog">
              <div className="cursor-pointer flex items-center my-1 ">
                <div className="flex w-7 h-6 justify-center sm:hidden">
                  <Image
                    src="/img/navegation/web.png"
                    alt="menu icon"
                    className="md:hidden"
                    width="56px"
                    height="56px"
                  />
                </div>
                <a className="text-2xl text-white ml-1 sm:ml-5 sm:p-3">Blog</a>
              </div>
            </Link>
            <div className="w-28 h-[1px] bg-white sm:hidden"></div>
            <Link href="/">
              <div className="cursor-pointer flex items-center my-1 ">
                <div className="flex w-7 h-6 justify-center sm:hidden">
                  <Image
                    src="/img/navegation/about.png"
                    alt="menu icon"
                    className="md:hidden"
                    width="56px"
                    height="56px"
                  />
                </div>
                <a className="text-2xl text-white ml-1 sm:ml-5 sm:p-3">About Us</a>
              </div>
            </Link>
          </div>

          <div className="w-28 h-[1px] bg-white sm:hidden"></div>
          <div className="sm:flex">
            <Link href="/Signin">
              <div className="cursor-pointer flex items-center my-1 ">
                <div className="flex w-7 h-6 justify-center sm:hidden">
                  <Image
                    src="/img/navegation/sign_in.png"
                    alt="menu icon"
                    className="md:hidden"
                    width="56px"
                    height="56px"
                  />
                </div>
                <a className="text-2xl text-white ml-1 sm:mr-5 sm:p-3">Sign In</a>
              </div>
            </Link>
            <div className="w-28 h-[1px] bg-white sm:hidden"></div>
            <Link href="/Signup">
              <div className="cursor-pointer flex items-center my-1 ">
                <div className="flex w-7 h-6 justify-center sm:hidden">
                  <Image
                    src="/img/navegation/add.png"
                    alt="menu icon"
                    className="md:hidden"
                    width="56px"
                    height="56px"
                  />
                </div>
                <a className="text-2xl text-white ml-1 sm:mr-5 sm:p-3 sm:hover:text-cyan-700 sm:transition sm:duration-500 sm:rounded sm:border-4 sm:border-white sm:hover:bg-white sm:font-semibold">Sing Up</a>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={searchs}>
        <input type="text" className="py-1 px-2 rounded-3xl sm:text-2xl sm:w-4/6 sm:py-2 sm:px-3" />
        <div className="w-9 h-9 ml-3 sm:w-12 sm:h-12">
          <Image
            src="/img/search.png"
            alt="search icon"
            width="48px"
            height="48px"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
