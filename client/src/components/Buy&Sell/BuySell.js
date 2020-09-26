import React, { useState } from 'react';
import Cards from './card';
import FormPage from './form'
const BuySell = () =>{
   
    const toggleSellNowForm = () =>{
        isForm(!Form);
    }

   const  [Form,isForm] = useState(true);
    return(

        <div>

            <h1 className="heading">Products for Sale</h1>
            
            <br></br>
            <br></br>

            <div className="wrapper">
                {
                Form?(
                        <button  className="btn btn-danger" onClick={()=>{toggleSellNowForm()}}>
                            Sell Now
                        </button>
                ):(
                       <div className="sell-form">
                            <button  className="btn btn-danger" onClick={()=>{toggleSellNowForm()}}>
                            Fill Details 
                            </button>
                            <FormPage/>
                       </div>     
                )
                       
                }    
            </div>
            
            </div>
            
        
    )
}

export default BuySell;