import { Form } from 'react-bootstrap'
import './dropdownStyle.css'

const Module = (props) => {
    return(
        <div className="dropdown">
            <span className="text-dropdown"> {props.title} </span>
            <span className="text-dropdown"> : </span>
            <Form.Select aria-label="Default select example" className='filter shadow-sm b'>
                <option value="0">ALL</option>
                <option value="1">AVP</option>
                <option value="2">AVP / CMS</option>
                <option value="3">WMS</option>
                <option value="4">CMS</option>
            </Form.Select>
        </div>
    )
}

export default Module