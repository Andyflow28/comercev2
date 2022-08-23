import Image from "next/image";

const Providers = (props) => {
  return (
    <>
      <button
        className="bg-violet-700 rounded-xl flex w-2/6 h-10 items-center justify-center mx-auto my-5"
        onClick={() => props.routerMethod("/api/auth/callback/github")}
      >
        <div className="mx-2 my-auto">
          <Image
            alt="github icon"
            src="/img/login/github.png"
            width="16px"
            height="16px"
          />
        </div>
        <p className="text-white my-1">Sign In with GitHub</p>
      </button>
      <button
        className="bg-violet-700 rounded-xl flex w-4/12 h-10 items-center justify-center mx-auto my-5">
        <div className="mx-2 my-auto">
          <Image
            alt="google icon"
            src="/img/login/google.png"
            width="16px"
            height="16px"
          />
        </div>
        <p className="text-white my-1">Sign In with Google</p>
      </button>
    </>
  );
};

export default Providers;
