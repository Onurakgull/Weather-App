import React from "react";

const City = ({ city }) => {
  console.log(city);
  return (
    <div>
      <div className="mb-2 my-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        <h1 className="text-5xl font-bold">{city.main.temp} °C</h1>
        <h1 className="text-3xl font-semibold">{city.name}</h1>
        <h1 className="text-2xl">{city.weather[0].main}</h1>
      </div>
    </div>
  );
};

export default City;