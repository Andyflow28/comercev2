import CardBuy from "../components/CardBuy";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Head from "next/head";
import favicon from "../public/favicon.ico";
import { useRouter } from "next/router";

const Buy = () => {
  const router = useRouter();
  const { listBuy: product_buy } = useSelector((state) => state.product_buy);

  const productTitle = product_buy;

  const [card, setCard] = useState([]);
  const [session, setSession] = useState({});

  const getProducts = async () => {
    const response = await axios.get("/api/card");
    const products = response.data.product;
    const productsPayed = response.data.payed;
    productsPayed.forEach((item) => {
      for (const index in products) {
        if (products[index].id_product === item.product_id_product) {
          products.splice(index, 1);
        }
      }
    });
    setCard(products);
  };

  const Revition = async () => {
    const response = await axios.get("/api/revition");
    setSession(response.data);
  };

  useEffect(() => {
    getProducts();
    Revition();
  }, []);

  if (card !== [] && session.status === true) {
    if (card[productTitle] !== undefined)
      return (
        <div className="font-sans">
          <Head>
            <title>Git Store</title>
            <meta
              name="viewport"
              content="initial-scale=1.0, width=device-width"
            />
            <meta name="description" content="Home" />
            <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
          </Head>
          <CardBuy productTitle={card[productTitle - 1].name_product} />
        </div>
      );
  } else if (card !== [] && session.status === false) {
    router.push("/Signin");
  } else {
    return (
      <>
        <div className="h-screen my-0 w-full flex items-center justify-center bg-cyan-700 md:my-1 md:h-screen font-sans">
          <p className="text-4xl text-violet-300 font-extrabold">Loading... </p>
        </div>
      </>
    );
  }
};

export default Buy;
