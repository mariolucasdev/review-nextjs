import RepoItem from "./RepoItem"

export default function RepoList( {repos}: any) {
    return(
        <div className="mt-4">
            { repos.map( (repo: { id: any }) => <RepoItem key={repo.id} item={repo} /> ) }
        </div>
    )
}