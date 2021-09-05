import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'
const SignupComponent = () => {

    const [user, setUser] = useState({ name: '', email: '', password: '', confirmPassword: '' })
    const [msg, setMsg] = useState('')



    useEffect(() => {
        document.title = "Signup - Kustom Parts : Biker Bred , Bike Baked"
    })
    const timeout = () => {
        setTimeout(() => {
            setMsg('')
        }, 8000);
    }

    const submitHandler = e => {
        e.preventDefault();
        const { name, email, password, confirmPassword } = user;

        if (!name || !email || !password || !confirmPassword) {
            setMsg("All Field Required");
            timeout()
            return
        }


        var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const checkEmail = regexp.test(String(user.email).toLowerCase());

        if (checkEmail == false) {
            setMsg('Enter Valid Email')
            timeout();
            return
        }

        if (password != confirmPassword) {
            setMsg('Password Mismatch')
            timeout();
            return
        }

        if (password.length <= 5) {
            setMsg("Password Must be of 6 Digit");
            timeout();
            return
        }


        else {
            const config = {
                header: {
                    'Content-Type': 'application/json'
                }
            }
            const emailLowerCase = email.toLowerCase();
            const userData = { name, emailLowerCase, password }

            axios.post('/api/signup', userData, config).then(res => {
                setMsg(res.data.msg)
                timeout();
            }).catch(e => {
                console.log(e);
                setMsg("Something Went Wrong")
                timeout();
            })
        }
    }


    // Html Rendered
    return (
        <div>
            <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
                    <h1 className="text-2xl font-bold mb-8">Register Here !!</h1>

                    <div>
                        {msg && <div className="bg-yellow-500 rounded p-2 my-4 flex justify-content text-yellow-900" > <strong className="text-grey-200 mx-2">{msg}</strong></div>}
                    </div>

                    <form id="form" method="POST" onSubmit={submitHandler}>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={user.name}
                                onChange={e => setUser({ ...user, name: e.target.value })}
                            />
                            <label htmlFor="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Name</label>
                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={user.email}
                                onChange={e => setUser({ ...user, email: e.target.value })}
                            />
                            <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Email Address</label>

                        </div>

                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="password"
                                name="password"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={user.password}
                                onChange={e => setUser({ ...user, password: e.target.value })}
                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Password</label>

                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="password"
                                name="password"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={user.confirmPassword}
                                onChange={e => setUser({ ...user, confirmPassword: e.target.value })}

                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Confrim Password</label>

                        </div>







                        <div className='mx-auto'>
                            <button
                                id="button"
                                type="submit"
                                className="w-50 px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none btn-primary hover:shadow-lg focus:outline-none"
                            >

                                SignUp
                            </button>
                            <span className="text-sm text-red-600  float-right mt-8" id="error"> <NavLink exact to='/login'> Already have Account</NavLink></span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupComponent
