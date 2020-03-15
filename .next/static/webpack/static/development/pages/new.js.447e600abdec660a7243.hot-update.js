webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./pages/new.tsx":
/*!***********************!*\
  !*** ./pages/new.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.tsx");
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
var _jsxFileName = "C:\\react\\test_task\\pages\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var PostsHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "new__PostsHeader",
  componentId: "sc-1s2vcls-0"
})(["   margin:0 1em;padding:1.5em;font-weight:bold;font-size:30px;"]);
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].textarea.withConfig({
  displayName: "new__TextArea",
  componentId: "sc-1s2vcls-1"
})(["width:300px;height:100px;padding:5px 10px;margin:1em 6em;border-radius:5px;border:1px solid grey;outline:none;resize:none;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].form.withConfig({
  displayName: "new__Form",
  componentId: "sc-1s2vcls-2"
})(["width:400px;padding:1em;margin-left:1em;display:flex;flex-direction:column;align-items:center;background-color:#eee;border-radius:5px;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].button.withConfig({
  displayName: "new__Button",
  componentId: "sc-1s2vcls-3"
})(["width:200px;height:60px;font-size:18px;background:#fff;border-radius:3px;border:2px solid palevioletred;color:palevioletred;padding:0.25em 1em;cursor:pointer;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].input.withConfig({
  displayName: "new__Input",
  componentId: "sc-1s2vcls-4"
})(["width:300px;height:40px;padding:0 10px;border-radius:5px;border:1px solid grey;outline:none;"]);

var NewPost = function NewPost(_ref) {
  var onAddPost = _ref.onAddPost;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      body = _useState2[0],
      setBody = _useState2[1];

  var dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["useDispatch"])();

  var handleTitle = function handleTitle(e) {
    setTitle(e.currentTarget.value);
  };

  var handleBody = function handleBody(e) {
    setBody(e.currentTarget.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return dispatch({
      type: 'increment-counter'
    });
  }, [dispatch]);
  var handleSubmit = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (e) {
    e.preventDefault();

    if (title.trim().length > 0 && body.trim().length > 0) {
      // await axios.post('https://simple-blog-api.crew.red/posts', { title, body });
      setTitle('');
      setBody('');
    }

    return dispatch(_redux_store__WEBPACK_IMPORTED_MODULE_3__["addPost"]);
  }, [dispatch]);
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx(PostsHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Create your post"), __jsx(Form, {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(Input, {
    type: "text",
    value: title,
    placeholder: "title",
    onChange: handleTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx(TextArea, {
    value: body,
    placeholder: "post",
    onChange: handleBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), __jsx(Button, {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Create")));
};

var mapDispatchToProps = {
  onAddPost: _redux_store__WEBPACK_IMPORTED_MODULE_3__["addPost"]
}; // export default NewPost;

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_store__WEBPACK_IMPORTED_MODULE_3__["nextConnect"])(function (state) {
  return state;
})(NewPost));

/***/ })

})
//# sourceMappingURL=new.js.447e600abdec660a7243.hot-update.js.map