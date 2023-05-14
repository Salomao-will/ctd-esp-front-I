/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './style.sass';
import { useState } from 'react';

export function Card(props) {

  const [value, setValue] = useState(null)

  return (

    <>

      <Link to={`/product/${props.data.id}`}>

        <div className="container-card" value={value} onClick={e => setValue(e.target.value)}>

          <img src={props.data.images[0]} alt="" />

          <div className="info-product">

            <p className='description-product'>{props.data.description}</p>

            <span className='category-product'>{props.data.title}</span>

            <span className='price-product'>R$ {props.data.price}</span>

          </div>

        </div>

      </Link>

    </>

  )
}