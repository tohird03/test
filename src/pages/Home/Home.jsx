import { useState, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { Header } from '../../components/Header'
import { Card } from '../../components/Card'
import { instance } from "../../api";
import './home.scss'
import { CategoryCard } from "../../components/CategoryCard/CategoryCard";
import CardModal from "../../components/Card/CardModal/CardModal";
import { homeDictionary } from "./dictionary";

export const Home = () => {
  const state = useSelector(state => state)
  const [products, setProducts] = useState([])
  const [category, setCategory] = useState([])
  const [loading, setLoading] = useState(false);
  console.log(state);
  useEffect(() => {
    setLoading(true)
    instance.get('/products')
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => alert(err.message))
      .finally(() => {
        setLoading(false)
      })

    instance.get('/categories')
      .then(res => {
        setCategory(res.data);
      })
      .catch(error => alert(error.message))
  }, [])

  return (
    <>
      <div className="container">

        <div className="products">
          {
            category?.map(item => <CategoryCard data={item} />)
          }
        </div>

        <div className="products">
          {loading
            ? <h2>{homeDictionary.loding}</h2>
            : products.length > 0
              ? products?.map(item => {
                return <Card key={item?.id} item={item} />
              })
              : <h2>{homeDictionary.emptyProduct}</h2>
          }
        </div>

        {state.isModalOpen && <CardModal />}
      </div>
    </>
  )
}
