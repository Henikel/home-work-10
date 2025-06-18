try {
  Rectangle.setWidth(5);
  Rectangle.setHeight(10);

  console.log("Периметр:", Rectangle.getPerimeter());
  console.log("Площа:", Rectangle.getArea());
} catch (e) {
  console.error(e.message);
}
