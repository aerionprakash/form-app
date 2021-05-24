import React from 'react';
import { useState } from 'react';


export const Rating = ({ id, value, updateValue }) => {
  const [hoverAt, setHoverAt] = useState(null);

  return (
    <div id='#/properties/rating' className='rating'>
      <p>Rating:</p>
      <span style={{ cursor: 'pointer' }}>
        {[0, 1, 2, 3, 4].map((i) => {
          const fullStars = hoverAt ?? value;

          return (
            <span
              onMouseOver={() => setHoverAt(i + 1)}
              onMouseOut={() => setHoverAt(null)}
              onClick={() => updateValue(i + 1)}
              key={`${id}_${i}`}
            >
              {i < fullStars ? '\u2605' : '\u2606'}
            </span>
          );
        })}
      </span>
    </div>
  );
};