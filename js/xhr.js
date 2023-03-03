import {renderResults, URL, URL_BAD} from "./utils.js";

const xhr = new XMLHttpRequest();


function handleError(event){
    console.log("there was an error", event);
}

function handleProgress(event){
    console.log("there was progress", event);
}


//responseText is undefined when xhr.open()
function onReadyStateChangeHandler(event) {
    console.log(xhr.readyState, xhr.status);

    if(xhr.readyState === 4){
        if(xhr.status !== 200){
            console.error("Finished with errors");
        }else{
            renderResults(JSON.parse(xhr.responseText), "XHR");
        }

    }
}

//both handling ways are valid  you can set it up before or after call definition
xhr.addEventListener('error', handleError);
xhr.addEventListener('progress', handleProgress);
xhr.addEventListener('readystatechange', onReadyStateChangeHandler);

//state change => 0
xhr.open('GET', URL);
//state change => 1
xhr.send();
//when completed state change => 4

//both handling ways are valid  you can set it up before or after call definition
// xhr.onerror = (event) => handleError(event);
// xhr.onprogress = (event) => handleProgress(event);
// xhr.onreadystatechange = (event) => onReadyStateChangeHandler(event);



//check it
console.log(xhr);

console.log("this will log before call completes");

