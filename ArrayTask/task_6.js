// spred ოპერატორი  spred-გაშლა გაფანტვა ანუ მასივის ელემენტებს გამოიტანს ცალცალკე
const arr=[2,4,5,7]
console.log(arr)
console.log(...arr)
// ორი მასივის გაერთიანება
const a=[2,3,4]
const b=[5,6,7]
console.log(...a,...b)
const marge=[...a,...b]
console.log(marge)