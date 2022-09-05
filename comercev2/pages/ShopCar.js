import Image from "next/image";
import Head from "next/head";
import NavBarSession from "../../components/Navs/NavBarSession";
import NavBar from "../components/Navs/NavBar";
import Footer from "../../components/Footer";
import Bar from "../../components/Bar/Bar";
import axios from "axios";
import { useState } from "react";
import favicon from "../public/favicon.ico";

export const ShopCar = () => {
  const [nav, setNav] = useState(<div></div>);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/revition");
      if (response.data.status) {
        setNav(<NavBarSession />);
      } else {
        setNav(<NavBar />);
      }
    }
    fetchData();
  }, []);

  const [user, setUser] = useState({
    username: "",
    email: "",
  });

  const getProfile = async () => {
    const response = await axios.get("/api/profile");
    setUser(response.data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <Head>
        <title>Shop Car</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>

      <main>
        {nav}

        <Bar />

        <div>
          <div className="mx-10 px-2 py-4 h-25 flex justify-center border-gray-200 border-2 rounded-xl md:my-5 md:items-center md:mr-96 md:justify-start md:w-4/12">
            <div className="border-violet-700 border-2 w-16 h-16 rounded-full md:w-32 md:h-32 md:ml-5">
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
