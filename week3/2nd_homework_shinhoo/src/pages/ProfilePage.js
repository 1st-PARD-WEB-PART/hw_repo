import React from 'react';
import { useParams } from 'react-router-dom';

const default_image_url = "https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png";

const user_db = {
    "Elon": {
        "name": "Elon Musk",
        "description": "Pard 화성 갈끄자나",
        "image-url" : "https://upload.wikimedia.org/wikipedia/commons/3/34/Elon_Musk_Royal_Society_%28crop2%29.jpg"
    },
    "Steve": {
        "name": "Steve jobs",
        "description": "애플",
        "image-url" : "https://cdn.profoto.com/cdn/053149e/contentassets/d39349344d004f9b8963df1551f24bf4/profoto-albert-watson-steve-jobs-pinned-image-original.jpg?width=1280&quality=75&format=jpg"
    },
    "Lee": {
        "name": "이재용",
        "description": "재용",
        "image-url" : "https://t1.daumcdn.net/cfile/tistory/2150CE4758A102CA37"
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
                <img width={300} src = {userInfo["image-url"] ?? default_image_url}></img>
            </div>
            : <div>
                <h1>cannot find user: {username}</h1>
                <img width={300} src = {default_image_url}></img>
            </div>
    );
}

export default ProfilePage;