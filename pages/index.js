import Head from "next/head";
import Footer from "../components/Footer";
import Bar from "../components/Bar/Bar";
import NavBar from "../components/Navs/NavBar";
import NavBarSession from "../components/Navs/NavBarSession";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import favicon from "../public/favicon.ico";
import Image from "next/image";

export default function Home() {
  const [session, setSession] = useState({});
  const [nav, setNav] = useState(<div></div>);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/revition");
      setSession(response.data);
      if(response.data.status) {
        setNav(<NavBarSession/>)
      } else {
        setNav(<NavBar/>)
      }
    }
    fetchData();
  }, []);

  let card = [];
  for (let i = 1; i <= 39; i++) {
    card.push(
      <div className="flex flex-col items-center mx-24 my-5" key={i}>
        <div className="w-56 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-5 h-56 flex hover:px-0 hover:py-0 transition duration-1000">
          <Image
            alt="talk"
            width={"400px"}
            height="200px"
            src="/img/card.jpg"
          />
        </div>
        <p className="my-2">Lorem mmm</p>
        <p className="w-40 text-sm my-2">
          Lorem accusantium default accusantium ab
        </p>
        <div className="w-56 h-1 bg-cyan-700 rounded-3xl"></div>
      </div>
    );
  }

  return (
    <div className="font-sans">
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>

      <main>
        {nav}

        <Bar></Bar>

        <div className="bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 w-screen h-96 flex items-center sm:h-screen text-center">
          <div className="text-center flex mx-auto w-5/6 justify-center font-bold">
            <h2 className="font-sans text-white sm:text-8xl w-4/6 text-5xl text-center">
              The Best Web Site of commerce
            </h2>
          </div>
        </div>

        <div className="bg-white h-[45rem] flex justify-around flex-col my-5 sm:flex-row sm:h-[40rem]">
          <div className="my-auto">
            <p className="text-cyan-700 text-4xl mb-5 font-bold ml-5">Features</p>
            <p className="text-sm w-[20rem] text-zinc-600 mx-5 mb-5 sm:m-0 sm:w-[30rem]">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commod.
            </p>
          </div>
          <div className="my-auto">
            <div className="bg-cyan-700 w-[20rem] h-72 p-8 flex mx-auto sm:mx-0 sm:w-[40rem] sm:h-[30rem]">
              <Image
                alt="surveys"
                width={"1920px"}
                height={"1272px"}
                src="/img/section.jpg"
              />
            </div>
          </div>
        </div>

        <div className="w-full h-1 bg-cyan-400"></div>

        <div className="mt-20">
          <div className="flex flex-col">
            <p className="text-cyan-700 text-4xl mb-5 font-bold ml-28">
              Talk Newest
            </p>
            <div className="w-full flex flex-wrap">{card}</div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}
