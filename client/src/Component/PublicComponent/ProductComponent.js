import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'
import '../../CSS/Crousal.css'


const ProductComponent = () => {

    const { id } = useParams()
    const [product, setProduct] = useState({})
    const [review, setReview] = useState({
        name: '', email: '', review: ''
    })
    const [msg, setMsg] = useState('')
    const [getReview, setGetReview] = useState([])

    const [referal, setReferal] = useState('')

    useEffect(async () => {


        let search = window.location.search;
        let params = new URLSearchParams(search);
        let foo = params.get('referral');
        setReferal(foo)


        /** Fetch Product From Backend */
        axios.get(`/api/product/${id}`).then(async (res) => {

            setProduct(res.data.product)
            document.getElementById('product-component').classList.add('productActive')
            document.getElementById('process-page-spin').classList.remove('spinActive')
            document.title = `${res.data.product.productName} - Kustom Parts : Biker Bred , Bike Baked`

            /** Fetch Review From Backend */
            axios.get(`/api/getreview/${res.data.product._id}`).then(res => {
                setGetReview(res.data.review)
            }).catch(err => {
                console.log(err)
            })

            /**Product Image Slider */
            const config = {
                autoplay: false,
                type: 'carousel',
                startAt: 0,
                perView: 1,
                duration: 0.25,
            }


            var glide = new Glide('.glide', config).mount()

            glide.play(5000)
        }).catch(err => {
            console.log(err);
        })



    }, [])

    const addToCart = async (input) => {


        const { productSecondaryImage, _id, productName, productPrice, productCategory, productDescription, productImage, productPdf
            , productSearchingTags, createdAt, updatedAt, productEdition, productLanguage, productPublisher, productRegularPrice, productSlug } = input

        let cartData = {
            productSecondaryImage, _id, productName, productPrice, productCategory, productDescription, productImage, productPdf
            , productSearchingTags, createdAt, updatedAt, productEdition, productLanguage, productPublisher, productRegularPrice, productSlug,
            referCode: referal
        }
        console.log(cartData)
        axios.post('/api/addToCart', cartData).then(res => {

            toast.success('Item Added To Cart', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }).catch(err => {
            console.log(err)
        })

    }

    const timeout = () => {
        setTimeout(() => {
            setMsg('')
        }, 4000);
    }


    const addReview = (e) => {
        e.preventDefault()

        const postData = {
            productId: id,
            name: review.name,
            email: review.email,
            review: review.review
        }
        axios.post('/api/addreview', postData)
            .then(res => {
                console.log(res)
                setReview({ name: '', email: '', review: '' })
                setMsg(res.data.msg)
                timeout()
            })
            .catch(err => {
                console.log(err)
                setMsg('Something Went Wrong')
                timeout()
            })
    }

    return (
        <div className="text-gray-600 body-font overflow-hidden" id="product"  >

            {product && <Helmet>
                <meta name='title' content={`${product.productName} - Hirola : Online Bookstore`}></meta>
                <meta name="description"
                    content={` Buy online ${product.productDescription} at  ₹ ${product.productPrice} ${product.productPublisher} ${product.productLanguage} at your Doorstep delivery: Hirola - Online Bookstore`} />
                <meta name='keywords' content={product.productSearchingTags}></meta>
            </Helmet>}
            <div id='process-page-spin' className="mx-2 spinActive">
                <i class="fa fa-spinner fa-spin text-black text-spin " ></i>
            </div>


            <div id='product-component'>
                <div className="container px-5 py-5 mx-auto">
                    <div className="grid gap-1 grid-cols-2 mt-4 review container px-4   ">

                        <div className="imgBox mx-auto">

                            <div className="flex justify-center items-center md:-mx-4 rounded">
                                <div className="w-full bg-gray-100  rounded mx-auto">
                                    <div className="glide ">
                                        <div className="glide__track" data-glide-el="track">
                                            <ul className="glide__slides "  >
                                                <li className="glide__slide " >
                                                    <img src={product.productImage} alt={product.productName} className="bg-gray-700 " />
                                                </li>
                                                {product.productSecondaryImage && product.productSecondaryImage.map(pic =>
                                                    <li className="glide__slide " >
                                                        <img src={pic} alt={product.productName} className="bg-gray-700 " />
                                                    </li>
                                                )
                                                }



                                            </ul>
                                        </div>
                                        <div className="glide__arrows" data-glide-el="controls">
                                            <button className="glide__arrow glide__arrow--left hover:bg-gray-200" data-glide-dir="<">
                                                <i className="fa fa-chevron-left text-black " aria-hidden="true"></i>
                                            </button>
                                            <button className="glide__arrow glide__arrow--right hover:bg-gray-200" data-glide-dir=">">
                                                <i className="fa fa-chevron-right text-black  " aria-hidden="true"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                        <div className="w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0  ">
                            <h2 className="text-sm title-font text-gray-500 tracking-widest capitalize">{product.productCategory}</h2>
                            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.productName}</h1>
                            <div className="flex mb-4">
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="text-gray-500">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                        </svg>
                                    </a>
                                </span>
                            </div>
                            <p className="leading-relaxed capitalize">
                                {product.productDescription} <br />
                                {product.productPublisher && <span className='capitalize'>publisher : {product.productPublisher} <br /> </span>}
                                {product.productEdition && <span className="capitalize">edition : {product.productEdition} <br /> </span>}
                                {product.productLanguage && <span className='capitalize'> language : {product.productLanguage} </span>}
                                {product.productApplicableModel && <span className='capitalize'> Applicable Model :  <ol className='list-decimal'>  
                                {product.productApplicableModel.map(model => <li className='ml-4'> {model} </li>)}</ol> </span>}

                            </p>

                            <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">

                                <div className="flex ml-6 items-center">
                                    <span className="mr-3">Quantity</span>
                                    <div className="relative">
                                        <select id="qty"
                                            className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>

                                        </select>
                                        <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                                                <path d="M6 9l6 6 6-6"></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className=" justify-space w-full">
                                <span className="title-font font-medium text-2xl text-gray-900 ">Price: {product.productPrice}
                                    <span className='relative -top-2 text-red-500'> <del className="text-lg"> {product.productRegularPrice}</del> </span>
                                </span>
                                <br />
                                <div className="my-8">
                                    <button onClick={e => { addToCart(product) }} className="mx-auto text-white btn btn-primary border-0 py-2 px-16 focus:outline-none hover:bg-indigo-600 rounded">  Add To Cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="grid gap-4 grid-cols-2  review  ">

                    <div className="mx-auto w-1/2 mt-8 review-list">
                        <h1 className="text-xl font-bold">Reviews</h1>

                        {getReview.length ? getReview.map(e => <div className=" p-4">
                            <h3 className="text-l font-bold">{e.name}</h3>
                            <p> {e.review}</p>
                        </div>) : <div> <h3>No Reviews</h3></div>}


                    </div>
                    <div className="mt-8 w-3/4 review-add">

                        <h1 className="text-xl font-bold">Add a Review</h1>
                        <form action="POST" onSubmit={addReview}>
                            <div className="w-1/2 review-alert  ml-24 text-center">
                                {msg && <div className="bg-yellow-500 rounded  p-2 my-4 flex justify-content text-yellow-900" > <strong className="text-grey-200 mx-2 text-center">{msg}</strong></div>}
                            </div>
                            <div className="p-2 ">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input
                                        type="text"
                                        id="text"
                                        name="name"
                                        value={review.name}
                                        onChange={e => { setReview({ ...review, name: e.target.value }) }}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 ">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={review.email}
                                        onChange={e => { setReview({ ...review, email: e.target.value }) }}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                    <span className="text-xs">Your email address will not be published.</span>
                                </div>
                            </div>
                            <div className="p-2 ">
                                <div className="relative">
                                    <label for="review" className="leading-7 text-sm text-gray-600">Reviews</label>
                                    <input
                                        type="review"
                                        id="review"
                                        name="review"
                                        value={review.review}
                                        onChange={e => { setReview({ ...review, review: e.target.value }) }}
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="ml-2">
                                <button type="submit" className="ml-auto btn btn-primary  text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add Review</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div> <ToastContainer />
        </div>
    )
}



export default ProductComponent