import React from "react";
import Form from "react-bootstrap/Form";

function InputComponent(props) {
  return (
    <div className="form-input">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>{props.label}</Form.Label>
        <p className={`text-muted ${props.show ? props.show : "d-none"}`}>
          <small>{props.desc}</small>
        </p>
        <Form.Control
          value={props.value}
          onChange={props.change}
          type={props.type}
          placeholder={props.holder}
        />
      </Form.Group>
    </div>
  );
}

export default InputComponent;
