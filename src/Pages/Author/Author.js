import React from 'react';
import './Author.css';

const Author = ({author}) => {
    const {Name, Age, Salary, Country, img} =author
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
      <button className="btn btn-primary text-white">Add To Cart</button>
    </div>
  </div>
</div>
    </>
    );
};

export default Author;