import React from 'react'
// import "./booking.css"
const Booking = () => {
    
  return (
    <div className='booking-main-container'>
        <div className='booking-card'>
            <p className='booking-title'>Booking</p>
            <form className='booking-form'>
                <label className='booking-form-label' htmlFor='name'>Name:-</label>
                <input className='booking-form-input' type='text' id='name' placeholder='Enter Your Name'  />
                <br/>
                <label className='booking-form-label' htmlFor='email'>Email:-</label>
                <input className='booking-form-input' type='email' id='email' placeholder='Enter Your Email'  />
                <br/>
                <label className='booking-form-label' htmlFor='to'>To:-</label>
                <input className='booking-form-input' type='date' id='to' placeholder='To'  />
                <br/>
                <label className='booking-form-label' htmlFor='from'>From:-</label>
                <input className='booking-form-input' type='date' id='from' placeholder='From'  />
                <br/>
                <label className='booking-form-label' htmlFor='departure'>Departure:-</label>
                <input className='booking-form-input' id='departure' placeholder='Departure'  />
                <br/>
                <label className='booking-form-label' htmlFor='arrival'>Arrival:-</label>
                <input className='booking-form-input' id='arrival' placeholder='Arrival' />
                <br/>
                <button className='booking-form-submit'>Book Now</button>
            </form>
        </div>
    </div>
  )
}

export default Booking