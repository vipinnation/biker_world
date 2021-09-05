import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const SearchProduct = () => {

    const history = useHistory();
    const [display, setDisplay] = useState(false)
    const [searchProduct, setSearchProduct] = useState('')

    const disPlay = e => {
        console.log("Before Set , ", display)
        setDisplay(!display)
        console.log('After Set :- ', display)
    }

    const submitHandler = e => {
        history.push(`/search/${searchProduct}`)
    }

    return (
        <>
            <div classNameName="bg-white " >
                <div className="container mx-auto flex items-center flex-wrap pt-4 ">
                    <nav id="store" className="w-full z-30 top-0 px-6 py-1">
                        <div
                            className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3"
                        >
                            <a className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl" href="#"  >
                                Store
                            </a>

                            <div className="flex items-center" id="store-nav-content">
                                <a className="pl-3 inline-block no-underline hover:text-black" href="#">
                                    <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                                    </svg>
                                </a>

                                <div classNameName="flex-wrap">
                                    {!display && <a className="pl-3 inline-block no-underline hover:text-black" href="#" onClick={e => {
                                        e.preventDefault();
                                        setDisplay(!display)
                                        console.log("Display : ", display)
                                    }} >
                                        <svg className="fill-current hover:text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                            <path
                                                d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z"
                                            />
                                        </svg>
                                    </a>}

                                    {display && <div className=" bg-gray-200 transition">
                                        <div className="container  flex justify-center items-center px-4 py-1 sm:px-8 lg:px-8 searchBarPadding rounded">

                                            <div className="relative">
                                                <div className="absolute top-4 -left-6" onClick={e => setDisplay(!disPlay)}> <i className="fa fa-times-circle text-gray-400 z-20 hover:text-gray-500 text-xl" aria-hidden="true"></i> </div>
                                                <form onSubmit={submitHandler}>
                                                    <div>
                                                        <input
                                                            type="text"
                                                            className="h-14  pr-8 pl-5  rounded z-0 focus:shadow focus:outline-none" placeholder="Search anything..."
                                                            value={searchProduct}
                                                            name='searchproduct'
                                                            required
                                                            onChange={e => { setSearchProduct(e.target.value) }}
                                                        />
                                                        <div className="absolute top-4 right-3">
                                                            <button type="submit">
                                                                <i className="fa fa-search text-gray-400 z-20 hover:text-gray-500"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </nav>

                </div>


            </div>


        </>

    )
}

export default SearchProduct
