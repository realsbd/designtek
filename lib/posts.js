import { getAccessToken } from "./utils";

export async function createPost(post) {
    try {
        const accessToken = getAccessToken();
        console.log(accessToken);
        const response = await fetch("https://fintech-blog-749ab6e21c45.herokuapp.com/posts/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`,
            },
            body: JSON.stringify(post),
        });
        if (!response.ok) {
            throw new Error('Failed to create post');
        }
        return { success: true };
    } catch(error) {
        console.log(error);
    }
}

export async function getPosts() {
    try {
        const response = await fetch("https://fintech-blog-749ab6e21c45.herokuapp.com/posts");

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const posts = await response.json();
        return { posts };
    } catch (error) {
        return { error };
    }
}

export async function getPostsByUserId() {
    try {
        // get user id from cookies
        const user = localStorage.getItem("user");
        const userId = JSON.parse(user).userDetails._id;
        console.log("userId: ", userId);
        const response = await fetch(`https://fintech-blog-749ab6e21c45.herokuapp.com/posts/${userId}`);
        // const response = await fetch(`https://fintech-blog-749ab6e21c45.herokuapp.com/posts/${user.userDetails._id}`);
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        const posts = await response.json();
        console.log("posts: ", posts);

        return { posts };
    } catch (error) {
        return { error };
    }
}

export async function getCategories() {
    try {
        const response = await fetch("https://fintech-blog-749ab6e21c45.herokuapp.com/categories");
        if (!response.ok) {
            throw new Error('Failed to fetch categories');
        }
        const categories = await response.json();
        console.log("categories: ", categories);
        return { categories };
    }catch (error) {
        return { error };
    }
}