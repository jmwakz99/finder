// UI Constructor
class UI {
    constructor() {
        this.profile = document.getElementById('profile');

    }
    showProfile(user) {
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="mb-4 btn btn-success btn-block">View Profile</a>
                
                </div>
                <div class="col-md-9">
                    <span class="badge badge-primary p-2">Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-secondary p-2">Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success p-2">Followers: ${user.followers}</span>
                    <span class="badge badge-info p-2">Following: ${user.following}</span>
                </div>
            
            </div>
            <br>
            <ul class="list-group">
                <li class="list-group-item">Company:${user.company}</li>
                <li class="list-group-item">Website/Blog:${user.blog}</li>
                <li class="list-group-item">Location:${user.location}</li>
                <li class="list-group-item">Member Since:${user.created_at}</li>
            
            </ul>
            <h3 class="page-heading mb-3 mt-3">Latest Repos</h3>
            <div id="repos">
             
            </div>
        
        
        `

    }
    showRepos(user) {
        let output = '';
        user.forEach(repo => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-primary p-2">Stars:${repo.stargazers_count}</span>
                            <span class="badge badge-secondary p-2">Watchers:${repo.watchers_count}</span>
                            <span class="badge badge-success p-2">Forks:${repo.forks_count}</span>
                        </div>
                    </div>
                
                </div>
            
            `
        })


        document.getElementById('repos').innerHTML = output

    }
    showAlert(message, className) {
            this.clearAlert();
            const div = document.createElement('div');
            div.className = className;
            div.textContent = message
            const container = document.querySelector('.container');
            const searchBox = document.getElementById('searchBox');
            container.insertBefore(div, searchBox);
            setTimeout(() => {
                this.clearAlert();

            }, 3000)





        }
        // Clear alert message
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();

        }

    }
}