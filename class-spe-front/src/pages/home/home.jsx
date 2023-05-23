import { Card } from '../../components/Card/card';
import './style.sass'
import { useEffect, useState } from 'react';

export function Home() {

  const [products, setProducts] = useState([])

  useEffect(() => {

    fetch("https://dummyjson.com/products")
      .then(
        res => {
          res.json()
            .then(data => {
              setProducts(data.products)
            })
        }
      )

  }, [])
  return (
    <>
      <div className="container-home">

        {
          products.map(product => (

            <Card
              key={product.id}
              data={product}
            />

          ))
        }

      </div>
    </>
  );
}