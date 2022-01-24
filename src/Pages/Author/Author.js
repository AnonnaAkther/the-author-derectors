import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Author.css';

const Author = (props) => {
    const {Name, Age, Salary, Country, img} =props.author;
    const element = <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
    return (
    <>
    <div className="card-group">
  <div className="card">
    <img src={img} className="card-img-top" alt="..."/>
    <div className="card-body text-primary">
      <h5 className="card-title">Name :{Name}</h5>
      <h5 className="card-text">Age :{Age}</h5>
      <h4 className="card-text">Salary :{Salary}</h4>
      <h4 className="card-text">Country :{Country}</h4>
      <button
      onClick={()=>props.handleAddToCart(props.author)} 
      className="btn btn-primary text-white">
         {element} Add To Cart
          </button>
    </div>
  </div>
</div>
    </>
    );
};

export default Author;