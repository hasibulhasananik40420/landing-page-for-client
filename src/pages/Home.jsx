import React from 'react'
import ChoiseUs from './ChoiseUs'
import Header from './Header'
import Updated from './Updated'
import Wallet from './wallet'

const Home = () => {
  return (
    <div>
      <Header/>
      <ChoiseUs/>
       <Wallet/>
      <Updated/>
    </div>
  )
}

export default Home