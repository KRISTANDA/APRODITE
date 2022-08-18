
import React from 'react';
import Sidebar from "../../Components/Sidebar";
import { Link } from 'react-router-dom';
import { Button, InputGroupm, Container, Form, Col, Row, Card, Table } from "react-bootstrap";
import { BsCaretRightFill } from "react-icons/bs";
import Footer from '../../Components/Footer';


function Add(props) {
    return (
        <Container fluid className='vh-100'>
            <Row>
                <Sidebar />
                <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4 p-3">
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h2 className="fw-bold">NEW TASK</h2>
                    </div>

                    <Row className='p-3'>
                        <Col md={12}>
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Task</Form.Label>
                                    <Form.Control type="text" placeholder="Task Name" />
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Priority Level</Form.Label>
                                    <Form.Select aria-label="Default select example">
                                        
                                        <option>Open this select menu</option>
                                        <option value="1">NORMAL</option>
                                        <option value="2">URGENT</option>
                                        <option value="3">CRITICAL</option>
                                    </Form.Select>
                                </Form.Group>
                                
                                <div className='text-end'>
                                    <Link className='btn btn-light me-3' to='/overview'>
                                        Back
                                    </Link>
                                    <Button variant='primary'>Submit</Button>
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
export default Add;