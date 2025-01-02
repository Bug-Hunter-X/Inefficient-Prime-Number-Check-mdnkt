function checkIfPrime(number) { 
  if (number <= 1) return false; 
  if (number <= 3) return true; 
  if (number % 2 === 0 || number % 3 === 0) return false; 

  for (let i = 5; i * i <= number; i += 6) { 
    if (number % i === 0 || number % (i + 2) === 0) return false; 
  } 

  return true; 
}

console.log(checkIfPrime(17)); // true
console.log(checkIfPrime(10)); // false
console.log(checkIfPrime(997)); //true (example of large number) 