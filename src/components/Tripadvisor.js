import React, {useState, useEffect} from 'react';
import Chatgpt from './Chatgpt';
import data from '../json/tripAdvisorReviewsData.json';
import TripadvisorIcon from '../images/tripadvisor.png';

const Tripadvisor = () => {

  const [reviews, setReviews] = useState([]);

  const apiKey = process.env.REACT_APP_TRIPADVISOR_API_KEY;

  useEffect(() => {
    console.log(data)
    setReviews(data);
  }, []);

  useEffect(() => {
    const fetchTripAdvisorReviews = async () => {
      const url = `https://api.content.tripadvisor.com/api/v1/location/730099/reviews?key=${apiKey}&language=en`;
      const options = { method: 'GET', headers: { accept: 'application/json' } };

      try {
        const response = await fetch(url, options);
        const json = await response.json();
        // console.log(json);
      } catch (error) {
        console.error('Error fetching TripAdvisor reviews:', error);
      }
    };

    fetchTripAdvisorReviews();
  }, []);

  const getMessageData = (review) => {
    const reviewText = review.text;
    const username = review.user.username;
    const fullName = review.title;
    const updatedAtString = review.published_date;
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
      <h2 className='page-heading'><img src={TripadvisorIcon} alt='tripadvisor icon' className='heading-icon' />&nbsp;TRIPADVISOR</h2>
      <Chatgpt reviews={reviews} icon={TripadvisorIcon} getMessageData={getMessageData} />
    </>
  );
};

export default Tripadvisor;
