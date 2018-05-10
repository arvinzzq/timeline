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

export {
  objPick,
  popupStorage
}