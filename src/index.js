import "./styles.css";

const raduis = [3, 1, 2, 4];

const area = (raduis) => {
  return Math.PI * Math.pow(raduis, 2);
};

const circumfrance = (raduis) => {
  return 2 * Math.PI * raduis;
};
const diameter = (raduis) => {
  return 2 * raduis;
};

Array.prototype.calculate = function (callback) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(callback(this[i]));
  }
  // for (let r of raduis) {
  //   output.push(callback(r));
  // }
  return output;
};
console.log(raduis.map(area));
console.log(raduis.calculate(area));
console.log(raduis.calculate(circumfrance));
console.log(raduis.calculate(diameter));

//.....Imporovement 2

// const raduis = [3, 1, 2, 4];

// const area = (raduis) => {
//   return Math.PI * Math.pow(raduis, 2);
// };

// const circumfrance = (raduis) => {
//   return 2 * Math.PI * raduis;
// };
// const diameter = (raduis) => {
//   return 2 * raduis;
// };

// const calculate = (raduis, callback) => {
//   return raduis.map(callback);

//   // let output = [];
//   // for (let r of raduis) {
//   //   output.push(callback(r));
//   // }
//   // return output;
// };
// console.log(calculate(raduis, area));
// console.log(calculate(raduis, circumfrance));
// console.log(calculate(raduis, diameter));

//....................(Imporvment 1)

// const raduis = [3, 1, 2, 4];

// const area = (raduis) => {
//   return Math.PI * Math.pow(raduis, 2);
// };

// const circumfrance = (raduis) => {
//   return 2 * Math.PI * raduis;
// };
// const diameter = (raduis) => {
//   return 2 * raduis;
// };

// const calculate = (raduis, callback) => {
//   let output = [];
//   for (let r of raduis) {
//     output.push(callback(r));
//   }
//   return output;
// };
// console.log(calculate(raduis, area));
// console.log(calculate(raduis, circumfrance));
// console.log(calculate(raduis, diameter));

//......................(Approach)

// const raduis = [3, 1, 2, 4];
// const calculateArea = function (raduis) {
//   let output = [];
//   for (let r of raduis) {
//     output.push(Math.PI * Math.pow(r, 2));
//   }
//   return output;
// };

// const calculateCircumfrance = function (raduis) {
//   let output = [];
//   for (let r of raduis) {
//     output.push(2 * Math.PI * r);
//   }
//   return output;
// };

// const calculateDiameter = function (raduis) {
//   let output = [];
//   for (let r of raduis) {
//     output.push(2 * r);
//   }
//   return output
// };

// console.log(calculateArea(raduis));
// console.log(calculateCircumfrance(raduis));
// console.log(calculateDiameter(raduis));
