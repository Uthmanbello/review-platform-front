import React from 'react';
import '../styles/Info.css'

const Info = () => {

  return (
    <>
      <h2 className='page-heading'>INFO</h2>
      {/* <div className='column'> */}
        <div className='reviews' style={{ backgroundColor: '#FDDAC1', color: '#F98F45' }}>
          <h4 className='review-heading orange'>FACEBOOK</h4>
          <p className='orange'><span className='orange'>Reviews - </span> 125</p>
          <p className='orange'><span className='orange'>Replied - </span> 120</p>
          <p className='orange'><span className='orange'>Pending - </span> 5</p>
        </div>

        <div className='reviews' style={{ backgroundColor: '#B0DAD9', color: '#0F7876' }} >
          <h4 className='review-heading green'>TRIPADVISOR</h4>
          <p className='green'><span className='green'>Reviews - </span> 125</p>
          <p className='green'><span className='green'>Replied - </span> 120</p>
          <p className='green'><span className='green'>Pending - </span> 5</p>
        </div>
      {/* </div> */}
    </>
  );
};

export default Info;
