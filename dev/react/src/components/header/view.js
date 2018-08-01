import React, { Component } from 'react';
import './scss/header.css';
import logo from '../../img/logo.svg';


import { Link, withRouter } from 'react-router-dom';

class HeaderView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({value: this.state.value});
        this.props.history.push('/search/' + this.state.value);
        //this.props.history.refresh();
        //this.props.dispatch(getData(this.state.value));
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {

        return (
            <header className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3 logo">
                            <Link to="/" activeclassname="active">
                            <img src={logo} alt=""/>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default withRouter(HeaderView);