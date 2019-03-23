let title = document.head.children[1];
let name = document.querySelector('h1.user__name');
let bio = document.querySelector('p.user-info__description');

let searchParams = new URLSearchParams(window.location.search);
let login = searchParams.get('username');

let apiUrl = 'https://api.github.com/users/' + login;
fetch(apiUrl)
    .then(response => response.json())
    .then(user => { 
        if (user.name) {
            title.innerHTML = user.name;
            name.innerHTML = user.name;
            
            user.bio === null ? 
            bio.innerHTML = 'No bio provided.' + '\n' :
            bio.innerHTML = user.bio + '\n';
            
            let pic = document.createElement('img');
            document.body.insertBefore(pic, bio);
            pic.className = 'img.user-info__pic';
            pic.setAttribute('alt', 'User Avatar');
            pic.setAttribute('src', user.avatar_url);
            
            let link = document.createElement('a');
            link.innerHTML = 'Show profile';
            link.setAttribute('href', user.html_url);
            bio.appendChild(link);
        }
    })
    .catch(error => console.log(error));