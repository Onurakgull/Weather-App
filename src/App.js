import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import City from './City';


function App() {
  const key = "ad178e8f5afe306c6370995d6862e25f";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        console.log(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getApi()
  },[search])
  console.log(search);
  return (
    <div className="App">
      Hello <br></br>
      <input onChange={(e) => setSearch(e.target.value)} className='border-8 bg-slate-500' type="text"/>
      <City city={city}/>
    </div>
  );
}

export default App;
