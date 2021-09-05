import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

const UpdateForgotpassword = () => {

    const { id } = useParams()
    const [msg, setMsg] = useState('')
    const [password, setPassword] = useState({
        userPassword: ''
    })

    const timeout = () => {
        setTimeout(() => {
            setMsg('')
        }, 4000);
    }

    const submitHandler = (e) => {
        e.preventDefault()

        if (!password.userPassword) {
            setMsg('Enter Password')
            timeout()
            return
        }

        if (password.userPassword.length < 5) {
            setMsg('Password must be of 6 digit')
            timeout()
            return
        }
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post(`/api/forgotpassword/${id}`, password, config).then(res => {
            console.log('res', res)
            setMsg(res.data.msg)
            timeout()
            return
        }).catch(err => {
            console.log(err)
            setMsg('Something Went Wrong')
            timeout()
            return
        })
    }
    return (
        <div>
            <div className="bg-gray-100 p-0 sm:p-12 ">

                <Helmet>
                    <title>Forgot password : Kustom Parts : Biker Bred , Bike Baked</title>
                </Helmet>
                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">

                    <h1 className="text-2xl font-bold  ">Enter New Password !!</h1>
                    <span className="text-sm">Don't Worry , Start A New Journey</span>

                    {msg && <div>
                        <div className="bg-yellow-500 rounded p-2 my-4 flex justify-content text-yellow-900" >
                            <strong className="text-grey-200 mx-2">{msg}</strong>
                        </div>
                    </div>}
                    <form id="form" method='POST' className="mt-8" onSubmit={submitHandler}>


                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="password"
                                name="password"
                                placeholder=" "
                                className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={password.userPassword}
                                onChange={e => { setPassword({ ...password, userPassword: e.target.value }) }}
                            />
                            <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Your Password</label>

                        </div>

                        <div className="mx-auto ">
                            <button
                                id="button"
                                type="submit"
                                className=" w-50 px-3 py-2 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none   btn-primary hover:shadow-lg focus:outline-none"

                            >
                                Submit
                            </button>

                        </div>
                    </form>


                </div>

            </div>

        </div>
    )
}

export default UpdateForgotpassword
