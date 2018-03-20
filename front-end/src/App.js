import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import axios from 'axios';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Homepage from './Homepage';
import CompanyPage from './Companypage';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      companies: []
    }
  }

  componentDidMount() {
    var self = this;
    axios.get('http://localhost:1337/company')
      .then(function (response) {
        self.setState({ companies: response.data })
      })
      .catch(function (error) {
        console.log(error);
      });
  }



  render() {

    console.log(this.state.companies)

    return (


      <div className="App" >
        <header className="App-header">
          <h1 className="App-title">RDMP</h1>
        </header>
        <Grid>
          {this.state.companies.map(function (company, index) {
            return <Homepage
              img={company.company_img}
              title={company.company_name}
              desc={company.company_desc}
              id={company._id}
            />;

          })}
        </Grid>


      </div >
    );
  }
}

export default App;
