import React, { useState } from 'react'
import axios from 'axios'

const CouponComponent = (props) => {


    const [coupon, setCoupon] = useState('')
    const [msg, setMsg] = useState('')

    const couponApplied = (e) => {
        e.preventDefault();


        axios.post('/api/applycoupon', { coupon }).then(res => {
            console.log('res', res)
            setMsg(res.data.msg)
            if (res.data.msg === 'Coupon Applied Successfully') {
                window.location.reload()
            }
        }).catch(err => {
            console.log(err)
            setMsg('Coupan Invalid')
        })

    }

    return (
        <div>
            <form onSubmit={couponApplied}>
                <div className="p-2">
                    <div className="relative">
                        {msg && <div className='px-2 py-1 bg-yellow-400 rounded'>
                            <span className='font-medium'>{msg}</span>
                        </div>}
                        {props.couponCode && <div className='px-2 py-1 bg-yellow-400 rounded'>
                            <span className='font-medium'>Applied Coupon {props.couponCode.couponName}</span>
                        </div>}

                        {props.couponCode ? null : <div>
                            <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-medium">Coupon Code</label>
                            <input type="text"
                                id="coupanCode" name="coupanCode" placeholder='Enter Coupon Code'
                                value={coupon}
                                autoComplete={false}
                                required={true}
                                onChange={e => { setCoupon(e.target.value) }}
                                className="w-full bg-gray-100 bg-opacity-50 rounded border  border-gray-900 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />

                            <button type="submit" className='absolute right-4 mt-1 py-1  '>
                                <i className="fa fa-paper-plane text-black z-20 hover:text-gray-500"></i>
                            </button>
                        </div>}
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CouponComponent
