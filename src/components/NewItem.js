import React, { Component } from 'react';

class NewItem extends Component {
    render() {
        return (
            
                 <div className="col-4">
              <div className="card-deck">
                <div className="card">
                  <a href="/tin-chi-tiet ">  <img src={this.props.anh} alt="" className="img-fluid" /></a>
                  <div className="card-body">
        <h5 className="card-title">{this.props.tieude }</h5>
        <p className="card-text">{this.props.trichdan}</p>
                  </div>
                </div>
              </div>
              <hr />
            </div>
            
        );
    }
}

export default NewItem;