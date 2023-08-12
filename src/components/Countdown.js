import { useEffect, useState } from "react";
import "./Countdown.css";
import Loading from "./Loading";

const Countdown = () => {
  // timeLeft is in seconds
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    const updateTimeLeft = () => {
      const currentTime = new Date();
      // const newYearTime = new Date(
      //   `${currentTime.getFullYear() + 1}-01T00:00:00`
      // );
      const newYearTime = new Date(currentTime.getFullYear() + 1, 0);

      const timeLeftInSeconds = Math.floor((newYearTime - currentTime) / 1000);
      setTimeLeft(timeLeftInSeconds);
    };

    const intervalId = setInterval(updateTimeLeft, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!timeLeft) {
    return <Loading />;
  }

  let seconds = timeLeft;
  const days = Math.floor(seconds / (60 * 60 * 24));
  seconds = seconds - days * 60 * 60 * 24;
  const hours = Math.floor(seconds / (60 * 60));
  seconds = seconds - hours * 60 * 60;
  const minutes = Math.floor(seconds / 60);
  seconds = seconds - minutes * 60;

  return (
    <div className="countdown">
      <div className="time">
        <h2 className="days">{days}</h2>
        <small>days</small>
      </div>
      <div className="time">
        <h2 className="hours">{formatTime(hours)}</h2>
        <small>hours</small>
      </div>
      <div className="time">
        <h2 className="minutes">{formatTime(minutes)}</h2>
        <small>minutes</small>
      </div>
      <div className="time">
        <h2 className="seconds">{formatTime(seconds)}</h2>
        <small>seconds</small>
      </div>
    </div>
  );
};

export default Countdown;

const formatTime = (number) => {
  return String(number).padStart(2, "0");
};
