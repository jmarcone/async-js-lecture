import {URL, URL_BAD, renderResults} from "./utils.js";

const fetchPosts = async () => {
    const getData = await fetch(URL);
    if (!getData.ok) {
        throw new Error(`The fetch failed with a status of ${getData.status}`);
    }
    return await getData.json();
}

const posts = await fetchPosts();
renderResults(posts, "async/await");

fetchPosts.then(posts => renderResults(posts, "async/await"));


//the same
//renderResults(await fetchPosts());




