function sorting(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
  let maxIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
  if (arr[j] > arr[maxIndex]) {
  maxIndex = j;
    }
  }
  if (maxIndex !== i) {
  [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
  }
}
return arr}

function calculateMedian(list) {
  let arr = [];
  if (!Array.isArray(list))
  return null;
  for (let i = 0; i < list.length; i++) {
  if (typeof list[i] === "number")
    arr.push(list[i]);
  }
  if (arr.length === 0)
    return null;
  sorting(arr);
if (arr.length % 2 === 0)
    return (arr[arr.length / 2 ] + arr[arr.length / 2 - 1]) / 2;
  else
  return arr[Math.floor(arr.length / 2)];
}

const array = [1, 2, 3, 4, "apple", 6];
calculateMedian(array);

module.exports = calculateMedian;