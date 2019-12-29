const fillNumbers = function(limit){
    let numbers = []
    for(let i = 2; i <= limit; i++){
        numbers.push(i)
    }
    return numbers
}

const removeNotPrimes = function(arrNumbers){
    for(let i = 0; i < arrNumbers.length; i++){
        for (let j = arrNumbers[i]; j < arrNumbers.length; j++){
            let notPrime = arrNumbers[i] * j
            let indexOfNotPrime = arrNumbers.indexOf(notPrime)
            if(indexOfNotPrime != -1){
                arrNumbers.splice(indexOfNotPrime, 1)
            }
        }
    }
    return arrNumbers
}

let numbers = fillNumbers(120)
numbers = removeNotPrimes(numbers)
console.log(numbers)