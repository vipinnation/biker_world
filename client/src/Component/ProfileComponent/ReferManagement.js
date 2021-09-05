import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProfileNavbar from './ProfileNavbar'
import Moment from 'react-moment'
import { Cookies } from 'react-cookie'
import WithdrawAmount from './WithdrawAmount'
const cookie = new Cookies();


const ReferManagement = () => {

    const [referedProduct, setReferedProduct] = useState([])
    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(() => {


        document.title = 'Refer and Earn - Kustom Parts : Biker Bred , Bike Bakeds'
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.get('/api/successreferproduct', config).then(res => {
            console.log(res.data)
            setReferedProduct(res.data.refer)
            setTotalAmount(res.data.totalAmount)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    return (
        <div>

            <div className="bg-gray-100 py-8 ">
                <ProfileNavbar />
                <div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  py-8  h-full order">
                    <div className="px-4 py-5 sm:px-6 border-b">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Check Your Reffered Product</h3>

                        <div className='px-4 mt-2' >
                            <span>Total Earned Amount : ₹ {totalAmount}</span>
                        </div>
                        <div className='px-4 mt-2'>
                            <WithdrawAmount totalAmount={totalAmount} />
                        </div>
                    </div>


                    <div className="mx-auto px-8 border-b">
                        <ul>

                            {referedProduct.length ? referedProduct.map(product => <li key={product._id}>
                                <div className="border-b py-2 px-4">
                                    <div className="">
                                        {Object.values(product.items).map(item =>
                                            <li>
                                                <h1 className="font-semibold inline">Product Name : {item.items.productName}</h1>
                                                <br />
                                                <h2 className="font-semibold inline">Product Price: {item.items.productPrice}</h2>
                                                <br />
                                                <span> Quantity : {item.qty}</span>
                                            </li>
                                        )}
                                    </div>

                                    <div className="px-4">
                                        <p><span className="text-yellow-500"> Ordered By </span> :  {product.userAddress.name} </p>
                                    </div>
                                    <div className="px-4">
                                        <p className='text-yellow-500'>Ordered On</p>
                                        <p> <span className="text-yellow-500">Date</span>: <Moment format="D MMM YYYY">{product.createdAt}</Moment></p>
                                        <p> <span className="text-yellow-500">Time</span>: <Moment format="hh:mm A">{product.createdAt}</Moment></p>
                                    </div>

                                </div>
                            </li>) :
                                <div className='py-4'>
                                    <h2 className='text-lg font-bold'>Please Refer Products</h2>
                                    <p>It Look like , You haven't refer any product</p>
                                </div>}

                        </ul>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default ReferManagement
