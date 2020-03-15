import { createStore, applyMiddleware } from 'redux';
import nextConnectRedux from 'next-connect-redux'
import ReduxThunk from 'redux-thunk';
const axios = require('axios');

export const actionTypes = {
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
  FETCH_POSTS_ID: 'FETCH_POSTS_ID',
  ADD_POST: 'ADD_POST',  
};

export const fetchPostsSuccess = posts => ({
  type: actionTypes.FETCH_POSTS_SUCCESS,
  posts,
});

export const addPostSuccess = post => ({
  type: ActionType.ADD_POST,
  post,
});

export const fetchPosts = () => dispatch => {
  axios
    .get('https://simple-blog-api.crew.red/posts')
    .then(response => {
      dispatch(fetchPostsSuccess(response.data))
  });
};

export const fetchPostWithId = id => dispatch => {
  axios
    .get(`https://simple-blog-api.crew.red/posts/${id}`)
    .then(() => {
      dispatch(fetchPostIdSuccess(id));
    });
};

export const addPost = post => dispatch => {
  axios
    .post('https://simple-blog-api.crew.red/posts', post)
    .then(response => {
      dispatch(addPostSuccess(response.data));
    });
};

const initialPosts = {
  posts: [],
};

const reducer = (state = initialPosts, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        posts: action.posts,
      };
    case actionTypes.ADD_POST:
      return {
        post: action.post
      }
    default:
      return state;
  }
};

export const store = () => {
  return createStore(reducer, initialPosts, applyMiddleware(ReduxThunk));
}

export const nextConnect = nextConnectRedux(store);