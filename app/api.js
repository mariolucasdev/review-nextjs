export async function fetchDataProfile() {
    const profileData = await fetch('https://api.github.com/users/mariolucasdev')
    return profileData.ok ? profileData.json() : []
}

export async function fetchProfileRepos() {
    const repos = await fetch('https://api.github.com/users/mariolucasdev/repos?sort=updated&direction=desc')
    return repos.ok ? repos.json() : []
}