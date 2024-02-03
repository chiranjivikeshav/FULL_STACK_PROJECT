import React, { useState, useEffect } from "react";
import axios from 'axios';
import {Button , Card} from 'react-bootstrap';
import { Link } from 'react-router-dom'
const ShowProducts = () => {
    const [products, setProducts] = useState([])
    const getProducts = async () => {
        const response = await axios.get('http://localhost:8000/api/')
        setProducts(response.data)
    }
    useEffect(() => {
        getProducts();
    }, [])
    return (
        <div>
            <h1>Show All Products</h1>
            <div className="CardBox">
                {
                    products.map((product, index) => (

                        <Card className="m-4 rounded shadow-lg" style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.name}</Card.Title>
                                <Card.Title>{product.price}</Card.Title>
                                <Card.Text>
                                    {product.description}
                                </Card.Text>
                                <Link className="btn btn-primary" to={`/${product.id}`}>Detail</Link>
                            </Card.Body>
                        </Card>
                    )
                    )

                }
            </div>
        </div>
    );
};
export default ShowProducts;