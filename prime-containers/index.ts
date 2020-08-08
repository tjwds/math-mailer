const db = require('../database/index');

let currentPrime = db.getDataSync('current_prime');
let startPrimes = db.getDataSync('2T_part1').split(/\r?\n/);
let toWritePrimeDb: string[] = [];

let firstIndex = startPrimes.indexOf(currentPrime);
const allPrimes: string[] = startPrimes.slice(firstIndex + 1);
let processedPrimes: string[] = [];
if (firstIndex > 0) {
    processedPrimes = startPrimes.slice(0, firstIndex);
} else {
    firstIndex = 0;
}
console.log("🥧 Startup complete.")

// number: string, lol
const subnumbers = (number: string): Array<string> => {
    const results: string[] = [];
    for (let i = 0; i < number.length; i++) {
        let append = '';
        for (let j = i; j < number.length; j++) {
            append += number[j];
            if (!results.includes(append)) {
                results.push(append);
            }
        }
    }

    return results;
}

for (let i = firstIndex; i < allPrimes.length; i++) {
    const thisPrime: string = allPrimes[i];
    const candidates = subnumbers(thisPrime);
    const results = candidates.filter(
        candidate => processedPrimes.includes(candidate)
    );

    processedPrimes.push(thisPrime);

    const resultsString = results.join(' ');
    if (resultsString) {
        console.log(thisPrime + ': ' + resultsString)
        toWritePrimeDb.push(thisPrime + ': ' + resultsString);
    } else {
        console.log("no results for " + thisPrime)
    }

    // 3.b. add to big database and also 'to-send' database and last-processed
    if (i % 100 === 0) {
        console.log("SETTING DATA")
        db.setDataSync('current_prime', thisPrime);
        toWritePrimeDb.forEach(prime => {
            db.appendDataSync('processed_prime_db', prime);
            db.appendDataSync('primes_to_email', prime);
        })

        toWritePrimeDb = [];
    }
}

