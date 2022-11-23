import "./Forecast.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import { IoChevronDown } from "react-icons/io5";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const CurrentWeather = ({ data }) => {
  const dayInWeek = new Date().getDay();
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
            <AccordionItemPanel></AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default CurrentWeather;
