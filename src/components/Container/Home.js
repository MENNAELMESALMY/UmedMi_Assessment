import React,{useState} from "react";
import { Card, Popconfirm, message, Row, Col, Button ,Modal } from "antd";
import "antd/dist/antd.css";
import "../../style.css"
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

function Home(props) {

  const Patients = useSelector((state) => state.Patients);

  const dispatch = useDispatch();
    //handle modal appearance
  const [modal, setModal] = useState({ visible: false });
    //handle saving input to edit patient
  const [patient, setPatient] = useState({ Name: "" , Age:"",Gender:"",_id:1});
    //save edit data
  const handleChange = (e) => {
    setPatient({...patient
          ,[e.target.id]: e.target.value
        });
     }
  //edit patient modal function
  const showModal = (id) => {
    setPatient({...patient
        ,_id: id
      });
    setModal({ visible: true });
  };

  const handleOk = () => {
    if(patient.Age=="" || patient.name=="" || patient.Gender=="" || Number(patient.Age) < 0)
    {
    Modal.error({
        title: 'This is an error message',
        content: 'Sorry,you need to enter all fields with valid data to update a patient',
    });
    }
    else{
    dispatch({type: "EDIT_Patient", patient: patient} );
    }

    handleCancel();
  };

  const handleCancel = () => {
    document.getElementById("editForm").reset(); 
    setModal({ visible: false });
    setPatient({Name: "" , Age:"",Gender:"",_id:1})
  };

  //delete patient function
  const deletePatient = (id) => {
    message.success("The Patient is successfully deleted");
    dispatch({ type: "DELETE_Patient", _id: id });
  };

  const PatientsCards = Patients.map((Patient) => {
    return (
      <Card
        key={Patient._id}
        type="inner"
        title={Patient.Name}
        headStyle={{
          color: "#41085c",
          fontSize: 38 + "px",
          fontWeight: 700,
          boxShadow: "0 2px 2px rgba(79,43,121,.37)",
        }}
        bodyStyle={{ fontSize: 18 + "px", color: "#41085c" }}
        style={{ marginTop: 16 }}
        extra={
          <div>
            <EditOutlined
              style={{
                color: "#41085c",
                fontSize: 22 + "px",
                fontWeight: 500,
                marginRight: 10 + "px",
                cursor: "pointer",
              }}
              onClick={() =>{showModal(Patient._id)}}
            />

            <Popconfirm
              title="Are you sure you want to delete this Patient?"
              placement="topRight"
              onConfirm={() => {
                deletePatient(Patient._id);
              }}
              okText="Yes"
              cancelText="No"
            >
              <a>
                <DeleteOutlined
                  style={{
                    color: "#41085c",
                    fontSize: 22 + "px",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                />
              </a>
            </Popconfirm>
          </div>
        }
      >
        <p>Age: {Patient.Age}</p>
        <p>Gender: {Patient.Gender}</p>
      </Card>
    );
  });

  return (
    <div>
      {PatientsCards}
      <Modal
      title="Edit Patient"
      visible={modal.visible}
      onOk={() =>{ handleOk() }}
      onCancel={handleCancel}
    >
        <form id="editForm">
            <input type="text" required placeholder="Patient Name" className="customInput" id="Name" onChange={handleChange}/>
            <br/>
            <input type="number" required placeholder="Patient Age" className="customInput" id="Age" onChange={handleChange}/>
            <p>Please select the patient gender:</p>
            <input type="radio" id="male" name="gender" value="Male" className="customRadio" id="Gender" onClick={handleChange}/>
            <label htmlFor="male">Male</label>
            <input type="radio" id="female" name="gender" value="Female" className="customRadio" id="Gender" onClick={handleChange}/>
            <label htmlFor="female">Female</label>
        </form>
    </Modal>
      <Row justify="center">
        <Col span={6}>
          <Button
            type="primary"
            style={{
              background:
                "transparent linear-gradient(91deg,#4f2b79,#9c0067) 0 0 no-repeat padding-box",
              width: 100 + "%",
              border: "none",
              marginTop: 20 + "px",
              height: 48 + "px",
              boxShadow: "0 3px 6px rgba(79,43,121,.37)",
              borderRadius: 15 + "px",
              color:"white"
            }}
            onClick={()=>{props.history.push('/AddPatient')}}
          >
            Add a New Patient
          </Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;

