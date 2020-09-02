import react from 'react';
import React, { useState } from 'react';
import casting from '../../assets/images/casting.jpg';


const main = {
  backgroundImage:`url(${casting})`,
  display: 'grid',
  height: '25em',
  backgroundSize: 'cover',
  backgroundColor: '#0000008f',
  backgroundBlendMode: 'color',
  color: 'white',
  marginTop:'8%'
}


function Home() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <div style={main}>
        <div id='intro'>
          <h3>
              Welcome to our casting agecy. Where legends are made. Where dreams come true. Our agency provides opportunites for those who got what it takes tobe in the movie business.
            </h3>
        </div>
      </div>
      <section>

      </section>
    </div>
  );
}

export default Home;