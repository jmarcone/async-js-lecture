import {URL, URL_BAD, renderResults} from "./utils.js";

//doing this already send a request
//fetch(URL);


//if I do this, how to get the response values?
// const postsPromise = fetch(URL);
// postsPromise.then(
//     data => console.log(data),
//     error => console.error(error)
// );

//the same
// fetch(URL)
//     .then(response => console.log(response))
//     .catch(error => console.error(error))
// ;
const fetchPromise = fetch(URL);
console.log(fetchPromise);

fetchPromise
    .then(response => {
        console.log(response);
        return response.json();
    })
    .then(
        (posts) => {
            console.log(posts);
            renderResults(posts, "Fetch")
        }
    )
    .catch(error => console.error(error))
;




