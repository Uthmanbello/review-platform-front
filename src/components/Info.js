import React from 'react';
import '../styles/Info.css';

const Info = () => {
  const reviewsData = [
    { platform: 'FACEBOOK', bgColor: '#FDDAC1', textColor: '#F98F45', className: 'orange' },
    { platform: 'TRIPADVISOR', bgColor: '#B0DAD9', textColor: '#0F7876', className: 'green' },
    { platform: 'BOOKING', bgColor: '#FDDAC1', textColor: '#0F7876', className: 'orange' },
    { platform: 'GOOGLE MY BUSINESS', bgColor: '#B0DAD9', textColor: '#0F7876', className: 'green' },
    { platform: 'EXPEDIA', bgColor: '#FDDAC1', textColor: '#0F7876', className: 'orange' },
  ];

  return (
    <>
      <h2 className='page-heading'>INFO</h2>

      {/* <div className=''> */}
      {reviewsData.map((review, index) => (
        <div
          key={index}
          className='reviews'
          style={{ backgroundColor: review.bgColor, color: review.textColor }}
        >
          <h4 className={`review-heading ${review.className}`}>{review.platform}</h4>
          <p className={review.className}><span className={review.className}>Reviews - </span> 125</p>
          <p className={review.className}><span className={review.className}>Replied - </span> 120</p>
          <p className={review.className}><span className={review.className}>Pending - </span> 5</p>
        </div>
      ))}
      {/* </div> */}
    </>
  );
};

export default Info;
