let is_prime = n => {
  if (n==2) return true
  if (n<2) return false
  for(let i=2;i<n;i++){
    if (n%i == 0) return false
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

let pows = give_array(0,1000).map(n => Math.pow(n,2)) //store in memory for efficiency

let cuadratic = (n,a,b)=>{return pows[n]+(a*n)+b} //use stored variable for efficiency
let odds = x => {return x%2!=0}
// const negatives = arr => {return arr.map(e => e*-1)}

let a = b = give_array(-1000,1000).filter(odds);

//for each pair of coeficients, go through n and count the primes. Return the value of a and b that has more primes.
let n = give_array(0,1000);
largest = (obj1, obj2) =>{return obj1.prime_count > obj2.prime_count? obj1:obj2}
// let res = a.map(as => b.map(bs => n.map(ns => cuadratic(ns,as,bs))))

let res = a.map(as =>
              b.map(
                bs => {
                  let newObj = {}
                  newObj['a'] = as
                  newObj['b'] = bs
                  newObj['prime_count'] = n.filter(ns => {return is_prime(cuadratic(ns,as,bs))}).length
                  console.log(newObj)
                  return newObj
                }
              ).reduce(largest)
            ).reduce(largest)

let result = res['a']*res['b']
console.log(result)


//test reduce pattern

// let numbers = [1,2,3,4,5,6,7,8,
//Number of primes
// console.log(numbers.filter(x => {return is_prime(x)}).length)
