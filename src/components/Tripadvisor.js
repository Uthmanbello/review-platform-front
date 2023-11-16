import React, {useState, useEffect} from 'react';
import Chatgpt from './Chatgpt';

const Tripadvisor = () => {

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:3000/api/v1/facebook_reviews');
        const data = await response.json();
        console.log(data)
        setReviews(data);
      } catch (error) {
        console.error('Error fetching Tripadvisor reviews:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className='page-heading'>TRIPADVISOR</h2>
      <Chatgpt reviews={reviews} />
    </>
  );
};

export default Tripadvisor;
