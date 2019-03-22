let title = document.head.children[1];
let name = document.querySelector('h1.user__name');
let pic = document.querySelector('img.user-info__pic');
pic.setAttribute('alt', 'User Avatar');
let bio = document.querySelector('p.user-info__description');
let link;

let searchName = window.location.search;
let searchParams = new URLSearchParams(searchName);
let login = searchParams.get('username');

let user = {};

let apiUrl = 'https://api.github.com/users/' + login;
fetch(apiUrl)
    .then(response => response.json())
    .then(json => { 
        user = Object.assign({}, json);
        return user;})
    .then(user => { 
        if (user.name) {
            title.innerHTML = user.name;
            name.innerHTML = user.name;
            pic.setAttribute('src', user.avatar_url);
            user.bio == null ? 
            bio.innerHTML = 'No bio provided.' + '\n' :
            bio.innerHTML = user.bio + '\n';
            link = document.createElement('a');
            link.innerHTML = 'Show profile';
            link.setAttribute('href', user.url);
            bio.appendChild(link);
        }
    })
    .catch(error => console.log(error));
