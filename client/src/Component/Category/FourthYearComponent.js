import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'
import { add, total } from 'cart-localstorage'
import { toast, ToastContainer } from 'react-toastify'

const FourthYearComponent = () => {
    const [product, setProduct] = useState([])


    useEffect(async () => {

        await axios.get('/api/product/category/fourth year').then(async (res) => {
            
            setProduct(res.data.product)

        }).catch(err => {
            console.log(err)
        })

        const fourthYearSlider = {
            autoplay: false,
            type: 'carousel',
            perView: 4,
            breakpoints: {
                800: {
                    perView: 2
                },
                1024: {
                    perView: 4
                }
            }
        }
        var productSlide = new Glide('.fourthYearSlider', fourthYearSlider).mount()

        productSlide.play(4000)

    }, [])

    return (
        <div class="fourthYearSlider mx-5">
            <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                <h3 class="text-lg leading-6 font-medium  ">
                    Fourth Year Books
                </h3>
            </div>
            <div class="glide__track glideMarginPaddingInside m-4 px-4" data-glide-el="track">

                <ul class="glide__slides glideMarginPadding  mx-8 px-8">
                    {product.length ? product.map(item =>
                        <li class="glide__slide  ">

                            <div class=" p-4 w-full  ">

                                <NavLink exact to={`/product/${item._id}`}>
                                    <div className="w-4/5 rounded">
                                        <img alt="ecommerce " class=" border  p-1 h-50 mx-auto w-full"
                                            src={item.productImage} />
                                    </div>

                                    <div class="mt-4 mx-2">
                                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize"> {item.productCategory}</h3>
                                        <h2 class="text-gray-900 title-font text-lg font-medium">{item.productName}</h2>
                                        <p class="mt-1 font-bold">Price: {item.productPrice}</p>
                                    </div>
                                </NavLink>

                            </div>
                        </li>
                    ) : null}

                </ul>

            </div>
            <div class="productSlider glide__arrows relative  bottom-24 text-black bg-gray-900" data-glide-el="controls">
                <button class="glide__arrow glide__arrow--left  bg-red-900 swiper-arrow-left" data-glide-dir="<">
                    <i class="fa fa-chevron-left text-black"></i>
                </button>
                <button class="glide__arrow glide__arrow--right  swiper-arrow-right" data-glide-dir=">">
                    <i class="fa fa-chevron-right text-black"></i>
                </button>
            </div>

        </div>
    )
}

export default FourthYearComponent
