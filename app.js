const playerName = "nico";
const playerPoint = 121212;
const playerHandsome = false;
const playerFat = "little bit";

// player라는 개체에 대해 설명하고 있는 특성들인 것을 알 수 있다. 데이터를 가능한 최선으로 정리해보도록 하자. 위에처럼 하게 되면 변수를 많이 만들어야 하고, 저런 변수가 있다는 것을 기억해야 해서 별로다.

// const player = ["nico", 1212, false, "little bit"];
// 한 줄로 정리는 되지만, 이게 어떤 의미를 가진 값인지 알 수 없다.

// object를 만들어보자.
const player = {
  name: "nico",
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
// console은 객체이고 그 안에 log라는 속성이 있음을 알 수 있다.
console.log(player["name"]);

console.log(player);
player.fat = false;
player.lastName = "potato";
console.log(player);

// constant는 수정할 수 없는데 어째서 수정이 된 거져? object는 동일하고 그 안의 내용을 수정하는 것이므로 괜찮다.
