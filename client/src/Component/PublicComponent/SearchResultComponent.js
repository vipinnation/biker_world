import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import SearchProduct from '../Utility/SearchProduct'

import { add, total } from 'cart-localstorage'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchResultComponent = () => {

    const { id } = useParams()
    const [product, setProduct] = useState([])

    useEffect(() => {

        axios.get(`/api/search/${id}`).then(res => {


            setProduct(res.data)
            document.getElementById('product-component').classList.add('productActive')
            document.getElementById('process-page-spin').classList.remove('spinActive')
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const addToCart = async (input) => {

        var quantity = document.getElementById('qty')

        console.log('aty', quantity)
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


        axios.post('/api/addToCart', input).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <div className="menu mx-auto mobilePadding px-4 py-8">


            <div>
                <h2 className="text-l">Showing result for " {id} "</h2>
                <SearchProduct />
            </div>

            <div id="product">

                <div id='process-page-spin' className="mx-2 spinActive">
                    <i class="fa fa-spinner fa-spin text-black text-spin " ></i>
                </div>

                <div id='product-component'>
                    <div className="grid grid-cols-5 grid-gap gap-4 tablet-grid cols2" >


                        {product.length ? product.map(e =>
                            <div className="w-60 mobile-width-auto py-2 mb-8 shadow-2xl mx-auto">
                                <NavLink exact to={`/product/${e.productSlug}`}>
                                    <img alt={e.productCategory} className=" border p-1 h-50 mx-auto w-full"
                                        src={e.productImage} />

                                    <div className="mt-4 mx-2">
                                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize">{e.productCategory}</h3>
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{e.productName}</h2>
                                        <p className="mt-1 font-bold">Price: {e.productPrice}</p>
                                    </div>
                                    <div className=" flex mt-1 w-94 mx-2">
                                    </div>
                                </NavLink>
                                <div className="mx-2 mt-1">
                                    <button type="button"
                                        onClick={f => { addToCart(e) }}
                                        className="  text-sm   py-2 z-20 px-4 rounded-button  btn btn-primary w-100 button-hover re-button button-padding mobile-button">
                                        Add To Cart
                                    </button> </div>

                            </div>
                        ) : <div>
                            <div className="text-center">
                                <h2 className="text-xl font-bold">Product Not Found</h2>
                                <NavLink exact to="/allproduct" className="text-blue-900 font-bold underline">Click Here</NavLink> to see All Products
                            </div>
                        </div>}

                    </div>

                </div>
            </div>


            <ToastContainer />
        </div>
    )
}

export default SearchResultComponent
