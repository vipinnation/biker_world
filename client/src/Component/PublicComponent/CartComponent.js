import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import emptyCart from '../../Images/EmptyCart.jpeg'
import axios from 'axios'
import '../../CSS/cart.css'
import { Helmet } from 'react-helmet'

import { Cookies } from 'react-cookie'
const cookie = new Cookies();


const CartComponent = () => {

    const [cartItem, setCartItem] = useState([])
    const [totalAmount, setTotalAmount] = useState('')
    const [totalQty, setTotalQty] = useState('')
    const [shippingCharge, setShippingCharge] = useState('')

    useEffect(async () => {

        localStorage.removeItem('login-button')
        await axios.get('/api/cart-item').then(res => {
            setCartItem(res.data.Array)
            document.getElementById('product-component').classList.add('productActive')
            document.getElementById('process-page-spin').classList.remove('spinActive')


            setTotalAmount(res.data.cart.totalAmount)
            setTotalQty(res.data.cart.totalQty)
            setShippingCharge(res.data.cart.shippingCharge)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    /** reduce item from quantity */
    const reduceItem = (product) => {

        console.log('reduce Item')

        axios.post(`/api/reduceCart/${product._id}`, product).then(res => {
            console.log('Reduced Item ', res)

        }).catch(err => {
            console.log(err)
        })
        window.location.reload()
    }


    /** increase no of item in cart */
    const addItem = (product) => {

        console.log('Increase Item')

        axios.post(`/api/increaseCart/${product._id}`, product).then(res => {
            console.log('Incresase Item ', res)
        }).catch(err => {
            console.log(err)
        })
        window.location.reload()
    }


    /***Remove item from cart */
    const removeItem = (product) => {
        console.log('Remove Item')
        axios.post(`/api/removeItemFromCart/${product._id}`, product).then(res => {
            console.log('Decrease item ', res)
        }).catch(err => {
            console.log(err)
        })
        window.location.reload()
    }


    const loginToContinue = () => {
        localStorage.setItem('login-button', 'login-button')
    }
    return (
        <div className="font-sans bg-gray-100" id="product" >

            <Helmet>
                <title>Cart - Kustom Parts : Biker Bred , Bike Baked</title>
                <meta name='keywords' content='ncert books , engineering books , local store , bookstore'></meta>
            </Helmet>

            <div id='process-page-spin' className="mx-2 py-4 spinActive">
                <i class="fa fa-spinner fa-spin text-black text-spin " ></i>
            </div>
            <div id='product-component'>
                {cartItem && cartItem.length ? <div className="order container mx-auto w-1/2 cart-width pt-2 pb-8">

                    <div className="flex  items-center border-b pb-4 pt-1 border-gray-300">
                        <img src="img/cart-black.png" alt="" />
                        <h1 className="font-bold text-2xl ml-4 h-primary">Order Summary</h1>
                    </div>
                    <div className="pizza-list border-b border-gray-300 mx-5 ">

                        {cartItem.map(data => <div className="flex items-center my-8 " key={data.items._id} >
                            <img className="w-24  py-2 mobile-image" alt="" src={data.items.productImage} />
                            <div className="flex-1 ml-4">
                                <h1 className="font-bold text-xl ">
                                    {data.items.productName}
                                </h1>
                                <span><strong></strong></span>
                                <br></br>
                                <span>Price :- {data.items.productPrice}</span>
                            </div>
                            <div className="flex-1 justify-content align-items">
                                <span className="hover:text-white hover:bg-black rounded">
                                    <i class="fa fa-minus" aria-hidden="true" onClick={e => { reduceItem(data.items) }} ></i>
                                </span>
                                <span className="mr-1">{data.qty} pcs  </span>
                                <span className="hover:text-white hover:bg-black rounded"><i class="fa fa-plus" aria-hidden="true" onClick={f => { addItem(data.items) }} ></i></span>
                                <span className="text-lg font-bold hover:bg-black hover:text-white  rounded mx-2">
                                    <i className="fa fa-trash " onClick={g => { removeItem(data.items) }}> </i>
                                </span>
                            </div>
                            <span className="text-lg font-bold mr-1">₹ {Number(data.items.productPrice) * data.qty} </span>

                        </div>
                        )}
                    </div>
                    <div className="mx-5">

                        <div className="text-right py-1">
                            <span className="text-l">Total Quantity:-</span>
                            <span className="text-l ml-2"> {totalQty} </span>
                        </div>
                        <div className="text-right py-1">
                            <span className="text-l">Shipping Charge:-</span>
                            <span className="text-l ml-2">₹  {shippingCharge} </span>
                        </div>
                        <div className="text-right py-1">
                            <span className="text-l">Total Amount:-</span>
                            <span className="text-l  ml-2"> ₹  {totalAmount} </span>
                        </div>
                    </div>
                    {cookie.get('auth-token') ? <div className="text-right">
                        <NavLink exact to='/checkout'>
                            <button className="inline-block btn-primary py-1 px-4 rounded-full mt-4 text-white font-bold outline-none " >Proceed To CheckOut</button>
                        </NavLink>
                    </div> : <div className="text-right">
                        <NavLink exact to='/login'>
                            <button className="inline-block btn-primary py-1 px-4 rounded-full mt-4 text-white font-bold outline-none " onClick={loginToContinue} >
                                Login To Continue
                            </button>
                        </NavLink>
                    </div>}
                </div> : (<div>

                    <div className="empty-cart text-center py-2">

                        <h1 className="text-3xl font-bold mb-3  ">Cart is Empty</h1>
                        <p className="mb-5 text-gray-500 text-lg">You probably haven`t ordered yet . </p>

                        <img className="w-2/5 mx-auto mb-3" src="" alt="" srcset="" />


                        <NavLink exact to="/" className="inline-block mx-auto">
                            <button className="btn-primary py-1 px-6 rounded-full text-center"> Go Back </button>
                        </NavLink>
                    </div>

                </div>)
                }




            </div>
        </div>




    )
}

export default CartComponent


