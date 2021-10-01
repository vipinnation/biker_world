import React, { useEffect, useState } from 'react'
import heroLogo from '../../Assets/Images/Hero-logo.png'
import motulLogo from '../../Assets/Images/motul logo.png'
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'
import { NavLink } from 'react-router-dom'

const CategorySwiper = () => {

    useEffect(() => {

        var productSlide = new Glide('.categorySlider', {
            autoplay: false,
            type: 'carousel',
            perView: 4,
            breakpoints: {
                800: {
                    perView: 2
                },
                1024: {
                    perView: 5
                }
            }
        }).mount()

        productSlide.play(4000)
    }, [])
    return (
        <div>
            <div className='categorySlider'>
                <div className="px-4 py- sm:px-6 flex justify-between">
                    <h3 className="text-lg leading-6 font-bold ">
                        Browse By Brand
                    </h3>
                </div>
                <div className="glide__track glideMarginPaddingInside m-4 px-4" data-glide-el="track">

                    <ul className="glide__slides glideMarginPadding  mx-8 px-8">
                        <li className="glide__slide ">
                            <div class="">
                                <NavLink exact to='/search/hero'>
                                    <img src={heroLogo} alt="" />
                                </NavLink>
                            </div>
                        </li>
                        <li className="glide__slide ">
                            <div class="">
                                <NavLink exact to='/search/motul'>
                                    <img src={motulLogo} alt="" />
                                </NavLink>
                            </div>
                        </li>
                    </ul>

                </div>


            </div>
        </div>
    )
}

export default CategorySwiper
