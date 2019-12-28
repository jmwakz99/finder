// Init Github
const github = new Github;
const ui = new UI;

const search = document.getElementById('searchInput');

search.addEventListener('keyup', (e) => {
    const searchUserText = e.target.value
    if (searchUserText !== '') {
        github.getUsers(searchUserText)
            .then(data => {
                if (data.profile.message === 'Not Found') {
                    // Show Alert
                    ui.showAlert('User Not Found!', 'alert  text-white bg-danger mt-3')


                } else {
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })






    } else {
        document.getElementById('profile').innerHTML = '';

    }


})