import React, { useEffect } from 'react'
import '../../../node_modules/@glidejs/glide/dist/css/glide.core.min.css'
import '../../../node_modules/@glidejs/glide/dist/css/glide.theme.min.css'
import Glide from '@glidejs/glide'
import '../../CSS/Crousal.css'


const Testimonial = () => {

    useEffect(() => {

        const testimonialConfig = {
            autoplay: false,
            type: 'carousel',
            startAt: 0,
            perView: 4,
            duration: 0.25,
            breakpoints: {
                800: {
                    perView: 1
                },
                1024: {
                    perView: 3
                }
            }
        }
        var glide = new Glide('.testimonialGlide', testimonialConfig).mount()

        glide.play(5000)

    }, [])

    return (
        <div>
            <div className="testimonialGlide  w-11/12 mx-auto">
                <div className="glide__track" data-glide-el="track">
                    <ul className="glide__slides "  >
                        <li className="glide__slide border-4 rounded-md bg-gray-200 border-indigo-400  py-2" >

                            <div className="text-center">
                                <i className="fa fa-user-circle text-8xl" aria-hidden="true"></i>
                                <h2 className="text-lg font-bold">Vishal Sharma</h2>
                                <p className="text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                </p>
                            </div>

                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}

export default Testimonial
