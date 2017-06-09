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
  const today = new Date;
  const first = today.getDate() - today.getDay();
  const last = first + 6;
  let firstDay = new Date(today.setDate(first));
  let lastDay = new Date(today.setDate(last));

  weeks.push({
    firstDay: new Date(firstDay),
    lastDay: new Date(lastDay)
  });

  for (let i = 1; i < 12; i++) {
    const week = {
      firstDay: new Date(firstDay.setDate(firstDay.getDate() - 7)),
      lastDay: new Date(lastDay.setDate(lastDay.getDate() - 7))
    };

    weeks.push(week)
  }

  return weeks;
}
