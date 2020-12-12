//ForOf Loop

console.log("ForOf Loops ----------------------------------")

const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'soccer', 'gunners']


//"Normal loops"
console.log("normal way to do loops")

for (let i = 0; i < subreddits.length; i++) {
    console.log(`Visit reddit.com/r/${subreddits[i]}`)
}


//"Easoer improved way ("ForOf way")"
console.log("ForOf loop version -----------------------------")

for (let sub of subreddits) {
    console.log(`visit reddit.com/r/r${sub}`)
}

//Example

console.log()
console.log("Example")

const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Markus'],
    ['Yuma', 'Max', 'Jack', 'Irina']
]

console.log("Normal loops -----------------------------")

for (let i = 0; i < seatingChart.length; i++) {
    const row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log(row[j])
    }
}

console.log("ForOf loops -----------------------------")

for (let row of seatingChart) {
    for (let student of row) {
        console.log(student);
    }
}