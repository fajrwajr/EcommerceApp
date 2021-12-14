import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Card, Col, Container, Row, Button} from "react-bootstrap";
import Turtleneck from "../../img/b1.jpg";
import TealBlouse from "../../img/b2.jpg";
import Tshirt from "../../img/b3.jpg";
import PinkBlouse from "../../img/b4.jpg";
import RedBlouse from "../../img/b5.jpg";
import RedTurtleneck from "../../img/b6.jpg";
import FloralDress from "../../img/b7.jpg";
import BrownTurtleneck from "../../img/b8.jpg";
import WhiteBlouse from "../../img/b9.jpg";
import CamelT from "../../img/b10.jpg";

 const products = [
     {id: 1, name: "Turtleneck", image: 'b1.jpg', price: '$15'},
     {id: 2, name: "Teal Blouse", image: 'b2.jpg', price: '$23'},
     {id: 3, name: "T-shirt", image: 'b3.jpg', price: '$7'},
     {id: 4, name: "Pink Blouse", image: 'b4.jpg', price: '$36'},
     {id: 5, name: "Red Blouse", image: 'b5.jpg', price: '$20'},
     {id: 6, name: "Red Turtleneck", image: 'b6.jpg', price: '$80'},
     {id: 7, name: "Floral Dress", image: 'b7.jpg', price: '$45'},
     {id: 8, name: "Brown Turtleneck", image: 'b8.jpg', price: '$29'},
     {id: 9, name: "White Blouse", image: 'b9.jpg', price: '$38'},
     {id: 10, name: "Camel-T", image: 'b10.jpg', price: '$11'} 
 ]

const Products = () => {
   
     function handleToken(token, addresses) {
        console.log({ token, addresses })
     }
 
    return (
        <>
    <Container>
			<Row>
        {products.map((product) => (
         <Col xs={3} key={product.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout
        stripeKey="pk_test_4TbuO6qAW2XPuce1Q6ywrGP200NrDZ2233"
        token={handleToken}
        amount={product.price * 100}
        name="Tesla Roadster"
        billingAddress
        shippingAddress
      />      
        </Card.Body>
      </Card>
      </Col>
        ))}
        </Row>
		</Container>
        </>
    )
} 

export default Products;