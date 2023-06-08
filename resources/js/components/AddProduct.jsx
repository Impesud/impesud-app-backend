import React, { useState } from 'react'
const AddProduct = (props) => {
    const [newProduct, setNewProduct] = 
        useState(
            {
                title:"", 
                description: "", 
                price: 0, 
                availability: 0
            }
        );
    
    const handleInput = (key, e) => {
        /*Duplicating and updating the state */
        var newState = Object.assign({}, newProduct); 
        newState[key] = e.target.value;
        setNewProduct(newState);
    };
    
    const handleSubmit = (e) => {
        //preventDefault prevents page reload 
        e.preventDefault();
        //A call back to the onAdd props. The current state is passed as a param 
        props.onAdd(newProduct);
    };
    const divStyle = {
        /*Code omitted for brevity */ 
    }            
    return(
        <div> 
            <h2> Add new product </h2> 
            <div style={divStyle}> 
                <form onSubmit={handleSubmit}>
                    <div>
                    <label> Title: 
                    { /*On every keystroke, the handeInput method is invoked */ }
                        <input type="text" onChange={(e)=>handleInput('title',e)} /> 
                    </label> 
                    </div>
                    
                    <div>
                    <label> Description: 
                        <input type="text" onChange={(e)=>handleInput('description',e)} /> 
                    </label> 
                    </div>
                    
                    <div>
                    <label> Price:
                        <input type="number" onChange={(e)=>handleInput('price',e)} />
                    </label>
                    </div>

                    <div>
                    <label> Availability:
                        <input type="integer" onChange={(e)=>handleInput('availability',e)} />
                    </label>
                    </div>

                    <input type="submit" value="Submit" />
                </form> 
            </div> 
        </div> 
    )
}

export default AddProduct