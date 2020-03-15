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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var next_connect_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-connect-redux */ "./node_modules/next-connect-redux/dist/index.js");
/* harmony import */ var next_connect_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_connect_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");





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

var getInitial = function getInitial() {
  var request, posts;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function getInitial$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get('https://simple-blog-api.crew.red/posts'));

        case 2:
          request = _context.sent;
          posts = request.data;
          return _context.abrupt("return", posts);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, null, Promise);
};

var initialPosts = {
  posts: getInitial()
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
  return Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])(reducer, initialPosts, Object(redux__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_3__["default"]));
};
var nextConnect = next_connect_redux__WEBPACK_IMPORTED_MODULE_2___default()(store);

/***/ })

})
//# sourceMappingURL=index.js.9cacaa2da1fb009017f5.hot-update.js.map