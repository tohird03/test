import React, { useEffect } from 'react'
import { useState } from 'react'
import {useParams} from 'react-router-dom'
import { instance } from '../../api'
import { Card } from '../../components/Card'

export const SingleCategory = () => {
  const {categoryId} = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    instance.get(`/categories/${categoryId}/products`)
      .then(res => {
        setProducts(res.data);
      })
      .catch(error => alert(error.message))
      .finally(() => {
        setLoading(false)
      })
  }, [categoryId])


  return (
    <div>
      <div className="products">
          {loading
            ? <h2>Loading...</h2>
            : products.length > 0
              ? products?.map(item => {
                return <Card key={item?.id} item={item} />
              })
              : 'Hech qanaqa product topilmadi!'
          }
        </div>
    </div>
  )
}
