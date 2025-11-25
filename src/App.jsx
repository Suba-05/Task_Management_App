import { useState } from 'react';
import './App.css';
import Form from "./components/Form";
import Table from "./components/Table";
import Createtask from "./components/Createtask";

function App() {
  const InitialCreate = {
    Title:"",
    Description:"",
    Priority:"",
    Duedate:"",
  };
  const [data, setdata] = useState(InitialCreate);
  const [EditIndex , setEditIndex] = useState(null)
  const [FormData, setFormData] = useState({
    
    Status:"",
    Priority1:"",
  });

  const HandleDataChange = (e) => {
    const {name , value} =e.target;
    setdata((prevData) => ({
      ...prevData,
      [name]:value,
    }));
  };

  {/*
  const HandleFormDataChange = (e) => {
    const {name , value} =e.target;
    console.log({name , value});
    setdata((prevdata) => ({
      ...prevdata,
      [name]:value, 
    })); 
    
  }; */}
  console.log("createdata changed",data);

  const HandleEdit =(index) => {
    const ClickedItem = TableData[index];
    setdata(ClickedItem);
    setEditIndex(index)
  }

  const HandleDelete = (index) => {
    TableData.splice(index , 1);
    // to tell that this data is deleted to virtual DOM 
    setTableData([...TableData]);
  }

  {/* 
  console.log("createdata changed",data);
  const HandleFormDataChange = ({key , Value}) => {
    console.log({key , Value});
    setFormdata({ 
      ...Formdata,
      [key]:Value,
    });
  }; 
  */}
  console.log("createdata changed",FormData);

  //table.jsx functions
   const [TableData , setTableData] = useState([]);

  const HandleSubmit = (e) => {
    e.preventDefault();

    if ( EditIndex === null){
    setTableData([...TableData,data,])
    setdata(InitialCreate)
  }else{

    const UpdateData = [...TableData];
    UpdateData[EditIndex] = data;
    //setdata(InitialCreate);
    setTableData(UpdateData);
    setEditIndex(null);
  }
  };
  

  
  console.log("table data created",{data , TableData});

  const PathName = location.pathname ; 
  
   
  return (
    <div>
      <Form  />
      

      <Createtask 
      EditIndex = {EditIndex}
      data={data}
      HandleSubmit={HandleSubmit}
      HandleDataChange={HandleDataChange}
      
      /> 
      <Table 
      HandleEdit = {HandleEdit}
      HandleDelete = {HandleDelete}
      TableData = {TableData} />

      
      
    </div>
  );
}


export default App;
