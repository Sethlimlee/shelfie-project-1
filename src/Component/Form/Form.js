import React, { Component } from 'react';
import './form.css';

class Form extends Component {
    constructor() {
        super()

        this.state = {
            productURL: '',
            productName: '',
            productPrice: 0,
        }
    }

    handleImage(value){
        this.setState({
            productURL: value
        })
    }

    handleName(value){
        this.setState({
            productName: value
        })
    }

    handlePrice(value){
        this.setState({
            productPrice: value
        })
    }

    handleCancel(){
        this.setState({
            productURL: '',
            productName: '',
            productPrice: 0
        })
    }

    handleAdd(){
        const {productName} = this.state;
        const {addProduct} = this.props;

        addProduct(productName);
        this.setState({
            productName: '',
            productPrice: 0,
            productURL: ''
        }) 
    }

    render() {
        return (
            <div className='form'>
                <p>Image URL:</p>
                <input 
                    value={this.state.productURL}
                    onChange={(event) => this.handleImage(event.target.value)}/>
                <p>Product Name:</p>
                <input
                    value={this.state.productName}
                    onChange={(event) => this.handleName(event.target.value)}/>
                <p>Price:</p>
                <input
                    value={this.state.productPrice}

                    onChange={(event) => this.handlePrice(event.target.value)}/> 
                <p></p>
                <div className='buttons'>
                    <button
                        onClick={() => this.handleCancel()}>Cancel</button>
                    <button
                        onClick={() => this.handleAdd()}>Add to Inventory</button>
                </div>                
            </div>
        )
    }
}

export default Form;