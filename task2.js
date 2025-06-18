function sumSliceArray(arr, first, second) {
  if (!Array.isArray(arr)) throw new Error("arr має бути масивом");
  if (typeof first !== "number" || typeof second !== "number") {
    throw new TypeError("Індекси повинні бути числами");
  }
  if (first < 1 || second < 1 || first > arr.length || second > arr.length) {
    throw new RangeError("Індекси виходять за межі масиву");
  }

  return arr[first - 1] + arr[second - 1];
}

try {
  const arr = [10, 20, 30, 40, 50];
  const result = sumSliceArray(arr, 2, 5);
  console.log("Результат:", result);
} catch (error) {
  console.error("Помилка:", error.message);
}
