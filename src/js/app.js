/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

export default function orderByProps(obj, properties) {
  const arr = [];
  for (const key in obj) {
    const value = obj[key];
    const elem = { key, value };
    arr.push(elem);
  }

  // eslint-disable-next-line no-shadow
  function searchProp(properties) {
    const propA = properties[0];
    const propB = properties[1];
    const forDeletionA = arr.filter((item) => item.key === propA);
    const forDeletionB = arr.filter((item) => item.key === propB);
    const forDeletion = forDeletionA.concat(forDeletionB);
    return forDeletion;
  }

  const resultArr = searchProp(properties);

  const newArr = arr.filter((item) => !resultArr.includes(item));

  function compare(a, b) {
    const propA = a.key;
    const propB = b.key;

    let comparison = 0;
    if (propA > propB) {
      comparison = 1;
    } else if (propA < propB) {
      comparison = -1;
    }
    return comparison;
  }

  const sortedArr = newArr.sort(compare);

  const result = resultArr.concat(sortedArr);
  return result;
}
