let serial = 0;
// // mouse over random color

document.addEventListener("mouseover", function () {
  makeRandom("random-card-one");
  makeRandom("random-card-two");
  makeRandom("random-card-three");
  makeRandom("random-card-four");
  makeRandom("random-card-five");
  makeRandom("random-card-six");
});

// clicking blog button

document.getElementById("blog").addEventListener("click", function () {
  window.location.href = "blog.html";
});

// clicking edit button
document.getElementById("edit-btn").addEventListener("click", function () {
  const edit = document.getElementById("edit");
  edit.removeAttribute("class");

  document.getElementById("check-btn").removeAttribute("style");
});

// clicking check box

const myCheckbox = document.getElementById("check");
const myElement = document.getElementById("check-btn");

myCheckbox.addEventListener("click", function () {
  myElement.style.display = "none";

  
});

// triangle card

document.getElementById("triangle-btn").addEventListener("click", function () {
  // getting-input-value
  const triangleInputB = getINputValue("triangle-input-b");
  const triangleInputH = getINputValue("triangle-input-h");
  const Name = getInnerText("triangle-name");

  // validation

  const val = validation(triangleInputB, triangleInputH);
  if (val === false) {
    return;
  }

  // calculate result
  serial++;
  const triangleAreaResult = 0.5 * triangleInputB * triangleInputH;

  const triangleArea = isFloat(triangleAreaResult);
  // setting table input

  tableInput(serial, Name, triangleArea);
});

// rectangle card

document.getElementById("rectangle-btn").addEventListener("click", function () {
  // getting-input-value
  const rectangleInputW = getINputValue("rectangle-input-w");
  const rectangleInputL = getINputValue("rectangle-input-l");
  const Name = getInnerText("rectangle-name");

  // validation

  const val = validation(rectangleInputW, rectangleInputL);
  if (val === false) {
    return;
  }

  // calculate result
  serial++;
  const rectangleAreaResult = rectangleInputW * rectangleInputL;

  const rectangleArea = isFloat(rectangleAreaResult);
  // setting table input

  tableInput(serial, Name, rectangleArea);
});

// Parallelogram card

document
  .getElementById("parallelogram-btn")
  .addEventListener("click", function () {
    // getting-input-value

    const parallelogramInputB = getINputValue("parallelogram-input-b");
    const parallelogramInputH = getINputValue("parallelogram-input-h");
    const Name = getInnerText("parallelogram-name");

    // validation

    const val = validation(parallelogramInputB, parallelogramInputH);
    if (val === false) {
      return;
    }

    // calculate result
    serial++;
    const parallelogramAreaResult = parallelogramInputB * parallelogramInputH;

    const parallelogramArea = isFloat(parallelogramAreaResult);
    // setting table input

    tableInput(serial, Name, parallelogramArea);
  });

// Rhombus card

document.getElementById("rhombus-btn").addEventListener("click", function () {
  // getting-input-value
  const rhombusInputD1 = getINputValue("rhombus-input-d1");
  const rhombusInputD2 = getINputValue("rhombus-input-d2");
  const Name = getInnerText("rhombus-name");

  // validation

  const val = validation(rhombusInputD1, rhombusInputD2);
  if (val === false) {
    return;
  }

  // calculate result
  serial++;
  const rhombusAreaResult = 0.5 * rhombusInputD1 * rhombusInputD2;

  const rhombusArea = isFloat(rhombusAreaResult);
  // setting table input

  tableInput(serial, Name, rhombusArea);
});

// Pentagon card

document.getElementById("pentagon-btn").addEventListener("click", function () {
  // getting-input-value
  const pentagonInputP = getINputValue("pentagon-input-p");
  const pentagonInputB = getINputValue("pentagon-input-b");
  const Name = getInnerText("pentagon-name");

  // validation

  const val = validation(pentagonInputP, pentagonInputB);
  if (val === false) {
    return;
  }

  // calculate result
  serial++;
  const pentagonAreaResult = 0.5 * pentagonInputP * pentagonInputB;

  const pentagonArea = isFloat(pentagonAreaResult);
  // setting table input

  tableInput(serial, Name, pentagonArea);
});

// Ellipse card

document.getElementById("ellipse-btn").addEventListener("click", function () {
  // getting-input-value
  const ellipseInputA = getINputValue("ellipse-input-a");
  const ellipseInputB = getINputValue("ellipse-input-b");
  const Name = getInnerText("ellipse-name");

  // validation
  const val = validation(ellipseInputA, ellipseInputB);
  if (val === false) {
    return;
  }

  // calculate result
  serial++;
  const pi = 3.14;
  const ellipseAreaResult = pi * ellipseInputA * ellipseInputB;

  const ellipseArea = isFloat(ellipseAreaResult);

  // setting table input

  tableInput(serial, Name, ellipseArea);
});
