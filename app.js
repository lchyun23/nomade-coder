const player = {
  name: "chany",
  sayHello: function (otherPersonsName) {
    console.log("hello! " + otherPersonsName + " nice to meet you");
  },
};

console.log(player.name);
player.sayHello("lynn");
player.sayHello("nico");

// function에게 정보를 보내는 법을 배웠다. console.log() 하는 것처럼 우리만의 것을 만들었다.

function plus(a, b) {
  console.log(a + b);
}
plus(5, 5);
