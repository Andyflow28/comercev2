import Head from "next/head";
import Footer from "../components/Footer";
import NavBarSession from "../components/Navs/NavBarSession";
import Bar from "../components/Bar/Bar";
import favicon from "../public/favicon.ico";
import { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/Navs/NavBar";

function Blog() {
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

  return (
    <div className="font-sans">
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Home" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>

      <main>
        {nav}
        <Bar />

        <div className="w-full h-full bg-gray-100">
          <div className="m-8 border-xlv border-gray-100 shadow-2xl flex flex-col justify-center bg-white">
            <h2 className="text-4xl mx-8 text-violet-700 font-extrabold">
              Lorem ipsum
            </h2>
            <div>
              <p className="text-xs sm:text-lg m-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                facere vel cum voluptates officia, sint eum perspiciatis vitae
                tenetur incidunt. Aperiam rem sint nostrum quo dolor
                necessitatibus tenetur voluptates pariatur? Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Nesciunt fugiat totam
                tempore voluptates quos, distinctio voluptas id doloribus
                soluta, labore, enim reprehenderit nisi magnam unde quae ab
                animi vitae veritatis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum natus aperiam iste nam praesentium
                consequuntur dolorem dignissimos neque veritatis facere.
                Inventore dolor iste voluptatum! Soluta aliquam eos ducimus odit
                vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam temporibus consequatur, ratione expedita et veniam
                soluta maxime provident quaerat cupiditate neque voluptatum
                vero? Corporis nisi debitis in culpa, molestiae aut! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus ab
                consectetur voluptatem eaque pariatur, hic velit incidunt
                blanditiis, obcaecati consequatur, a corporis aspernatur et.
                Temporibus dignissimos doloribus vero fuga. Natus? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Minus accusantium
                est corporis, ex animi aliquam repudiandae velit amet
                perspiciatis, quos voluptatem blanditiis porro cupiditate ad.
                Voluptatum doloribus dolorum repudiandae quae?
              </p>

              <p className="text-xs sm:text-lg m-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                facere vel cum voluptates officia, sint eum perspiciatis vitae
                tenetur incidunt. Aperiam rem sint nostrum quo dolor
                necessitatibus tenetur voluptates pariatur? Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Nesciunt fugiat totam
                tempore voluptates quos, distinctio voluptas id doloribus
                soluta, labore, enim reprehenderit nisi magnam unde quae ab
                animi vitae veritatis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum natus aperiam iste nam praesentium
                consequuntur dolorem dignissimos neque veritatis facere.
                Inventore dolor iste voluptatum! Soluta aliquam eos ducimus odit
                vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam temporibus consequatur, ratione expedita et veniam
                soluta maxime provident quaerat cupiditate neque voluptatum
                vero? Corporis nisi debitis in culpa, molestiae aut! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus ab
                consectetur voluptatem eaque pariatur, hic velit incidunt
                blanditiis, obcaecati consequatur, a corporis aspernatur et.
                Temporibus dignissimos doloribus vero fuga. Natus? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Minus accusantium
                est corporis, ex animi aliquam repudiandae velit amet
                perspiciatis, quos voluptatem blanditiis porro cupiditate ad.
                Voluptatum doloribus dolorum repudiandae quae?
              </p>

              <p className="text-xs sm:text-lg m-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                facere vel cum voluptates officia, sint eum perspiciatis vitae
                tenetur incidunt. Aperiam rem sint nostrum quo dolor
                necessitatibus tenetur voluptates pariatur? Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Nesciunt fugiat totam
                tempore voluptates quos, distinctio voluptas id doloribus
                soluta, labore, enim reprehenderit nisi magnam unde quae ab
                animi vitae veritatis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum natus aperiam iste nam praesentium
                consequuntur dolorem dignissimos neque veritatis facere.
                Inventore dolor iste voluptatum! Soluta aliquam eos ducimus odit
                vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam temporibus consequatur, ratione expedita et veniam
                soluta maxime provident quaerat cupiditate neque voluptatum
                vero? Corporis nisi debitis in culpa, molestiae aut! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus ab
                consectetur voluptatem eaque pariatur, hic velit incidunt
                blanditiis, obcaecati consequatur, a corporis aspernatur et.
                Temporibus dignissimos doloribus vero fuga. Natus? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Minus accusantium
                est corporis, ex animi aliquam repudiandae velit amet
                perspiciatis, quos voluptatem blanditiis porro cupiditate ad.
                Voluptatum doloribus dolorum repudiandae quae?
              </p>

              <p className="text-xs sm:text-lg m-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                facere vel cum voluptates officia, sint eum perspiciatis vitae
                tenetur incidunt. Aperiam rem sint nostrum quo dolor
                necessitatibus tenetur voluptates pariatur? Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Nesciunt fugiat totam
                tempore voluptates quos, distinctio voluptas id doloribus
                soluta, labore, enim reprehenderit nisi magnam unde quae ab
                animi vitae veritatis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum natus aperiam iste nam praesentium
                consequuntur dolorem dignissimos neque veritatis facere.
                Inventore dolor iste voluptatum! Soluta aliquam eos ducimus odit
                vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam temporibus consequatur, ratione expedita et veniam
                soluta maxime provident quaerat cupiditate neque voluptatum
                vero? Corporis nisi debitis in culpa, molestiae aut! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus ab
                consectetur voluptatem eaque pariatur, hic velit incidunt
                blanditiis, obcaecati consequatur, a corporis aspernatur et.
                Temporibus dignissimos doloribus vero fuga. Natus? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Minus accusantium
                est corporis, ex animi aliquam repudiandae velit amet
                perspiciatis, quos voluptatem blanditiis porro cupiditate ad.
                Voluptatum doloribus dolorum repudiandae quae?
              </p>

              <p className="text-xs sm:text-lg m-6 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
                facere vel cum voluptates officia, sint eum perspiciatis vitae
                tenetur incidunt. Aperiam rem sint nostrum quo dolor
                necessitatibus tenetur voluptates pariatur? Lorem ipsum dolor
                sit amet consectetur, adipisicing elit. Nesciunt fugiat totam
                tempore voluptates quos, distinctio voluptas id doloribus
                soluta, labore, enim reprehenderit nisi magnam unde quae ab
                animi vitae veritatis! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsum natus aperiam iste nam praesentium
                consequuntur dolorem dignissimos neque veritatis facere.
                Inventore dolor iste voluptatum! Soluta aliquam eos ducimus odit
                vel. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam temporibus consequatur, ratione expedita et veniam
                soluta maxime provident quaerat cupiditate neque voluptatum
                vero? Corporis nisi debitis in culpa, molestiae aut! Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Temporibus ab
                consectetur voluptatem eaque pariatur, hic velit incidunt
                blanditiis, obcaecati consequatur, a corporis aspernatur et.
                Temporibus dignissimos doloribus vero fuga. Natus? Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Minus accusantium
                est corporis, ex animi aliquam repudiandae velit amet
                perspiciatis, quos voluptatem blanditiis porro cupiditate ad.
                Voluptatum doloribus dolorum repudiandae quae?
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default Blog;
