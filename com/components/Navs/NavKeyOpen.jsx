import Image from "next/image";

const NavKeyOpen = (props) => {
  return (
    <>
      <div>
        <div className="bg-cyan-700 flex w-full py-4 items-center px-5 justify-between">
          <div
            className="md:hidden"
            onClick={() => props.setFuctionMenu(!props.Menu)}
          >
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

          <div className="w-24 flex flex-col">
            <div
              className="flex items-center mx-auto my-2"
              onClick={() => props.setFuctionElement(!props.variableElement)}
            >
              <Image
                src="/img/login/user.png"
                alt="search icon"
                className="rounded-full border-2 border-white"
                width="56px"
                height="56px"              
              />
            </div>
            <div className="md:flex flex-col items-center bg-white hidden fixed my-20 mx-auto text-xs w-20">
              <a href="#" className="text-cyan-700 my-2">
                Profile
              </a>
              <div className="h-px bg-violet-700 w-full"></div>
              <a href="#" className="text-cyan-700 my-2">
                ShopCar
              </a>
              <div className="h-px bg-violet-700 w-full"></div>
              <button className="text-cyan-700 my-2" onClick={() => props.SignOutFunction()}>Sign Out</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center bg-violet-600 text-center md:hidden">
          <a href="#" className="text-white my-2">
            Profile
          </a>
          <div className="h-px bg-white w-full"></div>
          <a href="#" className="text-white my-2">
            ShopCar
          </a>
          <div className="h-px bg-white w-full"></div>
          <button className="text-white my-2" onClick={() => props.SignOutFunction()}>Sign Out</button>
        </div>
      </div>

      <div className="h-32 bg-violet-900 hidden md:flex items-center justify-center">
        <input type="text" className="h-12 w-9/12 text-2xl rounded-full px-5" />
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
};

export default NavKeyOpen;
