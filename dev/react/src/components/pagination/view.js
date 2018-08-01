import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './scss/pagination.css';
import Ionicon from 'react-ionicons';


class PaginationView extends Component {

    render() {

        let $this = this;
        let $next = $this.props.data.nextPageToken;
        let $prev = $this.props.data.prevPageToken;

        const $nextLink = "/page/"+$next;
        const $prevLink = "/page/"+$prev;

        if ($next !== undefined && $prev !== undefined) {
            return (
                <div>
                    <NavLink to={$prevLink} className="prev"><Ionicon icon="ios-arrow-round-back"/> Previous Page</NavLink>
                    <NavLink to={$nextLink} className="next">Next Page <Ionicon icon="ios-arrow-round-forward"/></NavLink>
                </div>
                )
        }

        if ($next !== undefined) {
            return(
                <div>
                    <NavLink to={$nextLink} className="next">Next Page <Ionicon icon="ios-arrow-round-forward"/> </NavLink>
                </div>
            )
        }

        if ($prev !== undefined) {
            return(
               <div>
                   <NavLink to={$prevLink} className="prev"><Ionicon icon="ios-arrow-round-back"/> Previous Page</NavLink>
               </div>
            )
        }

        return null;
    }
}

export default withRouter(PaginationView);