import "./CurrentWeather.css";
import { WEEK_DAYS } from "../forecast/Forecast";

const CurrentWeather = ({ data }) => {
  const dayInWeek = new Date().getDay();

  return (
    <div className="weather">
      <p className="city">{data.city}</p>
      <p className="current-day">{WEEK_DAYS[dayInWeek]}</p>
      <div className="top">
        <img
          className="weather-img"
          alt="weather"
          src={`icons/${data.weather[0].icon}.png`}
        />
        <div className="weather-text">
          <p className="temp">
            {Math.round(data.main.temp)}
            &#176;
          </p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
      </div>

      <hr></hr>

      <div className="bottom-grid">
        <div className="bottom-item">
          <label>Wind Speed</label>
          <label>{data.wind.speed} m/s</label>
        </div>

        <div className="bottom-item">
          <label>Humidity</label>
          <label>{data.main.humidity}%</label>
        </div>

        <div className="bottom-item">
          <label>Clouds</label>
          <label>{data.clouds.all}%</label>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
