import axios from 'axios';

const apiAddress = 'http://localhost:3001/api/v1/';
const endPoints = {
    login: 'user/login',
    profile: 'user/profile'
}

const client = axios.create({
    baseURL: apiAddress,
    responseType: 'json'
})

export async function getToken(userObject) {
    try {
        const request = await client.post(endPoints.login, userObject);
        return request.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function getProfileDetails(token) {
    try {
        const request = await client.post(endPoints.profile,'', {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return request.data;
    } catch (error) {
        return error.response.data;
    }
}

export async function putProfileDetails(token, userObject) {
    try {
        const request = await client.put(endPoints.profile, userObject, {
            headers: {
                'Authorization': `Bearer ${token}`,
            }
        });
        return request.data;
    } catch (error) {
        return error.response.data;
    }
}

// const token = await getToken({
//     email: 'tony@stark.com',
//     password: 'password12'
// });
// console.log(token)
// const profile = await getProfileDetails(token);
// console.log(profile)
//
// const modifiedUser = {
//     firstName: 'Tony',
//     lastName: 'Boy'
// }
//
// const modifiedProfile = await putProfileDetails(token.body.token, modifiedUser);
// console.log(modifiedProfile);