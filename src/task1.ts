const API_URL: string = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.querySelector(".posts");

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

async function apiRequest<T>(url: string): Promise<T[]> {
    try {
        const response = await fetch(url);
        const posts = await response.json();
        return posts as Promise<T[]>;
    } catch (error) {
        throw new Error();
    }
}

function createPost(post: IPost) {
  let postBlock = document.createElement("div");
  let postTitle = document.createElement("h2");
  let postContent = document.createElement("p");
  let postUserId = document.createElement("p");

  postTitle.textContent = post.title;
  postContent.textContent = post.body;
  postUserId.textContent = `User: ${post.userId.toString()}`;

  postBlock.append(postUserId, postTitle, postContent);
  postsContainer?.append(postBlock);
}

apiRequest<IPost>(API_URL).then((posts) => {
  posts.forEach((post) => {
    createPost(post)
  });
});
