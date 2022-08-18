import React from "react";
import Sidebar from "../../Components/Sidebar";
import {Link} from "react-router-dom"
import Spedo from "../../Components/SpedoMeter";
import Spedo2 from "../../Components/SpedoMeter2";
import Footer from "../../Components/Footer";
import { Button, InputGroupm, Container, Form, Col, Row, Card, Table } from "react-bootstrap";


function Index(props) {

  return(
    <div className="container-fluid">

        <Row>
            <Sidebar />
                <main className="col-md-10 ms-sm-auto col-lg-10 px-md-4">

                {/* Card */}
                <Row className='row p-4 mt-5' style={{ marginBottom: "50px" }}>
                    <Col md={4}>
                        <Card className='text-center border-2'>
                            <Card.Body>
                                <h4 className="text-muted fw-bold">Tasks</h4>
                                <h1>80</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='text-center border-2'>
                            <Card.Body>
                                <h4 className="text-muted fw-bold">Open</h4>
                                <h1>80</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className='text-center border-2'>
                            <Card.Body>
                                <h4 className="text-muted fw-bold">Unresolved</h4>
                                <h1>80</h1>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                
                {/* SpedoMeter */}
                <Row className='p-4'>
                    <Col md={4}>
                        <h3 className="text-center fw-bold text-primary mb-3">Complete Tasks</h3>
                        <Spedo />
                    </Col>
                    <Col md={4}>
                        <h3 className="text-center fw-bold text-primary mb-3">Tasks in Progress</h3>
                        <Spedo />
                    </Col>
                    <Col md={4}>
                        <h3 className="text-center fw-bold text-primary mb-3">Over Due</h3>
                        <Spedo2 />
                    </Col>
                </Row>
                
                {/* Table */}
                <Row className='d-flex'>
                    <Col md={12}>
                        <Card  className="p-3">
                            <Card.Body>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <h4 class="card-title fw-bold">Tasks</h4>
                                        <h5 class="card-subtitle mb-2 text-muted">Today</h5>
                                    </div>
                                    <div>
                                        <Link className="text-decoration-none fs-6 fw-bold" to='/overview/progres'>VIEW PROGRES DETAIL</Link>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mt-3 mb-4">
                                    <p className="text-muted fw-bold fs-5">Create New Task</p>
                                    <Link className="btn btn-secondary btn-sm d-flex" to='/overview/add'>
                                        <i class='bx bx-plus bx-sm'></i>
                                    </Link>
                                </div>
                                <Table className='mt-3' responsive>
                                <thead>
                                    <tr>
                                        <th>Tasks</th>
                                        <th>Status</th>
                                        <th>Priority</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"    />
                                            <label class="form-check-label ms-2" for="flexCheckChecked">
                                                APP Design
                                            </label>
                                        </td>
                                        <td>
                                            <Button variant='outline-warning' className='text-uppercase fw-bold rounded-pill  '>PAUSED</Button>
                                        </td>
                                        <td>
                                            <Button variant='warning' className='text-uppercase fw-bold rounded-pill text-white '>URGENT</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"    />
                                            <label class="form-check-label ms-2" for="flexCheckChecked">
                                                Web Design
                                            </label>
                                        </td>

                                        <td>
                                            <Button variant='outline-danger' className='text-uppercase fw-bold rounded-pill  '>ERROR</Button>
                                        </td>

                                        <td>
                                            <Button variant='danger' className='text-uppercase fw-bold rounded-pill text-white '>CRITICAL</Button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked"    />
                                            <label class="form-check-label ms-2" for="flexCheckChecked">
                                                Dashboard Design
                                            </label>
                                        </td>

                                        <td>
                                            <Button variant='outline-success' className='text-uppercase fw-bold rounded-pill  '>DONE</Button>
                                        </td>

                                        <td>
                                            <Button variant='success' className='text-uppercase fw-bold rounded-pill text-white '>NORMAL</Button>
                                        </td>
                                    </tr>
                                </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                <Footer />
                </main>
        </Row>
    </div>
  )
}

// Delete sweetAlert
    




export default Index;
