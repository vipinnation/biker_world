import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import toastError from '../../Scripts/ToastError';
import toastSuccess from '../../Scripts/ToastSuccess';
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import Moment from 'react-moment'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()



const WithDrawRequest = () => {

    const [data, setData] = useState([])
    useEffect(() => {


        const token = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        document.title = "Withdraw Request - Kustom Parts : Biker Bred , Bike Baked"

        axios.get('/api/getwithdrawrequest', token).then(res => {
            console.log(res)
            setData(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const updateRequest = (product, option) => {

        var status = option.target.value

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }

        axios.post('/api/updatewithdrawrequest', { status, product }, config).then(res => {

            toastSuccess(res.data.msg)

        }).catch(err => {
            console.log(err)
            toastError('Something Went Wrong')
        })

    }
    return (
        <div className="bg-gray-100 py-8 ">
            <AdminNavbar />
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  py-8  h-full order">
                <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Withdraw Refered Earn Amount Request</h3>
                </div>


                <div className="mx-auto px-8 border-b">
                    <ul>
                        {data && data.map(e =>
                            <li key={e._id}>
                                <div className="border-b py-2 px-4">
                                    <div className="px-4">
                                        <p><span className="text-yellow-500"> By User </span> :  {e.user} </p>
                                        <p><span className="text-yellow-500"> Customer Name </span> :  {e.name} </p>
                                        <p> <span className="text-yellow-500"> Requested Amount </span>  : {e.amount}  </p>
                                        <p> <span className="text-yellow-500"> Bank Account  </span>  :  {e.bankAccountNumber}</p>
                                        <p><span className="text-yellow-500"> IFSC Code </span> :  {e.ifscCode}</p>

                                    </div>
                                    <div className="px-4">
                                        <p> <span className="text-yellow-500"> Status </span> : <select onChange={option => { updateRequest(e, option) }}>
                                            <option>{e.status}</option>
                                            <option>Requset_Received</option>
                                            <option>Processing</option>
                                            <option>Transferred</option>

                                        </select>
                                        </p>
                                        <p> <span className="text-yellow-500">Date</span>: <Moment format="D MMM YYYY">{e.createdAt}</Moment></p>
                                        <p> <span className="text-yellow-500">Time</span>: <Moment format="hh:mm A">{e.createdAt}</Moment></p>

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

export default WithDrawRequest
