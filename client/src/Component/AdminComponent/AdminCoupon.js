import React, { useState, useEffect } from 'react'
import AdminNavbar from './AdminNavbar'
import Moment from 'react-moment'
import { NavLink } from 'react-router-dom'
import AddCouponComponent from './AddCouponComponent'
import axios from 'axios'
import timeout from '../../Assets/Scripts/Timeout'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()

const AdminCoupon = () => {

    const [popup, setPopup] = useState(false)
    const [coupons, setCoupons] = useState([])
    const [msg, setMsg] = useState('')


    useEffect(() => {
        const token = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.post('/api/getAdminCoupon', {}, token).then(res => {
            console.log(res.data)
            setCoupons(res.data.coupon)
        }).catch(err => {
            console.log(err)
        })

    }, []) 


    const deleteCoupon = (e, coupon) => {
        e.preventDefault();
        const token = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.post('/api/deleteadmincoupon', coupon, token).then(res => {
            setMsg(res.data.msg)
            timeout(setMsg)
            return
        }).catch(err => {
            setMsg('Something Went Wrong')
            timeout(setMsg)
            return
        })
    }

    return (
        <div className="bg-gray-100 py-8">
            <AdminNavbar />
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5 py-8  h-full mobile-width-auto">
                <div className="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h1 className="text-lg leading-6 font-medium text-gray-900">Available Coupon</h1>
                    <button className="inline-block no-underline hover:text-black btn-primary px-2 hover:bg-red-200 rounded-full hover-transition cursor-pointer" onClick={e => setPopup(true)}>
                        Add New
                    </button>
                </div>
                <div className="mx-auto px-8 border-b">
                    {msg && <div className='px-2 py-1 bg-yellow-400 rounded'>
                        <span className='font-medium'>{msg}</span>
                    </div>}
                    <ul>

                        {coupons && coupons.map(coupon => <li>

                            <div className="border-b py-2  flex">

                                <div className='ml-4'>
                                    <div className="">
                                        <h1 className="font-semibold inline text-indigo-500">{coupon.couponName}</h1>
                                    </div>
                                    <div className="px-4">
                                        <p className='text-yellow-500'> Type : {coupon.couponType} </p>
                                        <p className='text-yellow-500'> couponDiscountAmount :{coupon.couponDiscountAmount} </p>
                                        <p className='text-yellow-500'> couponDiscountPercentage :{coupon.couponDiscountPercentage} </p>
                                        <p> Date: <Moment format="D MMM YYYY">{coupon.createdAt}</Moment></p>
                                        <p> Time: <Moment format="hh:mm A">{coupon.createdAt}</Moment></p>

                                    </div>

                                    <div className='my-2'>
                                        <button className='px-2 py-1 bg-red-500 hover:bg-red-800 rounded hover:text-white' onClick={e => { deleteCoupon(e, coupon) }}>Delete</button>
                                    </div>

                                </div>
                            </div>

                        </li>)}

                    </ul>
                </div>

                {popup ? (<div className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover" id="modal-id">
                    <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
                    <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                        <AddCouponComponent setPopup={setPopup} setMsg={setMsg} />
                    </div>
                </div>) : null}
            </div>

        </div>
    )
}

export default AdminCoupon
