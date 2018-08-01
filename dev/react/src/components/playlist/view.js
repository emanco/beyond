import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Moment from 'react-moment';

import './scss/playlist.css';
import playButton from '../../img/play_button.svg';
import missing from '../../img/missing.jpg';

class PlaylistView extends Component {




    render() {

        let $this = this,
            $description = $this.props.data.snippet.description.length > 150 ? $this.props.data.snippet.description.slice(0, 150)+'...' : $this.props.data.snippet.description,
            $thumbnail = $this.props.data.snippet.thumbnails !== undefined ? $this.props.data.snippet.thumbnails : false;


        if ($thumbnail) {
            return (

                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                    <div className="inner">
                        <Link to={"/play/"+$this.props.data.id} className="item-thumbnail">

                            <img src={$this.props.data.snippet.thumbnails.high.url} alt={$this.props.data.snippet.title}
                                 sizes="
                                  (min-width: 768px) 50vw,
                                  (min-width: 1024px) 66vw,
                                  100vw"
                                 srcSet={ $this.props.data.snippet.thumbnails.default.url+ ' 120w, '+
                                 $this.props.data.snippet.thumbnails.medium.url+' 320w, '+
                                 $this.props.data.snippet.thumbnails.high.url+' 480w'
                                 }
                            />

                            <div className="overlay">
                                <h4 className="title">{$this.props.data.snippet.title}</h4>
                                <div className="play-icon">
                                    <img src={playButton} alt="play"/>
                                </div>
                            </div>

                        </Link>

                        <div className="snippet">

                            <Link to={"/play/"+$this.props.data.id}>
                                <span className="published">Published on <Moment format="MMM DD, YYYY" date={$this.props.data.snippet.publishedAt}/></span>
                                <p className="description">{$description}</p>
                            </Link>

                        </div>
                    </div>
                </div>

            );
        } else {
            return (
                <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 item">
                    <div className="inner">
                        <Link to={"/play/"+$this.props.data.id} className="item-thumbnail">

                            <img src={missing} alt="Missing Video"/>

                            <div className="overlay">
                                <h4 className="title">{$this.props.data.snippet.title}</h4>
                                <div className="play-icon">
                                    <img src={playButton} alt="play"/>
                                </div>
                            </div>

                        </Link>

                        <div className="snippet">

                            <Link to={"/play/"+$this.props.data.id}>
                                <span className="published">Published on <Moment format="MMM DD, YYYY" date={$this.props.data.snippet.publishedAt}/></span>
                                <p className="description">{$description}</p>
                            </Link>

                        </div>
                    </div>
                </div>
            )
        }



    }
}

export default withRouter(PlaylistView);