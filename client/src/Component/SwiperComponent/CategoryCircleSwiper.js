import React, { useEffect, useState } from 'react'
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import '../../Assets/CSS/swiper.css'
import Glide from '@glidejs/glide'
import { NavLink } from 'react-router-dom'

const CategoryCircleSwiper = () => {

    useEffect(() => {

        var productSlide = new Glide('.categorySlider', {
            autoplay: false,
            type: 'carousel',
            perView: 8,
            breakpoints: {
                800: {
                    perView: 3
                },
                1024: {
                    perView: 8
                }
            }
        }).mount()

        productSlide.play(6000)
    }, [])
    return (
        <div>
            <div className='categorySlider'>

                <div className="glide__track glideMarginPaddingInside px-4" data-glide-el="track">

                    <ul className="glide__slides glideMarginPadding">
                        <li className="glide__slide ">
                            <div class=" rounded-full w-1/2 my-2 ">
                                <NavLink exact to='/categorylist'>
                                    <h4 className='rounded-full h-24 w-24 flex items-center justify-center p-1 categoryNeo swiper-width-height swiper-h4-size'>All Categories</h4>
                                </NavLink>
                                <h2 className='text-center'>All Categories</h2>
                            </div>
                        </li>

                        <li className="glide__slide ">
                            <div class=" rounded-full w-1/2 my-2">
                                <NavLink exact to='/shopbybrand'>
                                    <h4 className='rounded-full h-24 w-24 flex items-center justify-center border-2  p-1 categoryNeo swiper-width-height swiper-h4-size'>Shop By Brand</h4>
                                </NavLink>
                                <h2 className='text-center'>Shop By Brand</h2>
                            </div>
                        </li>
                        <li className="glide__slide ">
                            <div class=" rounded-full w-1/2 my-2">
                                <NavLink exact to='/category/leather bags'>
                                    <h4 className='rounded-full h-24 w-24 flex items-center justify-center border-2  p-1 categoryNeo swiper-width-height swiper-h4-size'>Leather Bags</h4>
                                </NavLink>
                                <h2 className='text-center'>Leather Bags</h2>
                            </div>
                        </li>
                        <li className="glide__slide ">
                            <div class=" rounded-full w-1/2 my-2">
                                <NavLink exact to='/category/engine oil'>
                                    <h4 className='rounded-full h-24 w-24 flex items-center justify-center border-2  p-1 categoryNeo swiper-width-height swiper-h4-size'>Engine Oil</h4>
                                </NavLink>
                                <h2 className='text-center'>Engine Oil</h2>
                            </div>
                        </li>
                        <li className="glide__slide ">
                            <div class=" rounded-full w-1/2 my-2">
                                <NavLink exact to='/category/chain lube'>
                                    <h4 className='rounded-full h-24 w-24 flex items-center justify-center border-2  p-1 categoryNeo swiper-width-height swiper-h4-size'>Chain Lube</h4>
                                </NavLink>
                                <h2 className='text-center'>Chain Lube</h2>
                            </div>
                        </li>

                        <li className="glide__slide ">
                            <div class=" rounded-full w-1/2 my-2">
                                <NavLink exact to='/category/helmet'>
                                    <h4 className='rounded-full h-24 w-24 flex items-center justify-center border-2  p-1 categoryNeo swiper-width-height swiper-h4-size'>Helmet</h4>
                                </NavLink>
                                <h2 className='text-center'>Helmet</h2>
                            </div>
                        </li>
                        <li className="glide__slide ">
                            <div class=" rounded-full w-1/2 my-2">
                                <NavLink exact to='/category/chain clean'>
                                    <h4 className='rounded-full h-24 w-24 flex items-center justify-center border-2  p-1 categoryNeo swiper-width-height swiper-h4-size'>Chain Clean</h4>
                                </NavLink>
                                <h2 className='text-center'>Chain Clean</h2>
                            </div>
                        </li>

                    </ul>

                </div>
                <div className="px-4 sm:px-6 text-right -py-4">
                    <NavLink exact to='/categorylist' className='hover:text-red-900 inline'>
                        <h3 className="text-right leading-6 font-bold swiper-h3-size swiper-category-margin">
                            View Category
                            <span className='px-1'>
                                <i class="fa fa-caret-right" aria-hidden="true" > </i>
                            </span>
                        </h3>
                    </NavLink>
                </div>


            </div>
        </div>
    )
}

export default CategoryCircleSwiper
