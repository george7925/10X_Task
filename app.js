// // 
// function sum(){
//     console.log(10+12)
// }
// sum()
// const summ=function(){
//     console.log(10+11)
// }
// summ()
// // console.log( sum1=>10+20)
// const sum2=()=>10+20
// console.log(sum2())
// const sum3=(x,y)=>x+y
// console.log(sum3(11,22))
// const summer=num1=>num1+3
// console.log((summer(12)))

// function count(n) {
//   if (n === 0) 
//     return "0";        // გაჩერება
// count(n - 1);               // საკუთარი თავის გამოძახება
// console.log(n);
// }

// count(3);


arr = [2, 4, 3, 7, 6, 8]
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    if(arr[j]>arr[j+1]){
      let temp=arr[j]
      arr[j]=arr[j+1]
      arr[j+1]=temp
    }
  }
  
}
console.log(arr)