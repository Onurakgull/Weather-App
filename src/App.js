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
        setCity(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getApi()
  },[search])
  console.log(search);
  return (
    <div className="App">
      How's The Weather ?<br></br>
      
      <input onChange={(e) => setSearch(e.target.value)} className='text-3xl font-bold underline' type="text"/>
      {city && <City city={city} />}
      <div class="mb-6">
          <label for="large-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
      </div>
    </div>
  );
}

export default App;
