import { Container, Button, Card } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './OrderSuccess.css';


export default function OrderSuccess(){
    return (
    <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100 text-center">
      <FaCheckCircle size={80} color="green" className="mb-4" />

      <h2 className="fw-bold">Your Order Has Been Placed!</h2>
      <p>
        Thank you for shopping with <strong>TwinsyCart</strong>.  
        Your order is being processed and will be shipped soon.
      </p>

      <Link to="/" className="text-decoration-none">
        <Button variant="success" size="lg">
          Continue Shopping
        </Button>
      </Link>
    </Container>
  );
}
  

