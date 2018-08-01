// Common libraries
import React, { Component } from 'react';

// Include dumb component
import PlayerView from "./view";


class PlayerComponent extends Component {

    componentWillMount() {
        //console.log('orders for id: '+this.props.customerid);
        // console.log(this.props.data.price_history);
    }

    render() {
        // let $this = this;

        return (
            <PlayerView data={this.props.data}/>
        );
    }
}

export default PlayerComponent;