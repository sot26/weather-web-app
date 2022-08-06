import axios from "axios";
import React, { useState } from "react";


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c6db16aef776709f696f51d89e1edb76&units=metric`


  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }



  return (
    <div className="app text-white h-screen w-full">
      <div className="px-[15px] flex justify-between flex-col h-screen pt-6  pb-20 sm:px-[20%]">
        <div className="">
          <div className="flex justify-center pb-20">
            <input className="h-[35px] rounded-full pl-4 bg-transparent border-2 border-gray-300 text-xl"
              type="text"
              onChange={event => setLocation(event.target.value)}
              onKeyPress={searchLocation}
              placeholder="Enters location"
            />
          </div>
          
          <div>
            <p className="text-4xl 2xl:text-6xl">{data.name}</p>
          </div>
          <div className="pt-6">
          {
            data.main ? <p className=" font-bold text-7xl sm:text-9xl 2xl:text-[150px]">{data.main.temp.toFixed()}°C</p> : null
          }
          </div>
          <div>
          {
            data.weather ? <p className="descrip text-2xl">{data.weather[0].main}</p> : null 
          }
          </div>
        </div>
        {data.name != undefined &&
          <div className="bottom h-auto rounded-3xl">
          <div className="flex justify-between px-10 py-4">
            <div className="flex flex-col items-center">
            {
              data.main ? <p className="font-bold text-3xl 2xl:text-6xl">{data.main.feels_like.toFixed()} °C</p> : null
            }
              <p className="text-2xl 2xl:text-4xl">Feels like</p>
            </div>
            <div className="flex flex-col items-center">
            {
              data.main ? <p className="font-bold text-3xl 2xl:text-6xl">{data.main.humidity} %</p> : null
            }
              <p className="text-2xl 2xl:text-4xl">Humidity</p>
            </div>
            <div className="flex flex-col items-center">
            {
              data.wind ? <p className="font-bold text-3xl 2xl:text-6xl">{data.wind.speed.toFixed(1)} mph</p>  : null
            }
              <p className="text-2xl 2xl:text-4xl">Wind Speed</p>
            </div>
          </div>
      </div>
        }
        
    </div>
  </div>
  );
}

export default App;
