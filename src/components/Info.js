import React from 'react';
import '../styles/Info.css';

const Info = () => {
  const reviewsData = [
    { platform: 'FACEBOOK', reviews: 125, replied: 120, pending: 5, bgColor: '#FDDAC1', textColor: '#F98F45', className: 'orange' },
    { platform: 'TRIPADVISOR', reviews: 97, replied: 86, pending: 11, bgColor: '#B0DAD9', textColor: '#0F7876', className: 'green' },
    { platform: 'BOOKING', reviews: 'N/A', replied: 'N/A', pending: 'N/A', bgColor: '#FDDAC1', textColor: '#0F7876', className: 'orange' },
    { platform: 'GOOGLE MY BUSINESS', reviews: 'N/A', replied: 'N/A', pending: 'N/A', bgColor: '#B0DAD9', textColor: '#0F7876', className: 'green' },
    { platform: 'EXPEDIA', reviews: 'N/A', replied: 'N/A', pending: 'N/A', bgColor: '#FDDAC1', textColor: '#0F7876', className: 'orange' },
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
          <p className={review.className}><span className={review.className}>Reviews - </span> {review.reviews}</p>
          <p className={review.className}><span className={review.className}>Replied - </span> {review.replied}</p>
          <p className={review.className}><span className={review.className}>Pending - </span> {review.pending}</p>
        </div>
      ))}
      {/* </div> */}
    </>
  );
};

export default Info;
