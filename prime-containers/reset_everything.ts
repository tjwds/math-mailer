const dontunderstandscope = require('../database/index');

if (false) {
    dontunderstandscope.truncateDataSync('current_prime');
    dontunderstandscope.truncateDataSync('primes_to_email');
    dontunderstandscope.truncateDataSync('pricessed_prime_db');
    console.log("🥧 Goodbye, math!")
} else {
    console.log("🥧 You must make a manual intervention to this file for it to work.")
}