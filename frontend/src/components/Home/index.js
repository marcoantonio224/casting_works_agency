import react from 'react';
import React, { useState } from 'react';
import casting from '../../assets/images/casting.jpg';

const main = {
  backgroundImage:`url(${casting})`,
  height: '35em',
  backgroundSize: 'cover',
  backgroundColor: '#00000061',
  backgroundBlendMode: 'color',
  color: 'white'
}


function Home() {
  // const [count, setCount] = useState(0);
  return (
    <div>
      <div style={main}>
          <h3>
            Welcome to our casting agecy. Where legends are made. Where dreams come true
          </h3>
      </div>
    </div>
  );
}

export default Home;