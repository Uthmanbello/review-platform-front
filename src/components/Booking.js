import React from 'react';
import BookingIcon from '../images/booking.png';

const Booking = () => {

  return (
    <>
      <h2 className='page-heading'><img src={BookingIcon} alt='booking icon' className='booking-icon'/>BOOKING</h2>
      <p className='coming-soon'>COMING SOON . . .</p>
    </>
  );
};

export default Booking;
