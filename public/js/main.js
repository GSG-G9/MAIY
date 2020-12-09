const newsFeed = document.querySelector('.news-feed');

const creatElm = (className, tag) => {
  const div = document.createElement(tag);
  div.classList.add(className);
  return div;
};

const creatDiv = (className) => {
  const div = document.createElement('div');
  div.classList.add(className);
  return div;
};

const createPost = (obj) => {
  const postCard = creatDiv('post-card');
  const postContainer = creatDiv('post-container');
  const username = creatDiv('username');
  const title = creatElm('title', 'h4');
  title.innerText = obj.username;
  username.appendChild(title);
  postContainer.appendChild(username);
  const postContent = creatDiv('post-content');
  const postText = creatElm('post-text', 'p');
  postText.innerText = obj.postContent;
  postContent.appendChild(postText);
  postCard.append(postContainer, postContent);
  newsFeed.appendChild(postCard);
};

const makeEmpty = () => {
  const blockArr = document.querySelectorAll('.single-anime-container');
  blockArr.forEach((item) => {
    item.remove();
  });
};

const renderData = (array) => {
  makeEmpty();
  array.forEach((obj) => {
    createPost(obj);
  });
};
