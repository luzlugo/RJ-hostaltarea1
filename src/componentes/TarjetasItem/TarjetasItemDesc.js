import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'


export const TarjetasItemDesc =({producto} ) =>{
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={producto.img} />
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
            <p className="pruebaprecio">Precio: {producto.precio}</p>
           <small className="pruebastock">Stock disponible: {producto.stock}</small>
           <p>{producto.desc}</p>
           <p>{producto.category}</p>
        </Card.Text>
        <Link to={`/item/${producto.id}`}className="header-navlink"><Button variant="primary">Ver más</Button> </Link>
      </Card.Body>
    </Card>
  );
}

export default TarjetasItemDesc
