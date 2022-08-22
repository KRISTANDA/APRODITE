import React from 'react'
import { Container, Row, Col, Card, ListGroup, Dropdown, SplitButton, InputGroup, Form, DropdownButton } from 'react-bootstrap'
import "./style.css"
import 'react-timelines/lib/css/style.css'
import Footer from '../../Components/Footer'
import Task from "./component/task/taskDistribution"
import Speedometer  from "./component/spedo/speedometer"
import Speedometer2  from "./component/spedo/speedometer2"
import TableTask from './component/table/TableTask'
let maps = 'https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Asia%2FJakarta&showTitle=0&showTz=0&showCalendars=1&showTabs=1&showPrint=0'
let img = "../../image/Ellipse.png"

export default function dashboard() {
  return (
    <Container fluid className='container-dashboard'>
        <Row>
            
            <Col md={9} className="border-end border-1 border-dark">
                <Row className='mt-5'>
                    {/* Spedometer */}
                    <Col md={4}>
                        <Speedometer title="Completed Task"></Speedometer>
                    </Col>
                    <Col md={4}>
                        <Speedometer title="Task in Progress"></Speedometer>
                    </Col>
                    <Col md={4}>
                        <Speedometer2 title="Overdue Task"></Speedometer2>
                    </Col>

                    {/* Task Distribution */}
                    {/* <Timeline /> */}
                    <Task />

                </Row>
            </Col>

            <Col md={3} className="side-scroll">
                
                <img src="./image/logokaleender-removebg-preview.png" className="img-fluid"/>

                <div className="text-side text-center mb-5">
                    <h3 className="fw-bold">Website Redesign</h3>
                    <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum minima ea ab.</p>
                </div>

                <div className="maps d-flex justify-content-center mb-5">
                    <iframe src={maps} height={300} width={290}/>
                </div>

                <div className='list-user'>
                    <Card className='shadow border-0'>
                        <ListGroup className=''>
                            <ListGroup.Item className='d-flex justify-content-evenly align-items-center p-3 bg-primary text-white '>
                                <div className='user-img img-fluid'>
                                    <img src={img}/>
                                </div>
                                <div className='user-info lh-1'>
                                    <p className='fw-bold'>Lasna Wati</p>
                                    <p>Web Developer</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-evenly align-items-center p-3 bg-primary text-white '>
                                <div className='user-img img-fluid'>
                                    <img src={img}/>
                                </div>
                                <div className='user-info lh-1'>
                                    <p className='fw-bold'>Lasna Wati</p>
                                    <p>Web Developer</p>
                                </div>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-flex justify-content-evenly align-items-center p-3 bg-primary text-white '>
                                <div className='user-img img-fluid'>
                                    <img src={img}/>
                                </div>
                                <div className='user-info lh-1'>
                                    <p className='fw-bold'>Lasna Wati</p>
                                    <p>Web Developer</p>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>

            </Col>

            <Col md={12} className=" border-top border-dark mt-2 p-4">

                <div className=' text-light bg-secondary d-flex align-items-center'>
                    <i class='bx bx-cloud-download bx-md'></i>
                    <h3 className='fw-bold ms-3'>Assigned Task</h3>
                </div>

                <div className='d-flex justify-content-between mt-3'>

                    <div className='d-flex align-items-center'>
                        <InputGroup className="w-50">
                            <Form.Control aria-label="Text input with dropdown button" />

                            <DropdownButton
                            variant="outline-secondary"
                            title=""
                            id="input-group-dropdown-2"
                            align="end"
                            >
                            <Dropdown.Item href="#">Action</Dropdown.Item>
                            <Dropdown.Item href="#">Another action</Dropdown.Item>
                            <Dropdown.Item href="#">Something else here</Dropdown.Item>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#">Separated link</Dropdown.Item>
                            </DropdownButton>
                        </InputGroup>
                        <p className='ms-4 mt-3 fw-bold'>Record Per Page</p>
                    </div>

                    <div className='d-flex align-items-center'>
                        <p className='mt-3 fw-bold'>Search:</p>
                        <input type="search" class="form-control ms-3" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    </div>
                </div>

                <div className='d-flex justify-content-between mt-4'>
                    <p>Showing 1 to 5 of 100 entries</p>
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    <i class='bx bx-left-arrow-alt'></i> Previous
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link" href="#">1</a></li>
                            <li class="page-item"><a class="page-link" href="#">2</a></li>
                            <li class="page-item"><a class="page-link" href="#">3</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#">
                                    Next <i class='bx bx-right-arrow-alt'></i>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <TableTask />
                
            </Col>

        </Row>
    <Footer />
</Container>
  )
}
