// alert("are you okay?");

// const name_p = "joy";
// console.log(name_p);
const markWeightArray = [78, 95];
const johnWeightArray = [92, 85];
const markHeightArray = [1.69, 1.88];
const johnHeightArray = [1.95, 1.76];
// const markWeight = 78;
// const johnWeight = 92;
// const markHeight = 1.69;
// const johnHeight = 1.95;

//scope chain
var a = "hello world";
var asd = "hello world";

function ba() {
  function b() {
    if (a === undefined) console.log("yes");
    else console.log(a);
  }
  var a = "hello world1";
  b();
}
ba();
//result -> "hello world"
for (let i = 0; i < 2; i++) {
  const markBMI = markWeightArray[i] / markHeightArray[i] ** 2;
  const johmBMI = johnWeightArray[i] / johnHeightArray[i] ** 2;

  const markHigherBMI = markBMI > johmBMI;
  if (markHigherBMI) {
    console.log(`marks bmi is higher ${markBMI}`);
  } else {
    console.log(`john bmi is higher ${johmBMI}`);
  }
  console.log(markHigherBMI, "markHigherBMI");
}

//this keyword

var cet = {
  name: "hey 1 ",
  log: function () {
    this.name = "hey 2";
    console.log(this);
  },
};

cet.log();

//array

let arr = [
  1,
  false,
  {
    name: "poulami",
    address: "durganagar",
  },
  function (name) {
    let gretting = " hello ";
    console.log(gretting + name);
  },
];

console.log(arr);
arr[3](arr[2].name);

//IIFE

(function greet(firstname) {
  console.log("hello 2" + firstname);
})("poulami");

//clousures

function greet(params) {
  return function (name) {
    console.log(params + "" + name);
  };
}
var sayHi = greet("hello");

sayHi("Polo");

//clousure 2

function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log(j);
        };
      })(i)
    );
  }
  return arr;
}

var fs = buildFunctions();
fs[0]();
fs[1]();
fs[2]();

//prototype , we should never do this, this create performace issues
var person = {
  firstname: "John",
  lastname: "Smith",
  getFullName: function () {
    return this.firstname + "" + this.lastname;
  },
};

var john = {
  firstname: "John",
  lastname: "Doe",
};

john.__proto__ = person;

console.log(john.getFullName());

//function construnctor
function cf(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

cf.prototype.getFullName = function () {
  return this.firstname + "" + this.lastname;
};
var person1 = new cf("poulami", "ghosh");
console.log(person1.getFullName());
