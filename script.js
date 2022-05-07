console.log("--------Выводить имя пользователя Vic вместо Vic2");

var name = "Vic 2";
var user = {
  age: 5,
  name: "Vic",
  getName: function () {
    return this.name;
  },
};

const getName = user.getName.bind(user);
console.log(getName());

console.log("--------Выводить имя пользователя Arni");

const user1 = {
  age: 5,
  name: "Vic",
  getName: function () {
    return this.name;
  },
};
const user2 = {
  name: "Arni",
};

const getNameUser = user1.getName.bind(user2);
console.log(getNameUser());
