import React from 'react';
import {Button,Card} from 'react-bootstrap';


const Cards = () => {


    return(
        
        <Card style={{ width: '18rem' }}>

            <Card.Img variant="top" src="https://store-images.s-microsoft.com/image/apps.24119.13561428843663101.db53229a-3063-4dd3-b18e-61ad6b3661d1.b2b9b3b6-0326-402e-be19-4fe9ce86f784?mode=scale&q=90&h=200&w=200&background=%230078D7" />
            
            <Card.Body>

                <Card.Title>Price</Card.Title>
                <Card.Text>
                Details about the product!!
                </Card.Text>
                <Button variant="primary">Buy Now</Button>

             </Card.Body>

````````</Card>
          
    )
}

export default Cards;