const objPick = (obj, filters) => {
  if (!(filters instanceof Array)) {
    throw new Error('filters should be type of Array.');
  }
  const resObj = {};
  filters.forEach(item => {
    if (obj.hasOwnProperty(item)) {
      resObj[item] = obj[item];
    }
  });
  return resObj;
};

const storage = window.localStorage;
const popupStorage = {
  setItem(key, value, prefix = 'timeline') {
    storage.setItem(`${prefix}-${key}`, JSON.stringify(value));
  },
  getItem(key, value, prefix = 'timeline') {
    return JSON.parse(storage.getItem(`${prefix}-${key}`, value));
  },
  removeItem(key, prefix = 'timeline') {
    storage.removeItem(`${prefix}-${key}`);
  }
}

const timeUnitFormat = item => `0${item}`.substr(-2);

const convertTimeStampToDate = (timestamp, type) => {
  const date = new Date(timestamp)
  let dateStr;
  switch(type) {
    case 'date':
      dateStr = `${date.getFullYear()}-${timeUnitFormat(date.getMonth() + 1)}-${timeUnitFormat(date.getDate())}`;
      break;
    case 'datetime':
      dateStr = `${date.getFullYear()}-${timeUnitFormat(date.getMonth() + 1)}-${timeUnitFormat(date.getDate())}
      ${timeUnitFormat(date.getHours())}:${timeUnitFormat(date.getMinutes())}:${timeUnitFormat(date.getSeconds())}`;
      break;
    default:
      // do nothing
  }
  return dateStr;
};

export {
  objPick,
  popupStorage,
  convertTimeStampToDate
}