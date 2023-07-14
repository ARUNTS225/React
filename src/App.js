import Sidebar from "./componemts/Sidebar";
import Dashboard from "./componemts/Dashboard";
import AddUser from "./componemts/AddUser";
import EditUser from "./componemts/EditUser";
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import { useState } from "react";
import Details from "./componemts/Details/Details";
import Accounts from "./componemts/Details/Accounts";
import Bill from "./componemts/Details/Bill";
import Password from "./componemts/Details/Password";
import Payments from "./componemts/Details/Payments";
import Profile from "./componemts/Details/Profile";

function App() {
  let [users,setUsers]= useState([
    {
      name:'arun',
      email:'arun@gmail.com',
      mobile:'936155598',
      address:'123,dubai mainroad,dubai',
      batch:'B46WET'
    },
    {
      name:'tharun',
      email:'tharun@gmail.com',
      mobile:'933455598',
      address:'123,dubai mainroad,dubai',
      batch:'B46WET'
    },
    {
      name:'varun',
      email:'vrun@gmail.com',
      mobile:'956155598',
      address:'123,dubai mainroad,dubai',
      batch:'B46WET'
    }
  ])
  return <>
  <BrowserRouter>
    <div id="wrapper">
<Sidebar/>
<div id="content-wrapper" className="d-flex flex-column">
<div id="content">
<Routes>
  <Route path="/dashboard" element={<Dashboard users={users} setUsers={setUsers}/>}/>
  <Route path="/add-user" element={<AddUser users={users} setUsers={setUsers}/>}/>
  <Route path="/edit-user/:id" element={<EditUser users={users} setUsers={setUsers}/>}/>
  <Route path="Details" element={<Details/>}>
    <Route path="accounts" element={<Accounts/>}/>
    <Route path="bill" element={<Bill/>}/>
    <Route path="password" element={<Password/>}/>
    <Route path="payments" element={<Payments/>}/>
    <Route path="profile" element={<Profile/>}/> 
 </Route>
 
  <Route path="*" element={<Navigate to='/dashboard'/>}/>
  </Routes>
</div>
</div>
    </div>
    </BrowserRouter>
  </>
}

export default App;
