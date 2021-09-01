import React, { useEffect, useState } from "react";

export default function UserInfo({ user }) {
    const { id, name, email } = user;
    const [ albumDisplay, setAlbumDisplay ] = useState(false);
    const [ albums, setAlbums ] = useState([]);
    const url = `https://jsonplaceholder.typicode.com/users/${id}/albums`;

    useEffect(() => {
        fetch(url)
        .then((res) => res.json())
        .then(setAlbums)
        .catch((err) => {
            console.log(err)
        })
    }, [url]);

    const listAlbums = () => {
        if (albums && albums.length > 0) {
        albums.map((album) => {
            return (
                <div>
                    <ul>
                        {album.title}
                    </ul>
                </div>
            )
        })
        }
    }
    const toggleAlbumView = () => setAlbumDisplay(!albumDisplay);
    return (
        <div>
            <h1>User Name: {name}</h1>
            <h3>Email: {email}</h3>
            <p>User Id: {id}</p>
            <button onClick={toggleAlbumView}>View Albums</button>
            <p>{albumDisplay ? <ul>{listAlbums}</ul> : `Loading Albums for User ${id}...`}</p>
        </div>
    )
}