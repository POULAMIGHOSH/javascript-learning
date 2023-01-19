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
