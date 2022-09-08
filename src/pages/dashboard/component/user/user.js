import { Card, ListGroup } from "react-bootstrap"

let img = "../../image/Ellipse.png"

const Periode = () => {
    return(
        <>
        <div className="list-user border-top border-1 border-dark">
            <Card className="border-0">
                <ListGroup className="">
                    <div className="group-user">
                        <ListGroup.Item className="d-flex justify-content-evenly align-items-center p-3 bg-primary text-white rounded-0 ">
                            <div className="user-img img-fluid">
                                <img src={img}/>
                            </div>
                            <div className="user-info lh-1">
                                <p className="fw-bold">Lasna Wati</p>
                                <p>Web Developer</p>
                            </div>
                        </ListGroup.Item>
                    </div>
                    <div className="group-user">
                        <ListGroup.Item className="d-flex justify-content-evenly align-items-center p-3 bg-primary text-white rounded-0 ">
                            <div className="user-img img-fluid">
                                <img src={img}/>
                            </div>
                            <div className="user-info lh-1">
                                <p className="fw-bold">Lasna Wati</p>
                                <p>Web Developer</p>
                            </div>
                        </ListGroup.Item>
                    </div>
                    <div className="group-user">
                        <ListGroup.Item className="d-flex justify-content-evenly align-items-center p-3 bg-primary text-white rounded-0 ">
                            <div className="user-img img-fluid">
                                <img src={img}/>
                            </div>
                            <div className="user-info lh-1">
                                <p className="fw-bold">Lasna Wati</p>
                                <p>Web Developer</p>
                            </div>
                        </ListGroup.Item>
                    </div>
                </ListGroup>
            </Card>
        </div>
        </>
    )
}

export default Periode