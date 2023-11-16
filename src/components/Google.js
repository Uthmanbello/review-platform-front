import React from 'react';
import GoogleIcon from '../images/google.png';

const Google = () => {
  // REVIEWS
  // GET
  // https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews

  // REPLY REVIEWS
  // PUT
  // https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews/{reviewId}/reply

{
  comment: "Thank you for visiting our business!"
}

  return (
    <>
      <h2 className='page-heading'><img src={GoogleIcon} alt='google icon' className='heading-icon' />&nbsp;GOOGLE MY BUSINESS</h2>
      <p className='coming-soon'>COMING SOON . . .</p>
    </>
  );
};

export default Google;
