import Image from "next/image";
import Link from "next/link";
import { Children, useState } from "react";

function Bar({children}) {
  const [open, setOpen] = useState(false);

  return !open ? (
    <>
      <div className="md:flex flex-col hidden">
        <div className="mx-auto my-5 md:hidden" onClick={() => setOpen(!open)}>
          <Image
            src="/img/arrow-navegate.png"
            alt="arrow"
            width="40px"
            height="40px"
          />
        </div>
        <div></div>
        <div className="bg-violet-900 flex items-center flex-col md:flex-row md:justify-around md:border-b-4 border-violet-900">
          <Link href="/NewOfert">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              New Ofert
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full md:hidden"></div>

          <Link href="/Products">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              Products
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full md:hidden"></div>

          <Link href="/GitStore">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              Git Store
            </a>
          </Link>

          <div className=" bg-slate-400 h-px w-full md:hidden"></div>

          <Link href="/ShopCar">
            <a className="flex my-2 md:my-0 md:items-center md:py-5">
              <div className="hidden md:mr-1 md:block md:mt-3">
                <Image
                  src="/img/shopCar.png"
                  alt=""
                  width="32px"
                  height="32px"
                />
              </div>

              <p className="text-white hover:text-cyan-500 md:text-2xl">
                Shop Car
              </p>
            </a>
          </Link>
        </div>
      </div>


      {children}
      

      <div className="flex flex-col md:hidden">
        <div
          className="mx-auto mt-1 mb-5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Image
            src="/img/arrow-navegate.png"
            alt="arrow"
            width="40px"
            height="40px"
          />
        </div>
        <div className="hidden">
          <div className="bg-violet-900 flex items-center flex-col md:flex-row md:justify-around md:border-b-4 border-violet-900">
            <Link href="/NewOfert">
              <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
                New Ofert
              </a>
            </Link>

            <div className="bg-slate-400 h-px w-full md:hidden"></div>

            <Link href="/Products">
              <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
                Products
              </a>
            </Link>

            <div className="bg-slate-400 h-px w-full md:hidden"></div>

            <Link href="/GitStore">
              <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
                Git Store
              </a>
            </Link>

            <div className="bg-slate-400 h-px w-full md:hidden"></div>
            <Link href="/ShopCar">
              <a className="flex my-2 md:my-0 md:items-center md:py-5">
                <div className="hidden md:mr-1 md:block">
                  <Image
                    src="/img/shopCar.png"
                    alt="shopCar"
                    width="32px"
                    height="32px"
                  />
                </div>

                <p className="text-white hover:text-cyan-500 md:text-2xl">
                  Shop Car
                </p>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  ) : (
    <>
      <div className="md:flex flex-col hidden">
        <div className="mx-auto my-5 md:hidden" onClick={() => setOpen(!open)}>
          <Image
            src="/img/arrow-navegate.png"
            alt="arrow"
            width="40px"
            height="40px"
          />
        </div>

        <div className="bg-violet-900 flex items-center flex-col md:flex-row md:justify-around md:border-b-4 border-violet-900">
          <Link href="/NewOfert">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              New Ofert
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full md:hidden"></div>

          <Link href="/Products">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              Products
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full md:hidden"></div>

          <Link href="/GitStore">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              Git Store
            </a>
          </Link>

          <div className=" bg-slate-400 h-px w-full md:hidden"></div>
          <Link href="/ShopCar">
          <a className="flex my-2 md:my-0 md:items-center md:py-5">
            <div className="hidden md:mr-1 md:block md:mt-3">
              <Image src="/img/shopCar.png" alt="" width="32px" height="32px" />
            </div>

            <p className="text-white hover:text-cyan-500 md:text-2xl">
              Shop Car
            </p>
          </a>
          </Link>
          
        </div>
      </div>

      {children}

      <div className="flex flex-col md:hidden">
        <div
          className="mx-auto mt-1 mb-5 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <Image
            src="/img/arrow-navegate.png"
            alt="arrow"
            width="40px"
            height="40px"
          />
        </div>
        <div className="bg-violet-900 flex items-center flex-col md:flex-row md:justify-around md:border-b-4 border-violet-900">
          <Link href="/NewOfert">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              New Ofert
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full md:hidden"></div>

          <Link href="/Products">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              Products
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full md:hidden"></div>

          <Link href="/GitStore">
            <a className="text-white hover:text-cyan-500 my-2 md:my-0 md:py-5 md:text-2xl">
              Git Store
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full md:hidden"></div>

          <Link href="/ShopCar">
          <a className="flex my-2 md:my-0 md:items-center md:py-5">
            <div className="hidden md:mr-1 md:block">
              <Image
                src="/img/shopCar.png"
                alt="shopCar"
                width="32px"
                height="32px"
              />
            </div>

            <p className="text-white hover:text-cyan-500 md:text-2xl">
              Shop Car
            </p>
          </a>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Bar;
