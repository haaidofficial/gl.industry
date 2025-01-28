import React, { useEffect } from 'react'
import CustomerAutoSlider from '../component/customers/CustomerAutoSlider'
import CustomerAutoSlider2 from '../component/customers/CustomerAutoSlider2'
import Products from '../component/products/Products'
import Slider from '../component/hero/Slider'

const Home = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <div className='relative top-[-65x]'>
                <Slider />
                <Products />
                <CustomerAutoSlider />
                <CustomerAutoSlider2 />
            </div>
        </>
    )
}

export default Home
