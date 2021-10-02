import React, { useState, useEffect } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { GoogleLogin } from 'react-google-login';
import { Cookies } from 'react-cookie'
import axios from 'axios'
import '../../Assets/CSS/login.css'

const cookie = new Cookies()
const LoginComponent = () => {

    const history = useHistory();
    const [user, setUser] = useState({ email: '', password: '' })
    const [msg, setMsg] = useState('');

    function timeOut() {
        setTimeout(() => {
            setMsg('')
        }, 8000);
    }

    useEffect(() => {

        if (cookie.get('auth-token')) {
            history.push('/profile')
        }
        document.title = "Login - Kustom Parts : Biker Bred , Bike Baked"
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault();

        var checkOut = document.getElementById('login-box-spin').classList.add("active");

        const { email, password } = user;
        if (!email || !password) {
            setMsg("All Field Required");
            var removeClass = document.getElementById('login-box-spin').classList.remove("active");
            timeOut();
            return
        }
        const config = {
            header: {
                'Content-Type': "application/json",
            }
        }

        await axios.post('/api/login', user, config).then(async (res) => {
            setMsg(res.data.msg)
            var removeClass = document.getElementById('login-box-spin').classList.remove("active");
            timeOut();
            if (res.data.token && res.data.role == "Role_User") {
                var removeClass = document.getElementById('login-box-spin').classList.remove("active");
                cookie.set('auth-token', res.data.token)
                history.push('/profile')
                return
            }
            if (res.data.token && res.data.role == "Role_Admin") {
                var removeClass = document.getElementById('login-box-spin').classList.remove("active");
                cookie.set('auth-token', res.data.token)
                cookie.set('role', res.data.role)
                history.push('/admin')
                return
            }
        }).catch(e => {
            console.log(e);
            setMsg('Something Went Wrong')
            var removeClass = document.getElementById('login-box-spin').classList.remove("active");
            timeOut()
        })


    }



    const responseSuccessGoogle = (response) => {
        console.log(response);
        var checkOut = document.getElementById('login-spin-inside').classList.add("active");

        axios.post('/api/googlelogin', { tokenId: response.tokenId }).then(res => {
            console.log("Axios ", res)

            if (res.data.token && res.data.role == "Role_User") {
                cookie.set('auth-token', res.data.token)
                history.push('/profile')
                return
            }
        }).catch(err => console.log(err))
    }

    const responseErrorGoogle = (res) => {
        console.log("error ", res)



    }

    return (
        <div>
            <div className="bg-gray-100 p-0 sm:p-12 ">


                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">

                    <h1 className="text-2xl font-bold mb-8 ">Login Here !!</h1>

                    <div>
                        {msg && <div className="bg-yellow-500 rounded p-2 my-4 flex justify-content text-yellow-900" > <strong className="text-grey-200 mx-2">{msg}</strong></div>}
                    </div>
                    <form id="form" method='POST' onSubmit={submitHandler}>


                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
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
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={user.password}
                                onChange={e => setUser({ ...user, password: e.target.value })}
                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Password</label>
                            <span className="text-sm text-red-600 float-right " id="error"> <NavLink exact to='/forgotpassword'>Forgot Password ?</NavLink></span>
                        </div>

                        <div className="mx-auto ">
                            <button
                                id="button"
                                type="submit"
                                className=" w-50 px-3 py-2 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none   btn-primary hover:shadow-lg focus:outline-none"
                            >
                                <div id="login-spin" className="inline">
                                    <div className="" id='login-box-spin'>
                                        <i className="fa fa-spinner fa-spin text-black font-bold text-2xl" ></i>
                                    </div>
                                </div>

                                Login
                            </button>
                            <span className="text-sm text-red-600 float-right mt-8" id="error"> <NavLink exact to='/signup'> Don`t Have Account</NavLink></span>
                        </div>
                    </form>

                    <div className=" text-center mt-4 text-l font-bold">
                        <GoogleLogin
                            clientId="1041412943988-nc25rqh20k0pooqrvdkkqim2b4b8m2js.apps.googleusercontent.com"
                            onSuccess={responseSuccessGoogle}
                            onFailure={responseErrorGoogle}
                            cookiePolicy={'single_host_origin'}
                        >


                            <div id="login-spin" className="inline mx-2">
                                <div className="" id='login-spin-inside'>
                                    <i className="fa fa-spinner fa-spin text-black font-bold text-2xl" ></i>
                                </div>
                            </div>
                            <span className="text-l font-bold ">  Login with Google</span>
                        </GoogleLogin>
                    </div>
                </div>

            </div>
        </div>
    )
}


export default LoginComponent
