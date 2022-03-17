const postsContainer = document.querySelector('.posts-list');
       
const getPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    const renderData = data.map((post) => `<h2>${post.title}</h2><p>${post.body}</p>`);
    postsContainer.innerHTML = renderData.join('</br>');
};


getPosts();