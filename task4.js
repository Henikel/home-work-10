function random(min, max, delay, callback) {
  setTimeout(() => {
    if (min < max) {
      const rand = Math.floor(Math.random() * (max - min + 1)) + min;
      callback(null, rand);
    } else {
      callback(new Error("min має бути меншим за max"));
    }
  }, delay);
}

random(1, 10, 1000, (err, number) => {
  if (err) {
    console.error("Помилка:", err.message);
  } else {
    console.log("Випадкове число:", number);
  }
});
