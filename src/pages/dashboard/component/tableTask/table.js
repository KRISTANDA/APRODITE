import { Table, Button } from "react-bootstrap"

function TableTask() {
    return (
        <div className="tablevl">
            <Table bordered hover >
                <thead>
                    <tr>
                        <th>Tasks</th>
                        <th>Next Action</th>
                        <th>Assigned To</th>
                        <th>Created By</th>
                        <th>Update By</th>
                        <th>Last Updated</th>
                        <th>Status</th>
                        <th>Priorty</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <a href="#!" className="text-decoration-none">Accounts Documnets</a>
                        </td>
                        <td>Close</td>
                        <td>Admin</td>
                        <td>Admin</td>
                        <td>Admin</td>
                        <td>27/08/2022</td>
                        <td>Pending</td>
                        <td>Low</td>
                        
                        <td>
                            <Button className="me-3" variant="danger">
                                380 day overdue
                            </Button>
                            <Button className="me-3" variant="primary">
                                Assigned
                            </Button>
                            <Button variant="success">
                                Created
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#!" className="text-decoration-none">Accounts Documnets</a>
                        </td>
                        <td>Close</td>
                        <td>Admin</td>
                        <td>Admin</td>
                        <td>Admin</td>
                        <td>27/08/2022</td>
                        <td>Pending</td>
                        <td>Low</td>
                        
                        <td>
                            <Button className="me-3" variant="danger">
                                380 day overdue
                            </Button>
                            <Button className="me-3" variant="primary">
                                Assigned
                            </Button>
                            <Button variant="success">
                                Created
                            </Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <a href="#!" className="text-decoration-none">Accounts Documnets</a>
                        </td>
                        <td>Close</td>
                        <td>Admin</td>
                        <td>Admin</td>
                        <td>Admin</td>
                        <td>27/08/2022</td>
                        <td>Pending</td>
                        <td>Low</td>
                        
                        <td>
                            <Button className="me-3" variant="danger">
                                380 day overdue
                            </Button>
                            <Button className="me-3" variant="primary">
                                Assigned
                            </Button>
                            <Button variant="success">
                                Created
                            </Button>
                        </td>
                    </tr>
                </tbody>

            </Table>
        </div>
    );
}

export default TableTask