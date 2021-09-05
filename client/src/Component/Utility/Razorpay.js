import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Razorpay = (props) => {


    const [values, setValue] = useState({})

    useEffect(() => {


        axios.post('/api/razorpay').then(res => {
            console.log(res.data)
            setValue(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    const showRazorpay = () => {
        console.log('srcipt')
        const script = document.createElement('script')
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        document.body.appendChild(script)
        script.onload = loadRazorpay




    }

    const loadRazorpay = () => {

        var options = {
            "key": process.env.RAZORPAY_KEY,
            "amount": values.amount,
            "currency": "INR",
            "name": "Kustom Parts : Biker Bred , Bike Baked",
            "description": " ",
            "order_id": values.id,
            "callback_url": "https://kustomparts.in/api/razorpay/callback",


        };

        var paymentObject = window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <div className="flex justify-center align-items">
            <button type='button' className="btn btn-primary px-4 py-2 rounded-full" id="rzp-button1" onClick={showRazorpay}>Pay With Razorpay</button>
        </div>
    )
}

export default Razorpay
