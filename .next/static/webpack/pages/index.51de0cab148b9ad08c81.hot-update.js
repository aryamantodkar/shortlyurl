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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwidXJsIiwic2V0VXJsIiwibG9hZGluZyIsInNldExvYWRpbmciLCJzdWNjZXNzIiwic2V0U3VjY2VzcyIsInNob3J0dXJsIiwic2V0U2hvcnR1cmwiLCJlcnJvciIsInNldEVycm9yIiwiaW5wdXRIYW5kbGVyIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY2xpY2tIYW5kbGVyIiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiZGF0YSIsInJlc3VsdCIsInNob3J0X2xpbmsiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJlcnIiLCJhbGVydCIsInN0eWxlcyIsImltYWdlIiwibG9hZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFBQSxrQkFFUkMsK0NBQVEsQ0FBQyxFQUFELENBRkE7QUFBQSxNQUV0QkMsR0FGc0I7QUFBQSxNQUVsQkMsTUFGa0I7O0FBQUEsbUJBR0FGLCtDQUFRLENBQUMsS0FBRCxDQUhSO0FBQUEsTUFHdEJHLE9BSHNCO0FBQUEsTUFHZEMsVUFIYzs7QUFBQSxtQkFJQUosK0NBQVEsQ0FBQyxLQUFELENBSlI7QUFBQSxNQUl0QkssT0FKc0I7QUFBQSxNQUlkQyxVQUpjOztBQUFBLG1CQUtFTiwrQ0FBUSxDQUFDLEVBQUQsQ0FMVjtBQUFBLE1BS3RCTyxRQUxzQjtBQUFBLE1BS2JDLFdBTGE7O0FBQUEsbUJBTUpSLCtDQUFRLENBQUMsS0FBRCxDQU5KO0FBQUEsTUFNdEJTLEtBTnNCO0FBQUEsTUFNaEJDLFFBTmdCOztBQVE3QixNQUFNQyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxDQUFELEVBQU07QUFDekJWLFVBQU0sQ0FBQ1UsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBTjtBQUNELEdBRkQ7O0FBR0EsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBSztBQUN0QlgsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBWSxvREFBQSxnREFBa0RmLEdBQWxELEdBQ0dnQixJQURILENBQ1EsVUFBQUMsR0FBRyxFQUFHO0FBQ1ZkLGdCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0FFLGdCQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0FFLGlCQUFXLENBQUNVLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxNQUFULENBQWdCQyxVQUFqQixDQUFYO0FBQ0FDLGVBQVMsQ0FBQ0MsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJOLEdBQUcsQ0FBQ0MsSUFBSixDQUFTQyxNQUFULENBQWdCQyxVQUE5QztBQUNELEtBTkgsV0FPUyxVQUFBSSxHQUFHLEVBQUk7QUFDWkMsV0FBSyxDQUFDLDBCQUFELENBQUw7QUFDQWhCLGNBQVEsQ0FBQyxJQUFELENBQVI7QUFDRCxLQVZIO0FBV0gsR0FiRDs7QUFjQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWlCLDBFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBTSxXQUFHLEVBQUMsWUFBVjtBQUF1QixZQUFJLEVBQUM7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTSxZQUFJLEVBQUMsNkVBQVg7QUFBeUYsV0FBRyxFQUFDO0FBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sWUFBSSxFQUFDLFVBQVg7QUFBc0IsZUFBTyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FO0FBQUssZUFBUyxFQUFFQSwyRUFBaEI7QUFBQSw4QkFDSTtBQUFLLGlCQUFTLEVBQUVBLHVFQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFFQSxzRUFBaEI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUVBLHFFQUFoQjtBQUFBLGtDQUNFO0FBQUsscUJBQVMsRUFBRUEsd0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURGLGVBSUU7QUFBSyxxQkFBUyxFQUFFQSx3RUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFBSyxtQkFBUyxFQUFFQSxzRUFBaEI7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBQyxrQ0FBVDtBQUE0QyxxQkFBUyxFQUFFQSxzRUFBWUM7QUFBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUF3QkU7QUFBSyxlQUFTLEVBQUVELDJFQUFoQjtBQUFBLDhCQUNJO0FBQUssaUJBQVMsRUFBRUEsc0VBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFJSTtBQUFLLGlCQUFTLEVBQUVBLG9FQUFoQjtBQUFBLGdDQUNJO0FBQU8scUJBQVcsRUFBQywrQkFBbkI7QUFBbUQsbUJBQVMsRUFBRUEsc0VBQTlEO0FBQTRFLGNBQUksRUFBQyxNQUFqRjtBQUF3RixrQkFBUSxFQUFFaEIsWUFBbEc7QUFBZ0gsZUFBSyxFQUFFVixHQUF2SDtBQUE0SCxZQUFFLEVBQUM7QUFBL0g7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixlQUVJO0FBQVEsbUJBQVMsRUFBRTBCLG9FQUFuQjtBQUErQixpQkFBTyxFQUFFWixZQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixFQVNNWixPQUFPLGdCQUVQO0FBQUssaUJBQVMsRUFBRXdCLHVFQUFhRTtBQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRk8sR0FJUHhCLE9BQU8saUJBRVA7QUFBSyxpQkFBUyxFQUFFc0Isd0VBQWhCO0FBQUEsZ0NBQ0U7QUFBTSxtQkFBUyxFQUFFQSx3RUFBakI7QUFBQSxvQkFBa0NwQjtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBRUU7QUFBTSxtQkFBUyxFQUFFb0IscUVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWZOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdERDs7R0F6RXVCNUIsSTs7S0FBQUEsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41MWRlMGNhYjE0OGI5YWQwOGM4MS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0ICwge3VzZVN0YXRlLHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFt1cmwsc2V0VXJsXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2xvYWRpbmcsc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtzdWNjZXNzLHNldFN1Y2Nlc3NdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvcnR1cmwsc2V0U2hvcnR1cmxdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZXJyb3Isc2V0RXJyb3JdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IGlucHV0SGFuZGxlciA9IChlKSA9PntcbiAgICBzZXRVcmwoZS50YXJnZXQudmFsdWUpO1xuICB9XG4gIGNvbnN0IGNsaWNrSGFuZGxlciA9ICgpID0+e1xuICAgICAgc2V0TG9hZGluZyh0cnVlKTtcbiAgICAgIGF4aW9zLmdldChgaHR0cHM6Ly9hcGkuc2hydGNvLmRlL3YyL3Nob3J0ZW4/dXJsPSR7dXJsfWApXG4gICAgICAgIC50aGVuKHJlcyA9PntcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgICBzZXRTdWNjZXNzKHRydWUpO1xuICAgICAgICAgIHNldFNob3J0dXJsKHJlcy5kYXRhLnJlc3VsdC5zaG9ydF9saW5rKTtcbiAgICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChyZXMuZGF0YS5yZXN1bHQuc2hvcnRfbGluayk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgYSB2YWxpZCBVUkwnKTtcbiAgICAgICAgICBzZXRFcnJvcih0cnVlKTtcbiAgICAgICAgfSlcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bGluayByZWw9XCJwcmVjb25uZWN0XCIgaHJlZj1cImh0dHBzOi8vZm9udHMuZ3N0YXRpYy5jb21cIi8+XG4gICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvYnN0ZXImZmFtaWx5PVVidW50dSZkaXNwbGF5PXN3YXBcIiByZWw9XCJzdHlsZXNoZWV0XCIvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcjF9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgU2hvcnRseVVSTFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXBwZXJ9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWdsaW5lfT5cbiAgICAgICAgICAgICAgICAgIFNob3J0IGxpbmtzLCBiaWcgcmVzdWx0c1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXB0aW9ufT5cbiAgICAgICAgICAgICAgICAgIEFuIFVSTCBzaG9ydGVuZXIgYnVpbHQgd2l0aCBwb3dlcmZ1bCB0b29scyB0byBoZWxwIHlvdSBncm93IGFuZCBwcm90ZWN0IHlvdXIgYnJhbmQuXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJpZ2h0fT5cbiAgICAgICAgICAgICAgPGltZyBzcmM9Jy9pbWFnZXMvaWxsdXN0cmF0aW9uLXdvcmtpbmcuc3ZnJyBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0vPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyMn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgIFNpbXBsZSBhbmQgZmFzdCBVUkwgc2hvcnRlbmVyIVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXJsfT5cbiAgICAgICAgICAgICAgPGlucHV0IHBsYWNlaG9sZGVyPSdQYXN0ZSBsb25nIHVybCBhbmQgc2hvcnRlbiBpdCcgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IHR5cGU9J3RleHQnIG9uQ2hhbmdlPXtpbnB1dEhhbmRsZXJ9IHZhbHVlPXt1cmx9IGlkPSdteUlucHV0Jy8+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuYnRufSBvbkNsaWNrPXtjbGlja0hhbmRsZXJ9PlNob3J0ZW48L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICA/XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvYWRlcn0+PC9kaXY+XG4gICAgICAgICAgICA6IFxuICAgICAgICAgICAgc3VjY2VzcyBcbiAgICAgICAgICAgICYmIFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5dXJsfT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMudXJsdGV4dH0+e3Nob3J0dXJsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY29weX0+Q29waWVkIHRvIENsaXBib2FyZCDinJQ8L3NwYW4+IFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=