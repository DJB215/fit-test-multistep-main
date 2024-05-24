import React from "react";
import moment from "moment";

const WeekdayHeader = ({ date }) => {
  const weekday = moment(date).format("dddd");
  const splitWeekday = weekday.split("\n");

  return (
    <div className="weekday-header">
      <span>{splitWeekday[0]}</span>
      <span>{splitWeekday[1]}</span>
    </div>
  );
};

export default WeekdayHeader;
