webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ "./redux/store.js");
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.tsx");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var _jsxFileName = "C:\\react\\test_task\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






var axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var PostsHeader = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].h2.withConfig({
  displayName: "pages__PostsHeader",
  componentId: "sc-14trqcs-0"
})(["   margin:0 1em;padding:1.5em;font-weight:bold;font-size:30px;"]);
var ListItem = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].li.withConfig({
  displayName: "pages__ListItem",
  componentId: "sc-14trqcs-1"
})(["   list-style:none;padding:0.3em 1.5em;"]);
var ListItemLink = styled_components__WEBPACK_IMPORTED_MODULE_5__["default"].a.withConfig({
  displayName: "pages__ListItemLink",
  componentId: "sc-14trqcs-2"
})(["   text-decoration:none;font-size:20px;cursor:pointer;"]);

var Index = function Index(_ref) {
  var posts = _ref.posts;

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
            // console.log(request.data);
            posts = request.data;
            return _context.abrupt("return", posts);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, null, Promise);
  };

  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx(PostsHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Latest posts"), __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, posts.map(function (post) {
    return __jsx(ListItem, {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/posts/[id]",
      as: "/posts/".concat(post.id),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx(ListItemLink, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, post.title)));
  })));
};

Index.getInitialProps = function _callee(_ref2) {
  var store;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          store = _ref2.store;
          _context2.next = 3;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(store.dispatch(Object(_redux_store__WEBPACK_IMPORTED_MODULE_3__["fetchPosts"])()));

        case 3:
          return _context2.abrupt("return", {});

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, null, Promise);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_redux_store__WEBPACK_IMPORTED_MODULE_3__["nextConnect"])(function (state) {
  return state;
})(Index));

/***/ })

})
//# sourceMappingURL=index.js.22f46600f386be553450.hot-update.js.map