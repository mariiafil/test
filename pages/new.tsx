import React, { FormEvent } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Layout from '../components/MyLayout';

const axios = require('axios');

const PostsHeader = styled.h2`  
  margin: 0 1em;
  padding: 1.5em;
  font-weight: bold;
  font-size: 30px;  
`;

const TextArea = styled.textarea`
  width: 300px;
  height: 100px;
  padding: 5px 10px;
  margin: 1em 6em;
  border-radius: 5px;
  border: 1px solid grey;
  outline: none;
  resize: none;
`

const Form = styled.form`
  width: 400px;
  padding: 1em;
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #eee;
  border-radius: 5px;
`
const Button = styled.button`
  width: 200px;
  height: 60px;
  font-size: 18px;
  background: #fff;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  padding: 0.25em 1em;
  cursor: pointer;
`;

const Input = styled.input`
  width: 300px;
  height: 40px;
  padding: 0 10px;
  border-radius: 5px;
  border: 1px solid grey;
  outline: none;
`

  const NewPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleTitle = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const handleBody = (e: FormEvent<HTMLInputElement>) => {
    setBody(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (title.trim().length > 0 && body.trim().length > 0) {
      await axios
        .post('https://simple-blog-api.crew.red/posts', { title, body });
      setTitle('');
      setBody('');
    }
  };

  return (
    <Layout>
      <PostsHeader>Create your post</PostsHeader>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          placeholder="title"
          onChange={handleTitle}
        />
        <TextArea 
          value={body} 
          placeholder="post" 
          onChange={handleBody} 
        />
        <Button type="submit">Create</Button>
      </Form>
    </Layout>
  );
};

export default NewPost;
