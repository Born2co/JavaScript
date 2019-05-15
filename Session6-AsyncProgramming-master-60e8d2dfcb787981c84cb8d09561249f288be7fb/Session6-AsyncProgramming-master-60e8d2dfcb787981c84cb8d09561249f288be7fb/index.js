
// function sum(no1,no2,cb){
//     //businesslogic 
//     setTimeout(()=>{
//         cb(no1 + no2);
//     },2000);
    
// }
// //XMLHttpRequest ( AJAX ) or FetchAPI 

// function div(no1,no2,cb){
//    // return cb(no1 / no2);
//    setTimeout(()=>{
//     cb(no1 / no2);
//    },1000);
// }

// // const sumResult = sum(100,200);
// // console.log('sumResult',sumResult);
// // const divResult = div(sumResult,2);
// // console.log('divResult',divResult);
// sum(100,200,(sumResult) =>{
//     console.log('sumResult',sumResult);
//     div(sumResult,2,(divResult)=>{
//         console.log('divResult',divResult);
        
//     })
    
// });

//Promises
//Promise an object which will return a data (success, failure)
function sum(no1,no2){
    let promise = new Promise((resolve,reject)=>{
        //businesslogic
        setTimeout(()=>{
            //if success
            resolve(no1+no2);
            //if fails
            reject(new Error('Some error occured...'));
        },1000)
    });

    return promise;
};

sum(100,200).then(data =>{
    console.log('result',data);
    
}).catch(error =>{
    console.log('error',error);
    
});

let isUserAuthenticated = false;
function getUsersInfo(isUserAuthenticated){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(isUserAuthenticated){
                const users = [
                    {id:1,name:'user1',email:'user1@gmail.com'},
                    {id:2,name:'user2',email:'user2@gmail.com'},
                    {id:3,name:'user3',email:'user3@gmail.com'},
                    {id:4,name:'user4',email:'user4@gmail.com'}
                ];
                //fetch this from API
                resolve(users);
            }
            else{
                reject(new Error('UnAuthorized User....'));
            }
        },1000);
    })
}


//
getUsersInfo(isUserAuthenticated).then(usersList =>{
    usersList.forEach(user => {
        console.log(user.id + "---" + user.name + "---" + user.email);
        
    });
}).catch(error =>{
  //  console.log('error',error);
    //show this information to the user
    console.log('errorMsg',error.message);
    
})

//synchronous code
console.log('Success!!!!');











