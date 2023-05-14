/* eslint-disable react/prop-types */
import './style.sass';

export const MainProduct = (props) => {
  return (

    <div className='container-detail'>

      <img src={props.data.thumbnail} alt="" />

      <div className="info-productinfo">

        <div className="content">

          <h2 className='title-product'>{props.data.title}</h2>

          <span className='category-product'>{props.data.category}</span>

          <span className='price-product'>{`R$ ${props.data.price}`}</span>

          <div className="content-description">
            <p className='description-product'>{props.data.description}</p>
          </div>

        </div>

      </div>

    </div>
  )
}
