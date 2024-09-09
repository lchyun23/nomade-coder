console.log( [10] === [10] ); // false
// 두 개는 다르다. 다른 메모리 주소를 가지고 있다.

console.log( {'a' : 20} === {'a' : 20}); // false

let a = 50;
let b = a;   <---- 50;

a = 10; // 중간에 바꾼다고 해도 b는 계속해서 50이다.

console.log(b); //50 -> value


const sexy = ["kimci", "potato"];
const pretty = sexy;

sexy.push("hELLO"); // 이걸 넣은 다음에 console 찍으면 ['kimchi', 'potato', 'hELLO'] 

console.log(pretty); // ['kimchi', 'potato'] 

// reference. sexy를 변경했더니 pretty가 변경되었다. 값의 복사가 아니라 배열을 '참조'하고 있는 것이다.


// value는 string, number, boolean, NaN, undefined, null 가능
// reference는 array, object, function 에서 사용


const x = {
    a: "hello"
};

const c = x; // lalala

c.a = "lalala";

console.log(x); // { a: 'lalala' }