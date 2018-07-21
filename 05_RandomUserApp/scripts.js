var url = "https://randomuser.me/api/";

var avatarDisplay = document.querySelector('#avatar');
var fullnameDisplay = document.querySelector('#fullname');
var usernameDisplay = document.querySelector('#username');
var emailDisplay = document.querySelector('#email');
var cityDisplay = document.querySelector('#city');

var btn = document.querySelector("#btn");

window.onload = requestUser;

btn.addEventListener("click", requestUser);

function requestUser(){
        fetch(url)
        .then(parseJSON)
        .then(updateProfile)
        .catch(handleErrors)
}

function handleErrors(res){
    if(!res.ok){
        throw Error(res.status);
    }
    return res;
}

function updateProfile(data){
    avatarDisplay.src = data.picture.medium;
    fullnameDisplay.innerText = capitalizeFirstLetter(data.name.first) + " " + capitalizeFirstLetter(data.name.last);
    usernameDisplay.innerText = data.login.username;
    emailDisplay.innerText = data.email;
    cityDisplay.innerHTML = capitalizeFirstLetter(data.location.city);
}

function parseJSON(res){
    return res.json().then(function(data){
        return data.results[0];
    })
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
