import StyledClock from "./StyledClock";
import { useEffect, useState } from "react";

const Clock = (): JSX.Element => {
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [intervalCallback, setIntervalCallback] =
    useState<NodeJS.Timeout | null>(null);
  useEffect(() => {
    if (intervalCallback === null) {
      setIntervalCallback(setInterval(() => setDateTime(new Date()), 1000));
    }
    return () => {
      if (intervalCallback === null) {
        return;
      }
      clearInterval(intervalCallback);
    };
  }, [intervalCallback]);
  return (
    <StyledClock>
      {dateTime.toLocaleTimeString()}
    </StyledClock>
  );
};

export default Clock;
