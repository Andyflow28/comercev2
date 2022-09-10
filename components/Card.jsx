import Image from "next/image";
import { useState, useEffect } from "react";

const Card = (props) => {
  const c = props.color
  const [color, setColor] = useState({
    border: "",
    text: "",
    bg: "",
  });
  useEffect(() => {
    
  const yellow = {
    border: " border-yellow-400 ",
    text: " text-yellow-400 ",
    bg: " bg-yellow-400 ",
  };
  const orange = {
    border: " border-orange-400 ",
    text: " text-orange-400 ",
    bg: " bg-orange-400 ",
  };
  const violet = {
    border: " border-violet-700 ",
    text: " text-violet-700 ",
    bg: " bg-violet-700 ",
  };
  if(c === "violet") {
    setColor(violet)
  } else if(c === "orange") {
    setColor(orange)
  } else if(c === "yellow") {
    setColor(yellow)
  }

  }, [])
  

  return (
    <div
      className={
        "w-44 md:w-56 flex md:mx-10 flex-col justify-center border-2 text-center my-5 mx-1 md:items-center" +
        color.border
      }
    >
      <div className="md:hidden">
        <Image
          src="/img/product/product1.jpg"
          alt="product"
          width="172px"
          height="112px"
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
      <p className="text-violet-700 mt-1">{props.title}</p>
      <div className="flex items-center justify-between">
        <div className="container w-16 h-3 flex ml-1 mr-auto">
          <div>
            <Image
              src="/img/product/start.png"
              alt="start"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <Image
              src="/img/product/start.png"
              alt="start"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <Image
              src="/img/product/start.png"
              alt="start"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <Image
              src="/img/product/start.png"
              alt="start"
              width="100%"
              height="100%"
            />
          </div>
          <div>
            <Image
              src="/img/product/start.png"
              alt="start"
              width="100%"
              height="100%"
            />
          </div>
        </div>
        <div className="md:ml-24">
          <span className="mr-1 text-green-500">$3</span>
        </div>
      </div>
      <div className="flex flex-col md:w-5/6 w-full text-center md:mb-4">
        <a
          href="#"
          className={
            "bg-white border-2 px-7 py-0 rounded-lg mt-2 border-yellow-400" +
            color.text
          }
        >
          ADD TO CAR
        </a>
        <a
          href="#"
          className={
            "px-7 md:px-0 py-0 rounded border-2 text-white mt-2" + color.bg
          }
          onClick={() => props.eventFunction(props.variable)}
        >
          BUY NOW
        </a>
      </div>
    </div>
  );
};

export default Card;
