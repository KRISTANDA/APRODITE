import { InputGroup, Form, DropdownButton, Dropdown } from "react-bootstrap"
import Table from './table'
import Pagination from './pagination'

const Task = () => {
    return(
        <>
        <div className="text-light bg-secondary d-flex align-items-center">
            <i class="bx bx-cloud-download bx-md"></i>
            <h3 className="fw-bold ms-3">Assigned Task</h3>
        </div>

        <div className="d-flex justify-content-between mt-3">
            <div className="d-flex align-items-center">
                <InputGroup className="w-50">
                    <Form.Control aria-label="Text input with dropdown button" />
                    <DropdownButton variant="outline-secondary" title="" id="input-group-dropdown-2" align="end" >
                    <Dropdown.Item href="#">5</Dropdown.Item>
                    <Dropdown.Item href="#">10</Dropdown.Item>
                    <Dropdown.Item href="#">15</Dropdown.Item>

                    </DropdownButton>
                </InputGroup>
                <p className="ms-4 mt-3 fw-bold">Record Per Page</p>
            </div>
            <div className="d-flex align-items-center">
                <p className="mt-3 fw-bold">Search:</p>
                <input type="search" class="form-control ms-3" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
            </div>
        </div>

        <Pagination />

        <Table />

        <Pagination />
        </>
    )
}

export default Task