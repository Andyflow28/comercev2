import Image from "next/image";

const Footer = () => {
  return (
    <div className="sm:h-[85vh] bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="sm:flex">
        <div className="sm:w-4/12 sm:p-0 sm:text-center sm:ml-10">
          <p className="sm:mx-0 sm:w-3/6 sm:bg-white text-blue-900 sm:py-5 sm:px-3 sm:text-xl sm:rounded-2xl sm:my-10 sm:block font-bold text-lg hidden">
            Footer Content
          </p>
          <p className="sm:w-full sm:bg-white sm:mx-0 sm:text-blue-900 sm:px-5 sm:py-5 sm:rounded-2xl sm:block hidden">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla quas
            tenetur atque aperiam distinctio est fugiat, ipsam perspiciatis
            eaque nisi, aliquam voluptatem ratione officia temporibus obcaecati
            quibusdam? Doloremque, magni voluptates.
          </p>
        </div>
        <div className="sm:flex sm:justify-around sm:w-4/6 sm:items-center sm:h-[356px] hidden">
          <div className="sm:flex sm:flex-col sm:mt-20">
            <p className="sm:text-4xl sm:text-white">Link</p>
            <div>
              <p className="sm:my-8 sm:text-white">Link 1</p>
              <p className="sm:my-8 sm:text-white">Link 2</p>
              <p className="sm:my-8 sm:text-white">Link 3</p>
              <p className="sm:my-8 sm:text-white">Link 4</p>
            </div>
          </div>
          <div className="sm:flex sm:flex-col sm:mt-20">
            <p className="sm:text-4xl sm:text-white">Link</p>
            <div>
              <p className="sm:my-8 sm:text-white">Link 1</p>
              <p className="sm:my-8 sm:text-white">Link 2</p>
              <p className="sm:my-8 sm:text-white">Link 3</p>
              <p className="sm:my-8 sm:text-white">Link 4</p>
            </div>
          </div>
          <div className="flex flex-col mt-20">
            <p className="text-4xl text-white">Link</p>
            <div>
              <p className="sm:my-8 sm:text-white">Link 1</p>
              <p className="sm:my-8 sm:text-white">Link 2</p>
              <p className="sm:my-8 sm:text-white">Link 3</p>
              <p className="sm:my-8 sm:text-white">Link 4</p>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:w-full h-1 sm:bg-cyan-400 sm:my-10"></div>

      <div className="flex sm:w-full sm:justify-center my-10 items-center justify-center">
        <p className="sm:text-5xl text-white font-extrabold text-3xl">Login for free</p>
        <button className="sm:text-4xl sm:w-40 bg-gradient-to-r from-cyan-500 to-blue-500 px-5 py-5 text-white rounded-3xl ml-10 hover:text-cyan-500 hover:to-white hover:from-white transition duration-300 text-xl">
          Login
        </button>
      </div>

      <div className="w-full h-1 bg-cyan-400 mt-10"></div>

      <div className="w-full sm:flex justify-center py-5 sm:py-0">
      <div className="flex">
        <div className="sm:w-24 sm:py-5 sm:px-6 bg-[#4867aa] rounded-full mt-10 mx-5 py-2 px-2 flex">
          <Image
            alt="user icon"
            src="/img/social_media/facebook.png"
            width="64"
            height="64px"
          />
        </div>
        <div className="sm:w-24 sm:py-5 sm:px-6 bg-[#4867aa] rounded-full mt-10 mx-5 py-2 px-2 flex">
          <Image
            alt="user icon"
            src="/img/social_media/gorjeo.png"
            width="64"
            height="64px"
          />
        </div>
        <div className="sm:w-24 sm:py-5 sm:px-6 bg-[#4867aa] rounded-full mt-10 mx-5 py-2 px-2 flex">
          <Image
            alt="user icon"
            src="/img/social_media/instagram.png"
            width="64"
            height="64px"
          />
        </div>
        <div className="sm:w-24 sm:py-5 sm:px-6 bg-[#4867aa] rounded-full mt-10 mx-5 py-2 px-2 flex">
          <Image
            alt="user icon"
            src="/img/social_media/linkedin.png"
            width="64"
            height="64px"
          />
        </div>
        <div className="sm:w-24 sm:py-5 sm:px-6 bg-[#4867aa] rounded-full mt-10 mx-5 py-2 px-2 flex">
          <Image
            alt="user icon"
            src="/img/social_media/youtube.png"
            width="64"
            height="64px"
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
