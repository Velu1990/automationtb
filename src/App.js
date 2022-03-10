import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table';

function App() {

  const [tableData,setTableData]=useState([
  {projectid:"27968" , requestorname : "Sanmuganthan" ,description :"Pre-Fabricated Handrail 30 x 30 mm sqt ,1.6-2mm thickness"
  , reqn :"1136789" ,comments :"Micro" ,  amount :"457600" , status:"Completed"} ,

  {projectid:"27975" , requestorname : "Santhosh Ponnusamy" ,description :"Turning Fixture Base No. WK- 615312049 Common Base mfg  cost with accessories complete"
  , reqn :"1134919 " ,comments :"Sonepar" ,  amount :"47399" , status:"Pending"} ,

  {projectid:"27980" , requestorname : "Patric Paul" ,description :"Hoffmann Trolley without Tools"
  , reqn :"1150230 & 1150237" ,comments :"Multitech" ,  amount :"52000" , status:"Completed"} ,

  {projectid:"28001" , requestorname : "Gokul M" ,description :"Pin point - Project Management, System Integration and Configuration"
  , reqn :"1136716" ,comments :"company store" ,  amount :"423000" , status:"Pending"} ,

  {projectid:"28007" , requestorname : "Swetha Ramesh" ,description :"Vertical manlift"
  , reqn :"1136794 " ,comments :"Dynamic" ,  amount :"800000" , status:"Completed"}

  ])


  const columns = [

    {title:"Project ID",field:"projectid"},
    {title:"Requestor Name",field:"requestorname"},
    {title:"Description",field:"description"},
    {title:"Reqn",field:"reqn"},
    {title:"Comments",field:"comments"},
    {title:"Amount", field:"amount"},
    {title:"Status", field:"status"}
  ]

  return (
    <div className="App">
    <h1 align ="center">ME React-App </h1>
    <h4 align ="center">Nextgen Coupa and CBS Process Tracker </h4>
    
    <MaterialTable columns={columns} data={tableData} title="ME Daily Tracker"/>
      
    </div>
  )
}

export default App;
