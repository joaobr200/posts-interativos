function formateDate(date) {
  const newDate = new Date(date);

  const format = `${newDate.getDay()}/${newDate.getMonth()}/${newDate.getFullYear()}`;

  return format;
}

export { formateDate };
