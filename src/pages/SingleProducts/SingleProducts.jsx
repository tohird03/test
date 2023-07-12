import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { instance } from '../../api'
import { Header } from '../../components/Header'
import './single-product.scss'

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { getDayClass } from '../../utils/daysjs'

const SingleProducts = () => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    setLoading(true)
    instance.get(`/products/${productId}`)
      .then(res => {
        setData(res.data);
      })
      .catch(error => {
        alert(error)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [productId])

  return (
    <div>
      <div className='container'>
        <div className='single-product'>
          {loading
            ? <Skeleton className='single-product__skeleton-wrapper' containerClassName='single-product__skeleton' />
            : <Carousel
            autoPlay
            infiniteLoop
            stopOnHover
            width={400}
          >
            {data?.images?.map((item) => {
              return <div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb5YhZCodtX2AEiyoMfFxiHw5zO8JNfM_Edg&usqp=CAU'} alt="" />
              </div>
            })}
          </Carousel>
          }

          <div>
            <h3>
              {data?.title}
            </h3>
            <p>
              {
                data?.description
              }
            </p>
            <h2>{data?.price}</h2>
            <p>{getDayClass(data?.creationAt)}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProducts
