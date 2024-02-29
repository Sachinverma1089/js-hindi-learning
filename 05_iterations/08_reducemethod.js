const myNums = [1,2,3]


// const myTotal = myNums.reduce(function(acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// },0)

const myTotal = myNums.reduce ( (acc,curr)=> acc + curr,0 )
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Js Course",
        price:299
        
    },
    {
        itemName: "Python Course",
        price:999
        
    },
    {
        itemName: "Mobile dev Course",
        price:5999
        
    },
    {
        itemName: "Mobile dev Course",
        price:12999
        
    }
]

const priceToPay=shoppingCart.reduce((acc,item)=> (item.price+acc),0 )
console.log(priceToPay);