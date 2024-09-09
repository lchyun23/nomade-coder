/*
typeof를 써야 하는 것.
number, boolean, string, undefined, function, string

instanceof
[], {} array, object

*/

console.log(typeof "111212");
console.log(typeof function () {});
console.log(typeof undefined);

typeof true;
typeof true;

typeof null; // object로 뜨는데 이것은 버그이다.

console.log({} instanceof Array);

const myArray = new Array();

//primitive(string, boolean, number 등)에서 작동하지 않는다.
// array, object에서 작동한다.
