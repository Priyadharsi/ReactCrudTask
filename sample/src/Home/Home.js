import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { stateContext } from '../Context/stateContext';

const Home = () => {
  const navigate=useNavigate();

  // const taskarr=JSON.parse(localStorage.getItem('taskarr'));
  // console.log("taskarr");

  const {state,dispatch}=useContext(stateContext)
  console.log("state",state)

  const Form=()=>{
    navigate("/Form");
  }
  
  const [items,setitems]=useState(state.taskarr);
  
  const edititem=(obj)=>{
    navigate(`/Form?name=${obj.name}`)
  }

  const deleteitems = (id) =>{
    setitems(()=>items.filter((item,index)=>index != id))
    console.log(items)
  }
  localStorage.setItem('taskarr',JSON.stringify(items));

  return (
    <div>
      <table border="1">
      <thead>
      <tr>
         <th>Id</th>
         <th>Taskname</th>
         <th>Description</th>
         <th>Completed</th>
         <th>Edit</th>
         <th>Delete</th>
      </tr>
      </thead>

      <tbody>

      {items?.map((item,index)=>(<tr key={index}>
                         <td>{index+1}</td>
                         <td>{item.name}</td>
                         <td>{item.des}</td>
                         <td>{item.isComplete}</td>
                         <td><button onClick={()=>edititem(item)}>Edit</button></td>
                         <td><button onClick={()=>deleteitems(index)}>Delete</button></td>
                         </tr>
                         )) }
                         </tbody>
    </table>
    <div>
      <button onClick={()=>Form()}>Form</button>
    </div>
    </div>
  )
}


export default Home