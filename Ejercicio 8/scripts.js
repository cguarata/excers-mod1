"use strict";
const apiHost = "https://randomuser.me/api";
let arrayOfUsers = [];

async function getData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data
}
async function createUserArray(url, usersNumber, renderArray) {
    for (let i = 0; i < usersNumber; i++) {
        const data = await getData(url);
        const results = data.results[0];
        const newUser = {
            username: results.login.username,
            name: results.name.first,
            surname: results.name.last,
            gender: results.gender,
            country: results.location.country,
            email: results.email,
            picture: results.picture.medium
        }
        renderArray.push(newUser);
    }
}
createUserArray(apiHost, 8, arrayOfUsers);
console.log(arrayOfUsers);