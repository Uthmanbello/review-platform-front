import React, {useState, useEffect} from 'react';
import Chatgpt from './Chatgpt';
import FacebookIcon from '../images/facebook.png';

const Facebook = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://facebook-reviews-api.onrender.com/api/v1/facebook_reviews');
        const data = await response.json();
        console.log(data)
        setReviews(data);
      } catch (error) {
        console.error('Error fetching Facebook reviews:', error);
      }
    };
    fetchData();
  }, []);

  const getMessageData = (review) => {
    const reviewText = review.review_text;
    const username = review.username;
    const fullName = review.full_name;
    const updatedAtString = review.updated_at;
    const updatedAt = new Date(updatedAtString);
    const formattedDate = updatedAt.toLocaleDateString();
    const formattedTime = updatedAt.toLocaleTimeString();

    return {
      review: reviewText,
      username: username,
      fullname: fullName,
      time: formattedTime,
      date: formattedDate,
      sender: 'user',
    };
  };


  return (
    <>
      <h2 className='page-heading'><img src={FacebookIcon} alt='facebook icon' className='heading-icon' />&nbsp;FACEBOOK</h2>
      <Chatgpt reviews={reviews} icon={FacebookIcon} getMessageData={getMessageData} />
    </>
  )}

export default Facebook;
