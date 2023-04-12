import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { stateContext } from '../Context/stateContext';



const Login = () => {
    const navigate = useNavigate();
    // const state = useContext(stateContext);
    // console.log("state",state);
    // const[input, setInput]=useState({username:"",userpswrd:""});

    const [username,setUsername]=useState("");
    const[userpswrd,setPswrd]=useState("");
    const[error,setError]=useState("");
    const User=require("../User.json");
    
    // const handlename=(e)=>{
    //     setInput({...input,[e.target.name]:e.target.value,})
    // }
    // const handlepswrd=(e)=>{
    //     setInput({...input,[e.target.name]:e.target.value,})
    // }
    const handlesubmit=(e)=>{
        e.preventDefault();

    const user =User.find((user)=>user.username === username);
        if (username === "" || userpswrd === ""){
            setError("fill in this field");
        } else if (!user){
            setError("invslid username");
        } else if (user.userpswrd != userpswrd){
            setError("invalid password");
        } else{
            Home();
        }
    }
    const Home=()=>{
        navigate("/Home")
    }
        // console.log(username,userpswrd);
    //    localStorage.setItem("user",JSON.stringify(username));
    //    localStorage.setItem("user",JSON.stringify(userpswrd));
    // const loggeduser=JSON.parse(localStorage.getItem("user"));
    //    if (input.username === loggeduser.username && input.userpswrd === loggeduser.userpswrd){
    //       navigate("/");
    //    } else{
    //     //   alert("wrong Email or Password");
    //     navigate("/Home")
    //    }
    // }
    // useEffect(()=>{
    // localStorage.setItem("username",JSON.stringify(username));

    // },[username]);
  return (
    <form onSubmit={handlesubmit}>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <label>Password:</label>
        <input type="text" value={userpswrd} onChange={(e)=>setPswrd(e.target.value)}/>
        {/* <input type="checkbox" checked={checked} onChange={(e)=>setChecked(e.target.checked)}/> */}
        <input type="submit"></input>
        {error && <div>{error}</div>}
    </form>
  )
}

export default Login