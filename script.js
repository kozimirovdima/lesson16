"use strict";
class First {
  hello() {
    console.log("Привет я метод родителя!");
  }
}
class Second extends First {
  hello() {
    super.hello(); // Вызываем метод hello из класса First
    console.log("А я наследуемый метод!");
  }
}
// Создаем экземпляр класса Second
const secondInstance = new Second();

// Вызываем метод hello из класса Second
secondInstance.hello();
