const { TestScheduler } = require('jest');
const { runBuild } = require('../database/config/build.js');
const { getData } = require('../database/queries/getData');
const { postPosts, postComments } = require('../database/queries/postData');
const { updatePost } = require('../database/queries/updataData');
const connection = require('../database/config/connection');

beforeAll(() => runBuild());

test('get data', () => getData().then(({ rows }) => {
  expect(rows[0]).toEqual({ post_content: 'HELLO', comment_content: 'HELLO' });
}));

test('Create Post', () => postPosts({ postContent: 'HELLO HELLO' }).then(({ rows, rowsCount }) => {
  expect(rowsCount).toBe(1);
}));

afterAll(() => connection.end());
