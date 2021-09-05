import React, { useState } from 'react'
import axios from 'axios'


const ForgotPassword = () => {

    const [email, setEmail] = useState({
        userEmail:''
    })
    const [msg, setMsg] = useState('')

    const submitHandler = (e) => {

        e.preventDefault();
        console.log('Email', email)
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.post('/api/checkEmail', email , config ).then(res => {
            console.log('res', res.data)
            setMsg(res.data.msg)
        }).catch(err => {
            console.log(err)
        })
    }


    return (
        <div>
            <div className="bg-gray-100 p-0 sm:p-12 ">


                <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">

                    <h1 className="text-2xl font-bold  ">Forgot Password !!</h1>
                    <span className="text-sm">Don't Worry , Just Enter Your Registered Email</span>

                    {msg && <div>
                        <div className="bg-yellow-500 rounded p-2 my-4 flex justify-content text-yellow-900" >
                            <strong className="text-grey-200 mx-2">{msg}</strong>
                        </div>
                    </div>}
                    <form id="form" method='POST' className="mt-8" onSubmit={submitHandler}>


                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={email.userEmail}
                                onChange={e => { setEmail({...email , userEmail:e.target.value}) }}
                            />
                            <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Email Address</label>

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

export default ForgotPassword
