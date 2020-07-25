webpackHotUpdate("static/development/pages/index.js",{

/***/ "./assets/js/TableClass.js":
/*!*********************************!*\
  !*** ./assets/js/TableClass.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Table; });\n/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n\n\nvar Table = function Table(csv) {\n  Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Table);\n\n  this.totals = {\n    sumTotal: parseInt(csv['Total']),\n    copperBar: parseInt(csv['Copper Bar']),\n    ironBar: parseInt(csv['Iron Bar']),\n    thoriumBar: parseInt(csv['Thorium Bar']),\n    lightLeather: parseInt(csv['Light Leather']),\n    mediumLeather: parseInt(csv['Medium Leather']),\n    thickLeather: parseInt(csv['Thick Leather']),\n    linenBandage: parseInt(csv['Linen Bandages']),\n    silkBandage: parseInt(csv['Silk Bandages']),\n    runeclothBandage: parseInt(csv['Runecloth Bandages']),\n    purpleLotus: parseInt(csv['Purple Lotus']),\n    stranglekelp: parseInt(csv['Stranglekelp']),\n    arthasTear: parseInt(csv[\"Arthas' Tears\"]),\n    roastRaptor: parseInt(csv['Roast Raptor']),\n    rainbowFin: parseInt(csv['Rainbow Fin Albacore']),\n    spottedYellowtail: parseInt(csv['Spotted Yellowtail'])\n  };\n};\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvVGFibGVDbGFzcy5qcz9kNTM5Il0sIm5hbWVzIjpbIlRhYmxlIiwiY3N2IiwidG90YWxzIiwic3VtVG90YWwiLCJwYXJzZUludCIsImNvcHBlckJhciIsImlyb25CYXIiLCJ0aG9yaXVtQmFyIiwibGlnaHRMZWF0aGVyIiwibWVkaXVtTGVhdGhlciIsInRoaWNrTGVhdGhlciIsImxpbmVuQmFuZGFnZSIsInNpbGtCYW5kYWdlIiwicnVuZWNsb3RoQmFuZGFnZSIsInB1cnBsZUxvdHVzIiwic3RyYW5nbGVrZWxwIiwiYXJ0aGFzVGVhciIsInJvYXN0UmFwdG9yIiwicmFpbmJvd0ZpbiIsInNwb3R0ZWRZZWxsb3d0YWlsIl0sIm1hcHBpbmdzIjoiOzs7OztJQUFxQkEsSyxHQUNuQixlQUFZQyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2YsT0FBS0MsTUFBTCxHQUFjO0FBQ1pDLFlBQVEsRUFBRUMsUUFBUSxDQUFDSCxHQUFHLENBQUMsT0FBRCxDQUFKLENBRE47QUFFWkksYUFBUyxFQUFFRCxRQUFRLENBQUNILEdBQUcsQ0FBQyxZQUFELENBQUosQ0FGUDtBQUdaSyxXQUFPLEVBQUVGLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLFVBQUQsQ0FBSixDQUhMO0FBSVpNLGNBQVUsRUFBRUgsUUFBUSxDQUFDSCxHQUFHLENBQUMsYUFBRCxDQUFKLENBSlI7QUFLWk8sZ0JBQVksRUFBRUosUUFBUSxDQUFDSCxHQUFHLENBQUMsZUFBRCxDQUFKLENBTFY7QUFNWlEsaUJBQWEsRUFBRUwsUUFBUSxDQUFDSCxHQUFHLENBQUMsZ0JBQUQsQ0FBSixDQU5YO0FBT1pTLGdCQUFZLEVBQUVOLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLGVBQUQsQ0FBSixDQVBWO0FBUVpVLGdCQUFZLEVBQUVQLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLGdCQUFELENBQUosQ0FSVjtBQVNaVyxlQUFXLEVBQUVSLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLGVBQUQsQ0FBSixDQVRUO0FBVVpZLG9CQUFnQixFQUFFVCxRQUFRLENBQUNILEdBQUcsQ0FBQyxvQkFBRCxDQUFKLENBVmQ7QUFXWmEsZUFBVyxFQUFFVixRQUFRLENBQUNILEdBQUcsQ0FBQyxjQUFELENBQUosQ0FYVDtBQVlaYyxnQkFBWSxFQUFFWCxRQUFRLENBQUNILEdBQUcsQ0FBQyxjQUFELENBQUosQ0FaVjtBQWFaZSxjQUFVLEVBQUVaLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLGVBQUQsQ0FBSixDQWJSO0FBY1pnQixlQUFXLEVBQUViLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLGNBQUQsQ0FBSixDQWRUO0FBZVppQixjQUFVLEVBQUVkLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLHNCQUFELENBQUosQ0FmUjtBQWdCWmtCLHFCQUFpQixFQUFFZixRQUFRLENBQUNILEdBQUcsQ0FBQyxvQkFBRCxDQUFKO0FBaEJmLEdBQWQ7QUFrQkQsQyIsImZpbGUiOiIuL2Fzc2V0cy9qcy9UYWJsZUNsYXNzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFibGUge1xuICBjb25zdHJ1Y3Rvcihjc3YpIHtcbiAgICB0aGlzLnRvdGFscyA9IHtcbiAgICAgIHN1bVRvdGFsOiBwYXJzZUludChjc3ZbJ1RvdGFsJ10pLFxuICAgICAgY29wcGVyQmFyOiBwYXJzZUludChjc3ZbJ0NvcHBlciBCYXInXSksXG4gICAgICBpcm9uQmFyOiBwYXJzZUludChjc3ZbJ0lyb24gQmFyJ10pLFxuICAgICAgdGhvcml1bUJhcjogcGFyc2VJbnQoY3N2WydUaG9yaXVtIEJhciddKSxcbiAgICAgIGxpZ2h0TGVhdGhlcjogcGFyc2VJbnQoY3N2WydMaWdodCBMZWF0aGVyJ10pLFxuICAgICAgbWVkaXVtTGVhdGhlcjogcGFyc2VJbnQoY3N2WydNZWRpdW0gTGVhdGhlciddKSxcbiAgICAgIHRoaWNrTGVhdGhlcjogcGFyc2VJbnQoY3N2WydUaGljayBMZWF0aGVyJ10pLFxuICAgICAgbGluZW5CYW5kYWdlOiBwYXJzZUludChjc3ZbJ0xpbmVuIEJhbmRhZ2VzJ10pLFxuICAgICAgc2lsa0JhbmRhZ2U6IHBhcnNlSW50KGNzdlsnU2lsayBCYW5kYWdlcyddKSxcbiAgICAgIHJ1bmVjbG90aEJhbmRhZ2U6IHBhcnNlSW50KGNzdlsnUnVuZWNsb3RoIEJhbmRhZ2VzJ10pLFxuICAgICAgcHVycGxlTG90dXM6IHBhcnNlSW50KGNzdlsnUHVycGxlIExvdHVzJ10pLFxuICAgICAgc3RyYW5nbGVrZWxwOiBwYXJzZUludChjc3ZbJ1N0cmFuZ2xla2VscCddKSxcbiAgICAgIGFydGhhc1RlYXI6IHBhcnNlSW50KGNzdltcIkFydGhhcycgVGVhcnNcIl0pLFxuICAgICAgcm9hc3RSYXB0b3I6IHBhcnNlSW50KGNzdlsnUm9hc3QgUmFwdG9yJ10pLFxuICAgICAgcmFpbmJvd0ZpbjogcGFyc2VJbnQoY3N2WydSYWluYm93IEZpbiBBbGJhY29yZSddKSxcbiAgICAgIHNwb3R0ZWRZZWxsb3d0YWlsOiBwYXJzZUludChjc3ZbJ1Nwb3R0ZWQgWWVsbG93dGFpbCddKSxcbiAgICB9O1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./assets/js/TableClass.js\n");

/***/ })

})