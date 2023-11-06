import logo from './logo.svg';
import './App.css';
import React, { useState ,useMemo,useEffect} from 'react'
import axios from 'axios';
//import Search1 from './search';
function App() {
  const [dataapi,setdataapi]=useState({ name:"",temp:"",main:""});
  const [search,setsearch]=useState("");
  const  apiKey= "840de593b7028de6e424162454790fe5";
  //const uri= `https://api.openweathermap.org/data/2.5/weather?q=[CITY_NAME]&units=metric&appid=[840de593b7028de6e424162454790fe5]`
  const data1=  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`)
    .then((response) => {
      if (response.data) {
      console.log(response.data);
        setdataapi({      
       name: response.main.name,
          temp: response.main.temp,
           main: response.clouds,
        })
       
      }
    })
    .catch((error) => {
      console.log(error.message);   
    });
    return data1;
   
    const handleClick = ()=>{
      let popup = document.querySelector('.popup-message') ;
      popup.style.disply = 'none';
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
        <button onClick={clearData}>x</button>
        </div>
        <button onClick={searchData}>search</button>
      </form>
      <div className='popup'>
        {
          dataapi && (
            <div className='popup-message'>
              <div className='container2'>
                <h3>name : {          dataapi.name}</h3>
                <h3>temp : {dataapi.temp}</h3>
                <h3>main : {dataapi.main}</h3>
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
