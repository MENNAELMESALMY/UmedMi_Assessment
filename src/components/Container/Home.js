import React from  'react';
import { Card,Popconfirm, message} from 'antd';
import "antd/dist/antd.css";
import { DeleteOutlined,EditOutlined } from '@ant-design/icons';
import "../../style.less"
import { useSelector, useDispatch } from 'react-redux'

function Home() {
    
    function confirm() {
        message.success('The Patient is successfully deleted');
    }
    
    function cancel(e) {
        console.log(e);
        message.error('Click on No');
    }
    const Patients = useSelector(state => state.Patients);
    const dispatch = useDispatch();

    const deletePatient = (id) =>{
        confirm();
        dispatch({type: "DELETE_Patient",_id: id})
    }

    const PatientsCards = 
    Patients.map(Patient =>{
        return(
            <Card key={Patient._id}
            type="inner" 
            title={Patient.Name}
            headStyle={{color: '#41085c',fontSize:38+'px',fontWeight:700 ,boxShadow: '0 2px 2px rgba(79,43,121,.37)'}}
            bodyStyle={{fontSize:18+'px' ,color: '#41085c'}}
            style={{ marginTop: 16}}
            extra={<div>
            <EditOutlined style={{color:'#41085c',fontSize:22+'px',fontWeight:500,marginRight:10+'px',cursor:"pointer" }} />

            <Popconfirm
            title="Are you sure you want to delete this Patient?"
            placement="topRight"
            onConfirm={()=>{deletePatient(Patient._id)}}
            okText="Yes"
            cancelText="No"
            >
            <a>
            <DeleteOutlined 
            style={{color:'#41085c',fontSize:22+'px',fontWeight:500 ,cursor:"pointer" }} 
            />
            </a>
            </Popconfirm>

            </div>} >
             <p>Age: {Patient.Age}</p>
             <p>Gender: {Patient.Gender}</p>
           </Card>
        )
    })
   
    return(
        <div>
     {PatientsCards}
     </div>
    )
}


export default Home