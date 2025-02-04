import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import City from './City';
import { Example } from './component/Example';


function App() {
  const key = "ad178e8f5afe306c6370995d6862e25f";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getApi()
  },[search])
  console.log(search);
  return (
    <>
    <div className="App my-4 p-3 text-xl font-bold text-red-700 bg-slate-300">
      How's The Weather ?<br></br>
      <div className='max-w-sm m-auto p-6 bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 text-center' id="card-weather">
        <input onChange={(e) => setSearch(e.target.value)} className='search-city' type="text"/>
        {city && <City city={city} />}
      </div>
    </div>
    <Example/>
    </>
  );
}

export default App;