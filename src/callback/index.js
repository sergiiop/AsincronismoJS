const sum = (num1,num2) => {
  return  num1 + num2
}

const calc = (num1,num2, cb) =>{
  return cb(num1,num2)
}

console.log(calc(1,2,sum))

setTimeout(() => {
  console.log('Hello World')
}, 2000);

function grettin(name){
  console.log(`Hola ${name}`)
}

setTimeout(grettin, 5000, 'Sergio');