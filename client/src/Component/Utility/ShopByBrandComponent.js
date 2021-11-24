import React from 'react'
import { NavLink } from 'react-router-dom'

const ShopByBrandComponent = () => {
    return (
        <div className='my-2'>
            <h1 className='text-2xl font-bold text-center'>Shop By Brands</h1>

            <div className='grid grid-cols-2 m-grid-cols-1 py-4'>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/ncert'> <h2 className='text-xl font-bold '>Hero</h2></NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/search/engineering'> <h2 className='text-xl font-bold '>Castrol</h2></NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/sanjeev'>
                        <h2 className='text-xl font-bold '>Motul</h2>
                    </NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/novel'>
                        <h2 className='text-xl font-bold '>Vega</h2>
                    </NavLink>
                </div>

            </div>
        </div>
    )
}

export default ShopByBrandComponent
