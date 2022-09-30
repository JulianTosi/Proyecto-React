import React from 'react'

const Detail = ({title, price, image, categoryId, description}) => {
    return (
      <div>
          <h2>{title}</h2>
          <h3>{description}</h3>
          <img src={image} alt={title}/>
          <p>Tipo: {categoryId}</p>
          <h3>{price}</h3>
      </div>
    )
}

export default Detail