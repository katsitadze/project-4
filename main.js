// //დაწერე ფუნქცია, რომელიც მიიღებს სამ პარამეტრს (string, valueToReplace, valueToReplaceWith),
// // ჩაანაცვლებს "valueToReplace"-ს "valueToReplaceWith" მნიშვნელობით და დააბრუნებს ახალ stringს

let replace=(string, valueToReplace, valueToReplaceWith)=>{
    let index = string.indexOf( valueToReplace)
     let newstring=string.substr(0,index) + valueToReplaceWith + string.substr(index + valueToReplace.length)
     return newstring;

 }

console.log( replace('my name is mari katsitadze' , 'mari' , 'mariam'));


//  DAVALEBA 2 დაწერე ფუნქცია, რომელიც პარამეტრად მიიღებს string ტიპის მნიშვნელობას (წინადადებას),
// მასში ყოველ სიტყვას გადაწერს დიდი ასოთი და დააბრუნებს ახალ წინადადებას

function upperCase(satz){
    return satz.split(' ')
    .map ( word => word.charAt(0).toUpperCase()+word.slice(1))
    .join(" ")

}

console.log(upperCase('everything depend on us'))


// //DAVALEBA 2.1
function uppercases (sentense){
let words=sentense.split(" ")
const uppercases=words.map( word=> word.charAt(0).toUpperCase() + word.slice(1) )
 return uppercases.join(' ')

}
console.log(uppercases('everything depend on us'))



// davaleba 3

let student=[
{ name:'mariami', age:25},
{ name:"giga",    age:20},
{ name:'salome',  age:29},
{ name:'miranda', age:29},
{ name:'tekla',   age:18},

]
 function sortArr(arr){
    return arr.sort((acc,cur)=>acc.age-cur.age)
 }

 console.log(sortArr(student))


