self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ "./styles/Home.module.css");
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\REACT PROJECTS\\shortyurl\\pages\\index.js",
    _s = $RefreshSig$();






function Home() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      url = _useState[0],
      setUrl = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      success = _useState3[0],
      setSuccess = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      shorturl = _useState4[0],
      setShorturl = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      error = _useState5[0],
      setError = _useState5[1];

  var inputHandler = function inputHandler(e) {
    setUrl(e.target.value);
  };

  var clickHandler = function clickHandler() {
    setLoading(true);
    axios__WEBPACK_IMPORTED_MODULE_2___default().get("https://api.shrtco.de/v2/shorten?url=".concat(url)).then(function (res) {
      setLoading(false);
      setSuccess(true);
      setShorturl(res.data.result.short_link);
      navigator.clipboard.writeText(res.data.result.short_link);
    })["catch"](function (err) {
      alert('Please enter a valid URL');
      setError(true);
    });
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "preconnect",
        href: "https://fonts.gstatic.com"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        href: "https://fonts.googleapis.com/css2?family=Lobster&family=Ubuntu&display=swap",
        rel: "stylesheet"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "viewport",
        content: "initial-scale=1.0, width=device-width"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container1),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
        children: "ShortlyURL"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().upper),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().left),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().tagline),
            children: "Short links, big results"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().caption),
            children: "An URL shortener built with powerful tools to help you grow and protect your brand."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().right),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            src: "/images/illustration-working.svg",
            width: 650,
            height: 350,
            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().image)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().container2),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
        children: "Simple and fast URL shortener!"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().url),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          placeholder: "Paste long url and shorten it",
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().input),
          type: "text",
          onChange: inputHandler,
          value: url,
          id: "myInput"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().btn),
          onClick: clickHandler,
          children: "Shorten"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 11
      }, this), loading ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().loader)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }, this) : success && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().copyurl),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().urltext),
          children: shorturl
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().copy),
          children: "Copied to Clipboard \u2714"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 15
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }, this);
}

_s(Home, "J1IegjmeSqMtSWGdfn+VyZ5fWUk=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidXJsIiwic2V0VXJsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInNob3J0dXJsIiwic2V0U2hvcnR1cmwiLCJlcnJvciIsInNldEVycm9yIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2xpY2tIYW5kbGVyIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlc3VsdCIsInNob3J0X2xpbmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJlcnIiLCJhbGVydCIsInN0eWxlcyIsImltYWdlIiwibG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFUkMsK0NBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUV0QkMsR0FGc0I7QUFBQSxNQUVsQkMsTUFGa0I7O0FBQUEsbUJBR0FGLCtDQUFRLENBQUMsS0FBRCxDQUhSO0FBQUEsTUFHdEJHLE9BSHNCO0FBQUEsTUFHZEMsVUFIYzs7QUFBQSxtQkFJQUosK0NBQVEsQ0FBQyxLQUFELENBSlI7QUFBQSxNQUl0QkssT0FKc0I7QUFBQSxNQUlkQyxVQUpjOztBQUFBLG1CQUtFTiwrQ0FBUSxDQUFDLEVBQUQsQ0FMVjtBQUFBLE1BS3RCTyxRQUxzQjtBQUFBLE1BS2JDLFdBTGE7O0FBQUEsbUJBTUpSLCtDQUFRLENBQUMsS0FBRCxDQU5KO0FBQUEsTUFNdEJTLEtBTnNCO0FBQUEsTUFNaEJDLFFBTmdCOztBQVE3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU07QUFDekJWLFVBQU0sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtB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YUU7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZPLEdBSVB4QixPQUFPLGlCQUVQO0FBQUssaUJBQVMsRUFBRXNCLHdFQUFoQjtBQUFBLGdDQUNFO0FBQU0sbUJBQVMsRUFBRUEsd0VBQWpCO0FBQUEsb0JBQWtDcEI7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFERixlQUVFO0FBQU0sbUJBQVMsRUFBRW9CLHFFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FmTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnREQ7O0dBekV1QjVCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWM3ZDM0YjNkZWVlNDk1ZjMwODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCAsIHt1c2VTdGF0ZSx1c2VFZmZlY3R9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbdXJsLHNldFVybF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtsb2FkaW5nLHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc3VjY2VzcyxzZXRTdWNjZXNzXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3Nob3J0dXJsLHNldFNob3J0dXJsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2Vycm9yLHNldEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBpbnB1dEhhbmRsZXIgPSAoZSkgPT57XG4gICAgc2V0VXJsKGUudGFyZ2V0LnZhbHVlKTtcbiAgfVxuICBjb25zdCBjbGlja0hhbmRsZXIgPSAoKSA9PntcbiAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG4gICAgICBheGlvcy5nZXQoYGh0dHBzOi8vYXBpLnNocnRjby5kZS92Mi9zaG9ydGVuP3VybD0ke3VybH1gKVxuICAgICAgICAudGhlbihyZXMgPT57XG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgc2V0U3VjY2Vzcyh0cnVlKTtcbiAgICAgICAgICBzZXRTaG9ydHVybChyZXMuZGF0YS5yZXN1bHQuc2hvcnRfbGluayk7XG4gICAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQocmVzLmRhdGEucmVzdWx0LnNob3J0X2xpbmspO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBhbGVydCgnUGxlYXNlIGVudGVyIGEgdmFsaWQgVVJMJyk7XG4gICAgICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgICAgIH0pXG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIvPlxuICAgICAgICA8bGluayBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Mb2JzdGVyJmZhbWlseT1VYnVudHUmZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXIxfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgIFNob3J0bHlVUkxcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnVwcGVyfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnbGluZX0+XG4gICAgICAgICAgICAgICAgICBTaG9ydCBsaW5rcywgYmlnIHJlc3VsdHNcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FwdGlvbn0+XG4gICAgICAgICAgICAgICAgICBBbiBVUkwgc2hvcnRlbmVyIGJ1aWx0IHdpdGggcG93ZXJmdWwgdG9vbHMgdG8gaGVscCB5b3UgZ3JvdyBhbmQgcHJvdGVjdCB5b3VyIGJyYW5kLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL2lsbHVzdHJhdGlvbi13b3JraW5nLnN2Zycgd2lkdGg9ezY1MH0gaGVpZ2h0PXszNTB9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfS8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXIyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgU2ltcGxlIGFuZCBmYXN0IFVSTCBzaG9ydGVuZXIhXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51cmx9PlxuICAgICAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J1Bhc3RlIGxvbmcgdXJsIGFuZCBzaG9ydGVuIGl0JyBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gdHlwZT0ndGV4dCcgb25DaGFuZ2U9e2lucHV0SGFuZGxlcn0gdmFsdWU9e3VybH0gaWQ9J215SW5wdXQnLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy5idG59IG9uQ2xpY2s9e2NsaWNrSGFuZGxlcn0+U2hvcnRlbjwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgICAgID9cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyfT48L2Rpdj5cbiAgICAgICAgICAgIDogXG4gICAgICAgICAgICBzdWNjZXNzIFxuICAgICAgICAgICAgJiYgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvcHl1cmx9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy51cmx0ZXh0fT57c2hvcnR1cmx9PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5fT5Db3BpZWQgdG8gQ2xpcGJvYXJkIOKclDwvc3Bhbj4gXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==