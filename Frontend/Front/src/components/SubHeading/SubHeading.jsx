import React from 'react';

import images from '../../assets/G.png';

const SubHeading = ({ title }) => (
  <div style={{ marginBottom: '1rem' }}>
    <p className="p__cormorant">{title}</p>
    <img src={images} alt="spoon_image" className="spoon__img" />
  </div>
);

export default SubHeading;
