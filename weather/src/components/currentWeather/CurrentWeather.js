import "./CurrentWeather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <p className="city">{data.city}</p>
      <div className="top">
        <img
          className="weather-img"
          alt="weather"
          src={`icons/${data.weather[0].icon}.png`}
        />
        <div className="weather-text">
          <p className="temp">
            {Math.round(data.main.temp)}
            <sup>&#176;</sup>
          </p>
          <p className="weather-desc">{data.weather[0].description}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
