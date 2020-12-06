//WHILE LOOPS

console.log("WHILE LOOPS")

console.log("Example")
let num = 0;
while (num < 10) {
    num++;
    console.log(num)
}

console.log("Example")

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while (guess !== SECRET) {
    guess = prompt("enter the secret code...");
}
console.log("Congrats you got the secret")