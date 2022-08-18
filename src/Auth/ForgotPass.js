import React from "react";
import { Button, InputGroupm, Container, Form, Col, Row, Card } from "react-bootstrap";
let img = "../image/11logo.png"
function Register(){
    return(
        <section className="vh-100 log">
            <Container className="py-5 h-100">
                <Row className=" d-flex justify-content-center align-items-center h-100">
                    <Col md={6} lg={6} xl={5}>
                        <Card className="shadow p-4 card-login" style={{marginTop: ""}}>
                            <Card.Body>
                                <div className="text-center mb-4">
                                    <img src={img} class="img-fluid logo" alt="icon" />
                                    <p className="text-muted">
                                    Forgot your password? No problem. Just let us know your email
                                    address and we will email you a password reset link that will
                                    allow you to choose a new one.
                                    Email    
                                    </p>
                                </div>
                                <Form>
                                    
                                    <Form.Group className="mb-3 " controlId="formBasicEmail">
                                        <Form.Label className="fw-bold text-muted">EMAIL </Form.Label>
                                        <Form.Control type="email" placeholder="Email address" />
                                    </Form.Group>
                                    
                                    <div className="text-center">
                                        <Button type="submit" className="btn-login p-2 fw-bold mb-4 shadow">
                                            EMAIL PASSWORD RESET LINK
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