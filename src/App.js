import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import axios from 'axios';
//import Search1 from './search';
function App() {
  const [dataapi,setdataapi]=useState({ name:"",temp:"",main:"",description:""});
  const [search,setsearch]=useState("");
  const  APIKey= "840de593b7028de6e424162454790fe5";
  const data1=  axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${APIKey}`)
    .then((response) => {
      if (response.data) {
     //console.log(response.data,"response...");
      setdataapi({      
        name: response.data.name,
        temp: response.data.main.temp,
        main: response.data.weather[0].main,
        description: response.data.weather[0].description,
      })
    console.log(dataapi.name,"name");
      //console.log(dataapi.temp,"temp");
       //console.log(dataapi.main,"main");
      //console.log(dataapi.description,"desc..");
       
      }
    })
    .catch((error) => {
      console.log(error.message);   
    });
    
    const handleClick = ()=>{
      setsearch("") ;
    }
    const clearData = ()=>{
      setsearch("") ;
    }
    const searchData = ()=>{
      let popup = document.querySelector('.popup-message') ;
      popup.style.disply = 'block';
    }
  return (
    <div className='container'>
      <form onSubmit={data1}>
        <div>
        <input type='text' placeholder='search' value={search} onChange={(e)=>setsearch(e.target.value)}/>
        <button onClick={clearData}>clear</button>
        </div>
        <button onClick={searchData}>search</button>
      </form>
      <div className='popup'>
        {
          dataapi && (
            <div className='popup-message'>
              <div className='container2'>
                <h3>name : { dataapi.name}</h3>
                <h3>temp : {dataapi.temp}</h3>
                <h3>main : {dataapi.main}</h3>
                <h3>description : {dataapi.description}</h3>
              </div>
              <button id='cancel-button' onClick={handleClick}>x</button>
            </div>
          )          
        }
    </div>
    </div>
  );
}

export default App;
