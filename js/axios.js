import {URL, URL_BAD, renderResults} from "./utils.js";

const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

axios.post(URL, newPost)
    .then(response => renderResults([response.data], "Axios Results"))
    .catch(error => console.error(error))
;