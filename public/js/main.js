const newsFeed = document.querySelector('.news-feed');
const addButton = document.querySelector('.add-button');

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

const createPost = ({ post_content: postContent }) => {
  const postCard = creatDiv('post-card');
  const postContainer = creatDiv('post-container');
  const username = creatDiv('username');
  const title = creatElm('title', 'h4');
  title.innerText = 'MAIY TEAM';
  username.appendChild(title);
  postContainer.appendChild(username);
  const postContentEl = creatDiv('post-content');
  const postText = creatElm('post-text', 'p');
  postText.innerText = postContent;
  postContentEl.appendChild(postText);
  postCard.append(postContainer, postContentEl);
  newsFeed.appendChild(postCard);
};

const makeEmpty = () => {
  const blockArr = document.querySelectorAll('.post-card');
  blockArr.forEach((item) => {
    item.remove();
  });
};

const renderData = (data) => {
  makeEmpty();
  data.reverse().forEach((obj) => {
    createPost(obj);
  });
};

addButton.addEventListener('click', () => {
  const postInput = document.querySelector('.post-input').value;
  if (!postInput) return;
  fetch('/api/v1/create-post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ postContent: postInput }),
  })
    .then(() => {
      fetch('/api/v1/posts')
        .then((res) => res.json())
        .then((data) => {
          renderData(data);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => console.log(err));
});

document.addEventListener('DOMContentLoaded', () => {
  fetch('/api/v1/posts')
    .then((res) => res.json())
    .then((data) => {
      renderData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});
