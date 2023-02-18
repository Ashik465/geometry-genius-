let serial = 0;
// // mouse over random color

// document.addEventListener("mouseover", function () {
//   makeRandom("random-card-one");
//   makeRandom("random-card-two");
//   makeRandom("random-card-three");
//   makeRandom("random-card-four");
//   makeRandom("random-card-five");
//   makeRandom("random-card-six");
// });

// clicking blog button

document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// triangle card

document.getElementById("triangle-btn").addEventListener("click", function () {
  const rectangleInputW = getINputValue("triangle-input-b");
  const rectangleInputL = getINputValue("triangle-input-h");
  const Name = getInnerText("triangle-name");

  const val = validation(rectangleInputW, rectangleInputL);
  if (val === false) {
    return;
  }

  serial++;
  const rectangleAreaResult = 0.5 * rectangleInputW * rectangleInputL;

  const rectangleArea = isFloat(rectangleAreaResult);

  tableInput(serial, Name, rectangleArea);
});

// rectangle card

document.getElementById("rectangle-btn").addEventListener("click", function () {
  const rectangleInputW = getINputValue("rectangle-input-w");
  const rectangleInputL = getINputValue("rectangle-input-l");
  const Name = getInnerText("rectangle-name");

  const val = validation(rectangleInputW, rectangleInputL);
  if (val === false) {
    return;
  }

  serial++;
  const rectangleAreaResult = rectangleInputW * rectangleInputL;

  const rectangleArea = isFloat(rectangleAreaResult);

  tableInput(serial, Name, rectangleArea);
});
