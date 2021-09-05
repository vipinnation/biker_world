import React, { useEffect, useState } from 'react'
import { RWebShare } from "react-web-share";
import { NavLink } from 'react-router-dom'
import axios from 'axios'
import ProfileNavbar from './ProfileNavbar'
import { Cookies } from 'react-cookie'
const cookie = new Cookies();

const ReferAndEarn = () => {

    const [referProduct, setReferProduct] = useState([])
    const [referCode, setReferCode] = useState('')

    useEffect(() => {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }
        axios.get('/api/checkLogin', config).then(res => {
            console.log(res.data)
            setReferCode(res.data.email)
        }).catch(err => {
            console.log(err);
        })


        axios.get('/api/allproduct').then(res => {
            console.log(res)
            setReferProduct(res.data)
        }).catch(err => {
            console.log(err)
        })

    }, [])
    return (
        <div className="bg-gray-100 py-8 " id="product">

            <ProfileNavbar />

            <div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  order py-8  h-full"  >
                <div className="px-4 py-5 sm:px-6 border-b   justify-between">
                    <h1 className="text-lg leading-6 font-medium text-gray-900">Refer These Products</h1>

                    <span className='text-sm mt-4'>Refer these Product and Get 2% cashback on Successful Order Placed</span>
                </div>


                <div className="mx-auto px-8 border-b">
                    <ul>

                        {referProduct && referProduct.map(product =>
                            <li>

                                <div className="border-b py-2  flex">
                                    <div className="w-1/5  rounded profile-mobile-image">
                                        <img alt='d' className=" border p-1 w-full " src={product.productImage} />
                                    </div>
                                    <div className='ml-4 '>
                                        <div className="">
                                            <h2 className="text-lg text-indigo-600">
                                                <NavLink exact to={`/product/${product.productSlug}`}>
                                                    {product.productName}
                                                </NavLink>
                                            </h2>

                                            <span >Price : {product.productPrice}</span>

                                            <div className='py-2'>
                                                <RWebShare
                                                    data={{
                                                        text: product.productName,
                                                        url: `https://hirola.in/product/${product.productSlug}?referral=${referCode}`,
                                                        title: product.productName,
                                                    }}
                                                >
                                                    <button className='btn px-2 bg-indigo-400 rounded-sm text-sm hover:bg-indigo-800 hover:text-white py-1'>Refer {product.productName} </button>
                                                </RWebShare>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </li>
                        )}
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default ReferAndEarn

