import React from 'react'
import AvailableAnytime from './AvailableAnytime'
import ChoiseUs from './ChoiseUs'
import CreateWallet from './CreateWallet'
import Header from './Header'
import RecommendedBy from './RecommendedBy'
import Updated from './Updated'

const Home = () => {
  return (
    <div>
      <Header/>
      <RecommendedBy/>
      <ChoiseUs/>
      <CreateWallet/>
      <AvailableAnytime/>
      <Updated/>
    </div>
  )
}

export default Home