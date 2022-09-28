import React from 'react'

const Detail = ({title, price, image, id, alcohol}) => {
    return (
      <div>
          <h4>ID del producto:{id}</h4>
          <h2>{title}</h2>
          <img src={image} alt={title}/>
          <p>tiene alcohol?{alcohol}</p>
          <h3>{price}</h3>
      </div>
    )
}

export default Detail