import React, { useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../../style.css";
//import "../../App.css"
import { useDispatch } from "react-redux";
function AddPatient(props) {
  const dispatch = useDispatch();
  //handle saving input to edit patient
  const [patient, setPatient] = useState({
    Name: "",
    Age: "",
    Gender: "",
    _id: Date.now(),
  });
  const addPatient = () => {
    dispatch({ type: "ADD_Patient", newPatient: patient });
    props.history.push('/');
  };

  const handleChange = (e) => {
    setPatient({ ...patient, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <Row justify="center">
        <Col span={12}>
          <form id="addForm" onSubmit={addPatient}>
            <input
              type="text"
              required
              placeholder="Patient Name"
              className="customInput"
              id="Name"
              onChange={handleChange}
            />
            <br />
            <input
              type="number"
              required
              placeholder="Patient Age"
              className="customInput"
              id="Age"
              onChange={handleChange}
            />
            <p>Please select the patient gender:</p>
            <input
              required
              type="radio"
              id="male"
              name="gender"
              value="Male"
              className="customRadio"
              id="Gender"
              onClick={handleChange}
            />
            <label htmlFor="male">Male</label>
            <input
              required
              type="radio"
              id="female"
              name="gender"
              value="Female"
              className="customRadio"
              id="Gender"
              onClick={handleChange}
            />
            <label htmlFor="female">Female</label>
            <br/>
            <input type="submit" value="Submit" className="addButton"/>
          </form>
        </Col>
      </Row>
    </div>
  );
}

export default AddPatient;
