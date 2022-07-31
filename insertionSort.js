console.log('Insertion Sort')

const readline = require('readline-sync')

const a = Number(readline.question('Enter the number of elements you wish to enter:\n'))
let numArray = []
for (let i = 0; i < a; i++){
    const entry = Number(readline.question(`Enter element ${i+1}: \n`))
    numArray.push(entry)
}

console.log(`The sequence to be sorted is: ${numArray}\n`)

for (let j = 1; j < numArray.length; j++){
    let key = numArray[j];
    i = j - 1;
    while (numArray[i] > key && i > -1) {
        numArray[i+1] = numArray[i]
        i = i - 1;
    }
    numArray[i+1] = key 
}

console.log('The Array has been sorted using insertion sort\n')
console.log(`The Sorted Sequence is ${numArray}`);