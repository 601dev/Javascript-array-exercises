// Exercise for Array
// 1. Create an array of numbers and return the sum of all elements.
// 2. Create an array of strings and return the length of the longest string.
// 3. Create an array of numbers and find the average of all elements.
// 4. Create an array of objects with key-value pairs and filter out objects with a specific key-value pair.
// 5. Create an array of numbers and find the maximum value in the array.
// 6. Create an array of strings and sort the array in alphabetical order.
// 7. Create an array of numbers and find the index of a specific number in the array.
// 8. Create an array of objects with key-value pairs and sort the array based on a specific key.
// 9. Create two arrays of numbers and merge them into a single array.
// 10. Create an array of strings and remove any duplicates from the array.

// Ex-1
// 1. Create an array of numbers and return the sum of all elements.

// const array = [5, 5, 5, 5];

// let sum = array.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,0,);

// console.log(sum);

// Exercise 2.
// Create an array of strings and return the length of the longest string.

// var bobur = ["ozbek", "programmist", "uylangan", "bir_ogil"];

// let maxLength = 0;

// bobur.forEach((word) => {
//   if (word.length > maxLength) {
//     maxLength = word.length;
//   }
// });

// console.log("Length of the longest string:", maxLength);

// var bobur = ["ozbek", "programmist", "uylangan", "bir_ogil"];

// let maxLength = Math.max(...bobur.map((word) => word.length));

// console.log("Length of the longest string:", maxLength);

// Exercise 3 (solution 1) .
// Create an array of numbers and find the average of all elements.

// var joe_hattab = [3, 2, 7, 6, 5];

// let find_average = 0;

// for (i = 0; i < joe_hattab.length; i++) {
//   find_average = find_average + joe_hattab[i];
// }

// console.log(find_average / 5);

// (solution 2)

// var joe_hattab = [3, 2, 7, 6, 5];

// let sum = joe_hattab.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0,
// );
// console.log(sum);

// (solution 3)

// Exercise - 4. Create an array of objects with key-value pairs and filter
// out objects with a specific key-value pair.

// var bobur = {
//   name: "Muhammad",
//   surname: "Aliev",
//   age: 27,
//   city: "Dubai",
// };

// var maryam = {
//   name: "Maryam",
//   surname: "Alieva",
//   age: 1,
//   city: "Dubai",
// };

// var family = [bobur, maryam];

// var baby = family.filter((odam) => odam.age < 10);

// console.log(baby);

// Exercise 5.
// Create an array of numbers and find the maximum value in the array.

// var numbers = [12, 22, 30, 11, 99];

// // let maxLength = Math.max(...bobur.map((word) => word.length));

// let maxValue = Math.max(...numbers.map((number) => number));

// console.log(maxValue);

// Exercise 6.
// Create an array of strings and sort the array in alphabetical order.

// var strings = ["abror", "coco", "bobur", "diyor"];

// console.log(strings.sort());
// 7. Create an array of numbers and find the index of a specific number in the array.

// var numbers = [9, 2, 5, 11, 100];

// var index = numbers.indexOf(9);

// console.log("index of number 9 is", index);

// 8. Create an array of objects with key-value pairs and sort the array based on a specific key.

// var Dubai = {
//   country: "UAE",
//   age: "300",
//   language: "Arabic",
// };

// var Zogora = {
//   country: "Morocco",
//   age: "100",
//   language: "Arabic",
// };

// var Florencia = {
//   country: "Italy",
//   age: "1000",
//   language: "Italian",
// };

// var cities = [Dubai, Florencia, Zogora];

// var rich_history = cities.sort((a, b) => Number(b.age) - Number(a.age));

// console.log(rich_history);

// 9. Create two arrays of numbers and merge them into a single array.

// a = [5, 0, 10, 66];
// b = [13, 44, 2, 0];

// console.log([...a, ...b]);

// 10. Create an array of strings and remove any duplicates from the array.

// var arrayOfStrings = ["box", "mouse", "box", "cat"];

// var remove_duplicates = arrayOfStrings.filter(
//   (value, index, array) => array.indexOf(value) === index,
// );

// console.log(remove_duplicates);

var arrayOfStrings = ["box", "mouse", "box", "cat"];

var remove_duplicates = [...new Set(arrayOfStrings)];

console.log(remove_duplicates);
