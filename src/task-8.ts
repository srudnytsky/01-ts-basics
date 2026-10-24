import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

function fetchPosts(): Promise<Post[]> {
  return axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.data);
}

fetchPosts()
  .then((posts) => {
    console.log(posts);
    console.log(posts[0]?.title);
  })
  .catch((error: unknown) => {
    if (axios.isAxiosError(error)) {
      console.error("Failed to fetch posts:", error.message);
    } else {
      console.error("Unexpected error:", error);
    }
  });
