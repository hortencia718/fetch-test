
let dogButton = document.querySelector("button#hello-button")
let dogUl =document.querySelector("#dogs")
// (1)select/get the element 
// console.log(dogButton);





dogButton.addEventListener("click", (evt) =>{

   fetch("https://dog.ceo/api/breeds/image/random")
   .then((resp) =>  resp.json())
   .then((dogObj) => {
       let dogLi = document.createElement("li")
    //   (2) create the element 
       let dogImg = document.createElement("img")
         dogImg.src = dogObj.message

       dogLi.append(dogImg)
    //    (3)show the element
       dogUl.append(dogLi)
    //    console.log(dogLi)
    //    console.log(dogObj)
   })
   
  })
  console.log(dogObj)
  
// })


// just another way to write a fucntion definition 
// function thisIsRegularFunction(arg1){

// }

// this is a arrow function if therre is no block
// if you take out the cruly's add the value you want to r/t will r/t that value
// let thisIsRegularFunction = (arg1) => "chicken"
// returns chicken w/o curly's
// with curly
// let thisIsRegularFunction = (arg1) => {

// }

// arr.forEach((element)=>{
// do something with element
// })




// schema for foxes
// table
// t.string "name"
// t.string "img_url"
// 


// seed file
// def img_link num
// 