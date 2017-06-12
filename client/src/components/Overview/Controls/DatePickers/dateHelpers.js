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
  let firstDay = new Date(today.setDate(first));
  let lastDay = new Date(today.setDate(last));

  weeks.push({
    firstDay: new Date(firstDay),
    lastDay: new Date(lastDay)
  });

  for (let i = 1; i < weeksToDisplay; i++) {
    const week = {
      firstDay: new Date(firstDay.setDate(firstDay.getDate() - 7)),
      lastDay: new Date(lastDay.setDate(lastDay.getDate() - 7))
    };

    weeks.push(week)
  }

  return weeks;
}

export function buildMonths() {
  const months = [];
  const lastXMonths = 12;
  const today = new Date;

  for (let i = 0; i < lastXMonths; i++) {
    const month = new Month({
      index: today.getMonth(),
      fullName: `${today.getFullMonth()}, ${today.getFullYear()}`
    });

    months.push(month);
    today.setMonth(today.getMonth() - 1);
  }

  return months;
}

function Month({ index, fullName }) {
  this.index= index;
  this.fullName = fullName;
}
