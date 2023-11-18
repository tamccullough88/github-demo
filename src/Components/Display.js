function Display({ user }) {
    return (
        <div>
            <h1>{user.login}</h1>
            <img src={user.avatar_url} alt="profile picture"></img>
            <p>Check out the profile <a href={user.html_url} target='blank'>here</a></p>
            <p>Followers: {user.followers} Public Repos: {user.public_repos}</p>
            {user.bio && <p>Bio: {user.bio}</p>}
            {user.blog && <p>Blog: {user.blog}</p>}
            <p>Created: {user.created_at}</p>
            <p>Last Update: {user.updated_at}</p>

        </div>
    )
}

export default Display