import Image from "next/image";
import { useState } from "react";

function NavBar({ children }) {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  if (openMenu === false && openSearch === false) {
    return (
      <>
        <div>
          <div className="bg-cyan-700 flex w-full py-4 items-center px-5 justify-between">
            <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
              <Image
                src="/img/navegacion.png"
                alt="menu icon"
                className="md:hidden"
                width="56px"
                height="56px"
              />
            </div>
            <div className="flex">
              <a
                href="/"
                className="text-white hidden md:inline ml-2 hover:text-cyan-100"
              >
                Home
              </a>
              <a
                href="/Blog"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                Blog
              </a>
              <a
                href="/About"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                About Us
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="/SignIn"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                Sign in
              </a>
              <a
                href="/SignUp"
                className="text-white hidden md:inline ml-5 px-3 py-1 hover:text-cyan-700 transition duration-500 rounded border-2 border-white hover:bg-white"
              >
                Sign up
              </a>
            </div>
            
            <div
              className="md:hidden"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <Image
                src="/img/search.png"
                alt="search icon"
                width="40px"
                height="40px"
              />
            </div>
          </div>
        </div>

        <div className="h-32 bg-violet-900 hidden md:flex items-center justify-center">
          <input
            type="text"
            className="h-12 w-9/12 text-2xl rounded-full px-5"
          />
          <div className="ml-2">
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
  } else if (openMenu === true && openSearch === false) {
    return (
      <>
        <div>
          <div className="bg-cyan-700 flex w-full py-4 items-center px-5 justify-between">
            <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
              <Image
                src="/img/navegacion.png"
                alt="menu icon"
                className="md:hidden"
                width="56px"
                height="56px"
              />
            </div>
            <div className="flex">
              <a
                href="/"
                className="text-white hidden md:inline ml-2 hover:text-cyan-100"
              >
                Home
              </a>
              <a
                href="/Blog"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                Blog
              </a>
              <a
                href="/About"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                About Us
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="/SignIn"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                Sign in
              </a>
              <a
                href="/SignUp"
                className="text-white hidden md:inline ml-5 px-3 py-1 hover:text-cyan-700 transition duration-500 rounded border-2 border-white hover:bg-white"
              >
                Sign up
              </a>
            </div>
            <div
              className="md:hidden"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <Image
                src="/img/search.png"
                alt="search icon"
                width="40px"
                height="40px"
              />
            </div>
          </div>

          <div className="bg-cyan-900 w-full flex flex-col md:hidden items-center h-52">
            <a href="/" className="text-white hover:text-cyan-100 my-2">
              Home
            </a>
            <div className="bg-slate-400 h-px w-full"></div>
            <a href="/Blog" className="text-white hover:text-cyan-100 my-2">
              Blog
            </a>
            <div className="bg-slate-400 h-px w-full"></div>
            <a href="/About" className="text-white hover:text-cyan-100 my-2">
              About Us
            </a>
            <div className="bg-slate-400 h-px w-full"></div>
            <a href="/SignIn" className="text-white hover:text-cyan-100 my-2">
              Sign in
            </a>
            <div className="bg-slate-400 h-px w-full"></div>
            <a href="/SignUp" className="text-white hover:text-cyan-100 my-2">
              Sign up
            </a>
          </div>
        </div>

        <div className="h-32 bg-violet-900 hidden md:flex items-center justify-center">
          <input
            type="text"
            className="h-12 w-9/12 text-2xl rounded-full px-5"
          />
          <div className="ml-2">
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
  } else if (openMenu === false && openSearch === true) {
    return (
      <>
        <div>
          <div className="bg-cyan-700 flex w-full py-4 items-center px-5 justify-between">
            <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
              <Image
                src="/img/navegacion.png"
                alt="menu icon"
                className="md:hidden"
                width="56px"
                height="56px"
              />
            </div>
            <div className="flex">
              <a
                href="/"
                className="text-white hidden md:inline ml-2 hover:text-cyan-100"
              >
                Home
              </a>
              <a
                href="/Blog"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                Blog
              </a>
              <a
                href="/About"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                About Us
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="/SignIn"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                Sign in
              </a>
              <a
                href="/SignUp"
                className="text-white hidden md:inline ml-5 px-3 py-1 hover:text-cyan-700 transition duration-500 rounded border-2 border-white hover:bg-white"
              >
                Sign up
              </a>
            </div>
            <div
              className="md:hidden"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <Image
                src="/img/search.png"
                alt="search icon"
                width="40px"
                height="40px"
              />
            </div>
          </div>

          <div
            className="h-32 bg-violet-900 flex items-center
        justify-center md:hidden"
          >
            <input type="text" className="h-14 w-9/12 text-4xl" />
            <Image
              src="/img/search.png"
              alt="search icon"
              width="40px"
              height="40px"
            />
          </div>
        </div>

        <div className="h-32 bg-violet-900 hidden md:flex items-center justify-center">
          <input
            type="text"
            className="h-12 w-9/12 text-2xl rounded-full px-5"
          />
          <div className="ml-2">
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
  } else if (openMenu === true && openSearch === true) {
    return (
      <>
        <div>
          <div className="bg-cyan-700 flex w-full py-4 items-center px-5 justify-between">
            <div className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
              <Image
                src="/img/navegacion.png"
                alt="menu icon"
                className="md:hidden"
                width="56px"
                height="56px"
              />
            </div>
            <div className="flex">
              <a
                href="/"
                className="text-white hidden md:inline ml-2 hover:text-cyan-100"
              >
                Home
              </a>
              <a
                href="/Blog"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                Blog
              </a>
              <a
                href="/About"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                About Us
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="/SignIn"
                className="text-white hidden md:inline ml-10 hover:text-cyan-100"
              >
                Sign in
              </a>
              <a
                href="/SignUp"
                className="text-white hidden md:inline ml-5 px-3 py-1 hover:text-cyan-700 transition duration-500 rounded border-2 border-white hover:bg-white"
              >
                Sign up
              </a>
            </div>
            <div
              className="md:hidden"
              onClick={() => setOpenSearch(!openSearch)}
            >
              <Image
                src="/img/search.png"
                alt="search icon"
                width="40px"
                height="40px"
              />
            </div>
          </div>

          <div className="bg-cyan-900 w-full flex flex-col md:hidden items-center h-52">
            <a href="/" className="text-white hover:text-cyan-100 my-2">
              Home
            </a>
            <div className="bg-slate-400 h-px w-full"></div>
            <a href="/Blog" className="text-white hover:text-cyan-100 my-2">
              Blog
            </a>
            <div className="bg-slate-400 h-px w-full"></div>
            <a href="/About" className="text-white hover:text-cyan-100 my-2">
              About Us
            </a>
            <div className="bg-slate-400 h-px w-full"></div>
            <a href="/SignIn" className="text-white hover:text-cyan-100 my-2">
              Sign in
            </a>
            <div className="bg-slate-400 h-px w-full"></div>
            <a href="/SignUp" className="text-white hover:text-cyan-100 my-2">
              Sign up
            </a>
          </div>

          <div
            className="h-32 bg-violet-900 flex items-center
        justify-center md:hidden"
          >
            <input type="text" className="h-14 w-9/12 text-4xl" />
            <Image
              src="/img/search.png"
              alt="search icon"
              width="40px"
              height="40px"
            />
          </div>
        </div>

        <div className="h-32 bg-violet-900 hidden md:flex items-center justify-center">
          <input
            type="text"
            className="h-12 w-9/12 text-2xl rounded-full px-5"
          />
          <div className="ml-2">
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
  }
}

export default NavBar;
