let user = {};
let title = document.head.children[1];
let name = document.querySelector('h1.user__name');
let pic = document.querySelector('img.user-info__pic');
pic.setAttribute('alt', 'User Avatar');
let bio = document.querySelector('p.user-info__description');
let link;
fetch('https://api.github.com/users/6thSence')
    .then(response => response.json())
    .then(json => { 
        user = Object.assign({}, json);
        return user;})
    .then(user => { 
        title.innerHTML = user.name;
        name.innerHTML = user.name;
        pic.setAttribute('src', user.avatar_url);
        bio.innerHTML = user.bio + '\n';
        link = document.createElement('a');
        link.innerHTML = 'Show profile';
        link.setAttribute('href', user.url);
        bio.appendChild(link);
    })
    .catch(error => console.log(error));
