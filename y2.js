async function getFilteredPostsByTitle(title) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data from the API');
        }
        const posts = await response.json();
        const filteredPosts = posts.filter(post => post.title.includes(title));
        console.log(filteredPosts);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

const titleToFilter = 'sunt';
getFilteredPostsByTitle(titleToFilter);
