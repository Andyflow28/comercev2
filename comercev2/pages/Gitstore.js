import Head from 'next/head'
import axios from 'axios'
import Footer from '../components/Footer'
import NavBarSession from '../components/Navs/NavBarSession'
import NavBar from '../components/Navs/NavBar'
import Bar from '../components/Bar/Bar'
import Card from '../components/Card'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Pagination from '../components/Pagination'
import favicon from '../public/favicon.ico';

function Gitstore() {
  const router = useRouter()

  const [nav, setNav] = useState(<div></div>);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/revition");
      if(response.data.status) {
        setNav(<NavBarSession/>)
      } else {
        setNav(<NavBar/>)
      }
    }
    fetchData();
  }, []);

  //?Products

  const [card, setCard] = useState([])

  const getProducts = async () => {
    const response = await axios.get('/api/card')
    const products = response.data.product
    const productsPayed = response.data.payed
    productsPayed.forEach(item => {
      for (const index in products) {
        if (products[index].id_product === item.product_id_product) {
          products.splice(index, 1);
        }
      }
    })
    setCard(products)
  }


  useEffect(() => {
    getProducts()
  }, [])

  const Route = (e) => {
    dispatch(fetchAllproductbuys(e));
    router.push('/profilePages/Buy')
  }

  //* Utilidades
  const [ind, setInd] = useState(0)
  const cart = []
  const select = 5;
  let i = Math.floor(ind * ((card.length) / (select)))
  let e = card[i]
  if (e !== undefined) {
    let m = ind
    if (Number.isInteger(((card.length) / (select)))) {
      for (let i = Math.floor(ind * ((card.length) / (select))); i <= Math.round((ind + 1) * ((card.length) / (select))); i++) {
        cart.push(
          <Card key={i - 1} color="orange" title={card[i].name_product} eventFunction={router.push} variable={'/SignIn'} />
        );
      }
    } else if (!Number.isInteger(((card.length) / (select)))) {
      if (ind <= 3) {
        for (let i = Math.floor(ind * ((card.length) / (select))); i <= Math.round((ind + 1) * ((card.length) / (select))); i++) {
          cart.push(
            <Card key={i - 1} color="orange" title={card[i].name_product} eventFunction={router.push} variable={'/SignIn'} />
          );
        }
      } else if (m = 4) {
        for (let i = Math.round((4 / select) * (card.length) - 1); (i <= card.length - 1); i++) {
          cart.push(
            <Card key={i - 1} color="orange" title={card[i].name_product} eventFunction={router.push} variable={'/SignIn'} />
          );
        }
      }
    }
  } else if (e === undefined && ind !== select) {
    cart.push(
      <div className='w-5/6 h-48 flex items-center justify-center bg-cyan-700 rounded-xl my-10 md:h-96 md:my-1'>
        <p className='text-4xl text-violet-300 font-extrabold'>Loading... </p>
      </div>
    )
  }

  const [x1, setX1] = useState(1)

  return (
    <div>
      <Head>
          <title>New Ofert</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="description" content="Home" />
          <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
        </Head>

      <main>
        {nav}

        <Bar />

        <div className="flex flex-col text-center">
          <h2 className="text-4xl text-violet-700 md:my-10">The Best e-Commerce</h2>
          <div className="flex flex-wrap justify-center md:mb-20 md:mt-10">
            {
              cart
            }
          </div>

          <Pagination x1={1} setFunction={setX1} leg={Math.floor((card.length) / (select))} x2={x1 + 4} value={x1} pageFunction={setInd} indicator={ind} />
        </div>


        <Footer />
      </main>
    </div>
  );
}

export default Gitstore