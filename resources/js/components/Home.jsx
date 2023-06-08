import React, { useState, useEffect } from 'react';
import Product from './Product';
import AddProduct from './AddProduct';
import '../../css/app.css';

const Home = () => {
    const [products, setProducts] = useState([]); 
    const [currentProduct, setCurrentProduct] = useState(null);    
    
    const getProducts = () => {
        // Fetch data from /api/products route
        fetch('/api/products')
        .then(response => {
            return response.json();
        })
        .then(products => {
            //Fetched product is stored in the state 
            setProducts(products);
        });
    };
    
    useEffect(() => {
        getProducts();
     });    
    
    // Render the products 
    const renderProducts = () => {
        //sort products from newest to oldest
        let sortProducts = products.sort((a,b) => {
            return b.id - a.id;
        })
        return sortProducts.map(product => {
            return (     
                // handleClick() function is invoked onClick. 
                <li 
                    key={product.id} 
                    onClick={() => handleClick(product)}
                >
                    { product.title } 
                </li> 
            );
        })
    };
    // Executes when user clicks list item, sets the state 
    const handleClick = (product) => {
        setCurrentProduct(product)
    };

    // Add new product
    const handleAddProduct = (product) => {
        product.price = Number(product.price);
        /*Fetch API for post request */
        fetch( 'api/products/', {
            method:'post',
            /* headers are important*/
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            
            body: JSON.stringify(product)
        })
        .then(response => {
            return response.json();
        })
        .then( data => {
            //update the state of products and currentProduct 
            setProducts(prevProducts => prevProducts.concat(data))
            setCurrentProduct(data)
        })
    };

    //Delete product
    //The delete button should ideally go inside the Product component
    const handleDeleteProduct = () => {
            const delProduct = currentProduct
            fetch( 'api/products/' + currentProduct.id, 
                { method: 'delete' })
                .then(response => {
                  /* Duplicate the array and filter out the item to be deleted */
                  var newItems = products.filter(function(item) {
                  return item !== delProduct
                });             
                
                setProducts(newItems)
                setCurrentProduct(null)
            });
    };

    //Update product
    //The update feature should have a component of its own
    const handleUpdateProduct = (product) => {
            const updProduct = currentProduct;
            fetch( 'api/products/' + currentProduct.id, {
                method:'put',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(response => {
                return response.json();
            })
            .then( data => {
                /* Updating the state */
                var updItems = products.filter(function(item) {
                  return item !== updProduct
                })               
                
                setProducts(updItems.concat(product))
                setCurrentProduct(product)
            }) 
    };

    return(
        <div>
            <div class="boxes">
                <ul>
                    { renderProducts() }
                </ul> 
            </div> 
            <div class="boxes">
                <Product product={currentProduct} />
                <AddProduct onAdd={handleAddProduct} />
            </div>
        </div>
    )
}

export default Home;