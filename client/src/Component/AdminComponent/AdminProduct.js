import React, { useEffect, useState } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()
const AdminProduct = () => {

    const [product, setProduct] = useState([])
    const history = useHistory();

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${cookie.get('auth-token')}`
        }
    }
    useEffect(() => {

        document.title="Admin Product - Kustom Parts - Biker Bred , Bike Baked"
        axios.get('/api/admin/getProduct', config).then(res => {
            setProduct(res.data.product)

        }).catch(err => {
            console.log(err)
            cookie.remove('auth-token');
            cookie.remove('role')
            history.push('/login')
        })
    }, [])

    return (
        <div>
            <AdminNavbar />
            <section class="menu container  mx-auto mobilePadding px-4 py-8">


                <h1 class="text-xl font-bold mb-8">All Products </h1>

                <div class="grid  grid-cols-4 grid-gap gap-4   cols2">

                    {product.length ? product.map(e =>
                        <div class="w-60 mobile-width-auto py-2 mb-8 shadow-2xl mx-auto" key={e._id}>

                            <img alt={e.productName} class=" border p-1 h-50 mx-auto w-full mh-68"
                                src={e.productImage} />


                            <div class="mt-4 mx-2">
                                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize	">{e.productCategory}</h3>
                                <h2 class="text-gray-900 title-font text-lg font-medium">{e.productName}</h2>
                                <p class="mt-1 font-bold">Price:- {e.productPrice}</p>
                            </div>
                            <div class=" flex mt-1 justify-between  mx-4">
                                <NavLink exact to={`/admin/editproduct/${e._id}`}>

                                    <button type="button" class="add-to-cart text-sm w-full py-2 z-20 px-2  rounded-button bg-gray-900 text-gray-400 w-100 button-hover re-button button-padding">
                                        Edit Product
                                    </button>
                                </NavLink>
                                <NavLink exact to={`/admin/delproduct/${e._id}`}>

                                    <button type="button" class="add-to-cart text-sm w-full py-2 z-20 px-2   rounded-button bg-gray-900 text-gray-400 w-100 button-hover re-button button-padding">
                                        Del Product
                                    </button>
                                </NavLink>
                            </div>

                        </div>
                    ) : (<div> <span>No Product Found</span> </div>)}

                </div>
            </section>



        </div>
    )
}

export default AdminProduct
