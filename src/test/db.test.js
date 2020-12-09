/* eslint-disable no-undef */
const { runBuild } = require('../database/config/build.js');
const { getData } = require('../database/queries/getData');
const { postPosts, postComments } = require('../database/queries/postData');
const { updateData } = require('../database/queries/updateData');
const connection = require('../database/config/connection');

beforeEach(() => runBuild());

test('get data', () => getData().then(({ rows }) => {
  expect(rows[0]).toEqual({
    post_content: 'HELLO',
    comment_content: 'HELLO',
  });
}));

test('Create Post', () => postPosts('HELLO HELLO').then(({ rows, rowCount }) => {
  expect(rowCount).toBe(1);
  expect(rows[0].post_content).toEqual('HELLO HELLO');
}));

test('Update post_content', () => updateData(1, 'Hello World...').then(({ rows, rowCount }) => {
  expect(rowCount).toBe(1);
  expect(rows[0].post_content).toBe('Hello World...');
}));

test('Add Comment', () => postComments('new comment...', 1).then(({ rows, rowCount }) => {
  expect(rowCount).toBe(1);
  expect(rows[0]).toEqual({
    id: 2,
    comment_content: 'new comment...',
    post_id: 1,
  });
}));

afterAll(() => connection.end());
