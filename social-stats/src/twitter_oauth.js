import axios from 'axios';
const TwitterOAuthHelper = {

    getRedirectURL: () => {
        console.log('right here')
        return fetch('/api/twitter/token', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }})
        .then(res => res.json())
    },
    patchUserId: (uid, body) => {
        return fetch(`/api/user/${uid}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(res => res.json())
    },
    getCallback: (oauth_token, oauth_verifier ) => {
        return fetch(`/api/twitter/callback?oauth_token=${oauth_token}&oauth_verifier=${oauth_verifier}`)
        .then(res => res.json())
    }


}

export default TwitterOAuthHelper;