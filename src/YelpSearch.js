import React from 'react';
import { useState, useEffect } from 'react';
import BusinessesList from './BusinessesList';
import { getYelp } from './services/fetch-utils';

export default function YelpSearch() {


  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState('Austin');

  useEffect(() => {
    fetchAndStoreYelp();
  }, []);

  async function fetchAndStoreYelp() {
    const data = await getYelp(yelpQuery);
    console.log(data);
    setBusinesses(data.businesses);
  }

  async function handleYelpSubmit(e) {
    e.preventDefault();
    await fetchAndStoreYelp();
    setYelpQuery('');
  }


  return (
    <div className='yelp-search'>
      <form onSubmit={handleYelpSubmit}>
        <input value={yelpQuery} onChange={e => setYelpQuery(e.target.value)}/>
        <button>Search</button>
      </form>
      <BusinessesList businesses={businesses}/>
    </div>
  );
}
