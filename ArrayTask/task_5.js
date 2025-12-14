// ვიპოვოთ ორ  მასივს შორის საერთო
numarr1=[2,4,6,7]
numarr2=[2,8,9,7]
for(let num of numarr1){
    if(numarr2.includes(num))
    console.log(num)
}
// დავწეროთ function-ით
function commonelement(arr1,arr2){
    let common=[]       // ცარიელი მასივი სადაც ვინახავთ საერთო ელემენტებს
    for(let number of arr1){
        if(arr2.includes(number)){
            // console.log(number)
            common.push(number)
        }
    }
    return common
}
console.log(commonelement(numarr1,numarr2))