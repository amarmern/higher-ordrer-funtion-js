const raduis = [3, 1, 2, 4];
const calculateArea = function (raduis) {
  let output = [];
  for (let r of raduis) {
    output.push(Math.PI * Math.pow(r, 2));
  }
  return output;
};

const calculateCircumfrance = function (raduis) {
  let output = [];
  for (let r of raduis) {
    output.push(2 * Math.PI * r);
  }
  return output;
};

const calculateDiameter = function (raduis) {
  let output = [];
  for (let r of raduis) {
    output.push(2 * r);
  }
  return output;
};

console.log(calculateArea(raduis));
console.log(calculateCircumfrance(raduis));
console.log(calculateDiameter(raduis));
