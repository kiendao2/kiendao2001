import React, { Component } from 'react';
import NewItem from './NewItem';
import dl from './dulieu.json';
class New extends Component {
    render() {
      console.log(dl);
        return (
            <div>
                  <header className="masthead tintuc ">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-lg-12 my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-xs-center ">Trang danh sach tin </h1>
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <div className="container">
          <div className="row mt-3 ">
            {
              dl.map((value,key)=>{
                return( 
                  <NewItem key={key} anh={value.anh} tieude={value.tieude}
                trichdan={value.trichdan}></NewItem>
           
                )
                
              })
            }
             
           
             
           
        </div>

        </div>
        </div>
        
        );
    }
}

export default New;