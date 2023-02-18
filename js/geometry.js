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
  const triangleInputB = getINputValue("triangle-input-b");
  const triangleInputH = getINputValue("triangle-input-h");
  const Name = getInnerText("triangle-name");

  const val = validation(triangleInputB, triangleInputH);
  if (val === false) {
    return;
  }

  serial++;
  const triangleAreaResult = 0.5 * triangleInputB * triangleInputH;

  const triangleArea = isFloat(triangleAreaResult);

  tableInput(serial, Name, triangleArea);
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


// Parallelogram card 

document.getElementById("parallelogram-btn").addEventListener("click", function () {
  const parallelogramInputB = getINputValue("parallelogram-input-b");
  const parallelogramInputH = getINputValue("parallelogram-input-h");
  const Name = getInnerText("parallelogram-name");

  const val = validation(parallelogramInputB, parallelogramInputH);
  if (val === false) {
    return;
  }

  serial++;
  const parallelogramAreaResult = parallelogramInputB * parallelogramInputH;

  const parallelogramArea = isFloat(parallelogramAreaResult);

  tableInput(serial, Name, parallelogramArea);
});

// Rhombus card 

document.getElementById("rhombus-btn").addEventListener("click", function () {
  const rhombusInputD1 = getINputValue("rhombus-input-d1");
  const rhombusInputD2 = getINputValue("rhombus-input-d2");
  const Name = getInnerText("rhombus-name");

  const val = validation(rhombusInputD1, rhombusInputD2);
  if (val === false) {
    return;
  }

  serial++;
  const rhombusAreaResult = 0.5 * rhombusInputD1 * rhombusInputD2;

  const rhombusArea = isFloat(rhombusAreaResult);

  tableInput(serial, Name, rhombusArea);
});