import React from 'react';
import Link from 'next/link';
import { nextConnect, fetchPosts } from '../redux/store';
import Layout from '../components/MyLayout';
import styled from 'styled-components'

const PostsHeader = styled.h2`  
  margin: 0 1em;
  padding: 1.5em;
  font-weight: bold;
  font-size: 30px;  
`;

const ListItem = styled.li`  
  list-style: none;
  padding: 0.3em 1.5em; 
`;

const ListItemLink = styled.a`  
  text-decoration: none; 
  font-size: 20px;
  cursor: pointer;
`;

interface Props  {
  posts: Post[];
}

const Index = ({ posts }: Props) => {

  return (
    <Layout>
      <PostsHeader>Latest posts</PostsHeader>
      <ul>{posts.map(post => (
          <ListItem key={post.id}>
            <Link href="/posts/[id]" as={`/posts/${post.id}`}>
                <ListItemLink>
                  {post.title}
                </ListItemLink>         
            </Link>
          </ListItem>
        ))}</ul>
    </Layout>
  )
} 

Index.getInitialProps =  async function({store}) {
  await store.dispatch(fetchPosts());
  return {};
};

export default nextConnect((state) => state)(Index)
