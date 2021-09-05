import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import Moment from 'react-moment'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastError from '../../Scripts/ToastError';
import toastSuccess from '../../Scripts/ToastSuccess';
import { Cookies } from 'react-cookie'
const cookie = new Cookies()

const AdminComponent = () => {


    const [orderedProduct, setorderedProduct] = useState([])
    useEffect(() => {

        const token = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }
        console.log('User Admin')
        document.title = "Admin Dashboard - Kustom Parts :Biker Bred , Bike Baked"

        axios.get('/api/getAdminOrder', token).then(res => {
            setorderedProduct(res.data)
            console.log('Ordered Product ', orderedProduct)
        }).catch(err => {
            console.log(err)

        })
    }, [])


    const updateOrder = (product, option) => {

        var status = option.target.value

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.post('/api/updateOrder', { status, product }, config).then(res => {
            toastSuccess(res.data.msg)
            window.location.reload()
        }).catch(err => {
            toastError('Something Went Wrong')
            console.log(err)
        })

    }
    return (

        <div className="bg-gray-100 py-8 ">
            <AdminNavbar />
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  py-8  h-full order">
                <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Admin Panel</h3>
                </div>


                <div className="mx-auto px-8 border-b">
                    <ul>
                        {orderedProduct && orderedProduct.map(e =>
                            <li key={e._id}>
                                <div className="border-b py-2 px-4">
                                    <div className="">
                                        {Object.values(e.items).map(item =>
                                            <li> <h1 className="font-semibold inline">{item.items.productName}</h1> x <span>{item.qty}</span></li>
                                        )}
                                    </div>

                                    <div className="px-4">
                                        <p><span className="text-yellow-500"> Customer </span> :  {e.userAddress.name} </p>
                                        <p> <span className="text-yellow-500"> Address </span>  :  {e.userAddress.streetAddress} , {e.userAddress.city} ,
                                            {e.userAddress.state}</p>
                                        <p> <span className="text-yellow-500"> PinCode </span>  :  {e.userAddress.pinCode}</p>
                                        <p><span className="text-yellow-500"> Mobile </span> :  {e.userAddress.mobileNumber}</p>
                                        <p><span className="text-yellow-500"> Total </span> :  {e.totalAmount}</p>

                                    </div>
                                    <div className="px-4">
                                        <p> <span className="text-yellow-500"> Status </span> : <select onChange={option => { updateOrder(e, option) }}>
                                            <option>{e.orderStatus}</option>
                                            <option>Order_Placed</option>
                                            <option>Processing</option>
                                            <option>Shipped</option>
                                            <option>Out For Delivery</option>
                                            <option>Delivered</option>
                                        </select>
                                        </p>
                                        <p> <span className="text-yellow-500">Date</span>: <Moment format="D MMM YYYY">{e.createdAt}</Moment></p>
                                        <p> <span className="text-yellow-500">Time</span>: <Moment format="hh:mm A">{e.createdAt}</Moment></p>

                                    </div>

                                    <div className='px-4'>
                                        <p> <span className="text-yellow-500"> Reffered By</span>  : {e.referCode}   </p>
                                    </div>

                                </div>
                            </li>
                        )}
                    </ul>
                </div>

            </div>
            <ToastContainer />
        </div>
    )
}

export default AdminComponent
