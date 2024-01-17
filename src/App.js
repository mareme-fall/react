import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';
import CardGroup from 'react-bootstrap/CardGroup';
import "bootstrap/dist/css/bootstrap.css"
function App() {
    return (
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">Brand link</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>Brand text</Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="https://th.bing.com/th?id=OIP.lkK0HZO2QZVWTMVl3YclQAHaGl&w=265&h=235&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                            width="80px"
                            height="60%"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            alt=""
                            src="https://th.bing.com/th?id=OIP.Zw8NRxaoT9IuU7Bvg1SYTwHaGN&w=273&h=228&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                            width="80%"
                            height="80%"
                            className="d-inline-block align-top"
                        />{' '}
                        React Bootstrap
                    </Navbar.Brand>
                </Container>
            </Navbar>

            <Card style={{ width: '10%' }}>
                <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.6gEjYK0bWoYrzzcvYV_vgQHaFv?w=218&h=180&c=7&r=0&o=5&pid=1.7" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Alert variant="success">
                <Alert.Heading>Hey, nice to see you</Alert.Heading>
                <p>
                    Aww yeah, you successfully read this important alert message. This
                    example text is going to run a bit longer so that you can see how
                    spacing within an alert works with this kind of content.
                </p>
                <hr />
                <p className="mb-0">
                    Whenever you need to, be sure to use margin utilities to keep things
                    nice and tidy.
                </p>
            </Alert>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://th.bing.com/th?q=Green+Card+Logo&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=fr-FR&cc=FR&setlang=fr&adlt=moderate&t=1&mw=247" 
                    width="80%"
                    height="80%"
                    className="d-inline-block align-top"
                />{' '}
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.nW8mUe_ZF-kv7pvsuDWwPAHaE8?w=218&h=180&c=7&r=0&o=5&pid=1.7"
                    width="80%"
                    height="80%"
                    className="d-inline-block align-top"
                />{' '}
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.x7hVJon8m_LPVB2AyBfYwgHaEK?w=295&h=180&c=7&r=0&o=5&pid=1.7"
                    width="80%"
                    height="80%"
                    className="d-inline-block align-top"
                />{' '}
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

        </>
    );
}


export default App;