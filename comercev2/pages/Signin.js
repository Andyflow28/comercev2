import Image from "next/image";
import Head from "next/head";
import favicon from "../public/favicon.ico";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

const Login = () => {
  const router = useRouter();
  const [credencials, setCredencials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    async function fetchData() {
        await axios
        .get("/api/revition")
        .then((response) => router.push("/"))
        .catch((response) => console.log("no se ha logeado"));
    }
    fetchData();
  }, [router]);

  const handleChange = (e) => {
    setCredencials({
      ...credencials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("/api/auth/login", credencials);
    await axios
      .get("/api/revition")
      .then((response) => router.push("/"))
      .catch((response) => console.log("no se ha logeado"));
  };

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
      </Head>
      <div className="w-screen h-screen bg-gradient-to-r from-indigo-500/50 via-purple-500/50 to-pink-500/50 flex flex-col items-center justify-center">
        <div className="bg-gray-100/75 w-11/12 rounded-3xl h-3/6 flex flex-col items-center sm:w-6/12">
          <div className="w-24 py-5 px-6 bg-blue-900 rounded-full mt-10">
            <Image
              alt="user icon"
              src="/img/login/user.png"
              width="64"
              height="64px"
            />
          </div>
          <div className="">
            <form>
              <div className="flex my-8">
                <div className="bg-blue-900 w-10 px-3 pb-1 pt-3">
                  <Image
                    alt="icon user"
                    width="64px"
                    height="64px"
                    src="/img/login/email.png"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="Email ID"
                  className="bg-[#395173] text-zinc-100 pl-3 py-2 focus:outline-none caret-zinc-400"
                />
              </div>
              <div className="flex my-8">
                <div className="bg-blue-900 w-10 px-3 py-2">
                  <Image
                    alt="icon user"
                    width="64px"
                    height="64px"
                    src="/img/login/lock.png"
                  />
                </div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="bg-[#395173] text-zinc-100 pl-3 py-2 focus:outline-none caret-zinc-400"
                />
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex mb-10">
              <div className="mr-3">
                <label className="text-[#395173]">
                  <input
                    type="checkbox"
                    className="h-4 w-4 border-2 accent-blue-900 border-blue-500"
                  />{" "}
                  Remember me
                </label>
              </div>
              <p className="text-[#395173]">Forgot your password?</p>
            </div>
            <div>
              <p className="text-[#395173]">Do you not have an account?</p>
            </div>
          </div>
        </div>
        <button className="bg-gradient-to-t from-gray-100 text-white w-4/6 py-3 text-2xl font-extrabold rounded-b-2xl sm:w-2/6" onClick={handleSubmit}>
          LOGIN
        </button>
      </div>
    </>
  );
};

export default Login;
