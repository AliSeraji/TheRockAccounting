import { useEffect, useState } from 'react';

// The current date, refreshed at midnight so "today" filters roll over while
// the page stays open. Reading the clock here keeps render pure.
export function useToday(): Date {
  const [today, setToday] = useState(() => new Date());

  useEffect(() => {
    const midnight = new Date(today);
    midnight.setHours(24, 0, 0, 0);
    const timer = window.setTimeout(
      () => setToday(new Date()),
      midnight.getTime() - Date.now()
    );
    return () => window.clearTimeout(timer);
  }, [today]);

  return today;
}
