import React, { useEffect, useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { Cookies } from 'react-cookie'
const cookie = new Cookies();



const VerifyComment = () => {

    const [review, setReview] = useState([])

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${cookie.get('auth-token')}`
        }
    }
    useEffect(() => {

        console.log()
        axios.get('/api/getfalsereview', config).then(res => {
            console.log(res)
            setReview(res.data.review)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const updateReview = (e, option) => {
        console.log(option.target.value)

        const verifyStatus = option.target.value

        axios.post(`/api/updateUnverifiedReview/${e._id}`, { verifyStatus }, config).then(res => {

        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className="bg-gray-100 py-8 ">
            <AdminNavbar />
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5  py-8  h-full order">
                <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Verify Review</h3>
                </div>


                <div className="mx-auto px-8 border-b">
                    <ul>

                        {review.length ? review.map(e => <li>
                            <div className="border-b py-2 px-4">
                                <div className="">

                                    <li key={e._id}> <h1 className="font-semibold inline">Product : {e.product} </h1> </li>
                                    <div className="px-4">
                                        <p><span className="text-yellow-500"> Name  </span> : {e.name}    </p>
                                        <p> <span className="text-yellow-500"> Email </span>  : {e.email}  </p>
                                        <p><span className="text-yellow-500"> Review </span> : {e.review}  </p>
                                        <p><span className="text-yellow-500"> Verify </span> : <select onChange={option => { updateReview(e, option) }}>
                                            <option>{String(e.isVerified)}</option>
                                            <option>false</option>
                                            <option>true</option>

                                        </select>  </p>

                                    </div>
                                </div>
                            </div>
                        </li>) : <div>
                            <h1>Unverified Review is Not left</h1>
                        </div>}

                    </ul>
                </div>
            </div>

        </div>
    )
}

export default VerifyComment
