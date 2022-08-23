import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-cyan-700">
      <div className="flex justify-around flex-wrap">
        <div className="flex flex-col items-start justify-start mx-10 my-3">
          <a href="#" className="text-2xl my-5 text-white">
            New Ofert
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
        </div>
        <div className="flex flex-col items-start justify-start mx-10 my-3">
          <a href="#" className="text-2xl my-5 text-white">
            Products
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
        </div>
        <div className="flex flex-col items-start justify-start mx-10 my-3">
          <a href="#" className="text-2xl my-5 text-white">
            Git Store
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
        </div>
        <div className="flex flex-col items-start justify-start mx-10 my-3">
          <a href="#" className="flex my-5">
            <div className="mr-1">
              <Image
                src="/img/shopCar.png"
                alt="shop car"
                width="32px"
                height="32px"
              />
            </div>
            <p className="text-2xl text-white">Shop Car</p>
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
          <a href="#" className="text-white my-1">
            Lorem ipsum dolor sit
          </a>
        </div>
      </div>

      <div className="flex justify-between md:flex-row flex-col-reverse items-center px-5 py-3">
        <div className="flex flex-start px-5 my-10">
          <a href="#">
            <Image
              src="/img/facebook.png"
              alt="social media"
              width="40px"
              height="40px"
            />
          </a>
          <a href="#">
            <div className="ml-3">
              <Image
                src="/img/twitter.png"
                alt="social media"
                width="40px"
                height="40px"
              />
            </div>
          </a>
          <a href="#">
          <div className="ml-3">
              <Image
                src="/img/instagram.png"
                alt="social media"
                width="40px"
                height="40px"
              />
            </div>
          </a>
          <a href="#">
          <div className="ml-3">
              <Image
                src="/img/linkedin.png"
                alt="social media"
                width="40px"
                height="40px"
              />
            </div>
          </a>
        </div>
        <a href="#">
        <div className="md:mt-0 mt-10">
              <Image
                src="/img/ecommerce.png"
                alt="icon e-commerce"
                width="64px"
                height="64px"
              />
            </div>
        </a>
        <a href="#">
        <div className="md:mt-0 mt-10">
              <Image
                src="/img/home-icon.png"
                alt="icon e-commerce"
                width="64px"
                height="64px"
              />
            </div>
        </a>
        <a
          href="#"
          className="md:m-8 py-5 px-8 bg-violet-900 text-white rounded-lg"
        >
          E-SOCIAL
        </a>
      </div>
    </footer>
  );
}

export default Footer;
