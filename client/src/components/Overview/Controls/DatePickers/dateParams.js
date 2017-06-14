export function startOfDay(date) {
  const startOfDay = new Date(date);

  startOfDay.setHours(0);
  startOfDay.setMinutes(0);
  startOfDay.setSeconds(0);

  return startOfDay;
}


export function endOfDay(date) {
  const endOfDay = new Date(date);

  endOfDay.setHours(23);
  endOfDay.setMinutes(59);
  endOfDay.setSeconds(59);

  return endOfDay;
}


function lastDayOfMonth(inputDate) {
  const date = endOfDay(inputDate);

  date.setMonth(date.getMonth() + 1); // Set date to next month
  date.setDate(1);
  date.setDate(date.getDate() - 1); // Subtract one day to get last day of current month

  return date;
}


export function getMonthRange(inputDate) {
  const date = new Date(inputDate);

  date.setDate(1);

  const startDate = startOfDay(date);
  const endDate = endOfDay(lastDayOfMonth(date));

  return {
    startDate: startDate.getTime(),
    endDate: endDate.getTime()
  };
}


export function getFullWeekMonthRange(inputDate) {
  const date = new Date(inputDate);
  const startDate = startOfDay(date);
  const endDate = endOfDay(lastDayOfMonth(date));

  // Set startDate to the Sunday of the first week of the month
  startDate.setDate(1);
  startDate.setDate(startDate.getDate() - startDate.getDay());

  // Set endDate to the Saturday of the last week of the month
  endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));

  return {
    startDate: startDate.getTime(),
    endDate: endDate.getTime()
  };
}


export function getDayRange(date) {
  const startDate = startOfDay(date);
  const endDate = endOfDay(date);

  return {
    startDate: startDate.getTime(),
    endDate: endDate.getTime()
  };
}


export function thisQuarter(inputDate = new Date()) {
  const startDate = startOfDay(inputDate);
  let endDate = new Date();
  const currMonth = startDate.getMonth();

  startDate.setDate(1);

  // Q1 = 01-01 to 03/31 - 0 to 2
  if (currMonth < 3) {
    startDate.setMonth(0);
    endDate = lastDayOfMonth(endDate.setMonth(2));
  }
  // Q2 = 04/01 to 06/30 - 3 to 5
  else if (currMonth < 6) {
    startDate.setMonth(3);
    endDate = lastDayOfMonth(endDate.setMonth(5));
  }
  // Q3 = 07/01 to 09/30 - 6 to 8
  else if (currMonth < 9) {
    startDate.setMonth(6);
    endDate = lastDayOfMonth(endDate.setMonth(8));
  }
  // Q4 = 10/01 to 12/31 - 9 to 11
  else {
    startDate.setMonth(9);
    endDate = lastDayOfMonth(endDate.setMonth(11));
  }

  return {
    startDate: startDate.getTime(),
    endDate: endDate.getTime()
  };
}


export function lastQuarter() {
  const now = new Date();

  const {
    startDate,
    endDate
  } = thisQuarter(new Date(now.setMonth(now.getMonth() - 3)));
  // thisQuarter returns milliseconds

  return { startDate, endDate };
}


export function thisYearToDate() {
  const startDate = startOfDay(new Date());
  const endDate = endOfDay(new Date());

  startDate.setDate(1);
  startDate.setMonth(0);

  return {
    startDate: startDate.getTime(),
    endDate: endDate.getTime()
  };
}


export function lastYear() {
  const startDate = startOfDay(new Date());
  let endDate = endOfDay(new Date());

  startDate.setDate(1);
  startDate.setMonth(0);
  startDate.setFullYear(startDate.getFullYear() - 1);

  endDate.setMonth(11);
  endDate = lastDayOfMonth(endDate);
  endDate.setFullYear(endDate.getFullYear() - 1);

  return {
    startDate: startDate.getTime(),
    endDate: endDate.getTime()
  };
}


export function lastYearToDate() {
  const startDate = startOfDay(new Date());
  const endDate = endOfDay(new Date());

  startDate.setDate(1);
  startDate.setMonth(0);
  startDate.setFullYear(startDate.getFullYear() - 1);

  endDate.setFullYear(endDate.getFullYear() - 1);

  return {
    startDate: startDate.getTime(),
    endDate: endDate.getTime()
  };
}
