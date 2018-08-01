// Common libraries
import React, { Component } from 'react';

// Include dumb component
import PlaylistView from "./view";


class PlaylistComponent extends Component {

    render() {

        return (
            <PlaylistView data={this.props.data}/>
        );
    }
}

export default PlaylistComponent;