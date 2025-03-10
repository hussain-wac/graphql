import React from 'react'
import TitleContent from './ContactusComponents/TitleContent'
import AddressContent from './ContactusComponents/AddressContent'
import FormContact from './ContactusComponents/FormContact'
function ContactUs() {


  return (
    <div>
      <TitleContent/>
      <div className=' flex mt-4'>
      <FormContact/>
      <div className=' p-4 float-end'>
      <AddressContent/>
      </div>
      </div>
    </div>
  )
}

export default ContactUs