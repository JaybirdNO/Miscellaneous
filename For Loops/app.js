// FOR LOOPS

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log(6)
console.log(7)
console.log(8)
console.log(9)
console.log(10)


//LOOP EXAMPLES:

console.log("FIRST LOOP")
//  start at 1, stop at 10, add 1 each time
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//  for (
//      [initialExpression];
//      [condition];
//      [incrementExpression]
//      )

console.log("SECOND LOOP, odd numbers (5 to 15)")

for (let i = 5; i <= 15; i += 2) {
    console.log(i)
}

console.log("THIRD LOOP, countdown")

for (let i = 100; i >= 0; i -= 10) {
    console.log(i)
}

// INFINITE LOOPS ------ BAD ----------

// DO NOT RUN THIS LOOP
//
//      Start at 20, stop at 0, add by 1 each time,  FOREVER!
//      for (let i = 20; i >= 0; i++) {
//          console.log
//          }
//
// DO NOT RUN THIS LOOP


//LOOPING OVER ARRAYS

console.log("Looping Over Arrays")
const animals = ['lions', 'tigers', 'bears'];

for (let i = 0; i < animals.length; i++) {
    console.log(i, animals[i]);
}

//0 'lions'
//1 'tigers'
//2 'bears'

//NESTED LOOPS

console.log("Nested loops")

for (let i = 1; i <= 3; i++) {
    console.log(`i is: ${i}`)
    for (let j = 1; j < 4; j++) {
        console.log(`       j is: ${j}`)
    }
}
