import React from 'react'
import '../styles/App.css';
//make years and days array
function generateArray(start,end){         
  let arr = [];
  for(start; start <= end; start++){
    arr.push(start);
  }
  return arr;
}

const months =  ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']; 
//1-31
const days = generateArray(1,31);
//1900-today
const years = generateArray(1900,(new Date).getFullYear());

function calculateAge(){ 
  // Complete function here
}


const App = ()=> {

function handleMonthChange(){
 }

function handleYearChange(){
 }

function handleSubmit(){

 };
 
 return ( 
     <div>
     <h1>Age Calculator</h1>
   
    <div  className='container' data-tag='container'> 
      <Input tag="day"></Input>
      <Input tag="month"> </Input>
      <Input tag="year"></Input>
      <button onClick={handleSubmit}></button>
    </div>
     
       {/* <div className = "container" data-tag="container"> */}
         {/* <Input tag="day"  /> */}
{/*          */}
         {/* <Input   tag="month"  /> */}
{/*        */}
{/*          */}
         {/* <Input tag='year' /> */}
{/*               */}
       {/* <button type="submit" data-tag='submit'>Calculate</button> */}
     {/* </form> */}
     {/* <div> */}
       {/* <h2>Your age is</h2> */}
   {/* </div> */}

   </div>
  ) 
}




function Input(props){

                             
  return  <select data-tag={props.tag}  >
              {/* {options} */}
           </select>;
  }



export default App; 
