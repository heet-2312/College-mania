import React from 'react';
import {Button,Card} from 'react-bootstrap';


const Cards = () => {


    return(
        
        <Card style={{ width: '18rem' }}>

            
            <Card.Body>

                <Card.Title>Price:1000</Card.Title>
                <Card.Title>Description:</Card.Title>
                <Card.Text>
                Details about the product!!
                </Card.Text>
                <Card.Title>Contact-info:9999999999</Card.Title>

             </Card.Body>

    </Card>
          
    )
}

export default Cards;