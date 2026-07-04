// class Customer{
//     name;
//     age;
//     address;
//     city;


//     constructor(name,age,address,city){
//         this.name = name;
//         this.age = age;
//         this.address = address;
//         this.city = city;
//     }
// }

// let customer = new Customer("Tharaka",25,"No 12, Galle Road","Galle");
// console.log(customer);


// let customer2 = {
//     name: "Tharaka",
//     age: 25,
//     address: "No 12, Galle Road",
//     city: "Galle",
//     items:[{
//         id:1,
//         name:"items1",
//         price:1500,
//         varites:[{
//             id:1,
//             name:"varites1",
//             price:500
//         }]
//     },{
//         id:2,
//         name:"items2",
//         price:2500

//     },{
//         id:3,
//         name:"items3",
//         price:3500
//     }],
//     father:{
//         name:"Anurasiri",
//         age:66,
//         address:"No 12, Galle Road",
//         city:"Galle"
//     }
// };
// console.log(customer2.name);
// console.log(customer2.age);
// console.log(customer2.address);
// console.log(customer2.city);
// console.log(customer2.items[0].varites[0].price);
// console.log(customer2.father.name);


//DOM(Document Object Model) Manipulation --------------------------------------------------

// document.write("<h1>Hello Tharaka</h1>");

//console.log(document);

// let heading =document.getElementById("heading");

// let count = 0;


// // heading.innerText = "Hello Tharaka";



// function incrimentHeading(){
//     count++;
//     heading.innerText = "Hello Tharaka" + count;
//     console.log("clicked");
// }
// function decrimentHeading(){
//     count--;
//     heading.innerText = "Hello Tharaka" + count;
//     console.log("clicked");
// }

// function changeHeading() {
//     let inputText = document.getElementById("inputText").value;
//     heading.innerText = inputText;


// }


function addition() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let output = document.getElementById("heading");

    let result = parseInt(num1) + parseInt(num2);
    output.innerText = result;

}
function subtraction() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let output = document.getElementById("heading");

    let result = parseInt(num1) - parseInt(num2);
    output.innerText = result;

}
