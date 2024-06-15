import { NavLink } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function FooterComponent(props) {
  return (
    <div className="footer-form ">
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label={props.label1} />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="primary" type="submit">
          {props.btnform}
        </Button>
      </div>
      <div className="pt-3 text-center">
        <p>
          {props.footer}{" "}
          <span>
            <NavLink to={props.to}>{props.link}</NavLink>
          </span>
        </p>
      </div>
    </div>
  );
}

export default FooterComponent;
