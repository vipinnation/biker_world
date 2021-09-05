import React from 'react'
import Crousal from '../Utility/Crousal'
import SearchProduct from '../Utility/SearchProduct'
import '../../CSS/index.css'
import ProductSlider from './ProductSlider'
import LinkButton from '../Utility/LinkButton'
import { Helmet } from 'react-helmet'


const HomeComponent = () => {


    return (
        <div className="font-mono">
            <Helmet>
                <title>Kustom Parts - Biker Bred , Bike Baked</title>
            </Helmet>
            <Crousal />
            <SearchProduct />

            <div >
                <div className="w-3/5 mx-auto mobileCategory">
                    <span className="text-base font-normal bold antialiased">Shop By Category</span>
                </div>
                <LinkButton />
            </div>
            <ProductSlider name='motul engine oil' titleName={'Motul Engine Oil'} className='motulEngineOilSlider' />
            <ProductSlider name='castrol engine oil' titleName={'Castrol Engine Oil'} className='castrolEngineOilSlider' />
            <ProductSlider name='helmet' titleName={'Helmet'} className='helmetSlider' />
            <ProductSlider name='chain clean' titleName={'Chain Clean'} className='chainCleanSLider' />
            <ProductSlider name='chain lube' titleName={'Chain Lube'} className='chainLubeSLider' />

        </div>
    )
}

export default HomeComponent
