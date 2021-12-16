import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { Card, Col, Container, Row} from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
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

 toast.configure();
 
const Products = () => {

  const [product] = React.useState({ id: 1, name: "Turtleneck", image: 'b1.jpg', price: 15});
  const [productOne] = React.useState({ id: 2, name: "Teal Blouse", image: 'b2.jpg', price: 23});

/*const [product] = React.useState({
  name: "Tesla Roadster",
  price: 10.67,
  description: "Cool car"
});
*/
   async function handleToken(token) {
        //console.log({ token, addresses })
      const response = await axios.post("https://5001-orange-crayfish-ca0t0lg4.ws-us23.gitpod.io/checkout", {
            token,
            product,
            productOne
         })
         const { status } = response.data
         if (status === "success") {
          toast("Success! Check email for details", { type: "success" });
        } else {
          toast("Something went wrong", { type: "error" });
        }
      }
    return (
      <>
      <Container>
			<Row>
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
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={product.price * 100}
        billingAddress
        shippingAddress
        name={product.name}
      />      
        </Card.Body>
      </Card>
      </Col>
      <Col xs={3} key={productOne.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img style={{ height: '18rem' }}variant="top" src={productOne.image} />
        <Card.Body>
          <Card.Title>{productOne.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
 <StripeCheckout
        stripeKey="pk_test_51K6a2EBsJUn4v8aJBwkRsejwqZUQS3hgGRVR3SDdJLC9fR4CAIwuEaS6EuIdNsVsSb3CVMXYEEV4pWR1GHA9jdoE00knm6itah"
        token={handleToken}
        amount={productOne.price * 100}
        billingAddress
        shippingAddress
        name={productOne.name}
      />      
        </Card.Body>
      </Card>
      </Col>
        </Row>
		</Container>
     </>
      )
    } 
   
export default Products;