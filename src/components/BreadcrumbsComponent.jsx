import React from "react";
import { Link } from "react-router-dom";

function BreadcrumbsComponent(props) {
  return (
    <div>
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container-fluid container">
          <div className="row justify-content-center">
            <div className="col-11">
              <ol>
                <li>
                  <Link to={props.to1}>{props.bread1}</Link>
                </li>
                <li className={props.hide2}>
                  <Link to={props.to2}>{props.bread2}</Link>
                </li>
                <li className={props.hide3}>
                  <Link to={props.to3}>{props.bread3}</Link>
                </li>
                <li className={props.hide4}>
                  <Link to={props.to4}>{props.bread4}</Link>
                </li>
                <li className={props.hide5}>
                  <Link to={props.to5}>{props.bread5}</Link>
                </li>
                <li>{props.now}</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BreadcrumbsComponent;
