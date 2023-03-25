import React from 'react';
import { useParams } from 'react-router-dom';

const user_db = {
    "ksh": {
        "name": "shinhoo kim",
        "description": "파드 웹파트 1기!",
    },
    "ash": {
        "name": "ashley sears",
        "description": "파드 웹파트 300기!",
    },
    "iu": {
        "name": "jieun lee",
        "description": "파드 웹파트 600기!",
    }
}

function ProfilePage() {
    // Here you can use the `username` parameter to fetch the user profile data from an API or a database
    // const params = useParams();
    // const username = params.username;
    const { username } = useParams();

    const userInfo = user_db[username];

    console.log(userInfo);
    return (
        userInfo ?
            <div>
                <h1>{userInfo["name"]}'s Profile Page</h1>
                <p>{userInfo["description"]}</p>
            </div>
            : <div>
                <h1>cannot find user: {username}</h1>
            </div>
    );
}

export default ProfilePage;