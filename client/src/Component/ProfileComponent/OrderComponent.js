import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProfileNavbar from './ProfileNavbar'
import OrderPlaced from '../../Assets/Scripts/OrderPlaced'
import axios from 'axios'
import Moment from 'react-moment'
import { Cookies } from 'react-cookie'
import { Helmet } from 'react-helmet';
const cookie = new Cookies();

const OrderComponent = () => {

    const history = useHistory()
    const [orderProduct, setProductOrder] = useState([])
    const [cart, setCart] = useState([])

    const logout = e => {

        const auth = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.get('/api/logout', auth).then(res => {
            console.log("Logout Successfully")
        }).catch(err => {
            console.log(err)
        })

        cookie.remove('auth-token')
        window.location.reload()
    }

    useEffect(async () => {



        if (localStorage.getItem('login-button')) {
            history.push('/cart');
            return
        }

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        await axios.get('/api/getUserOrder', config).then(res => {
            document.getElementById('product-component').classList.add('orderActive')
            document.getElementById('process-page-spin').classList.remove('spinActive')
            setProductOrder(res.data.arr)
            setCart(res.data.data)
            OrderPlaced();
        }).catch(err => {
            console.log(err)

        })
    }, [])


    return (
        <div className="bg-gray-100 py-8 " id="product">

            <Helmet>
                <title>User Dashboard - Kustom Parts : Biker Bred , Bike Baked</title>
            </Helmet>
            <div id='process-page-spin' className="mx-2 py-4 spinActive">
                <i class="fa fa-spinner fa-spin text-black text-spin " ></i>
            </div>
            <div id='product-component'>
                <ProfileNavbar />
                <div className="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  order py-8 h-full" >
                    <div className="px-4 py-5 sm:px-6 border-b flex justify-between">
                        <h1 className="text-lg leading-6 font-medium text-gray-900"> Order History</h1>
                        <button onClick={logout} className="inline-block no-underline hover:text-black btn-primary px-2 hover:bg-red-200 rounded-full hover-transition  cursor-pointer">Logout</button>
                    </div>


                    <div className="mx-auto px-8 border-b">
                        <ul>
                            {orderProduct.length ? orderProduct.map(e =>
                                <li>

                                    <div className="border-b py-2  flex">
                                        <div className="w-1/5  rounded profile-mobile-image">
                                            <img alt={e.item.items.productName} className=" border p-1 w-full "
                                                src={e.item.items.productImage} />
                                        </div>
                                        <div className='ml-4'>
                                            <div className="">
                                                <NavLink exact to={`/profile/order/${e.orderId}`} >
                                                    <h1 className="font-semibold inline text-indigo-500">{e.item.items.productName}</h1>
                                                </NavLink>
                                            </div>
                                            <div className="px-4">
                                                <p className='text-yellow-500'> Status :{e.orderStatus} </p>
                                                <p> Date: <Moment format="D MMM YYYY">{e.orderedDate}</Moment></p>
                                                <p> Time: <Moment format="hh:mm A">{e.orderedDate}</Moment></p>

                                            </div>

                                        </div>
                                    </div>

                                </li>) : <div><h1>Yet Nothing Ordered , Order Not Found</h1></div>}

                        </ul>
                    </div>

                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default OrderComponent
