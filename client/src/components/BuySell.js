import React from 'react';
import { Card,Button} from 'react-bootstrap';
import Cards from './card';


const BuySell = () =>{
   
    return(

        <div>

            <h1 className="heading">Products for Sale</h1>
            
            <br></br>
            <br></br>
            <div className="wrapper">
            <Button className="btn btn-danger sell">Sell Now</Button>
            </div>
            
            <br></br>
            <br></br>
            
            <div className="Cards">
                <div className="Card">
                    <Cards/>
                </div>
                <div className="Card">
                    <Cards/>
                </div>
                <div className="Card">
                    <Cards/>
                </div>
                <div className="Card">
                    <Cards/>
                </div>
                <div className="Card">
                    <Cards/>
                </div>
                
            </div>

        </div>
        
    )
}

export default BuySell;