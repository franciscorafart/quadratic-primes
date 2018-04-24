let cuadratic = (n,a,b)=>{return Math.pow(n,2)+(a*n)+b}

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

let a = b = give_array(-1000,1000);
let products = a.map(as => b.map(bs => bs*as))
