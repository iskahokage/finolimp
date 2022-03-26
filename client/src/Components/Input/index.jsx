import React from 'react';
import {Form} from 'react-bootstrap';
function MyInput({className, text, value, placeholder, onChange}) {
    return (
        <div>
            <Form.Group className=' mt-4' >
                <Form.Label>{text}</Form.Label>
                <Form.Control
                    className= {className}
                    value={value}
                    type="text"
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </Form.Group>
        </div>

    )
}

export default MyInput
