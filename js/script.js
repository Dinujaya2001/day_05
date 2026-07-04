class Customer{
    name;
    age;
    address;
    city;


    constructor(name,age,address,city){
        this.name = name;
        this.age = age;
        this.address = address;
        this.city = city;
    }
}

let customer = new Customer("Tharaka",25,"No 12, Galle Road","Galle");
console.log(customer);


let customer2 = {
    name: "Tharaka",
    age: 25,
    address: "No 12, Galle Road",
    city: "Galle"
};
console.log(customer2);