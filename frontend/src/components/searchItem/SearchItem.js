import './searchItem.css'
import React from 'react'

const SearchItem = ({ item }) => {
  return (
    <div>
      <img 
        src={item.photos[0]}
        alt=''
      />
      <h1>{item.name}</h1>
      <span>{item.distance}</span>
      
      {item.rating && <div>
        <span>Exellect</span>
        <button>{item.rating}</button>
      </div>}

      <div>
        <span>{item.cheapestPrice}</span>
      </div>
    </div>
  )
}

export default SearchItem