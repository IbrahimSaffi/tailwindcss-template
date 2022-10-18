import React from 'react'
import Header from '../components/Header'
import FeatureSection from '../sections/FeatureSection'
import Introduction from '../sections/Introduction'
import PricingSection from '../sections/PricingSection'
import TestimonialSection from '../sections/TestimonialSection'

export default function HomePage() {
  return (
    <div>
        <Header/>
         <Introduction/>
         <FeatureSection/>
         <PricingSection/>
         <TestimonialSection/>
         
    </div>
  )
}
