webpackHotUpdate("static\\development\\pages\\new.js",{

/***/ "./pages/new.tsx":
/*!***********************!*\
  !*** ./pages/new.tsx ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.tsx");

var _jsxFileName = "C:\\react\\test_task\\pages\\new.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var PostsHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h2.withConfig({
  displayName: "new__PostsHeader",
  componentId: "sc-1s2vcls-0"
})(["   margin:0 1em;padding:1.5em;font-weight:bold;font-size:30px;"]);
var TextArea = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].textarea.withConfig({
  displayName: "new__TextArea",
  componentId: "sc-1s2vcls-1"
})(["width:300px;height:100px;padding:5px 10px;margin:1em 6em;border-radius:5px;border:1px solid grey;outline:none;resize:none;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].form.withConfig({
  displayName: "new__Form",
  componentId: "sc-1s2vcls-2"
})(["width:400px;padding:1em;margin-left:1em;display:flex;flex-direction:column;align-items:center;background-color:#eee;border-radius:5px;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "new__Button",
  componentId: "sc-1s2vcls-3"
})(["width:200px;height:60px;font-size:18px;background:#fff;border-radius:3px;border:2px solid palevioletred;color:palevioletred;padding:0.25em 1em;cursor:pointer;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input.withConfig({
  displayName: "new__Input",
  componentId: "sc-1s2vcls-4"
})(["width:300px;height:40px;padding:0 10px;border-radius:5px;border:1px solid grey;outline:none;"]);

var NewPost = function NewPost() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      title = _useState[0],
      setTitle = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      body = _useState2[0],
      setBody = _useState2[1];

  var handleTitle = function handleTitle(e) {
    setTitle(e.currentTarget.value);
  };

  var handleBody = function handleBody(e) {
    setBody(e.currentTarget.value);
  };

  var handleSubmit = function handleSubmit(e) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function handleSubmit$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            e.preventDefault();

            if (!(title.trim().length > 0 && body.trim().length > 0)) {
              _context.next = 6;
              break;
            }

            _context.next = 4;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.post('https://simple-blog-api.crew.red/posts', {
              title: title,
              body: body
            }));

          case 4:
            setTitle('');
            setBody('');

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(PostsHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Create your post"), __jsx(Form, {
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx(Input, {
    type: "text",
    value: title,
    placeholder: "title",
    onChange: handleTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx(TextArea, {
    value: body,
    placeholder: "post",
    onChange: handleBody,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx(Button, {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Create")));
};

/* harmony default export */ __webpack_exports__["default"] = (NewPost);

/***/ })

})
//# sourceMappingURL=new.js.f232c6320124b680a154.hot-update.js.map