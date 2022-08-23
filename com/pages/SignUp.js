import Image from "next/image"
import axios from "axios"
import { useEffect } from "react"
import { useRouter } from "next/router"
import { useState } from "react"

function SignUp() {
    const router = useRouter()
    const [Session, setSession] = useState({})
    const [register, setRegister] = useState({
        userName: '',
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
            setRegister({
               ...register,
               [e.target.name]: e.target.value
            })
            console.log(register);
        }

        const handleSubmit = async () => {
            try {
                const response = await axios.post('/api/connect/user', register)
                router.push('/SignIn')
            } catch (error) {
                console.log(error);
            }
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
                            <h2 className="text-white text-3xl md:text-4xl mx-auto my-5 md:mb-8 md:mt-10">Sign Up</h2>
                            <div className="flex flex-col">
                                <label htmlFor="user" className="text-white mx-5 md:mx-36 md:my-5">User Name</label>
                                <input type="text" id="user" className="rounded-3xl px-3 mx-5 md:mx-36 md:py-1" name="userName" onChange={handleChange}/>
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="exampleInputEmail1" className="text-white mx-5 md:mx-36 md:my-5 my-3">Email address</label>
                                <input type="email" className="rounded-3xl px-3 mx-5 md:mx-36 md:py-1" id="exampleInputEmail1" name="email" onChange={handleChange}/>
                                <div id="emailHelp" className="text-white md:text-sm text-xs mx-5 md:mx-36 my-3">Well never share your email with anyone else.</div>
                            </div>
                            <div className="flex flex-col my-1">
                                <label htmlFor="exampleInputPassword1" className="text-white mx-5 md:mx-36 md:my-5">Password</label>
                                <input type="password" id="exampleInputPassword1" className="rounded-3xl px-3 mx-5 md:mx-36 md:py-1" name="password" onChange={handleChange}/>
                            </div>
                            <button type="submit" className="text-white bg-violet-700 mx-16 py-3 mt-2 rounded-xl mb-8 md:mx-36 md:mb-16">Sign Up</button>
                        </form>
                    </div>
                </div>
            </>
        )
    } else {
        router.push('/')
    }
}

export default SignUp