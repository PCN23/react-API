import React from 'react';

export default function BusinessesList({ businesses }) {
  return (
    <div>
      {
        businesses.map((business, i) => <div key={business.name + i} 
          className="business">
          <p>{business.name}</p>

        </div>)
      }
    </div>
  );
}
