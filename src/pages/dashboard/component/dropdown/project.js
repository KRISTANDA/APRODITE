import { Form } from 'react-bootstrap'
import './dropdownStyle.css'

const Project = (props) => {
    return(
        <div className="dropdown">
            <span className="text-dropdown"> {props.title} </span>
            <span className="text-dropdown"> : </span>
            <Form.Select aria-label="Default select example" className="filter shadow-sm b">
                <option value="0">ALL</option>
                <option value="1">AVP PROJECT </option>
            </Form.Select>
        </div>
    )
}

export default Project