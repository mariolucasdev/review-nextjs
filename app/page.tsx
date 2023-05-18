"use client"

import { fetchDataProfile, fetchProfileRepos } from './api'
import ProfileInfo from "./components/ProfileInfo"
import RepoList from './components/RepoList';
import GlobalError from './global-error';

export default async function Profile() {
    const userdata = await fetchDataProfile();
    const repos = await fetchProfileRepos()

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <ProfileInfo username={userdata?.name} bio={userdata?.bio} pic={userdata?.avatar_url} />
            <RepoList repos={repos} />
        </main>
    )
}