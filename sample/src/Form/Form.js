import React, {useContext, useEffect,useState} from 'react'
import { useNavigate , useSearchParams} from 'react-router-dom';
import { stateContext } from '../Context/stateContext';

const Form = () => {
  const {state,dispatch}=useContext(stateContext)
  console.log("state",state)
    const [params]=useSearchParams()
    console.log(params.get("name"))
    const navigate=useNavigate();
    const [taskname,settaskname]=useState("");
    const [taskdesp,settaskdesp]=useState("");
    const[Completed,setCompleted]=useState();
    // const[taskarr,setarr]=useState(JSON.parse(localStorage.getItem("taskarr"))|| []);
    const [errorshow,seterror]=useState(false);

    useEffect(()=>{
      if (params.get("name")!=null){
        const datas=JSON.parse(localStorage.getItem("taskarr"));
        console.log(datas)
        const bun=datas.find((item)=>item.name === params.get("name"));
        console.log(bun);
        settaskname(bun.name);
        settaskdesp(bun.des);
        setCompleted(bun.isComplete);
      }
    },[params])

    const setName=(e)=>{
        console.log("[taskname",e.target.value);
        settaskname(e.target.value);
    }
    const setDesp=(e)=>{
        console.log("taskdesp",e.target.value);
        settaskdesp(e.target.value);
    }
    const setComplete=(e)=>{
        console.log("Completed",e.target.checked);
        setCompleted(e.target.checked ? "Yes":"No");
    }
    // const pusharray=()=>{
    //     setarr([taskname,taskdesp,Completed,...taskarr]);
    // }
    

    // const pusharray=()=>{
    //     taskarr.push(taskname,taskdesp,Completed);
    //     console.log(taskarr)
    // }
    // localStorage.setItem("taskarr",JSON.stringify(taskarr));

    const handlesubmit=(e)=> {
        e.preventDefault();
        seterror(true);
        if (taskname==="" || taskdesp==="")
         return;
           console.log(taskname,taskdesp,Completed);
          //  const arrval={name:taskname,des:taskdesp,Complete:Completed}
          //  setarr([...taskarr,arrval]);
          //  console.log(taskarr)

    
    if (params.get("name")==null){
      // const arrval={name:taskname,des:taskdesp,isComplete:Completed}
      // setarr([...taskarr,arrval]);
      dispatch({type:"FORM",payload:[...state.taskarr,{name:taskname,des:taskdesp,isComplete:Completed}]})
    }else{
      const newState = state.taskarr.map(obj=>{
        if (obj.name === params.get("name")){
          return {name:taskname,des:taskdesp,isComplete:Completed}
        }
        return obj;
      });
      // setarr(newState)
      dispatch({type:"FORM",payload:newState})
    }
  }

  // localStorage.setItem("taskarr",JSON.stringify(taskarr));

    const home=()=>{
      navigate("/Home")
    }
    

  return (
    <div>
        <form onSubmit={handlesubmit}>
            <label>Taskname</label>
            <input type="text" placeholder="TaskName" value={taskname} onChange={setName}/>
            {taskname ==="" && errorshow && <h5>Taskname is required.</h5>}
            <label>Description</label>
            <input type="text" placeholder="Description" value={taskdesp} onChange={setDesp}/>
            {taskdesp ==="" && errorshow && <h5>Description  is required.</h5>}
            <label>isComplete</label>
            <input type="checkbox" onChange={setComplete}/>
            <input type="submit"/>
        </form>
        <div>
          <button onClick={()=>home()}>Home</button>
            {/* {taskarr.map((item,index)=>(
                <p key={index}>{item}</p>
            ))} */}
        </div>
      
    </div>
  )
}

export default Form