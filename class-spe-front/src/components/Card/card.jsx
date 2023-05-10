/* eslint-disable react/prop-types */
import './style.sass';

export function Card(props) {
  return (
    <div className="container-card">
      <img src={props.data.images[0]} alt="" />
      <div className="info-product">
        <p className='description-product'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, doloribus!</p>
        <span className='category-product'>Loremipsum</span>
        <span className='price-product'>R$ 3000</span>
      </div>
    </div>
  )
}