webpackHotUpdate("static\\development\\pages\\posts\\[id].js",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/MyLayout */ "./components/MyLayout.tsx");

var _jsxFileName = "C:\\react\\test_task\\pages\\posts\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Button = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].button.withConfig({
  displayName: "id__Button",
  componentId: "h0mp0v-0"
})(["width:200px;height:60px;font-size:18px;background:transparent;border-radius:3px;border:2px solid palevioletred;color:palevioletred;margin:0 1em;padding:0.25em 1em;cursor:pointer;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].input.withConfig({
  displayName: "id__Input",
  componentId: "h0mp0v-1"
})(["width:300px;height:40px;padding:0 10px;margin-left:6em;border-radius:5px;border:1px solid grey;outline:none;"]);
var PostsHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2.withConfig({
  displayName: "id__PostsHeader",
  componentId: "h0mp0v-2"
})(["   margin:0 1em;padding:1.5em;font-weight:bold;font-size:30px;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].li.withConfig({
  displayName: "id__ListItem",
  componentId: "h0mp0v-3"
})(["  width:50%;padding:1em 1.5em;margin:0.4em;background-color:#F8E0EC;list-style:none;border-radius:7px;"]);
var BodyContent = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "id__BodyContent",
  componentId: "h0mp0v-4"
})(["  margin-left:2em;padding:2em 3em;width:80%;font-size:18px;background-color:#eee;border-radius:10px;"]);
var CommentsHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "id__CommentsHeader",
  componentId: "h0mp0v-5"
})(["  margin-left:2em;padding:2em 3em;width:80%;font-size:18px;font-weight:bold;"]);

var Post = function Post(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      value = _useState[0],
      setValue = _useState[1];

  var post = props.post,
      comments = props.comments;

  var handleChange = function handleChange(e) {
    setValue(e.currentTarget.value);
  };

  var handleSubmit = function handleSubmit(event) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            event.preventDefault();
            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('https://simple-blog-api.crew.red/comments', {
              body: value,
              postId: post.id
            }));

          case 3:
            setValue('');

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(PostsHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, post.title), __jsx(BodyContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, post.body), comments && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(CommentsHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Comments:"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, comments.map(function (comment) {
    return __jsx(ListItem, {
      key: comment.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, comment.body);
  }))), __jsx("form", {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx(Input, {
    type: "text",
    placeholder: "comment",
    value: value,
    onChange: handleChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }), __jsx(Button, {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Add comment")));
};

Post.getInitialProps = function _callee(context) {
  var id, postFromServer, commentsFromServer, post, currentComments;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = context.query.id;
          _context2.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://simple-blog-api.crew.red/posts/".concat(id)));

        case 3:
          postFromServer = _context2.sent;
          _context2.next = 6;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://simple-blog-api.crew.red/comments'));

        case 6:
          commentsFromServer = _context2.sent;
          post = postFromServer.data;
          currentComments = commentsFromServer.data.filter(function (comment) {
            return comment.postId === Number(id);
          });
          return _context2.abrupt("return", {
            post: post,
            comments: currentComments
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ })

})
//# sourceMappingURL=[id].js.2866d22642214d4e5e12.hot-update.js.map