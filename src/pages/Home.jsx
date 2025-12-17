
import React from 'react'
import Hero from '../components/Hero'
import SearchBar from '../components/SearchBar'
import ServicesAccordion from '../components/ServicesAccordion'
import CountriesGrid from '../components/CountriesGrid'
import Stats from '../components/Stats'
import WhyChoose from '../components/WhyChoose'
import VisaSteps from '../components/VisaSteps'
import ContactBtns from '../components/ContactBtns'

export default function Home(){
  return (
    <main>
      <Hero />
      <SearchBar />
      <WhyChoose/>
      <CountriesGrid />
      <ServicesAccordion />
      <Stats />
      <VisaSteps/>
      <ContactBtns/>
    </main>
  )
}