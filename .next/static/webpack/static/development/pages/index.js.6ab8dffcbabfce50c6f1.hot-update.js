webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./redux/store.js":
/*!************************!*\
  !*** ./redux/store.js ***!
  \************************/
/*! exports provided: actionTypes, fetchPostsSuccess, fetchPosts, store, nextConnect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPostsSuccess", function() { return fetchPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPosts", function() { return fetchPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextConnect", function() { return nextConnect; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_connect_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect-redux */ "./node_modules/next-connect-redux/dist/index.js");
/* harmony import */ var next_connect_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_connect_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");




var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var actionTypes = {
  FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS'
};
var fetchPostsSuccess = function fetchPostsSuccess(posts) {
  return {
    type: actionTypes.FETCH_POSTS_SUCCESS,
    posts: posts
  };
};
var fetchPosts = function fetchPosts() {
  return function (dispatch) {
    axios.get('https://simple-blog-api.crew.red/posts').then(function (response) {
      dispatch(fetchPostsSuccess(response.data));
    });
  };
};
var initialPosts = {
  posts: []
};

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialPosts;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actionTypes.FETCH_POSTS_SUCCESS:
      return {
        posts: action.posts
      };

    case actionTypes.FETCH_POSTS_ERROR:
      return {
        error: action.error
      };

    default:
      return state;
  }
};

var store = function store() {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialPosts, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2__["default"]));
};
var nextConnect = next_connect_redux__WEBPACK_IMPORTED_MODULE_1___default()(store);

/***/ })

})
//# sourceMappingURL=index.js.6ab8dffcbabfce50c6f1.hot-update.js.map