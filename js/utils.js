export const URL = "https://jsonplaceholder.typicode.com/posts";
export const URL_BAD = "https://jsonsplaceholder.typicodaaaaae.com/postsaa";
const postsContainer = document.querySelector("#posts-container")
const fetchTypeH3 = document.querySelector("#fetch-type")
export const renderResults = (posts, fetchType) => {
    fetchTypeH3.innerHTML = fetchType;

    postsContainer.innerHTML = "";

    posts.forEach(({title, body}) => {
        const li = document.createElement("li");
        li.innerHTML = `<div style="font-weight: bold">${title}</div>
                        <div>${body}</div>`;
        postsContainer.appendChild(li);
    });
}