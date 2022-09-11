import Image from "next/image";
import Head from "next/head";
import NavBarSession from "../components/Navs/NavBarSession";
import NavBar from "../components/Navs/NavBar";
import Footer from "../components/Footer";
import Bar from "../components/Bar/Bar";
import axios from "axios";
import { useState, useEffect } from "react";
import favicon from "../public/favicon.ico";

export const ShopCar = () => {
  const [nav, setNav] = useState(<div></div>);
  const [session, setSession] = useState(undefined);
  const [shop, setShop] = useState([]);

  const getProfile = async () => {
    await axios.get("/api/profile").then((response) => {
      if (response !== undefined) {
        setUser({
          username: response.data.username,
          email: response.data.email,
        });
      }
    });
    if (session) {
      const response = await axios.get("/api/shop");
      setShop(response.data);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/revition");
      if (response.data.status) {
        setNav(<NavBarSession />);
        setSession(response.data.status);
      } else {
        setNav(<NavBar />);
        setSession(response.data.status);
      }
    }
    getProfile();
    fetchData();
  }, []);

  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  let shopCar = [];
  for (let i = 1; i <= shop.length; i++) {
    shopCar.push(
      <div
        className="w-44 sm:w-56 bg-white flex sm:mx-10 flex-col justify-center border-2 border-yellow-400 text-center my-5 mx-1 sm:items-center rounded-xl"
        key={i}
      >
        <div className="sm:hidden">
          <Image
            src="/img/product/product1.jpg"
            alt="product"
            width="172px"
            height="112px"
            className="bg-contain rounded-xl"
          />
        </div>
        <div className="hidden sm:block">
          <Image
            src="/img/product/product1.jpg"
            alt="product"
            width="220px"
            height="200px"
          />
        </div>
        <p className="text-violet-700 mt-1">{shop[i - 1]}</p>
        <div className="flex items-center justify-between">
          <div className="container w-16 h-3 flex ml-1 mr-auto"></div>
        </div>
      </div>
    );
  }

  if (session === true) {
    return (
      <div className="font-sans">
        <Head>
          <title>Shop Car</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Home" />
          <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        </Head>

        <main>
          {nav}

          <Bar />

          <div>
            <div className="mx-10 px-2 py-4 h-25 flex justify-center border-gray-200 border-2 rounded-xl sm:my-5 sm:items-center sm:mr-96 sm:justify-start sm:w-4/12">
              <div className="border-violet-700 border-2 w-16 h-16 rounded-full sm:w-32 sm:h-32 sm:ml-5">
                <Image
                  alt="user icon"
                  src="/img/login/user.png"
                  width="128px"
                  height="128px"
                />
              </div>
              <div className="ml-5">
                <div className="text-sm text-gray-600">
                  <p className="ml-10 my-4">UserName: {user.username}</p>
                  <p className="ml-10 my-4">Email: {user.email}</p>
                  <p className="ml-10 my-4">page: www.nose.es</p>
                </div>
              </div>
            </div>
            <div className="mx-10 px-2 my-10 py-4 h-[50rem] flex justify-center border-gray-200 border-2 rounded-xl sm:h-96">
              <div className="m-auto">
                <div>
                  <div className="flex flex-col sm:flex-row">{shopCar}</div>
                </div>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    );
  } else if (session === false) {
    return (
      <div className="font-sans">
        <Head>
          <title>Shop Car</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="description" content="Home" />
          <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        </Head>

        <main>
          <NavBar />

          <Bar />

          <div>
            <div className="mx-10 px-2 my-10 py-4 h-96 flex justify-center items-center border-gray-200 border-2 rounded-xl">
              <button
                className="px-2 bg-violet-700 h-16 w-48 rounded-xl text-white hover:text-black-900 transition duration-150"
                onClick={() => router.push("/Signin")}
              >
                You Need Logining
              </button>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    );
  } else {
    return (
      <>
        <div className="h-screen my-0 w-full flex items-center justify-center bg-cyan-700 sm:my-1 sm:h-screen font-sans">
          <p className="text-4xl text-violet-300 font-extrabold">Loading... </p>
        </div>
      </>
    );
  }
};

export default ShopCar;
