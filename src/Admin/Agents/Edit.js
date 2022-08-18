import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../Components/Footer';
import Sidebar from '../../Components/Sidebar';
import { Button, InputGroup, Container, Form, Col, Row, Card, Table } from "react-bootstrap";

function Edit(props) {
    return (

        <Container fluid className="vh-100">
            <Row>
                <Sidebar />
                <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2 className="fw-bold">Edit Members</h2>
                    </div>

                    <Row className='p-3'>
                        <Col md={12}>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Your Name" />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type="text" placeholder="Input Your Role" />
                                </Form.Group>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Phone</Form.Label>
                                    <Form.Control type="number" placeholder="Your Number Phone" />
                                </Form.Group>
                                <div className='text-end'>
                                    <Link className='btn btn-light me-3 shadow-sm' to='/agents'>
                                        Back
                                    </Link>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </div>
                            </Form>
                        </Col>
                    </Row>


                    <Footer />

                </main>
            </Row>

        </Container>
    );
}

export default Edit;