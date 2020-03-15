import React, { useState, FormEvent } from 'react';
import { NextPage, NextPageContext } from 'next';
import axios from 'axios';
import styled from 'styled-components';
import Layout from '../../components/MyLayout';
import { nextConnect } from '../../redux/store';

const Button = styled.button`
  width: 200px;
  height: 60px;
  font-size: 18px;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 10px;
  margin-left: 6em;
  border-radius: 5px;
  border: 1px solid grey;
  outline: none;
`

const PostsHeader = styled.h2`  
  margin: 0 1em;
  padding: 1.5em;
  font-weight: bold;
  font-size: 30px;  
`;

const ListItem = styled.li` 
  width: 50%; 
  padding: 1em 1.5em; 
  margin: 0.4em;
  background-color: #F8E0EC;
  list-style: none;
  border-radius: 7px;
`;

const BodyContent = styled.div` 
  margin-left: 2em;
  padding: 2em 3em;
  width: 80%; 
  font-size: 18px;
  background-color: #eee;
  border-radius: 10px;
`;

const CommentsHeader = styled.div` 
  margin-left: 2em;
  padding: 2em 3em;
  width: 80%; 
  font-size: 18px;
  font-weight: bold;
`;

interface Props {
  post: Post;
  comments?: Comment[];
}

const Post: NextPage<Props> = (props) => {
  const [value, setValue] = useState('');
  const { post, comments } = props;
  const [allComments, setAllComments] = useState<Comment[]>(comments);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault();
    await axios.post('https://simple-blog-api.crew.red/comments',
      { body: value, postId: post.id });
    setValue('');
    setAllComments([...allComments]);
  }

  return (
    <Layout>
      <PostsHeader>{post.title}</PostsHeader>
      <BodyContent>{post.body}</BodyContent>
      {allComments && (
        <>
          <CommentsHeader>Comments:</CommentsHeader>
          <ul>
            {allComments.map(comment => 
              <ListItem key={comment.id}>
                {comment.body}
              </ListItem>)}
          </ul>
        </>)}
        <form onSubmit={handleSubmit}>
            <Input type="text" 
                    placeholder="comment"
                    value={value}
                    onChange={handleChange} />
            <Button type="submit">Add comment</Button>
        </form>
    </Layout>
  )
}

Post.getInitialProps = async function(context: NextPageContext) {
  const { id } = context.query;
  const postFromServer = await axios
    .get(`https://simple-blog-api.crew.red/posts/${id}`);
  const commentsFromServer = await axios
    .get('https://simple-blog-api.crew.red/comments');
  
  const post = postFromServer.data;
  const currentComments = commentsFromServer.data
    .filter(comment => comment.postId === Number(id));
    
  return { post, comments: currentComments };
};

export default Post;