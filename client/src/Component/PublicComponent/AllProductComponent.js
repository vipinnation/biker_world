import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import '../../CSS/index.css'
import { Helmet } from 'react-helmet'


import { add, total } from 'cart-localstorage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AllProductComponent = () => {

    const [product, setProduct] = useState([])
    useEffect(() => {

        axios.get('/api/allproduct').then(res => {
            setProduct(res.data)
            document.getElementById('product-component').classList.add('orderActive')
            document.getElementById('process-page-spin').classList.remove('spinActive')
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const addToCart = async (input) => {

        console.log(input)
        axios.post('/api/addToCart', input, { headers: { 'Content-Type': 'application/json' } })
            .then(res => console.log(res))
            .catch(err => console.log(err))


        add({ id: input._id, name: input.productName, price: input.productPrice, image: input.productImage })
        toast.success('Item Added To Cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log(total())
    }
    return (
        <div className="font-sans bg-gray-100" id="product" >

            <Helmet>
                <title>All Products - Kustom Parts : Biker Bred , Bike Baked</title>
                <meta name="description"
                    content="We are delivering books such Engineering Book , NCERT Books , CBSE and RBSE books " />
                <meta name='keywords' content='ncert books , engineering books , local store , bookstore'></meta>

            </Helmet>

            <div id='process-page-spin' className="mx-2 py-4 spinActive">
                <i class="fa fa-spinner fa-spin text-black text-spin " ></i>
            </div>

            <div class="menu mx-auto mobilePadding px-4 py-8" id='product-component'>

                <h1 class="text-xl font-bold mb-8">All Products </h1>

                <div class="grid grid-cols-5 grid-gap gap-4 tablet-grid cols2">



                    {product.length && product.map(item =>
                        <div class="w-60 mobile-width-auto py-2 mb-8 shadow-2xl mx-auto">
                            <NavLink exact to={`/product/${item.productSlug}`}>



                                <img alt={item.productName} class=" border p-1 h-50 mx-auto w-full"
                                    src={item.productImage} />


                                <div class="mt-4 mx-2">
                                    <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">{item.productCategory} </h3>
                                    <h2 class="text-gray-900 title-font text-lg font-medium">{item.productName} </h2>
                                    <p class="mt-1 font-bold">Price: {item.productPrice}
                                        <span className="text-red-500 relative -top-2 inline"> <del> {item.productRegularPrice} </del></span> </p>
                                </div>
                                <div class=" flex mt-1 w-94 mx-2">
                                </div>
                            </NavLink>
                            <div className="mx-2 mt-1">
                                <button type="button" onClick={f => { addToCart(item) }}
                                    class="  text-sm   py-2 z-20 px-4 rounded-button  btn btn-primary w-100 button-hover re-button button-padding mobile-button">
                                    Add To Cart
                                </button> </div>

                        </div>
                    )}

                </div>
                <ToastContainer />
            </div>
        </div>
    )
}

export default AllProductComponent
