//Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//we need to get the fibonacci series. a fib series starts with  0, 1, 1, 2, 3, 5, 8, 13 so the updates current number would be an +tion of the previous number 
//and the current number while the previous number would be currNumber - prevNumber
function sumFibs(num) {
    let prevNumber = 0;
    let currNumber = 1;
    let result = 0;
    while (currNumber <= num) {
      if (currNumber % 2 !== 0) {
        result += currNumber;
      }
      currNumber += prevNumber;
      prevNumber = currNumber - prevNumber;
    }
  
    return result;
  }
  //sum all prime numbers in a range
  function sumPrimes(num) {
    // Helper function to check primality
    function isPrime(num) {
      const sqrt = Math.sqrt(num);
      for (let i = 2; i <= sqrt; i++) {
        if (num % i === 0)
          return false;
      }
      return true;
    }
  
    // Check all numbers for primality
    let sum = 0;
    for (let i = 2; i <= num; i++) {
      if (isPrime(i))
        sum += i;
    }
    return sum;
  }