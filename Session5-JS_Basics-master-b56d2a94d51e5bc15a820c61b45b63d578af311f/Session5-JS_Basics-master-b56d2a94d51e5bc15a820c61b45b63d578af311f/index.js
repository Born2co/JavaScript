// two interpreter
// web browser
// Node
//console.log('Welcome to JS Programming ,It is awesome');
//JS is not a static type language
var name = 123123;
console.log('name', name);
console.log('type of name',typeof(name));
var username = 'abc';
console.log('username',typeof(username));

console.log('username',(username));

var password = 'ABC';
//checking the equality
//== , === ( also compares the type)
console.log('username == password', username == password);

console.log('username === password', username === password);
var result = username == password ? 'valid': 'invalid';
console.log(result);

//object declaration
var student = {id:1,name:'Student1',email:'Student1@gmail.com',marks:546.5};

console.log(student.name);

console.log(typeof(student));

class Student{
    
    constructor(id,name,email,marks){
        this.id = id;
        this.name = name;
        this.email = email;
        this.marks = marks;

    }
}

var student2 = new Student(2,'Student2','Student2@gmail.com');
//var student2 = new Student();
student2.id = 3443;
student2.marks = 4564.4;
console.log(student2);
console.log(typeof(student2));
console.log(student === student2);

//functions
function sum(num1,num2){
    var sumResult = num1 + num2;
    return sumResult;
}

const sumResult = sum(100,200);
console.log(sumResult);

var divFn = (num1,num2) =>{
    return num1 / num2;
}

const divResult = divFn(100,200);
console.log('divResult',divResult);

//var vs let
function varLetTest(){
    let number = 1000;
    if(true){
       number = 500;
        console.log('number inside if',number);
        
    }
    console.log('number outside if',number);
    
}

varLetTest();

let arrayTest = [1,'StackRoute',{id:1,name:'StackRoute'},45645.435];
//console.log(typeof(arrayTest));
arrayTest[100] = 4342;
console.log(arrayTest[100]);
//JSON format

//let studentArray : Array<Student>;
let studentsArray = [
    {id:1,name:'Student1',email:'Student1@gmail.com',marks:555,branch:'CSE'},
    {id:2,name:'Student2',email:'Student2@gmail.com',marks:455,branch:'IT'},
    {id:3,name:'Student3',email:'Student3@gmail.com',marks:755,branch:'CSE'},
    {id:4,name:'Student4',email:'Student4@gmail.com',marks:955,branch:'IT'},
    {id:5,name:'Student5',email:'Student5@gmail.com',marks:855,branch:'CSE'},

]

//lenth property
console.log('length ', studentsArray.length);


//every function test
const result1 = studentsArray.every((student)=>{
return student.marks > 300;
});

console.log('every result', result1);

//find function test
const foundStudent = studentsArray.find(student => student.id === 4);
console.log('found Student with id 4 ->',foundStudent);

//findIndex
const index = studentsArray.findIndex(student => student.id === 3);
console.log('findIndex ->',index);

studentsArray.push({id:6,name:'Student6',email:'Student6@gmail.com',marks:955,branch:'IT'});

console.log('after push ->',studentsArray);
// studentsArray.pop();
// console.log('after pop ->',studentsArray);

//splice test
studentsArray.splice(index,1);
console.log('after splice ->',studentsArray);

//forEach
studentsArray.forEach(student =>{
   // student.email = student.email + 'updated'; 
   student.marks +=  50;
})

console.log('forEach result', studentsArray);

let studentsEmail = studentsArray.map(student => student.email);

console.log('studentsEmail',studentsEmail);

//filter the array
let gradeAStudents =studentsArray.filter(student => student.marks > 500);
console.log('gradeAStudents',gradeAStudents);

let CSEStudents = studentsArray.filter(student => student.branch === 'IT');
console.log('CSE Students',CSEStudents);

//sort function

studentsArray.sort((student1,student2)=>{
    return student1.marks === student2.marks ? 0 : student1.marks > student2.marks ? 1 : -1;
});

console.log('sort Result =>',studentsArray);

//reduce
let totalMarks = studentsArray.reduce((accumulator,student)=>{
    accumulator += student.marks;
    return accumulator;
},0);

console.log('total Marks',totalMarks);


// //Group all the students based on their branch
// {
//     'CSE' :[

//     ],
//     'IT' :[

//     ]
// }

let studentsBranchWise = studentsArray.reduce((accumulator,student) =>{
    let key = student['branch'];
    console.log('key',key);
    
    if(!accumulator[key]){
        accumulator[key] = [];
        accumulator[key].push(student);
    }
    else{
        accumulator[key].push(student);
    }
    return accumulator;

},{});

console.log('students branch wise',studentsBranchWise);


























