const name="sachin"
const repoCount=50

// console.log(name+repoCount+" Verma");

console.log(`Hello my name is  ${name} and my repo count is ${repoCount}`);

const gameName =new String('Sachin')

console.log(gameName[0]);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('n'));

console.log(gameName.substring(0,4));
const anotherString =gameName.slice(-8,4)
console.log(anotherString)

const newString = new String("     Sachin-Verma    ")

console.log(newString)
console.log(newString.trim());

const url ='https://hitesh.com/hitesh-choudhary'
console.log(url)
console.log(url.replace('%20','-'))

console.log(url.includes('Pichai'))