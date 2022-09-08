import CardBuy from "../components/CardBuy"
import { useEffect, useState } from "react"
import axios from "axios"
import { useSelector } from 'react-redux';
import Head from "next/head";
import favicon from '../public/favicon.ico';

const Buy = () => {

    const { listBuy: product_buy } = useSelector(state => state.product_buy);

    const productTitle = product_buy

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


    if (card !== []) {

        if (card[productTitle] !== undefined)
            return (
                <div>
                    <Head>
                        <title>Git Store</title>
                        <link rel="preconnect" href="https://fonts.googleapis.com" />
                        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap" rel="stylesheet" />
                        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                        <meta name="description" content="Home" />
                        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
                    </Head>
                    <CardBuy productTitle={card[productTitle - 1].name_product} />
                </div>
            )
    } else {
        return (
            <h1>espere</h1>
        )
    }
}

export default Buy