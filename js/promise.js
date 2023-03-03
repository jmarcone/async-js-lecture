const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        //we can shange them to see!
        if(true){
            resolve("success!");
        }else
        {
            reject("there was an error!");
        }
        //

    },1000);
})

console.log(myPromise);

//try to invoke it and it'll fail!!
//  myPromise()


//to use it


myPromise
//     //this then means, actually the promises is fulfilled
     .then(
         promisedValue => console.log(promisedValue)
     )
//     //this will catch errors
     .catch(error => console.error(error));

 console.log(myPromise)



 const myFunction = (callback) => {
     //do something
     callback(anotherCallback)
}