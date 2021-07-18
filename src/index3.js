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

const calculate = (raduis, callback) => {
  return raduis.map(callback);
  // let output = [];
  // for (let r of raduis) {
  //   output.push(callback(r));
  // }
  // return output;
};
console.log(calculate(raduis, area));
console.log(calculate(raduis, circumfrance));
console.log(calculate(raduis, diameter));
