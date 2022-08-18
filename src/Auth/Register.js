import React from "react";
import { Button, InputGroupm, Container, Form, Col, Row, Card } from "react-bootstrap";
let img = "../image/11logo.png"
function Register(){
    return(
        <section className="log">
            <Container className="py-5 h-100">
                <Row className=" d-flex justify-content-center align-items-center h-100">
                    <Col md={6} lg={6} xl={5}>
                        <Card className="shadow p-4 card-login" style={{marginTop: ""}}>
                            <Card.Body>
                                <div className="text-center mb-4">
                                    <img src={img} class="img-fluid logo" alt="icon" />
                                    <h2 className="fw-bold mb-3">Register to APRODITE</h2>
                                    {/* <p className="text-muted">Enter your email and password below</p> */}
                                </div>
                                <Form>
                                    
                                    <Form.Group className="mb-3 " controlId="formBasicName">
                                        <Form.Label className="fw-bold text-muted">Name </Form.Label>
                                        <Form.Control type="text" placeholder="Your name" />
                                    </Form.Group>
                                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                                        <Form.Label className="fw-bold text-muted">EMAIL </Form.Label>
                                        <Form.Control type="email" placeholder="Email address" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 " controlId="formBasicPassword">
                                        <Form.Label className="fw-bold text-muted">PASSWORD</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-5 " controlId="formBasicPassword">
                                        <Form.Label className="fw-bold text-muted">REPEAT YOUR PASSWORD</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    
                                    <div className="text-center">
                                        <Button type="submit" className="btn-login p-2 btn-lg fw-bold mb-4 shadow">
                                            REGISTER
                                        </Button>
                                    </div>
                                </Form>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Register;