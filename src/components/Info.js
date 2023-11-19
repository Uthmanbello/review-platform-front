import React, { useState, useEffect } from 'react';
import InfoIcon from '../images/info.png';
import data from '../json/tripAdvisorReviewsData.json';
import '../styles/Info.css';

const Info = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://facebook-reviews-api.onrender.com/api/v1/facebook_reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error('Error fetching Facebook reviews:', error);
      }
    };

    fetchData();
  }, []);

  const reviewsData = [
    { platform: 'FACEBOOK', reviews: `${reviews.length}`, replied: 0, pending: `${reviews.length}`, bgColor: '#FDDAC1', textColor: '#F98F45', className: 'orange' },
    { platform: 'TRIPADVISOR', reviews: `${data.length}`, replied: 0, pending: `${data.length}`, bgColor: '#B0DAD9', textColor: '#0F7876', className: 'green' },
    { platform: 'BOOKING', reviews: 'N/A', replied: 'N/A', pending: 'N/A', bgColor: '#FDDAC1', textColor: '#0F7876', className: 'orange' },
    { platform: 'GOOGLE MY BUSINESS', reviews: 'N/A', replied: 'N/A', pending: 'N/A', bgColor: '#B0DAD9', textColor: '#0F7876', className: 'green' },
    { platform: 'EXPEDIA', reviews: 'N/A', replied: 'N/A', pending: 'N/A', bgColor: '#FDDAC1', textColor: '#0F7876', className: 'orange' },
  ];

  return (
    <>
      <h2 className='page-heading'><img src={InfoIcon} alt='info icon' className='heading-icon' />&nbsp;INFO</h2>

      <div className='reviews-container'>
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
      </div>
    </>
  );
};

export default Info;
