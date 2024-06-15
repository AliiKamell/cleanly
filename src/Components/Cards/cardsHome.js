import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './cardsHome.css'
import img1 from '../../assets/pexels-fotoaibe-1571459.jpg'
import img3 from '../../assets/Boise+Clean+Pro+Image+(4).jpg'
import img2 from '../../assets/pexels-mastercowley-713297.jpg'

function CardHome() {
    return (
        <>
            <Card style={{ width: '20rem' }} id='card'>
                <Card.Img variant="top" src={img1}  className='img-card'/>
                <Card.Body>
                    <Card.Title>In-Door Cleaning</Card.Title>
                    <Card.Text>
                    Don't stress over making the time to clean your house - we are here to take that off your list. We would be more than happy to customize
                     a schedule and a cleaning list for your home depending on your needs.
                    </Card.Text>
                    <Button variant="secondary" id='btn-card'>Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} id='card' >
                <img variant="top" src={img2} className='img-card'/>
                <Card.Body>
                    <Card.Title>Out-Door Cleaning</Card.Title>
                    <Card.Text>
                    Transform your outdoor spaces with our professional cleaning services. From patios and driveways to garden paths and facades, 
                    we ensure every surface is spotless and welcoming. Enjoy the beauty of a meticulously maintained exterior.
                    </Card.Text>
                    <Button variant="secondary" id='btn-card'>Go somewhere</Button>
                </Card.Body>
            </Card>
            <Card style={{ width: '20rem' }} id='card'>
                <Card.Img variant="top" src={img3} className='img-card'/>
                <Card.Body>
                    <Card.Title>Move in / out Cleaning</Card.Title>
                    <Card.Text>
                    If you're moving out of your home, let us remove the stress of cleaning your house well enough to get your security deposit back. 
                    </Card.Text>
                    <Button variant="secondary" id='btn-card'>Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    );
}

export default CardHome;