const convertMsToMinutes = (ms) => Math.round(ms / 1000 / 60);

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const getCommentTime = (timeInMs) => {
  const currentDate = Date.now();
  const date = new Date(+timeInMs);
  const timeInMinutes = convertMsToMinutes(currentDate - timeInMs);
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month = (date.getMonth() + 1) < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;

  if (timeInMinutes <= 1) {
    return '1 минуту назад';
  } else if (timeInMinutes > 1 && timeInMinutes <= 5) {
    return '5 минут назад';
  } else if (timeInMinutes > 5 && timeInMinutes <= 10) {
    return '10 минут назад';
  } else if (timeInMinutes > 10 && timeInMinutes <= 30) {
    return '30 минут назад';
  } else if (timeInMinutes > 60 && timeInMinutes <= 1440) {
    return hours + ':' + minutes; // hours.minutes
  } else if (timeInMinutes > 1440 && timeInMinutes <= 43200) {
    return date.getDate() + ' ' + monthNames[date.getMonth()]; // day.month
  }

  return day + '.' + month + '.' + date.getFullYear(); // day.moth.year
};

export default getCommentTime;
