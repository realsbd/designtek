export default async function getPosts() {
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