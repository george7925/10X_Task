// გვაქვს მომხმარებელთა  ობიექტების მასივი,რომელსც აქვს მინიმუმ სახელი და ასაკი,  
// დაბეჭდეთ ყველა მომხმარებლის სახელი


users=[{username:"nika",age:38},{username:"lika",age:28},{username:"gio",age:18},]
// for(user of users){
//     console.log(user.username)
// }

names=users.map(user=>user.username)
console.log(names)
// დავითვალოთ ყველას  ასაკის ჯამი
let sumage=users.reduce(
    (x,y)=>x+y.age,0
)
console.log(sumage)

const totalAge = users.reduce(
  (sum, user) => sum + user.age,
  0
);
console.log(totalAge)
