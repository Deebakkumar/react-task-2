import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const data = [
    {
      name :"apple",
      details:"fruits",
      clr:"whitesmoke",
    },
    {
      name :"carrot",
      details:"vegetables",
      clr:"brown",
    },
    {
      name :"chocolate",
      details:"junk",
      clr:"green",
    }
  ]

// let state = "sanjayn"
// state = "sethu"

  return (
    <div className="App">
        {data.map((item, idx)=>( 
        <SampleCard 
        key={idx}
        name={item.name}
         details={item.details}
          clr={item.clr} /> 
          ))}


    </div>
  );
}

export default App;

function SampleCard (props) {

 const [show, setShow] = useState(false); 

  const handleClick = () =>{
   setShow(!show)
  }

  const describeStyle = { 
    display : show ? "block" :"none" ,

  }


  return (
    <div style={{backgroundColor:props.clr}}className='card-content'>
      <p>Card name : {props.name}</p>

      <p style={describeStyle}>Card Details: {props.details}</p>
      <button style={{color : show ? "red" : "white"}} onClick={()=>{handleClick()}} >{!show ? "show" : "hide"}</button>
    </div> 
  )
}
