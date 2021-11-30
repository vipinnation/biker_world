import React, { useEffect } from 'react'
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'
import '../../Assets/CSS/Crousal.css'
import crosalPic from '../../Assets/Images/crousalPic.jpg'
import kustomParts from '../../Assets/Images/bike_art_kustomParts.jpg'
import { NavLink } from 'react-router-dom'


const Crousal = () => {

    useEffect(() => {

        const config = {
            autoplay: false,
            type: 'carousel',
            startAt: 0,
            perView: 1,
            duration: 0.25,
        }

        // new Glide('.glide', config).mount()
        var glide = new Glide('.glide', config).mount()

        glide.play(5000)

    }, [])

    return (
        <div className="glide ">
            <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides "  >
                    <li className="glide__slide " >

                        <div className="block h-50vh mobile-height-crousal w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right  " >
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-16  tracking-wide" >
                                    <NavLink exact to='/product/Vega-Bolt-Rapid-white-blue-Helmet'>
                                        <img src={crosalPic} style={{ maxWidth: "150%" }} />
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li className="glide__slide " >

                        <div className="block h-50vh mobile-height-crousal w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right  " >
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-16  tracking-wide" >
                                    <img src={kustomParts} style={{ maxWidth: "150%" }} />
                                </div>
                            </div>
                        </div>
                    </li>





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


    )
}


export default Crousal

