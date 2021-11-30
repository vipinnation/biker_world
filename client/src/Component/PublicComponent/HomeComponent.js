import React from 'react'
import Crousal from '../Utility/Crousal'
import SearchProduct from '../Utility/SearchProduct'
import '../../CSS/index.css'
import ProductSlider from './ProductSlider'
import { Helmet } from 'react-helmet'
import CategoryCircleSwiper from '../SwiperComponent/CategoryCircleSwiper'


const HomeComponent = () => {


    return (
        <div className="font-mono">
            <Helmet>
                <title>Kustom Parts - Biker Bred , Bike Baked</title>
            </Helmet>
            <CategoryCircleSwiper />
            <Crousal />


            <ProductSlider name='leather bags' titleName={'Leather Bags'} className='leatherBagsSlider' />
            <ProductSlider name='motul engine oil' titleName={'Motul Engine Oil'} className='motulEngineOilSlider' />
            <ProductSlider name='castrol engine oil' titleName={'Castrol Engine Oil'} className='castrolEngineOilSlider' />
            <ProductSlider name='helmet' titleName={'Helmet'} className='helmetSlider' />
            <ProductSlider name='chain lube' titleName={'Chain Lube'} className='chainLubeSLider' />
            <ProductSlider name='horn' titleName={'Horns'} className='hornSlider' />
            <ProductSlider name='chain clean' titleName={'Chain Clean'} className='chainCleanSLider' />
        </div>
    )
}

export default HomeComponent
