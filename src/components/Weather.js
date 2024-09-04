import React from "react";
import Thermometer from '../assets/thermometer-sun.svg'

const Weather = ({ weatherData }) => {
  const dayArray = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  
  const convertDate = (date_data) => {
    const curDay = new Date(date_data);
    const dayStr = dayArray[curDay.getDay()];
    const monthStr = curDay.getMonth() < 10 ? `0${curDay.getMonth()}` : curDay.getMonth();
    return (
      <>
        <p>{`${monthStr}-${curDay.getDate()}-${curDay.getFullYear()}`}</p>
        <p>{dayStr}</p>
      </>
    );
  };

  return (
    <ul id="weather-items-container">
      {weatherData.map((item, i) => {
        return (
          <React.Fragment key={item.dt}>
            {i % Math.floor(weatherData.length / 5) === 0 && (
              <li className="weather-items">
                {convertDate(item.dt_txt)}
                {/* <p>{item.dt_text}</p> */}
                <p><img src={Thermometer} alt='icon'/>{`${item.main.temp}°F`}</p> {/* alt + 0176 */}
                {/* <p>{item.weather[0].description}</p> */}
                <div><img className='small-icon' src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='icon' /></div>
               </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Weather; 