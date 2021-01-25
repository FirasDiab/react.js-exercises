import React, { Component } from 'react';
import './Card.css';

export default class Card extends Component {
    render() {
        return (
            
                <div className="col">
    <div className="card h-100">
      <img src="./images/p1.jfif" className="card-img-top parent" alt="..." />
      <div className="card-body">
          <img src={this.props.image} alt="Avatar" id="avatar"/>
        <h5 className="card-title">{this.props.name}</h5>
        <p>{this.props.address}</p>
      <h5><a href="www.facebook.com"><i class="fab fa-facebook"></i></a> <a href="www.twitter.com"><i class="fab fa-twitter"></i></a> <a href="www.github.com"><i class="fab fa-github"></i></a></h5>
      </div>
    </div>
  </div>
           
        )
    }
}


