import React, { Component } from 'react';
import ProductsComponent from '../../components/playlist/component';

import { connect } from 'react-redux';

import {getData} from "./actions";
import {withRouter} from "react-router-dom";

import Ionicon from 'react-ionicons';

class Searchpage extends Component {

    componentWillMount() {

        this.props.dispatch(getData(this.props.match.params.searchid));
    }

    componentDidMount() {
        console.log('mounted');

    }

    shouldComponentUpdate() {
        return true;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            console.log('next props: '+nextProps.location.pathname);
            this.props.dispatch(getData(nextProps.match.params.searchid));
            //take action here
        }
    }

  render() {


      if (this.props.loading === true || typeof this.props.payload === 'undefined') {
          return (
              <div>
                  <div className="main products-container">
                      <div className="row">
                          <div className="loading">
                              <p> <Ionicon icon="ios-sync" fontSize="60px" color="#9F111B" rotate={true} /></p>
                          </div>
                      </div>
                  </div>
              </div>
          );
      }

      if (this.props.success === false) {
          return (
              <div>
                  <p><strong>Error:</strong> {this.props.payload.message}</p>
              </div>
          );
      }



      //let $id = this.props.match.params.searchid;

      if (this.props.payload[0].data.length === 0) {

        return (
            <div>
                <div className="main container products-container">
                    <div className="row">
                        <p className="notice">Whooops! Nothing has been found. Try another search?</p>
                    </div>
                </div>
            </div>
        )

      } else {


          return (
              <div>

                  <div className="main container products-container">
                      <div className="row">

                          {this.props.payload[0].data.map(function(product, i){
                             return <ProductsComponent key={i} data={product}/>
                          })}

                      </div>
                  </div>

              </div>

          );
      }
  }
}


export default withRouter(connect((state) => {
    return state.searchReducer;
})(Searchpage));