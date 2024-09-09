function three() {
  console.log("i love js");
  throw Error("omg im an error");
}
function two() {
  three();
}
function one() {
  two();
}
function zero() {
  one();
}
zero();
