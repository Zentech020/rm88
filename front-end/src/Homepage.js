import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Homepage extends Component {

    render() {

        return (

            <Row className="company_container">

                <Col xs={6} md={2} id="company_img_container">
                    <img src={this.props.img} />
                </Col>

                <Col xs={6} md={8} className="company_desc">
                    <h1>{this.props.title}</h1>
                    <p>{this.props.desc}</p>
                </Col>

                <Col xs={12} md={2} id="company_link">
                    <Link to={"/company/" + this.props.id}><h1>Go !</h1></Link>
                </Col>
            </Row>



        );
    }
}

export default Homepage;
