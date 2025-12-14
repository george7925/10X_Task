// დაწერეთ ფუნქცია რომელიც  მასივიდან ამოიღებს ლუწ რიცხვებს და ჩაყრის  ცალკე მასივში
arr=[1,2,3,4,5,6,7,8]
// 1 -ლი ხერხი
function findeven(arr){
    let evenarr=[]
    for(let number of arr){
        if(number%2===0){
            evenarr.push(number)
        }
    }
    return evenarr
}
console.log(findeven(arr))
// 2-ხერხი filter
let even=arr.filter(number=>number%2===0)
console.log(even)