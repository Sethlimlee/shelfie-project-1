import React, { Component } from 'react';
import Product from '../Product/Product';
import './dashboard.css';

class Dashboard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            products: []
        }
    }

    componentWillReceiveProps(props) {
        this.setState({
            products: props.products
        })
    }

    render() {


        let displayProducts = this.state.products.map((e, i) => {
            return (

                <Product key={i}
                    productimage={e.imageurl}
                    productname={e.productname}
                    productprice={e.productprice} />
            )
        })

        return (
            <div>
                {displayProducts}
            </div>
        )
    }
}

export default Dashboard;