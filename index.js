export function numberSeperator(value) {
  if (value === null || value === undefined) return 0;
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function objectWithoutKeys(obj, keys, primitive = true) {
  if (!obj) return {};
  if (!keys) return obj;

  let newObj = {};

  if (primitive) {
    newObj = { ...obj };
  } else {
    newObj = obj;
  }

  keys.forEach(key => {
    delete newObj[key];
  });

  return newObj;
}