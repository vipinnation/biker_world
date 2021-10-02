import React, { useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()


const AddCouponComponent = (props) => {

    const { setMsg } = props
    const [coupon, setCoupon] = useState({
        couponName: '', couponType: '', couponDiscountAmount: '', couponDiscountPercentage: ''
    })


    const submitHandler = e => {
        e.preventDefault();

        const token = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.post('/api/addcouponcode', coupon, token).then(res => {
            console.log(res)
            props.setPopup(false)
            setMsg(res.data.msg)
            return
        }).catch(err => {
            console.log(err)
            setMsg('Something Went Wrong')
        })

    }

    return (
        <div className="bg-gray-100">
            <div class="bg-white shadow overflow-hidden sm:rounded-lg h-full mobile-width-auto">
                <div class="px-4 py-5 sm:px-6 border-b">
                    <div className='py-2'>
                        <h3 class="text-lg leading-6 font-medium text-gray-900">
                            Add Coupon
                        </h3>
                    </div>

                    <div>
                        <form className="block" onSubmit={submitHandler} >
                            <div className="relative z-0 w-full mb-5 block">
                                <input
                                    type="text"
                                    name="couponName"
                                    placeholder=" "
                                    required={true}
                                    className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    value={coupon.couponName}
                                    onChange={e => { setCoupon({ ...coupon, couponName: e.target.value }) }}
                                />
                                <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Coupon Name</label>

                            </div>
                            <div className="relative z-0 w-full mb-5 block">
                                <label htmlFor="couponType" className="mr-2 duration-300 top-3 -z-1 origin-0 text-gray-500">Coupon Type</label>
                                <select onChange={e => { setCoupon({ ...coupon, couponType: e.target.value }) }} >
                                    <option>{coupon.couponType}</option>
                                    <option>Flat</option>
                                    <option>Percentage</option>
                                </select>
                            </div>
                            <div className="relative z-0 w-full mb-5 block">
                                <input
                                    type="text"
                                    name="lectureNumber"
                                    placeholder=" "
                                    className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    value={coupon.couponDiscountAmount}
                                    onChange={e => { setCoupon({ ...coupon, couponDiscountAmount: e.target.value }) }}
                                />
                                <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Flat Discount Amount</label>

                            </div>
                            <div className="relative z-0 w-full mb-5 block">
                                <input
                                    type="text"
                                    name="lectureNumber"
                                    placeholder=" "
                                    className="pt-3 pb-2 bg-clip-text block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    value={coupon.couponDiscountPercentage}
                                    onChange={e => { setCoupon({ ...coupon, couponDiscountPercentage: e.target.value }) }}
                                />
                                <label htmlFor="email" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Flat Discount Percentage</label>

                            </div>

                            <div className="p-3  mt-2 text-center space-x-4 md:block">
                                <button type='button' onClick={e => { props.setPopup(false) }} className="mb-2 md:mb-0 bg-gray-100 px-5 py-2 text-sm shadow-sm font-medium tracking-wider border border-gray-300 text-gray-600 rounded-lg hover:shadow-lg hover:bg-gray-100">
                                    Cancel
                                </button>
                                <button type='submit' className="mb-2 md:mb-0 bg-green-500 border border-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-lg hover:shadow-lg hover:bg-green-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AddCouponComponent
