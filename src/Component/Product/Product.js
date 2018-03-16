import React from 'react';
import './product.css';

function Product(props) {

    return (
        <div className='product'>
            
                <img src={props.productimage} alt='' className='image'/>
        
            <div className='desc'>
                <div>
                {props.productname}
                </div>
                <div>
                ${props.productprice}
                </div>
            </div>

        </div>
    )
}

export default Product;