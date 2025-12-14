// დავალება_1 როგორ შეუცვალოთ ადგილები რიცხვებს
let a=5
let b=10
console.log(a,b)
let temp=b       // აქ  ვინახავთ დროებით b-ს მნიშვნელობას
b=a             // აქ კი b-ს  ადგილზე ვსვავთ  a-ს მნიშვნელობას
a=temp          // აქ  კი a-ს უტოლებთ temp-ში შენახულს
console.log(a,b)
// დავალება_2 მასივის მაგალითი დავალაგოთ ზრდადობით
arr=[6,5]
let temporar=arr[0]
arr[0]=arr[1]
arr[1]=temporar
console.log(arr)
// დავალება_3 მასივი დავალაგოთ for ციკლის  დახმარებით
const myarr=[6,3,5,7,2]
//ეს პირველი ციკლი იტვლის რამდენი წევრია მასივში იმდენჯერ განმეორდეს მეორე ციკლი
for(let i=0;i<myarr.length;i++){ 
// მეორე ციკლიც იწყებს პირველი წევრიდან და if -ში ადარებს ერთმანეთ ორ წევრს
    for(let j=0;j<myarr.length;j++){
        //აქ შედარდება ორი მომდევნო წევრი
        if(myarr[j]>myarr[j+1]-1){   //myarr[j+1]-1 იმიტომ რომ if (myarr[4] > myarr[5])   // myarr[5] არ არსებობს → undefined
            let temp=myarr[j]
            myarr[j]=myarr[j+1]
            myarr[j+1]=temp
        }
    }
}
console.log(myarr)
// sort ფუნქციის გამოყენება
myarr.sort((a,b)=>a-b)
console.log(myarr)
