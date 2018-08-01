import React, { Component } from 'react';
import PlaylistComponent from '../../components/playlist/component';
import PlayerComponent from "../../components/player/component";

import PaginationView from '../../components/pagination/view';

import Ionicon from 'react-ionicons';

// import CustomerComponent from '../../components/customers/component';
// import OrderComponent from '../../components/orders/component';
// import PrescriptionComponent from '../../components/prescriptions/component';

import { connect } from 'react-redux';

import {getData} from "./actions";

//import $ from 'jquery';



class Summarypage extends Component {

    componentWillMount() {
        // console.log('id is '+this.props.match.params.id);
        //this.props.dispatch(getData(this.props.match.params.customerid));
        this.props.dispatch(getData(this.props.match.params.id));
    }

    componentDidMount() {
        // console.log('mounted');
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.location.pathname !== this.props.location.pathname) {
            //console.log('next props: '+nextProps.location.pathname);
            this.props.dispatch(getData(nextProps.match.params.id,nextProps.match.params.page));
            //take action here
        }
    }

  render() {




      if (this.props.loading === true || typeof this.props.payload === 'undefined') {
          return (
              <div>
                  <div className="main container">
                      <div className="row">
                          <div className="loading">
                            <p> <Ionicon icon="ios-sync" fontSize="90px" color="#50E3C2" rotate={true} /></p>
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

      let $id = this.props.match.params.id;

      if ($id) {

          return (
              <div>
                  <PlayerComponent data={this.props.payload[0].data.items[0]}/>
              </div>
          )

      } else {

          return (
              <div>

                  <div className="main container">

                      <div className="row">

                          {this.props.payload[0].data.items.map(function(item, i){
                              return <PlaylistComponent key={i} data={item}/>
                          })}

                          <nav>
                              <PaginationView data={this.props.payload[0].data}/>
                          </nav>


                      </div>

                  </div>

              </div>

          );
      }

  }
}


export default connect((state) => {
    return state.summaryReducer;
})(Summarypage);