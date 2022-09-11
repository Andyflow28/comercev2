import Image from "next/image";

const Pagination = (props) => {
  let numbers = [];
  for (let i = props.value; i <= props.x2; i++) {
    numbers.push(
      <ul
        className="px-4 py-2 text-cyan-700 hover:bg-violet-700 hover:text-white duration-200 transition-colors ease-linear"
        key={i}
        onClick={() => props.pageFunction(i - 1)}
      >
        {i}
      </ul>
    );
  }

  const plus = (n) => {
    const max_x1 = props.leg - 4;
    const leg = props.leg;
    const x = props.x1;
    const y = props.x2;
    if (x >= 1 && y < leg) {
      props.setFunction(n + 1);
      console.log(n);
    } else if ((y = leg)) {
      props.setFunction(n);
      console.log(n);
    }
  };

  const substract = (n) => {
    const max_x1 = props.leg - 4;
    const leg = props.leg;
    const x = props.value;
    const y = props.x2;
    if (x > 1 && y <= leg) {
      props.setFunction(x - 1);
    } else if ((x = 1)) {
      props.setFunction(1);
    }
  };

  return (
    <>
      <div className="flex justify-center m-5">
        <div className="w-10 h-10 px-2 py-2 rotate-180">
          <Image
            alt="arrow"
            src="/img/forward.png"
            width="128px"
            height="128px"
            onClick={() => substract(props.value)}
          />
        </div>
        {numbers}
        <div className="w-10 h-10 px-2 py-2">
          <Image
            alt="arrow"
            src="/img/forward.png"
            width="128px"
            height="128px"
            onClick={() => plus(props.value)}
          />
        </div>
      </div>
    </>
  );
};

export default Pagination;
