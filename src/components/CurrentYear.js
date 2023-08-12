import { useEffect, useState } from "react";
import "./CurrentYear.css";

const CurrentYear = () => {
  const [currentYear, setCurrentYear] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (!currentYear) return null;

  return (
    <div className="current-year">
      {currentYear} ➡️ {currentYear + 1}
    </div>
  );
};

export default CurrentYear;
