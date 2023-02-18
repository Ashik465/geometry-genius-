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

  const val = validation(triangleInputB,triangleInputH);
  if(val=== false ){
    return ;
  }


 serial++;
  const triangleAreaResult = 0.5 * triangleInputB * triangleInputH;

  const triangleArea = isFloat(triangleAreaResult);

  //  console.log(triangleArea);


  tableInput(serial,Name,triangleArea);

  
});
