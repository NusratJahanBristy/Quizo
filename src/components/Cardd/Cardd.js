import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { Link } from 'react-router-dom';

function Cardd({cardd}) {
    const {id, name,logo} = cardd;
  return (
    <CardGroup className='px-2 mx-4 my-5'>
      <Card>
        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
        <Card.Body className='bg-success'>
          <img className='img-fluid' src={logo} alt="" />
        </Card.Body>
        <Card.Footer >
        <Card.Title>{name}</Card.Title>
        <Button variant='success'className='text-success'><Link className='text-decoration-none text-white' to={`/cardd/${id}`}>Go to Quiz</Link></Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default Cardd;