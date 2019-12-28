// Github constructor class
class Github {
    constructor() {
        this.client_id = '2a1af64f0dab9018e815';
        this.client_secret = '00e8a9f8bca00aadb074d2d826e4235e6ef4f0fa';
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUsers(user) {
        // Fetch user profile
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }



    }

}