import React from  'react';
import { Card } from 'antd';
import "antd/dist/antd.css";
import { DeleteOutlined,EditOutlined  } from '@ant-design/icons';
import "../../style.less"

function Home(props) {
   console.log("home prps",props)
   
    return(
       <Card
        type="inner" 
        title="Ahmed"
        headStyle={{color: '#41085c',fontSize:38+'px',fontWeight:700 ,boxShadow: '0 2px 2px rgba(79,43,121,.37)'}}
        bodyStyle={{fontSize:18+'px' ,color: '#41085c'}}
        style={{ marginTop: 16}}
        extra={<div>
        <EditOutlined style={{color:'#41085c',fontSize:22+'px',fontWeight:500,marginRight:10+'px',cursor:"pointer" }} />
        <DeleteOutlined style={{color:'#41085c',fontSize:22+'px',fontWeight:500 ,cursor:"pointer" }}  />
        </div>} >
         <p>Age: 30</p>
         <p>Gender: Male</p>
       </Card>
    )
}


export default Home