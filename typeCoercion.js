console.log(4 + "hello"); //4hello
console.log(4 + 4 + "hello"); //8hello
console.log("" == true); //false
console.log(1 == true); //true
console.log(66 + true); //67
console.log("" == true); //false empty string -> convert to zero -> false
console.log(0 == true); //false
console.log(NaN == true); //false
console.log(undefined == true); //false
console.log(null == true); //false
console.log("true" == true); //false boolean을 만나면 숫자로 변환된다. 그런데 true는 NaN이다. 따라서
console.log(Nan == 1); // 한 결과가 된다.

// == 를 쓰면 type coercion 이 일어난다.

console.log("1" === 1); // false 여기서는  강제 변환이 일어나지 않는다.
// === 를 쓰면 type Coercion을 피해갈 수 있다. 버그를 피해가는 방법!

// type conversion : 자바스크립트가 값을 강제로 변환시킨다.
