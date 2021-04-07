
let dogButton = document.querySelector("button#hello-button")
// console.log(dogButton);





dogButton.addEventListener("click", function(evt){

   fetch("https://dog.ceo/api/breeds/image/random")
   .then((resp) =>  resp.json())
   .then((dogObj) => {
       console.log(dogObj)
   })
    //   return resp.json() 
    // console.log("hello from line 14")
  
//    let thirdPromiseObj = theSecondPromise.then(function(dogObj){
//     console.log(dogObj)
  })
 
  
})


// just another way to write a fucntion definition 
function thisIsRegularFunction(arg1){

}

// this is a arrow function if therre is no block
// if you take out the cruly's add the value you want to r/t will r/t that value
let thisIsRegularFunction = (arg1) => "chicken"
// returns chicken w/o curly's
// with curly
let thisIsRegularFunction = (arg1) => {

}

// arr.forEach((element)=>{
// do something with element
// })
