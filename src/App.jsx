import React from 'react'
import Navbar from './components/Navbar'
import Paragraph from './components/Paragraph'
import YellowSection from './components/YellowSection'
import Brands from './components/Brands'
import ZohoEnterprise from './components/ZohoEnterprise'
import Charts from './components/Charts'
import PrivacyPara from './components/privacyPara'
const App = () => {
  return (
    

    <div>
       <div className='h-0'> 
        < Navbar/>
       </div>
        <Paragraph/>
        <YellowSection/>
        <Brands/>
      <div className='bg-white '> <ZohoEnterprise/></div>
      <Charts/>
      <PrivacyPara/>
       
    </div>
  )
}

export default App