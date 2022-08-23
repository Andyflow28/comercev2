import Image from "next/image";
import Head from "next/head";
import NavBarSession from "../components/Navs/NavBarSession";
import Footer from "../components/Footer";
import Bar from "../components/Bar";
import axios from "axios";
import { useState } from "react";

export const ShopCar = () => {
  const [User, setUser] = useState({
    userName: "",
    email: "",
  });

  const getProfile = async () => {
    const response = await axios.get("/api/profile");
    setUser(response.data);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBarSession />

        <Bar />

        <div>
          <div className="mx-10 px-2 py-4 h-25 flex justify-center border-gray-200 border-2 rounded-xl md:my-5 md:items-center md:mr-96 md:justify-start md:w-4/12">
            <div className="border-violet-700 border-2 w-16 h-16 rounded-full md:w-32 md:h-32 md:ml-5">
              <Image
                alt="user icon"
                src="/img/login/user.png"
                width="128px"
                height="128px"
                onClick={() => getProfile()}
              />
            </div>
            <div className="ml-5">
              <div className="text-sm text-gray-600">
                <p className="ml-10 my-4">UserName: {User.userName}</p>
                <p className="ml-10 my-4">Email: {User.email}</p>
                <p className="ml-10 my-4">page: www.nose.es</p>
              </div>
            </div>
          </div>
          <div className="mx-10 px-2 my-10 py-4 h-96 flex justify-center border-gray-200 border-2 rounded-xl">
            <div className="m-auto">
              <div className="">
                <div>
                  <div className="w-44 md:w-56 bg-white flex md:mx-10 flex-col justify-center border-2 border-yellow-400 text-center my-5 mx-1 md:items-center rounded-xl">
                    <div className="md:hidden">
                      <Image
                        src="/img/product/product1.jpg"
                        alt="product"
                        width="172px"
                        height="112px"
                        className="bg-contain rounded-xl"
                      />
                    </div>
                    <div className="hidden md:block">
                      <Image
                        src="/img/product/product1.jpg"
                        alt="product"
                        width="220px"
                        height="200px"
                      />
                    </div>
                    <p className="text-violet-700 mt-1">Product title</p>
                    <div className="flex items-center justify-between">
                      <div className="container w-16 h-3 flex ml-1 mr-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </div>
  );
};

export default ShopCar;
