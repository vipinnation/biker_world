import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CategoryCompnent = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(async () => {


        await axios.get(`/api/product/category/${id}`).then(async (res) => {

            setProduct(res.data.product)

        }).catch(err => {
            console.log(err)
        })

    }, [])


    const addToCart = async (input) => {

        console.log(input)
        axios.post('/api/addToCart', input, { headers: { 'Content-Type': 'application/json' } })
            .then(res => console.log(res))
            .catch(err => console.log(err))



        toast.success('Item Added To Cart', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }
    return (

        <section className="menu mx-auto mobilePadding px-4 py-8">

            <Helmet>
                <title className='capitalize'> {id} Products - Kustom Parts : Biker Bred , Bike Baked</title>
                <meta name="description"
                    content={`List of ${id} products , delivering at doorstep.`} />
                <meta name='keywords' content='ncert books , engineering books , local store , bookstore'></meta>
            </Helmet>

            <h1 className="text-xl font-bold mb-8">All Products </h1>

            <div className="grid grid-cols-5 grid-gap gap-4 tablet-grid cols2">


                {product.map(e =>
                    <div className="w-60 mobile-width-auto py-2 mb-8 shadow-2xl mx-auto">
                        <NavLink exact to={`/product/${e.productSlug}`}>



                            <img alt={e.productCategory} className=" border p-1 h-50 mx-auto w-full"
                                src={e.productImage} />


                            <div className="mt-4 mx-2">
                                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">{e.productCategory}</h3>
                                <h2 className="text-gray-900 title-font text-lg font-medium">{e.productName}</h2>
                                <p className="mt-1 font-bold">Price: {e.productPrice}
                                    <span className="text-red-500 relative -top-2 inline"> <del> {e.productRegularPrice} </del></span>
                                </p>
                            </div>
                            <div className=" flex mt-1 w-94 mx-2">
                            </div>
                        </NavLink>
                        <div className="mx-2 mt-1">
                            <button type="button" onClick={f => { addToCart(e) }}
                                className="  text-sm   py-2 z-20 px-4 rounded-button  btn btn-primary w-100 button-hover re-button button-padding mobile-button">
                                Add To Cart
                            </button> </div>

                    </div>
                )}

            </div>
            <ToastContainer />
        </section>




    )
}

export default CategoryCompnent
