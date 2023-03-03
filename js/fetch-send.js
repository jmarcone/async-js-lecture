import {URL, URL_BAD, renderResults} from "./utils.js";

const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
};

fetch(URL, {
    method: 'POST',
    body: JSON.stringify(newPost),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then((response) => response.json())
    .then(post => renderResults([post], "Fetch Send Results"))
;