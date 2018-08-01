import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import YouTube from 'react-youtube';
import Moment from 'react-moment';

import './scss/player.css';

class PlayerView extends Component {




    render() {

        let $this = this;

        const opts = {
            playerVars: {
                autoplay: 1
            }
        };

        console.log($this.props.data);



        return (

            <div className="container">
                <div className="row">
                    <YouTube videoId={$this.props.data.contentDetails.videoId} opts={opts}/>

                    <h1>{$this.props.data.snippet.title}</h1>
                    <span>Published on <Moment format="MMM DD, YYYY" date={$this.props.data.snippet.publishedAt}/></span>
                    <p>{$this.props.data.snippet.description}</p>

                    <div className="back">
                        <Link to="/" activeclassname="active"><span>Go Back</span></Link>
                    </div>
                </div>

            </div>

            );

    }
}

export default withRouter(PlayerView);