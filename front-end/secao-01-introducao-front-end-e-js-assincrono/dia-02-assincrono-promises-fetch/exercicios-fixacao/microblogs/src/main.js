import './style.css';

import {
  fillUsersSelect,
  fillPosts,
  fillFeaturedPostComments,
  clearPageData,
  fillErrorMessage,
} from '../utils/updateUI';

const usersSelect = document.querySelector('#users-select');

const USERS_API = 'https://dummyjson.com/users';
const POSTS_API = `https://dummyjson.com/posts/user`;
// faça a lógica para pegar as informações das pessoas usuárias e preencher o select aqui.

const fetchAPI = (URL) => fetch(URL)
  .then((response) => response.json());

const refreshSelect = () => fetchAPI(USERS_API)
  .then(({ users }) => fillUsersSelect(users));

usersSelect.addEventListener('change', () => {
  clearPageData();
  const user = usersSelect.value;
  const breakPoint = `${POSTS_API}/${user}`;
  const postsPromise = fetchAPI(breakPoint).then(({ posts }) => posts);
  
  postsPromise.then((posts) => fillPosts(posts));
  
  postsPromise
  .then(([firstPost]) => fetchAPI(
    `https://dummyjson.com/posts/${firstPost.id}/comments`
  )
  .then(({ comments }) => comments)
  .then((comments) => fillFeaturedPostComments(comments)))
  .catch((error) => fillErrorMessage(error.message));

    // faça a lógica para pegar as informações dos posts da pessoa selecionada e dos comentários do post destacado aqui.
});
  
refreshSelect();
