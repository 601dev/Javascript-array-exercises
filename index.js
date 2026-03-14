// Sync & Async; Async Await; Callback; Promise; Fetch project

// Exercise 1

// var words = ["salom", "hayir", "bino", "avtomobil", "velosipedlar", "rels"];
// var uzunSoz = words[0];

// for (let i = 0; i < words.length; i++) {
//   if (words[i].length > uzunSoz.length) {
//     uzunSoz = words[i];
//   }
// }

// console.log(`Eng uzun sozning uzunligi: ${uzunSoz}`);

// Exercise 2

// var array = [
//   {
//     name: "Asadbek",
//     surname: "Abduvoitov",
//   },
//   {
//     name: "Arabboy",
//     surname: "Abduvoitov",
//   },
//   {
//     name: "Farruxbek",
//     surname: "Abduvoitov",
//   },
// ];

// function filterOutObject(array, object) {
//   return array.filter((value) => {
//     return value[object.key] !== object.value;
//   });
// }

// console.log(filterOutObject(array, { key: "name", value: "Asadbek" }));

// Exercise 3 - Alphabetical order checking

// let people = [
//   { name: "John", age: 18 },
//   { name: "Toshmat", age: 17 },
//   { name: "Holmat", age: 19 },
//   { name: "Eshmat", age: 20 },
// ];

// const result = function (data, specific_key) {
//   return data.sort((a, b) => {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   });
// };
// console.log(result(people, "name"));

//Exercise 4 Class Extend Example

// class Citizen {
//   constructor(name, surname, address, age) {
//     this.name = name;
//     this.surname = surname;
//     this.address = address;
//     this.age = age;
//     this.getFullName = function () {
//       return `${this.name} ${this.surname}`;
//     };
//   }
// }

// class Imigrant extends Citizen {
//   constructor(name, surname, address, age, work_address) {
//     super(name, surname, address, age);
//     this.work_address = work_address;
//   }
// }

// class Student_Imigrant extends Citizen {
//   constructor(name, surname, address, age, study_address) {
//     super(name, surname, address, age);
//     this.work_address = study_address;
//   }
// }

// const CitizenOne = new Citizen("Asadbek", "Abduvoitov", "Namangan", "19");
// const ImigrantOne = new Imigrant(
//   "Arabboy",
//   "Abduvoitov",
//   "Toshkent",
//   "23",
//   "USA",
// );
// const StudentOne = new Student_Imigrant(
//   "Bobur",
//   "Aliev",
//   "Dubai",
//   "27",
//   "Academic City",
// );

// console.log(CitizenOne.getFullName());
// console.log(StudentOne.getFullName());
// console.log(ImigrantOne);
// console.log(StudentOne);

// Exercise 5 Facebook example

// var ps = "asadbek123";
// var email = "blabla@gmail.com";

// function loginToFacebook(password, email, callback) {
//   console.log("Sending request to backend...");
//   setTimeout(() => {
//     if (password === "asadbek123" && email === "blabla@gmail.com") {
//       return callback("You logged in to your account");
//     } else {
//       return callback("Ooops something wrong. Password or email is wrong!");
//     }
//   }, 5000);
// }

// loginToFacebook(ps, email, (data) => {
//   console.log(data);
// });

// Exercise 6 Promise Example

// var pw = "123";
// var email = "@mail.ru";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (pw === "123" && email === "@mail.ru") {
//       resolve("You can enter to the website!");
//     } else {
//       reject("Oops something wrong!!!");
//     }
//   }, 5000);
// });

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finally. We got a data!");
//   });

// Exercise 7 Fetch Example

// function getIngredient(RecipeType) {
//   fetch("https://api.sampleapis.com/recipes/recipes")
//     .then((data) => {
//       return data.json();
//     })
//     .then((data) => {
//       console.log(
//         data.filter((value) => {
//           return value.title === RecipeType;
//         })[0].ingredients,
//       );
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

// getIngredient("California Roll Sushi Bowls");
