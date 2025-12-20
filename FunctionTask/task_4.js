// რიცხვთა მასივიდან დაიტვალეთ ლუწი რიცხვების ჯამი
arr=[1,2,3,4,5,6,7,8,9]
let evennumb=arr.filter(even=>even%2==0)

// let evensum=evennumb.reduce((x,y)=>{
//     return x+y
// })
// console.log(evensum)

let evennumsum=arr.reduce((x,y)=>{
    if(y%2===0){
        x=x+y
    }
    return x
},0)
console.log(evennumsum)

let even=arr.filter(num=>num%2==0).map(num=>num*2).reduce((x,y)=>x+y)
// console.log(even.map(x=>x+2))
console.log(even) //ბეჭდავს გაორმაგებულს რადგან map-ში ვამრავლებთ ორზე თითეულ წევრს
