import { startOfDay, endOfDay, getFullWeekMonthRange } from './dateParams';

Date.prototype.getFullMonth = function() {
  const month = new Array();
  month[0] = 'January';
  month[1] = 'February';
  month[2] = 'March';
  month[3] = 'April';
  month[4] = 'May';
  month[5] = 'June';
  month[6] = 'July';
  month[7] = 'August';
  month[8] = 'September';
  month[9] = 'October';
  month[10] = 'November';
  month[11] = 'December';
  return month[this.getMonth()];
}

export function fullMonthDate(date) {
  const DateTimeFormat = global.Intl.DateTimeFormat;

  return new DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

export function buildWeeks() {
  const weeks = [];
  const weeksToDisplay = 12;
  const today = new Date;
  const first = today.getDate() - today.getDay();
  const last = first + 6;
  let firstDay = startOfDay(today.setDate(first));
  let lastDay = endOfDay(today.setDate(last));

  for (let i = 0; i < weeksToDisplay; i++) {
    weeks.push({
      startDate: firstDay.getTime(),
      endDate: lastDay.getTime()
    });

    firstDay.setDate(firstDay.getDate() - 7);
    lastDay.setDate(lastDay.getDate() - 7);
  }

  return weeks;
}

export function buildMonths() {
  const months = [];
  const lastXMonths = 12;
  const date = new Date;

  for (let i = 0; i < lastXMonths; i++) {
    const { startDate, endDate } = getFullWeekMonthRange(date);
    const month = {
      startDate,
      endDate,
      fullName: date.getFullMonth() + ' ' + date.getFullYear()
    };

    months.push(month);
    date.setMonth(date.getMonth() - 1);
  }

  return months;
}
