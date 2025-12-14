// დაწერეთ პროგრამა რომელიც იპოვის მასივში ყველა ლუწი რიცხვის ჯამს
arr = [2, 3, 4, 55, 66, 77]
// -----1 way-------
evensum = 0
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evensum += arr[i]
        console.log(arr[i])
    }
}
console.log("evensum", evensum)
// ------ 2 way------ with function
evensum1 = 0
function EvenSum(numarray) {   //აქ ზოგადად  ვიღებთ numarray-ს რომ ნებ მასივზე იმუშაოს
    for (let i = 0; i < numarray.length; i++) {
        if (numarray[i] % 2 == 0) {
            console.log(numarray[i])
            evensum1 += numarray[i]
        }
    }
}
EvenSum(arr) // აქ ვაწვდით კონკრეტულ მასივს
console.log('evensum1', evensum1)
// ----------- 3 wey ------------
const evensumm=function(array){
    for(let x of array){
        if (x%2===0){
            console.log(x)
        }
    }
}
evensumm(arr)