import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Moment from 'react-moment'
import { Cookies } from 'react-cookie'
const cookie = new Cookies();


const OrderStatus = () => {

    const { id } = useParams();
    const [order, setOrder] = useState({})


    useEffect(async () => {

        const config = {
            headers: {
                "Content-Type": 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }
        document.title = "Order Detail - Kustom Parts : Biker Bred , Bike Baked"

        axios.get(`/api/getOrderById/${id}`, config).then(res => {
            setOrder(res.data)
        }).catch(err => {
            console.log(err)
            cookie.remove('auth-token')
        })
    }, [])

    const logout = e => {
        console.log("logout")
        cookie.remove('auth-token')
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.get('/api/logout', config).then(res => {
            console.log("Logout Successfully")
        }).catch(err => {
            console.log(err)
        })

        window.location.reload()
    }

    return (
        <div className='bg-purple-100 py-8 border'>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  order py-8 mx-auto h-full">
                <div className="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h1 className="text-lg leading-6 font-medium text-gray-900">Ordered Item</h1>
                    <button onClick={logout} className="inline-block no-underline hover:text-black btn-primary px-2 hover:bg-red-200 rounded-full hover-transition  cursor-pointer">
                        Logout
                    </button>
                </div>

                {Object.keys(order).length ? <div>

                    <div className='mx-auto px-8 border-b'>
                        <span>Order Status : <strong>{order.orderStatus}</strong></span>
                    </div>

                    <div className='mx-auto px-8 border-b'>
                        <table className="table-auto">
                            <thead className="text-green-400">
                                <tr>
                                    <th className="w-3/4 text-left">Product Name</th>
                                    <th className="w-1/5 text-left">Qty</th>
                                    <th className="w-2/5 text-left">Amount</th>

                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.values(order.items).map(item => <tr className="bg-emerald-200" >
                                        <td className="text-base"> {item.items.productName} <br /> <span className="text-xs">Price : {item.items.productPrice}</span></td>
                                        <td>{item.qty}</td>
                                        <td>{item.qty * item.items.productPrice}</td>

                                    </tr>)
                                }


                            </tbody>
                        </table>
                    </div>

                    <div className='mx-auto px-8 border-b my-2'>
                        <span className="text-green-400 font-bold text-l">Shipping Charge : </span> <span>{order.shippingCharge}</span><br />
                        <span className="text-green-400 font-bold text-l">Total Amount : </span> <span>{order.totalAmount}</span>
                    </div>

                    <div className='mx-auto px-8 border-b my-2'>
                        <h2 className="text-green-400 font-bold text-l">Shipping To</h2>
                        <p>{order.userAddress.name}</p>
                        <p>{order.userAddress.streetAddress} </p>
                        <p>{order.userAddress.city} , {order.userAddress.state}</p>
                        <p>{order.userAddress.pinCode}</p>
                        <p>Mobile : {order.userAddress.mobileNumber}</p>
                    </div>

                    <div className='mx-auto px-8'>Ordered On :<Moment format="D MMM YYYY">{order.createdAt}</Moment></div>
                    <div className='mx-auto px-8'>Time : <Moment format="hh:mm A">{order.createdAt}</Moment></div>

                </div> : null}

            </div>
        </div>
    )
}

export default OrderStatus
