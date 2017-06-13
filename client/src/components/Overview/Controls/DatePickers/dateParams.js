export function startOfDay(date) {
  const startOfDay = new Date(date);

  startOfDay.setHours(0);
  startOfDay.setMinutes(0);
  startOfDay.setSeconds(0);

  return startOfDay.getTime();
}

export function endOfDay(date) {
  const endOfDay = new Date(date);

  endOfDay.setHours(23);
  endOfDay.setMinutes(59);
  endOfDay.setSeconds(59);

  return endOfDay.getTime();
}

export function getDayRange(date) {
  const startDate = startOfDay(date);
  const endDate = endOfDay(date);

  return { startDate, endDate };
}

export function thisQuarter() {
  console.log('get this quarter')
}

export function lastQuarter() {
  console.log('get last quarter')
}

export function thisYearToDate() {
  console.log('get this Year-to-date')
}

export function lastYear() {
  console.log('get last year')
}

export function lastYearToDate() {
  console.log('get last Year-to-date')
}
