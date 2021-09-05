import React from 'react'
import axios from 'axios'


const Payment = (props) => {




    function isDate(val) {
        // Cross realm comptatible
        return Object.prototype.toString.call(val) === '[object Date]'
    }

    function isObj(val) {
        return typeof val === 'object'
    }

    function stringifyValue(val) {
        if (isObj(val) && !isDate(val)) {
            return JSON.stringify(val)
        } else {
            return val
        }
    }

    function buildForm({ action, params }) {
        const form = document.createElement('form')
        form.setAttribute('method', 'post')
        form.setAttribute('action', action)

        Object.keys(params).forEach(key => {
            const input = document.createElement('input')
            input.setAttribute('type', 'hidden')
            input.setAttribute('name', key)
            input.setAttribute('value', stringifyValue(params[key]))
            form.appendChild(input)
        })

        return form
    }

    function post(details) {
        const form = buildForm(details)
        document.body.appendChild(form)
        form.submit()
        form.remove()
    }

    const getData = (data) => {

        return fetch('/api/payment', {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then(response => response.json()).catch(err => console.log(err))
    }



    const makePayment = () => {

        let input = {
            amount: props.totalAmount,
            email: props.customer.email,
            customerId: props.customer.id
        }
        console.log('Payment js', props.userData)
        const { name, pinCode, mobileNumber, state, streetAddress, city } = props.userData

        if (!name || !pinCode || !mobileNumber || !state || !streetAddress || !city) {
            localStorage.setItem('address', 'address')
            window.location.replace('/checkout')
            return
        }

        getData(input).then(response => {

            var information = {
                action: "https://securegw-stage.paytm.in/order/process",
                params: response
            }
            post(information)

        })
    }
    return (
        <div>
            <button onClick={makePayment} className="btn btn-primary p-2 rounded" type='button'>PAY USING PAYTM</button>
        </div>
    )
}

export default Payment
