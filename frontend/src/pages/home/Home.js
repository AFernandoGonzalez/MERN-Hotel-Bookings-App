import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Header from '../../components/header/Header'
import Featured from '../../components/featured/Featured'
import PropertyList from '../../components/propertyList/PropertyList'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperty'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <div>
        <Featured />
        <h1>Browser by property type</h1>
        <PropertyList />
        <h2>Homes guess love</h2>
        <FeaturedProperties />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home