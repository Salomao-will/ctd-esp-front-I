import { useEffect, useState } from 'react'
import './style.sass'
import { useParams } from 'react-router-dom'
import { MainProduct } from '../../components/MainProduct'
import { Card } from '../../components/Card/card'

export const Product = () => {

  const [product, setProduct] = useState({})
  const [productsCard, setProductsCard] = useState([])
  const [listCard, setListCard] = useState([])
  const { id } = useParams()

  const apiProducts = "https://dummyjson.com/products"
  const apiProductsId = `https://dummyjson.com/products/${id}`

  useEffect(() => {
    getAllProducts()
    getProductById()
  }, [id])

  //Utilizado esse useEffect para pegar os produtos que foram salvos na função getAllProducts
  //Atualiza quando os state do productsCards e atualizado.
  useEffect(() => {
    const filteredProducts = productsCard.filter((productCard) => productCard.id !== product.id)
    setListCard(filteredProducts)
  }, [productsCard])

  //fazendo requisição para pegar todos os produtos da api
  const getAllProducts = () => {
    fetch(apiProducts)
      .then(
        res => {
          res.json()
            .then(
              data => {
                setProductsCard(data.products)
              }
            )
        }
      )
  }

  //fazendo requisição para capturar os ids
  const getProductById = () => {
    fetch(apiProductsId)
      .then(
        res => {
          res.json()
            .then(
              data => {
                setProduct(data)
              }
            )
        }
      )
  }

  return (
    <div className="container-detail">

      <section className='section-main-product'>
        <MainProduct
          data={product}
        />
      </section>
      <section className='section-other-products'>
        <h2>Veja outros produtos</h2>
        <div className="container-section-cards">
          {
            listCard.slice(0, 4).map((productCard) => (
              <Card
                key={productCard.id}
                data={productCard}
              />
            ))
          }
        </div>
      </section>
    </div>
  )
}
