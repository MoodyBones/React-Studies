import React from 'react'
import ContactCard from './ContactCard'

function ContactCardMain() {
  return (
    <div className='contact-card-wrapper bg-white temp-pad'>
      <ContactCard
        contact={{name: "Mr. Whiskerson", 
        imgUrl: `https://robohash.org/1?size=200x200`, 
        phone: "(212) 555-1234", 
        email: "mr.whiskaz@catnap.meow"}}
      />
      <ContactCard 
        contact={{name: "Fluffykins", imgUrl: `https://robohash.org/2?size=200x200`, phone: "(212) 555-2345", email: "fluff@me.com"}}
      />
      
      <ContactCard
        contact={{name: "Destroyer", imgUrl: `https://robohash.org/3?size=200x200`, phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
      />
      
      <ContactCard 
        contact={{name: "Felix", imgUrl: `https://robohash.org/4?size=200x200`, phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
      />
    </div>
  )
}

export default ContactCardMain