import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error("There was an error fetching the product details!", error);
            });
    }, [id]);

    if (!product) return <p>Loading...</p>;

    return (
        <section className='product-detail'>
            <h2>{product.title}</h2>
            <p>{product.body}</p>
            <button onClick={() => navigate(-1)}>Back</button>
        </section>
    );
};

export default ProductDetail;

