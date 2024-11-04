// 자료구조 - 데이터의 저장 방법

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// Get Item from Array
console.log(daysOfWeek);

/* 시작과 끝에 [] 쓴다. 내부에서는 , 로 구분한다. [] 안에는 뭐든 넣어도 된다. 인덱스는 0부터 시작한다.
 사용자가 할 일 목록을 만들도록 할 때, 그 항목들을 어디다가 저장할 수 있을까? -> 배열 안에 넣으면 좋겠지? */

// Add one more day to the array
daysOfWeek.push("sun");

console.log(daysOfWeek);

/* Array의 목적
    하나의 variable 안에 데이터 list를 가지는 것!
    필요한 수많은 variable의 개수를 확 줄여줄 수 있다.
*/

const toBuy = ["potato", "tomato", "pizza"];
toBuy.push("kimbab");
