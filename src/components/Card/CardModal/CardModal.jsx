import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux/es/exports'
import { instance } from '../../../api'
import './card-modal.scss'

const CardModal = () => {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  const handleCloseModal = () => {
    dispatch({type: 'CLOSE'})
  }

  useEffect(() => {
    instance.get(`/products/${state.singleProductId}`)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      })
  }, [state.singleProductId])


  return (<>
    <div onClick={handleCloseModal} className='card-modal__shadow'></div>
    <div className='card-modal__body'>
      Salom
    </div>
  </>
  )
}

export default CardModal
