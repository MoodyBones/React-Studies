import React from 'react'

function ContactCard(props) {
  return (
    <div className='contact-card'>
      <img alt='Robot' src={props.contact.imgUrl}/>
        <h4>{props.contact.name}</h4>
        <p>Phone: {props.contact.phone}</p>
        <p>Email: {props.contact.email}</p>
    </div>
  )
}

export default ContactCard