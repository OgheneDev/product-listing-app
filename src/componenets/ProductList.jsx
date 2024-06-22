import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const loaderContainerRef = useRef(null);
  const productListRef = useRef(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setProducts(response.data);
        setLoaded(true);
      })
      .catch(error => {
        console.error("Error fetching products", error);
      });

    const handleLoad = () => {
      if (loaderContainerRef.current) {
        loaderContainerRef.current.style.opacity = '0';
        loaderContainerRef.current.style.visibility = 'hidden';
      }
      if (productListRef.current) {
        productListRef.current.style.padding = '30px';
        productListRef.current.style.opacity = '1';
        productListRef.current.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    // Attach the event listener
    window.addEventListener('load', handleLoad);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const productListStyle = loaded ? {
    padding: '30px',
    opacity: 1,
    transform: 'translate3d(0, 0, 0)',
    transition: 'opacity 0.3s, transform 0.3s'
  } : {
    opacity: 0,
    transform: 'translate3d(0, -1rem, 0)',
    transition: 'opacity 0.3s, transform 0.3s'
  };

  const loaderContainerStyle = {
    position: 'fixed',
    inset: 0,
    zIndex: 999,
    backgroundColor: 'white',
    display: 'grid',
    placeContent: 'center',
    opacity: loaded ? 0 : 1,
    visibility: loaded ? 'hidden' : 'visible',
    transition: 'opacity 0.3s, visibility 0.3s'
  };

  const loaderStyle = {
    width: '4rem',
    height: '4rem',
    border: '.4rem solid var(--Violet)',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderRadius: '50%',
    animation: '.8s ease infinite alternate spinner'
  };

  const keyframes = `
    @keyframes spinner {
      from {
        transform: rotate(0deg) scale(1);
      }
      to {
        transform: rotate(360deg) scale(1.2);
      }
    }
  `;

  return (
    <>
      <style>{keyframes}</style>
      <div ref={loaderContainerRef} style={loaderContainerStyle} className="loader-container">
        <div style={loaderStyle} className="loader"></div>
      </div>

      <div ref={productListRef} style={productListStyle} className="product-list">
        <ul>
          {products.map(product => (
            <li key={product.id}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProductList;

