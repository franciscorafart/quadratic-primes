let is_prime = n => {
  let absn = Math.abs(n)
  if (absn==2) return true
  if (absn<2) return false
  for(let i=2;i<absn;i++){
    if (absn%i == 0) return false
  }
  return true
}

let give_array = (i,n) =>{
  let res = []
  abs = Math.abs(n)
  for (i = i; i<=abs; i++){
    res.push(i)
  }
  one = n/abs
  res = res.map(x => x*one)

  return res
}

let cuadratic = (n,a,b)=> {return Math.pow(n,2)+(a*n)+b}
let largest = (obj1, obj2) => {return obj1.consecutive_primes > obj2.consecutive_primes? obj1:obj2}

//function that returns number of consecutive primes given a evaluation function
let consecutivePrimes = (a,b,fn) => {
  let count = 0
  consecutive = true
  while (consecutive){
    if (is_prime(fn(count,a,b)))
      count++
    else
      consecutive = false
  }
  return count
}

let res = give_array(-1000,1000).map(a =>
              give_array(-1000,1000).map(
                b => {
                  let newObj = {}
                  newObj['a'] = a
                  newObj['b'] = b
                  newObj['consecutive_primes'] = consecutivePrimes(a,b,cuadratic)
                  return newObj
                }
              ).reduce(largest)
            ).reduce(largest)

console.log('a: '+res['a']+', b: '+res['b']+', result = '+(res['a']*res['b']))
