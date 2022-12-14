import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import styles from "../../styles/Nav.module.css";

const NavBarSession = () => {
  const router = useRouter();
  const close = "bg-cyan-700 hidden sm:flex";
  const open = "bg-cyan-700";
  const menu_icon = "/img/navegacion.png";
  const logo_icon = "/c.png";
  const search =
    "bg-gradient-to-r from-violet-500 to-violet-700 flex items-center justify-center py-5";
  const search_out =
    "bg-gradient-to-r from-violet-500 to-violet-700 flex items-center justify-center py-5 hidden sm:flex sm:py-7";
  const hidden_log = "hidden";
  const open_log =
    "bg-white w-40 h-20 fixed mt-20 text-center items-center justify-center text-3xl font-bold mr-5 text-red-700 hidden sm:flex cursor-pointer " +
    styles.fix;
  const [menu, setMenu] = useState(close);
  const [menuIcon, setMenuIcon] = useState(menu_icon);
  const [searchs, setSearchs] = useState(search_out);
  const [log, setLog] = useState(hidden_log);

  const logoutHandler = async () => {
    const response = await axios.post("/api/auth/logout");
    router.reload();
  };

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
        <div className="flex flex-col items-start ml-3 py-3 sm:flex-row sm:justify-between sm:w-full sm:items-center">
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
            <Link href="/About">
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
                <a className="text-2xl text-white ml-1 sm:ml-5 sm:p-3">
                  About Us
                </a>
              </div>
            </Link>
          </div>

          <div className="w-28 h-[1px] bg-white sm:hidden"></div>

          <div className="hidden sm:w-14 sm:h-14 sm:justify-center sm:flex sm:mr-5">
            <Image
              src="/img/navegation/user.png"
              alt="menu icon"
              className="sm:hidden cursor-pointer"
              width="56px"
              height="56px"
              onClick={() => {
                if (log === hidden_log) {
                  setLog(open_log);
                } else {
                  setLog(hidden_log);
                }
              }}
            />
          </div>

          <div className={log} onClick={() => logoutHandler()}>
            <p>Log Out</p>
          </div>

          <div className="sm:hidden">
            <Link href="/">
              <div className="cursor-pointer flex items-center my-1 ">
                <div className="flex w-7 h-6 justify-center sm:hidden">
                  <Image
                    src="/img/navegation/logout.png"
                    alt="menu icon"
                    className="md:hidden"
                    width="56px"
                    height="56px"
                  />
                </div>
                <a
                  className="text-2xl text-violet-700 font-bold ml-1 sm:mr-5 sm:p-3 sm:hover:text-cyan-700 sm:transition sm:duration-500 sm:rounded sm:border-4 sm:border-white sm:hover:bg-white sm:font-semibold"
                  onClick={() => logoutHandler()}
                >
                  Logout
                </a>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className={searchs}>
        <input
          type="text"
          className="py-1 px-2 rounded-3xl sm:text-2xl sm:w-4/6 sm:py-2 sm:px-3"
        />
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

export default NavBarSession;
