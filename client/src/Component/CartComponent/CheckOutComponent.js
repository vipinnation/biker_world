import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Cookies } from 'react-cookie'
import Razorpay from '../Utility/Razorpay';
import { useHistory } from 'react-router-dom';
import displayNotification from '../../Assets/Scripts/NoAddressNotification'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const cookie = new Cookies();


const CheckOutComponent = () => {

    const history = useHistory()
    const [cartItem, setCartItem] = useState([])
    const [cart, setCart] = useState({})
    const [userData, setUserData] = useState({
        name: '', streetAddress: '', pinCode: '', mobileNumber: '', city: '', state: 'Rajasthan'
    })

    const [customer, setCustomer] = useState({})
    useEffect(() => {

        displayNotification()
        axios.get('/api/cart-item').then(res => {

            setCartItem(res.data.Array)
            setCart(res.data.cart)
        }).catch(err => {
            console.log(err)
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }
        axios.get('/api/getaddress', config).then(res => {

            setCustomer(res.data.customer)
            if (res.data.address) {
                setUserData(res.data.address)
                return
            }
            console.log('Address ', res)
        }).catch(err => {
            console.log(err)
        })


    }, [])

    const createPayment = e => {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        let checkout = document.getElementById('process').classList.add('active')


        axios.post('/api/addaddress', userData, config).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <div className='flex   border-4 justify-content align-items bg-gray-100 cart-checkout-div'>
            <div className='w-1/2  mobile-width-100'>
                <div className="mx-auto w-1/2 mobile-width-100">
                    <h1 className="text-xl font-bold py-4 px-2">Product in Cart</h1>
                    <table className="table-auto">
                        <thead className="text-green-400">
                            <tr>
                                <th className="w-3/4 text-left">Product Name</th>
                                <th className="w-1/5 text-left">Qty</th>
                                <th className="w-2/5 text-left">Amount</th>

                            </tr>
                        </thead>
                        <tbody>
                            {cartItem && cartItem.map(item => <tr className="bg-gray-200 rounded p-2 my-8 rounded-full">
                                <td className="p-4">{item.items.productName}</td>
                                <td className="p-4">{item.qty}</td>
                                <td className="p-4">{item.qty * Number(item.items.productPrice)}</td>

                            </tr>)}


                        </tbody>


                    </table>
                    <h3 className="text-l font-bold py-4 text-right mx-4">Total Amount + Shipping Charge : {cart.totalAmount}</h3>
                </div>
            </div>
            <div className=" w-1/2 mobile-width-100">

                <h1 className="text-xl font-bold pt-4 px-2">Shipping Address</h1>
                <div className=''>
                    <form className="w-1/2 pt-4 pb-8 px-8 mobile-width-100">

                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="name"
                                placeholder=" " required='true'
                                value={userData.name}
                                onChange={e => { setUserData({ ...userData, name: e.target.value }) }}
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Enter Full Name</label>

                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="streetAddress"
                                placeholder=" " required='true'
                                value={userData.streetAddress}
                                onChange={e => { setUserData({ ...userData, streetAddress: e.target.value }) }}
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Street Address</label>

                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="city"
                                placeholder=" " required='true'
                                value={userData.city}
                                onChange={e => { setUserData({ ...userData, city: e.target.value }) }}
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Town / City</label>

                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="text"
                                name="State"
                                placeholder=" " required='true'
                                value={userData.state}
                                onChange={e => { setUserData({ ...userData, state: e.target.value }) }}
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">State</label>

                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="number"
                                name="pinCode"
                                placeholder=" " required='true'
                                value={userData.pinCode}
                                onChange={e => { setUserData({ ...userData, pinCode: e.target.value }) }}
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Pin Code</label>

                        </div>
                        <div className="relative z-0 w-full mb-5">
                            <input
                                type="number"
                                name="mobile"
                                placeholder=" " required='true'
                                value={userData.mobileNumber}
                                onChange={e => { setUserData({ ...userData, mobileNumber: e.target.value }) }}
                                className="pt-3 pb-2 block w-full bg-clip-text px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                            />
                            <label htmlFor="password" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Mobile Number</label>

                        </div>



                        <div>
                            <button
                                className="inline-block btn-primary py-1 px-4 rounded-full mt-4 text-white font-bold outline-none"
                                type='button'
                                id="checkout"
                                onClick={createPayment}>
                                <div className="mx-2 inline" id='process'>
                                    <i class="fa fa-spinner fa-spin text-black text-xl " ></i>
                                </div>
                                <Razorpay totalAmount={cart.totalAmount} />
                            </button>

                        </div>

                    </form>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CheckOutComponent
