function isValidIndex(index, arr) {
  return typeof index === "number" && index >= 1 && index <= arr.length;
}

function safeSumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) return console.error("arr має бути масивом");
  if (!isValidIndex(first, arr) || !isValidIndex(second, arr)) {
    return console.error("Неправильні індекси");
  }

  const result = sumSliceArray(arr, first, second);
  console.log("Сума:", result);
}

const data = [5, 15, 25, 35];
safeSumSliceArray(data, 2, 4);
safeSumSliceArray(data, 1, 10);
