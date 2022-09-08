import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Bar = () => {
    const open = "bg-violet-900 flex items-center flex-col sm:flex-row sm:justify-around sm:border-b-4 border-violet-900"
    const close = "bg-violet-900 flex items-center flex-col sm:flex-row sm:justify-around sm:border-b-4 border-violet-900 hidden sm:flex"
    const [bar, setBar] = useState(close)

  return (
    <div className="sm:flex flex-col">
        <div className="mx-auto flex justify-center sm:hidden" onClick={() => {
            if(bar === close) {
                setBar(open)
            } else {
                setBar(close)
            }
        }}>
          <Image
            src="/img/arrow-navegate.png"
            alt="arrow"
            width="40px"
            height="40px"
          />
        </div>
        <div className={bar}>
          <Link href={"/NewOfert"}>
            <a className="text-white hover:text-cyan-500 my-2 sm:my-0 sm:py-5 sm:text-2xl">
              New Ofert
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full sm:hidden"></div>

          <Link href={"/Products"}>
            <a className="text-white hover:text-cyan-500 my-2 sm:my-0 sm:py-5 sm:text-2xl">
              Products
            </a>
          </Link>

          <div className="bg-slate-400 h-px w-full sm:hidden"></div>

          <Link href={"/Gitstore"}>
            <a className="text-white hover:text-cyan-500 my-2 sm:my-0 sm:py-5 sm:text-2xl">
              Git Store
            </a>
          </Link>

          <div className=" bg-slate-400 h-px w-full sm:hidden"></div>

          <Link href={"/Shopcar"}>
            <a className="flex my-2 sm:my-0 sm:items-center sm:py-5 items-center">
              <div className="flex mr-1 sm:block sm:mt-3">
                <Image
                  src="/img/shopCar.png"
                  alt=""
                  width="32px"
                  height="32px"
                />
              </div>

              <p className="text-white hover:text-cyan-500 sm:text-2xl">
                Shop Car
              </p>
            </a>
          </Link>
        </div>
      </div>
  )
}

export default Bar