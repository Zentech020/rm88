import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Grid, Row, Col } from 'react-bootstrap';
import axios from 'axios';

class Companypage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            companyList: [],
            roadmaps: []
        };
        this.clickUp = this.clickUp.bind(this);
        this.clickDown = this.clickDown.bind(this);
    }

    componentDidMount() {
        var self = this;
        var id = this.props.match.params.id;
        axios.get(`http://localhost:1337/company/${id}`)
            .then(function (response) {
                self.setState({
                    companyList: [response.data],
                    roadmaps: response.data.roadmaps
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    clickUp(e) {
        console.log('up');
    }


    clickDown(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    onItemClick(id, rate, e) {
        console.log(id);
        console.log(rate);

    }

    render() {
        console.log(this.state.roadmaps)

        return (


            <div>
                {this.state.companyList.map(function (company, index) {
                    return <header className="App-header">
                        <h1 className="App-title">{company.company_name}</h1>
                    </header>;
                })
                }

                <div className="container">

                    {this.state.roadmaps.map((roadmap, index) => {

                        let boundItemClick = this.onItemClick.bind(this, roadmap._id, roadmap.roadmaps_likes, );

                        return <div className="row" key={index}>
                            <div className="col-md-12  rm-88-list">
                                <div className="col-md-1 rm-88-img-container">
                                    <img src="https://i.imgur.com/ZpPRKsD.png" />
                                </div>
                                <div className="col-md-9 rm-88-text-container">
                                    <h4>{roadmap.roadmap_title}</h4>
                                    <p>{roadmap.roadmap_desc}</p>

                                </div>
                                <div className="col-md-2 rm-88-rating-container">
                                    <div className="col-md-4 rm-88-number-container">

                                        <p>{roadmap.roadmaps_likes}</p>
                                    </div>
                                    <div className="col-md-8 rm-88-arrow-container">
                                        <div value={roadmap.roadmaps_likes} onClick={boundItemClick}>
                                            <i className="fas fa-chevron-up fa-2x"></i>
                                        </div>
                                        <div value={roadmap.roadmaps_likes} onClick={this.clickDown}>
                                            <i className="fas fa-chevron-down fa-2x"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>;
                    })}




                </div >
            </div>



        );
    }
}



export default Companypage;


