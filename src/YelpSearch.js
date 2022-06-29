import React from 'react';
import { useState, useEffect } from 'react';
import BusinessesList from './BusinessesList';
import { getYelp } from './services/fetch-utils';

export default function YelpSearch() {


  const [businesses, setBusinesses] = useState([]);
  const [yelpQuery, setYelpQuery] = useState([]);

  useEffect(() => {
    fetchAndStoreYelp();
  }, []);

  async function fetchAndStoreYelp() {
    const data = await getYelp(yelpQuery);
    setBusinesses(data.results);
  }

  async function handleYelpSubmit(e) {
    e.preventDefault();
    await fetchAndStoreYelp();
    setYelpQuery('');
  }

  console.log(yelpQuery);

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
