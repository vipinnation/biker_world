import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'


const SecondYearComponent = () => {
    const [product, setProduct] = useState([])


    useEffect(async () => {

        await axios.get('/api/product/category/second year').then(async (res) => {
            
            setProduct(res.data.product)

        }).catch(err => {
            console.log(err)
        })

        const secondYearSlider = {
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
        var secondSlide = new Glide('.secondYearSlider', secondYearSlider).mount()

        secondSlide.play(4000)

    }, [])


    const dd = product.map(e =>
        <li class="glide__slide  ">

            <div class=" p-4 w-full  ">

                <NavLink exact to={`/product/${e._id}`}>
                    <div className="w-4/5 rounded">
                        <img alt="ecommerce " class=" border  p-1 h-50 mx-auto w-full"
                            src={e.productImage} />
                    </div>

                    <div class="mt-4 mx-2">
                        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 capitalize"> {e.productCategory}</h3>
                        <h2 class="text-gray-900 title-font text-lg font-medium">{e.productName}</h2>
                        <p class="mt-1 font-bold">Price:  {e.productPrice}</p>
                    </div>
                    <div class=" flex mt-1 w-94 mx-2 ">
                    </div>
                </NavLink>
            </div>
        </li>
    )


    return (
        <div class="secondYearSlider mx-5">
            <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                <h3 class="text-lg leading-6 font-medium  ">
                    Second Year Books
                </h3>
            </div>
            <div class="glide__track glideMarginPaddingInside m-4 px-4" data-glide-el="track">

                <ul class="glide__slides glideMarginPadding  mx-8 px-8">
                    {product.length ? dd : <div><h1>Loading</h1></div>}

                </ul>

            </div>
            <div class=" glide__arrows relative  bottom-24 text-black bg-gray-900" data-glide-el="controls">
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

export default SecondYearComponent
