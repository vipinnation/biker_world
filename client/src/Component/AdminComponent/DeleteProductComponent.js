import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router';
import axios from 'axios'


import { Cookies } from 'react-cookie'
const cookie = new Cookies()

const DeleteProductComponent = () => {
    const { delProductId } = useParams()
    var history = useHistory();

    useEffect(() => {


        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${cookie.get('auth-token')}`
            }
        }
        axios.get(`/api/admin/delproduct/${delProductId}`, config).then(res => {
            console.log(res);
            history.push('/admin/product')
        }).catch(err => {
            console.log(err)
            history.push('/admin/product')
        })
    }, [])
    return (
        <div>
            del product
        </div>
    )
}

export default DeleteProductComponent

