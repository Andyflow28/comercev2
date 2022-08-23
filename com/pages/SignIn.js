import Image from "next/image"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router"
import { useEffect } from "react"

function Login(props) {
    const router = useRouter()
    const [Session, setSession] = useState({})
    const [Credencials, setCredencials] = useState({
        email: '',
        password: ''
    })

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/auth/loginIndex");
      setSession(response.data);
    }
    fetchData()
  }, [])

    if (!Session.status) {
         const handleChange = (e) => {
             setCredencials({
                ...Credencials,
                [e.target.name]: e.target.value
             })
         }
    
         const handleSubmit = async (e) => {
            e.preventDefault();
            const response = await axios.post('/api/auth/login', Credencials)
            const responsed = await axios.get("/api/auth/loginIndex");
            setSession(responsed.data);
         }
    
        return (
            <>
                <a href="/">
                    <div className="m-5">
                        <Image src="/img/login/arrow.png" alt="icon android" width="40px" height="40px" />
                    </div>
                </a>
                <div className="flex flex-col items-center">
                    <div className="bg-cyan-700 mx-5 mt-10 rounded-lg md:w-3/6">
                        <form className="flex flex-col" onSubmit={handleSubmit}>
                            <h2 className="text-white text-3xl md:text-4xl mx-auto my-5 md:mb-8 md:mt-10">Sign In</h2>
                            <div className="flex flex-col">
                                <label htmlFor="Email" className="text-white mx-5 md:mx-36 md:my-5">E-mail</label>
                                <input id="Email" className="rounded-3xl px-3 mx-5 md:mx-36 md:py-1"
                                    type="email"
                                    placeholder="john@email.com" 
                                    onChange={handleChange} name="email"/>
                            </div>
                            <div className="flex flex-col my-1">
                                <label htmlFor="exampleInputPassword1" className="text-white mx-5 md:mx-36 md:my-5">Password</label>
                                <input id="exampleInputPassword1" className="rounded-3xl px-3 mx-5 md:mx-36 md:py-1"
                                    type="password"
                                    placeholder="********" 
                                    onChange={handleChange} name="password"/>
                            </div>
                            <input type="submit" className="text-white bg-violet-700 mx-16 py-3 mt-2 rounded-xl mb-8 md:mx-36 md:mb-5" value="Sign Up" />
                        </form>
                    </div>
                    <div className="bg-cyan-700 h-20 md:h-28 md:w-96 w-80 mx-5 mt-24 rounded-lg">
                        <p className="p-auto m-2 text-sm text-white md:text-base md:my-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error odit dolor doloribus officiis a ea perferendis architecto minima con</p>
                    </div>
                </div>
            </>
        )
    } else {
        router.push("/")
    }
}

export default Login