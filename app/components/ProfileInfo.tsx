import { Avatar } from "@mui/material"

type ProfilePic = {
    pic: string
    username: string,
    bio: string
};

export default function ProfileInfo({username, bio, pic}:ProfilePic) {
    return (
        <>
            <Avatar
                alt="Remy Sharp"
                src={pic}
                sx={{ width: 150, height: 150 }}
                />
            <h1>{ username }</h1>
            <p> { bio } </p>
        </>
    )
}