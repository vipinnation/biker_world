import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios'

import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'


const ProductSlider = (params) => {

    const [product, setProduct] = useState([])


    useEffect(async () => {

        await axios.get(`/api/product/category/${params.name}`).then(async (res) => {

            setProduct(res.data.product)

        }).catch(err => {
            console.log(err)
        })


        var productSlide = new Glide(`.${params.className}`, {
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
        }).mount()

        productSlide.play(4000)

    }, [])





    return (
        <div className={`${params.className} mx-5`}>
            <div className="px-4 py-5 sm:px-6 border-b flex justify-between">
                <h3 className="text-lg leading-6 font-medium  ">
                    {params.titleName}
                </h3>
            </div>
            <div className="glide__track glideMarginPaddingInside m-4 px-4" data-glide-el="track">

                <ul className="glide__slides glideMarginPadding  mx-8 px-8">
                    {product.length ? product.map(e =>
                        <li className="glide__slide  " key={e._id}>

                            <div className=" p-4 w-full  ">

                                <NavLink exact to={`/product/${e.productSlug}`}>
                                    <div className="w-4/5 rounded">
                                        <img alt={e.productName} className=" border  p-1 h-50 mx-auto w-full"
                                            src={e.productImage} />
                                    </div>

                                    <div className="mt-4 mx-2">
                                        <h2 className="text-gray-900 title-font text-lg font-medium">{e.productName}</h2>
                                        <p className="mt-1 font-bold text-lg">₹ {e.productPrice}
                                            {(e.productPrice != e.productRegularPrice) ? (<span className="text-red-500 relative -top-2 inline"> <del> {e.productRegularPrice} </del></span>):null}
                                        </p>
                                    </div>
                                </NavLink>

                            </div>
                        </li>
                    ) : null}

                </ul>

            </div>
            <div className="productSlider1 glide__arrows relative  bottom-24 text-black bg-gray-900" data-glide-el="controls">
                <button className="glide__arrow glide__arrow--left swiper-arrow-left" data-glide-dir="<">
                    <i className="fa fa-chevron-left text-black"></i>
                </button>
                <button className="glide__arrow glide__arrow--right  swiper-arrow-right" data-glide-dir=">">
                    <i className="fa fa-chevron-right text-black"></i>
                </button>
            </div>

        </div>
    )
}

export default ProductSlider
