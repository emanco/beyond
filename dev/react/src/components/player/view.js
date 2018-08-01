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

            <div className="main container player">
                <div className="row">

                    <div className="col-md-8">
                        <div className="inner">
                            <div className="embed-responsive embed-responsive-16by9">
                                <YouTube videoId={$this.props.data.contentDetails.videoId} opts={opts}/>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="inner snippet">
                            <h1 className="title">{$this.props.data.snippet.title}</h1>
                            <span className="published">Published on <Moment format="MMM DD, YYYY" date={$this.props.data.snippet.publishedAt}/></span>
                            <p className="description">{$this.props.data.snippet.description}</p>

                            <div className="back">
                                <Link to="/" activeclassname="active"><i className="arrow"></i> <span>Back to list</span></Link>
                            </div>
                        </div>
                    </div>


                </div>

            </div>

            );

    }
}

export default withRouter(PlayerView);