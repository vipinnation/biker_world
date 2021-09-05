import React, { useState } from 'react'
import AdminNavbar from './AdminNavbar'
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { Cookies } from 'react-cookie'
const cookie = new Cookies()

const AddProduct = () => {

    const history = useHistory();
    
    const [product, setProduct] = useState({
        productName: '', productPrice: '', productCategory: '', productDescription: '', productEdition: '', productPublisher: '',
        productImage: '', productSecondaryImage: '', productPdf: '', productSearchingTags: '', productLanguage: '', productRegularPrice: '', productSlug: ''
    })


    const [msg, setMsg] = useState('')


    const config = {
        headers: {
            'Content-Type': "application/json",
            "Authorization": `Token ${cookie.get('auth-token')}`
        }
    }
    const submitHandler = e => {
        e.preventDefault();


        axios.post('/api/admin/addproduct', product, config).then(res => {
            history.push('/admin/product')
        }).catch(err => {

            setMsg('Something Went Wrong')

            setTimeout(() => {
                setMsg('')
            }, 8000);
        })
    }

    return (
        <div className="bg-gray-100 py-8">
            <AdminNavbar />
            <div class="bg-white shadow overflow-hidden sm:rounded-lg w-2/5 py-8  h-full mobile-width-auto">
                <div class="px-4 py-5 sm:px-6 border-b flex justify-between">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">
                        Add Product
                    </h3>
                </div>


                <div className="mx-auto px-8 border-b py-5">


                    <form id="form" method='POST' onSubmit={submitHandler} >

                        <div>
                            {msg && <div className="bg-yellow-500 rounded p-2 my-4 flex justify-content text-yellow-900" > <strong className="text-grey-200 mx-2">{msg}</strong></div>}
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productName"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productName}
                                onChange={e => setProduct({ ...product, productName: e.target.value })}
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Name</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productRegularPrice"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productRegularPrice}
                                onChange={e => setProduct({ ...product, productRegularPrice: e.target.value })}
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Regular Price</label>
                        </div>
                        <div className="flex">
                            <div className="relative z-0 w-full mb-5 px-5">
                                <input
                                    type="number"
                                    name="productPrice"
                                    placeholder=" "
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    value={product.productPrice}
                                    onChange={e => setProduct({ ...product, productPrice: e.target.value })}
                                />
                                <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Price</label>
                            </div>
                            <div className="relative z-0 w-full mb-5 px-5">
                                <input
                                    type="text"
                                    name="productCategory"
                                    placeholder=" "
                                    required
                                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                    value={product.productCategory}
                                    onChange={e => setProduct({ ...product, productCategory: e.target.value })}
                                />
                                <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Category</label>
                            </div>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productImage"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productImage}
                                onChange={e => setProduct({ ...product, productImage: e.target.value })}
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Image Link</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productSecondaryImage"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productSecondaryImage}
                                onChange={e => setProduct({ ...product, productSecondaryImage: e.target.value })}
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Secondary Image</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <textarea
                                type="text"
                                name="productDescription"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productDescription}
                                onChange={e => setProduct({ ...product, productDescription: e.target.value })}

                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Description</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productPdf"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productPdf}
                                onChange={e => setProduct({ ...product, productPdf: e.target.value })}

                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product PDF</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productEdition"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productEdition}
                                onChange={e => setProduct({ ...product, productEdition: e.target.value })}

                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Edition</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productPublisher"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productPublisher}
                                onChange={e => setProduct({ ...product, productPublisher: e.target.value })}

                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Publisher</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productLanguage"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productLanguage}
                                onChange={e => setProduct({ ...product, productLanguage: e.target.value })}

                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Language </label>
                        </div>
                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productSearchingTags"
                                placeholder=" "
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productSearchingTags}
                                onChange={e => setProduct({ ...product, productSearchingTags: e.target.value })}

                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Searching Tags</label>
                        </div>

                        <div className="relative z-0 w-full mb-5 px-5">
                            <input
                                type="text"
                                name="productSlug"
                                placeholder=" "
                                required
                                className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                                value={product.productSlug}
                                onChange={e => setProduct({ ...product, productSlug: e.target.value })}
                            />
                            <label for="name" className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500">Product Slug Tag</label>
                        </div>



                        <div className='mx-auto'>
                            <button
                                id="button"
                                type="submit"
                                className="w-50 px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none btn-primary hover:shadow-lg focus:outline-none"
                            >
                                Add Product
                            </button>

                        </div>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default AddProduct
