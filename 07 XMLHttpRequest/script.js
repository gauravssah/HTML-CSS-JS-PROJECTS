const container = document.querySelector(".container");

const requestUrl = "https://api.github.com/users/gauravssah";
const xhr = new XMLHttpRequest();
xhr.open("GET", requestUrl)
xhr.onreadystatechange = function () {
    // console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        const data = JSON.parse(this.responseText);

        let div = document.createElement("div");
        div.classList.add("card");


        let usercard = `
        
        <div class="image">
            <img src="${data.avatar_url}" alt="Image">
        </div>

        <div class="info">
            <h2 class="name">Name: ${data.name}</h2>
            <p class="login">UserId: ${data.login}</p>
            <h3 class="bio">${data.bio}</h3>

            <div class="links">
                <div class="apiUrl"><a href="${data.url}" target="_blank" >MyGitHubApi</a></div>
                <div class="githubUrl"><a href="${data.html_url}" target="_blank" >GitHub</a></div>
                <div class="blog"><a href="${data.blog}" target="_blank" >Portfolio</a></div>
                <div class="twitter"><a href="https://twitter.com/${data.twitter_username}" target="_blank" >X</a></div>
            </div>

        </div>`;

        div.innerHTML = usercard;
        container.append(div)
    }


};

xhr.send(); // This line sends the GET request


