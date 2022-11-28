import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { IoChevronDown } from "react-icons/io5";

export const WEEK_DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const Forecast = ({ data }) => {
  const dayInWeek = new Date().getDay() + 1;
  const forecastDays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInWeek)
  );

  return (
    <div className="forecast-wrapper">
      <label className="title">Weekly Forecast</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(1, 8).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item">
                  <div className="icon-temp">
                    <img
                      alt="weather"
                      className="icon-small"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label className="min-max">
                      {Math.round(item.main.temp_min)}
                      <sup>&#176;</sup>
                    </label>
                  </div>
                  <div className="forecast-text">
                    <label className="day">{forecastDays[index]}</label>
                    <label className="description">
                      {item.weather[0].description}
                    </label>
                  </div>
                  <IoChevronDown className="expand" />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure</label>
                  <label>{item.main.pressure} hPa</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Humidity</label>
                  <label>{item.main.humidity}%</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Clouds</label>
                  <label>{item.clouds.all}%</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Wind Speed</label>
                  <label>{item.wind.speed} m/s</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Sea Level</label>
                  <label>{item.main.sea_level}m</label>
                </div>

                <div className="daily-details-grid-item">
                  <label>Feels Like</label>
                  <label>
                    {Math.round(item.main.feels_like)}
                    &#176;
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Forecast;
