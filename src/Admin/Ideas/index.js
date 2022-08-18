import React from 'react';
import { Container, Form, Row, Col, Button, Table, Card } from 'react-bootstrap';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';

function index(props) {
    return (
        <Container fluid>
            <Row>
                <Sidebar />
                <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                    <h1 className="mt-4 border-bottom fw-bold mb-4">Input Your Ideas</h1>

                    <Row>
                        <Col md={12} className='p-3'>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Control type="text" className='form-control shadow-sm border-3 rounded-pill' placeholder='YOUR NAME' />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Control as="textarea" className="form-control shadow-sm border-3 " placeholder='WHATS YOUR IDEA/SUGGESTION?....' rows={6} />
                                </Form.Group>

                                <Button type='submit' className='btn btn-secondary fw-bold btn-lg'>SEND</Button>
                            </Form>
                        </Col>
                        <Col md={12} className='p-3 mt-5'>
                            <h2 className='fw-bold'>Table Ideas</h2>
                            <Table>
                                <thead>
                                    <tr>
                                        <th scope='col' >FROM</th>
                                        <th scope='col' >IDEA / SUGGESTION</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th>Otto</th>
                                        <td >
                                            <Card>
                                                <Card.Body className='border-3'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed iure molestias, odit quisquam quaerat?</p>
                                                </Card.Body>
                                            </Card>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Otto</th>
                                        <td >
                                            <Card>
                                                <Card.Body className='border-3'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed iure molestias, odit quisquam quaerat?</p>
                                                </Card.Body>
                                            </Card>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>Otto</th>
                                        <td >
                                            <Card>
                                                <Card.Body className='border-3'>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam sed iure molestias, odit quisquam quaerat?</p>
                                                </Card.Body>
                                            </Card>
                                        </td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                    <Footer />
            </main>
            </Row>
        </Container>
    );
}

export default index;