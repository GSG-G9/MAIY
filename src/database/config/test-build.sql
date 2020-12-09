BEGIN;

DROP TABLE IF EXISTS comments,
posts CASCADE;

CREATE TABLE posts (  
    id SERIAL PRIMARY KEY,
    post_content TEXT NOT NULL
);

CREATE TABLE comments(
    id SERIAL PRIMARY KEY,
    comment_content TEXT,
    post_id INTEGER REFERENCES posts(id)
);

INSERT INTO
    posts (post_content)
VALUES
    ('HELLO');

INSERT INTO
    comments (comment_content, post_id)
VALUES
    ('HELLO', 1);

COMMIT;