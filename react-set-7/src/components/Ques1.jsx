import { useState } from "react";
import { fakeFetch } from "../api/api1";
import { useEffect } from "react";

export const Ques1 = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [tempVar, setTempVar] = useState({ data: null, isFaren: false });
  const [degree, setDegree] = useState("°C");

  const getData = async (url) => {
    try {
      const response = await fakeFetch(url);

      if (response.status === 200) {
        setWeatherData([response.data]);
        setTempVar({ ...tempVar, data: response.data.temperature });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const toggleValue = (e) => {
    if (!tempVar.isFaren) {
      e.target.innerText = "Switch to Celcius";
      setDegree("°F");
    } else {
      e.target.innerText = "Switch to Fahrenheit";
      setDegree("°C");
    }
    setTempVar((prev) => {
      if (!tempVar.isFaren) {
        return {
          ...prev,
          data: Math.round(tempVar.data * 1.8 + 32),
          isFaren: true,
        };
      }
      return {
        ...tempVar,
        data: Math.round(((tempVar.data - 32) * 5) / 9),
        isFaren: false,
      };
    });
  };

  useEffect(() => {
    getData("https://example.com/api/weather");
  }, []);

  return (
    <div>
      <h1>Weather</h1>
      {weatherData.length === 0 && <p>dats is loading...</p>}

      {weatherData.length > 0 &&
        weatherData.map((data, index) => (
          <div key={index}>
            <p>
              Temperature: {tempVar.data} {degree}
            </p>
            <p>Humidity: {data.humidity}%</p>
            <p>Wind Speed: {data.windSpeed} km/h</p>
            <button onClick={toggleValue}>Switch to Fahrenheit</button>
          </div>
        ))}
    </div>
  );
};
