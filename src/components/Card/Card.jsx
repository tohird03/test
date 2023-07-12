import React, { useEffect } from 'react'
import './card.scss'
import { FiHeart } from 'react-icons/fi'
import { getDayClass } from '../../utils/daysjs'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Favorite, FavoriteBorder } from '@mui/icons-material'
import Checkbox from '@mui/material/Checkbox'
import { likeButtonStyles } from './styles'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

export const Card = ({ item }) => {
  const dispatch = useDispatch()
  const handleOpenModal = (id) => {
    dispatch({type: 'OPEN'})
    dispatch({type: 'ID', singleProductId: id})
  }

  return (
    <div className='card'>
      <img className='card__img' src={item?.images[0]} alt="Card img" />

      <Link to={`/single-products/${item?.id}`} className='card__title-link'>
        <strong className='card__title'>
          {item?.title}
        </strong>
      </Link>

      <p className='card__location'>
        Qo'shilgan sana: {
          getDayClass(item?.creationAt)
        }
      </p>
      <div className='card__footer'>
        <p>
          {item?.price}$
        </p>
        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite sx={likeButtonStyles} />} />
      </div>
      <button onClick={() => handleOpenModal(item?.id)}>More</button>
    </div>
  )
}
