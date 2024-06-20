import {getAccessToken} from './utils';
export default async function getUsers() {
    try {
        const accessToken = getAccessToken();
        const response = await fetch("https://fintech-blog-749ab6e21c45.herokuapp.com/users", {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const users = await response.json();
        return {users};
    } catch (error) {
        return {error};
    }
}