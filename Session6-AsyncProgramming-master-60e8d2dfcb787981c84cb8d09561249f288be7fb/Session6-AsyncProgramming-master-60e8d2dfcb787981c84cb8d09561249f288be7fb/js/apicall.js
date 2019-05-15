// function getRepositories(){

//     //Return a promise
//     console.log('getRepositories...');
//     //Make an http request call to gitlab api using AJAX
//     return new Promise((resolve,reject) =>{
//         const httpRequest = new XMLHttpRequest();
//         //open the httprequest
//         httpRequest.open('GET','https://gitlab-cts.stackroute.in/api/v3/projects?private_token=vqtjh1Pftxz8gTcry22');
//         httpRequest.onreadystatechange = ()=>{
//             //console.log(httpRequest.readyState);
//             if(httpRequest.readyState === XMLHttpRequest.DONE){
//                 if(httpRequest.status == 200){
//                    // console.log(typeof(httpRequest.response));
    
//                     //converting a string to JSON
//                  //console.log(JSON.parse(httpRequest.response));
//                    resolve(JSON.parse(httpRequest.response));
                    
//                 }
//                 else if(httpRequest.status == 404){
//                     reject(new Error('Invalid URL..'));
//                 }
//                 else if(httpRequest.status == 401){
//                     reject(new Error('UnAuthorized User (invalid accesstoken)'));
//                 }
//                 else {
//                     reject(new Error('some internal error occured...'))
//                 }
//             }
//         } 
//         httpRequest.send();
//     })
    

// }

function getRepositories(){
    //Using Fetch
    // 
   return  fetch('https://gitlab-cts.stackroute.in/api/v3/projects?private_token=vqtjh1Pftxz8NgTcry22').
   then(response =>{
     //   console.log('response from Fetch-->',response);
        if(response.ok){
            return response.json();
        }
        else if(response.status == 404){
            return Promise.reject(new Error('Invalid URL'));
        }
        else if(response.status === 401){
            return Promise.reject(new Error('UnAuthorized User'));
        }else{
            return Promise.reject(new Error('some internal error occured...'))
        }

      
    }).then(reposList =>{
        console.log('final response');        
       // console.log(reposList);
        return Promise.resolve(reposList);
        
    }).catch(error =>{
       // console.log('error',error);
        return Promise.reject(error);
    })
}


getRepositories().then(reposList =>{
   // console.log('response from getRepositories-->', reposList);

   //DOM Manipulation
   const tableEle = document.getElementsByTagName('table')[0];
  // console.log(tableEle);
   const tbodyEle = tableEle.getElementsByTagName('tbody')[0];
   console.log(tbodyEle);

   let tbodyHtmlString = '';

    reposList.forEach(repo => {
      //console.log( repo.path_with_namespace +"->" + repo.forks_count +" ->" + repo.open_issues_count);
       tbodyHtmlString += 
      `<tr>
           <th>${repo.path_with_namespace}</th>
           <td>${repo.forks_count}</td>
           <td>${repo.open_issues_count}</td>
           <td>${repo.owner.name}</td>
        </tr> `;
    });

    tbodyEle.innerHTML = tbodyHtmlString;

    
   
   
    
}).catch(error =>{
    console.log('error ->',error.message);
    
})