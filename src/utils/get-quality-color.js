export function getQualityColor(value) {
  let color = 'secondary';
  switch (value) {
    case 'Нудила':
      color = 'primary';
      break;
    case 'Странный':
      color = 'secondary';
      break;
    case 'Троль':
      color = 'success';
      break;
    case 'Алкоголик':
      color = 'danger';
      break;
    case 'Красавчик':
      color = 'info';
      break;
    case 'Неуверенный':
      color = 'dark';
      break;
    default:
      break;
  }

  return color;
}
