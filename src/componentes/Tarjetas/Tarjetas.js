import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import peluditos from './peluditos.JPG';
import Contador from '../Contador/Contador';
function Tarjetas() {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={peluditos} />
        <Card.Body>
          <Card.Text>
            En hostal Casa El prado tus peluditos son bienvenidos tambien
          </Card.Text>
          <Button variant="primary" color='green'>Descubre como</Button>
        </Card.Body>
      </Card>
      <br />
      <Contador/>
    </>
  );
}

export default Tarjetas;