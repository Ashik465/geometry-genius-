// // mouse over random color
// function randomColor() {
//   let color = [];
//   for (let i = 0; i < 3; i++) {
//     color.push(Math.floor(Math.random() * 256));
//   }
//   return "rgb(" + color.join(", ") + ")";
// }

// function makeRandom(id) {
//   document.getElementById(id).style.backgroundColor = randomColor();
// }

// get input value function

function getINputValue(id) {
  const inputField = document.getElementById(id).value;
  return parseFloat(inputField);
}

// get inner text function

function getInnerText(id) {
  const innerText = document.getElementById(id).innerText;
  return innerText;
}

// check is integer or float  function

function isFloat(area) {
  if (Number.isInteger(area) === false) {
    return area.toFixed(2);
  } else return area;
}

// validation function

function validation(firstAreaInput, secondAreaInput) {
  if (
    firstAreaInput === "" ||
    isNaN(firstAreaInput) ||
    firstAreaInput < 0 ||
    secondAreaInput === "" ||
    isNaN(secondAreaInput) ||
    secondAreaInput < 0
  ) {
    alert("please enter a valid number ");
    return false;
  }
}

// table input function

function tableInput(serial, Name, area) {
  const tableBody = document.getElementById("table-body");

  const tr = document.createElement("tr");

  tr.innerHTML = ` <td>${serial}</td>
   <td>${Name}</td>
   <td>${area}cm<sup>2</sup></td>
   <td><button 
   class="btn btn-primary  bg-[#1090D8] border-none" >
    Convert to m<sup>2</sup>
    </button></td>`;

  tableBody.appendChild(tr);
}
