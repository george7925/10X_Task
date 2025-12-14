// მასივიდან წავშალოთ ნებისმიერი ელემენტი
arr=["gio","lika","nika","vika"]
// 1ხერხი -ბოლო ელემენტის წაშლა
arr.splice(arr.length-1)
console.log(arr)
arr.splice(0,0,"lasha") //პირველი ელემენტის შემდეგ არ ვშლი და ისე ვამატებ
arr.splice(0,1,"lasha") //პირველი ელემენტის შემდეგ  ვშლი "gio"-ს და ისე ვამატებ
console.log(arr)
// მეორე ელემენტის ჭაშლა თუ მინდა 
arr.splice(1,1)
console.log(arr)
// დავწეროთ  ზოგადი ფუნქცია მასივიდან კონკრეტული ელემენტის წაშლის
// index=arr.indexOf("gio") // ვგებულობთ კონკრეტული ელემენტის ინდექსს
function removeElement(arr,element){
  
        index=arr.indexOf(element)
        arr.splice(index,1)
        return arr
    
}
console.log(removeElement(arr,'lasha'))
//თუ ისეთი ელემენტია გადაცემული რომელიც არ გვაქვს მასივში მაშინ ინდექსი დააბრუნებს -1
//და წაშლის ბოლო ელემენტს, ამიტომ უნა  ცავდგათ if-ი
function removeelem(arr,element){
    index=arr.indexOf(element)
    console.log(index) //თუ დალოგავს -1
    if(index==-1){
        return "not found"  //return შეწყვიტავს ფუნქციის მუშაობას
    }
    arr.splice(index,1)
    return arr
}
console.log(removeelem(arr,"nodar"))