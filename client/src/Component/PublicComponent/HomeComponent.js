import React from 'react'
import Crousal from '../Utility/Crousal'
import SearchProduct from '../Utility/SearchProduct'
import '../../CSS/index.css'
import ProductSlider from './ProductSlider'
import LinkButton from '../Utility/LinkButton'
import { Helmet } from 'react-helmet'
import CategorySwiper from '../Utility/CategorySwiper'
import CategoryCircleSwiper from '../SwiperComponent/CategoryCircleSwiper'


const HomeComponent = () => {


    return (
        <div className="font-mono">
            <Helmet>
                <title>Kustom Parts - Biker Bred , Bike Baked</title>
            </Helmet>
            <CategoryCircleSwiper />
            <Crousal />
            {/* <div className='mt-4'>
                <CategorySwiper />
            </div> */}

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
            {/* <ProductSlider name='passion pro' titleName={'Hero Passion Pro'} className='passionProSLider' />
            <ProductSlider name='mastero edge' titleName={'Hero Maestro Edge-125'} className='maestroEdge-125SLider' /> */}

        </div>
    )
}

export default HomeComponent
