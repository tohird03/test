import React from 'react'
import {Link} from 'react-router-dom'
import './category-card.scss';

export const CategoryCard = ({data}) => {
  return (
    <div className='category-card'>
      <Link to={`/single-category/${data?.id}`} className='category-card__link'>
        <img className='category-card__img' src={data?.image} alt="Category img" />
        <span className='category-card__title'>
          {data?.name}
        </span>
      </Link>
    </div>
  )
}
