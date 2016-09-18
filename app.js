/*Create an employee array. Store 5 different
employee objects  within Employee array. Print name, age, salary, city, state and pincode of any one employees inside the array in console
*/
let EmployeeArray = new Array();
let employee1={ name: 'preeti',     age: 38,     salary: 60000,     address:{  city:'Trivandrum', state:"Kerala", pinCode:691001 }   };
let employee2={ name: 'alex',     age: 35,     salary: 50000,     address:{  city:'Connecticut', state:"Florida", pinCode:"NW310B" }   };
let employee3={ name: 'femina',     age: 20,     salary: 10000,     address:{  city:'Orlando', state:"New York", pinCode:12345 }   };
let employee4={ name: 'Ali',     age: 25,     salary: 15000,     address:{  city:'Mecca', state:"Madina", pinCode:15076 }   };
let employee5={ name: 'Yardley',     age: 37,     salary: 55000,     address:{  city:'Alwaye', state:"Kerala", pinCode:691301 }   };

/*populating the EmployeeArray with Employee objects*/
EmployeeArray.push(employee1);
EmployeeArray.push(employee2);
EmployeeArray.push(employee3);
EmployeeArray.push(employee4);
EmployeeArray.push(employee5);


let i=prompt("Enter the which-th employee details you want to view. Enter a number from 1 to 5","1");
i--; //js array index starts from 0. So subtracting 1 from whatever user entered



//printing in console
console.log("Employee: "+EmployeeArray[i].name);
console.log("age: "+EmployeeArray[i].age);
console.log("salary: "+EmployeeArray[i].salary);
console.log("adress: "+EmployeeArray[i].address.city+", "+EmployeeArray[i].address.state+" "+EmployeeArray[i].address.pinCode);
