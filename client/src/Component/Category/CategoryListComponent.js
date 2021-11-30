import React from 'react'
import { NavLink } from 'react-router-dom'

const CategoryListComponent = () => {
    return (
        <div className='my-2  '>
            <h1 className='text-2xl font-bold text-center'> Category List</h1>

            <div className='grid grid-cols-2 m-grid-cols-1 py-4'>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/leather bags'> <h2 className='text-xl font-bold '>Leather Bags</h2></NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/engine oil'> <h2 className='text-xl font-bold '>Engine Oil</h2></NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/chain lube'>
                        <h2 className='text-xl font-bold '>Chain Lube</h2>
                    </NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/chain clean'>
                        <h2 className='text-xl font-bold '>Chan Cleaner</h2>
                    </NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/helmet'>
                        <h2 className='text-xl font-bold '>Helmet</h2>
                    </NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/horn'>
                        <h2 className='text-xl font-bold '>Horn</h2>
                    </NavLink>
                </div>
                <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                    <NavLink exact to='/category/battery'>
                        <h2 className='text-xl font-bold '>Battery</h2>
                    </NavLink>
                </div>

            </div>

            <div>
                <h2 className='text-2xl font-bold text-center'>Product for Your Bike</h2>

                <div className='grid grid-cols-2 m-grid-cols-1 py-4'>
                    <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                        <NavLink exact to='/search/hero'> <h2 className='text-xl font-bold '>Hero</h2></NavLink>
                    </div>
                    <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                        <NavLink exact to='/search/honda'> <h2 className='text-xl font-bold '>Honda</h2></NavLink>
                    </div>
                    <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                        <NavLink exact to='/search/tvs'>
                            <h2 className='text-xl font-bold '>TVS</h2>
                        </NavLink>
                    </div>
                    <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                        <NavLink exact to='/search/royal enfield'>
                            <h2 className='text-xl font-bold '>Royal Enfield</h2>
                        </NavLink>
                    </div>
                    <div className='shadow-inner w-1/2 mx-auto py-2 px-4 my-2 hover:bg-red-400 rounded hover:text-white'>
                        <NavLink exact to='/search/bajaj'>
                            <h2 className='text-xl font-bold '>Bajaj</h2>
                        </NavLink>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default CategoryListComponent
