// გვაქვს მომხმარებელთა  ობიექტების მასივი,რომელსც აქვს სახელი და ასაკი, გაფილტრეთ მხოლოდ 
// ის მომხმარებლები რომელთა ასაკია 18 წელზე მეტის. 

 usersarr=[
    {
        username:'nika',
        age:19
    },
    {
        username:'lika',
        age:22
    },
    {
        username:'gio',
        age:15
    }
]

// function isadult(){
//     for(user of usersarr){
//         if(user.age>=18){
//             console.log(user)
//         }
//     }
// }
// isadult()

let adult=usersarr.filter(user=>user.age>=18)
    console.log(adult)

