const Rectangle = (function () {
  let width = 1;
  let height = 1;

  function validate(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Сторона має бути числом, більшим за 0.");
    }
  }

  return {
    setWidth: function (w) {
      validate(w);
      width = w;
    },
    setHeight: function (h) {
      validate(h);
      height = h;
    },
    getPerimeter: function () {
      return 2 * (width + height);
    },
    getArea: function () {
      return width * height;
    }
  };
})();
