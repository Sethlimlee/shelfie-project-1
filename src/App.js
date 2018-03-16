import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Dashboard from './Component/Dashboard/Dashboard';
import Form from './Component/Form/Form';
import Header from './Component/Header/Header';

class App extends Component {
  constructor() {
    super()

    this.state={
      inventory: []
    }
    this.createProduct = this.createProduct.bind( this );
  }

  componentDidMount(){
    axios.get('/api/inventory')
    .then(response => {
      console.log(response.data)
      this.setState({
        inventory: response.data
      })
    })
  }

  createProduct(product) {
    axios.post(`/api/add`, {product})
      .then(response => {
      this.setState({
        inventory: response.data
      })
    })
  }
  
  render() {
    let products = [...this.state.inventory];
    return (
      <div className="App">
        <header className="App-header">
          <Header />
        </header>
        <div className='body'>
        <Dashboard
          products = {products} />
        <Form 
          addProduct={this.createProduct}/>
        </div>
      </div>
    );
  }
}

export default App;
