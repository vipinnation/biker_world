import React, { useEffect } from 'react'
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'
import '../../CSS/Crousal.css'
import kustomParts from '../../Assets/Images/bike_art_kustomParts.jpg'


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
                                    <img src={kustomParts}   style={{ maxWidth: "150%" }} />
                                </div>
                            </div>
                        </div>
                    </li>
                    {/* <li className="glide__slide " >

                        <div className="block h-50vh w-full mx-auto flex pt-6 md:pt-0 md:items-center bg-cover bg-right backgroundImage3" >
                            <div className="container mx-auto">
                                <div className="flex flex-col w-full lg:w-1/2 md:ml-16 items-center md:items-start px-16  tracking-wide" >
                                    <p className="text-black text-2xl my-4  ">Buy Book As Your Wish</p>
                                    <a className="text-xl inline-block no-underline border-b border-gray-600 leading-relaxed hover:text-black hover:border-black" href="#"  >view product</a>
                                </div>
                            </div>
                        </div>
                    </li> */}



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

