"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/components/Content.js":
/*!*************************************!*\
  !*** ./pages/components/Content.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ Card */ \"./pages/components/ Card.js\");\n/* harmony import */ var _masterswap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../masterswap */ \"./pages/masterswap.js\");\n/* harmony import */ var _PopUp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PopUp */ \"./pages/components/PopUp.js\");\n/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material/Button */ \"./node_modules/@mui/material/esm/Button/index.js\");\n/* harmony import */ var _mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/Dialog */ \"./node_modules/@mui/material/esm/Dialog/index.js\");\n/* harmony import */ var _mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/DialogActions */ \"./node_modules/@mui/material/esm/DialogActions/index.js\");\n/* harmony import */ var _mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/DialogContent */ \"./node_modules/@mui/material/esm/DialogContent/index.js\");\n/* harmony import */ var _mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/DialogContentText */ \"./node_modules/@mui/material/esm/DialogContentText/index.js\");\n/* harmony import */ var _mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/DialogTitle */ \"./node_modules/@mui/material/esm/DialogTitle/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n// import { Line } from \"react-chartjs-2\";\n// import { Doughnut } from \"react-chartjs-2\";\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst data1 = {\n    labels: [\n        \"Organic\",\n        \"Social Media\",\n        \"Websites\"\n    ],\n    datasets: [\n        {\n            data: [\n                300,\n                50,\n                100\n            ],\n            backgroundColor: [\n                \"#FF6384\",\n                \"#36A2EB\",\n                \"#FFCE56\"\n            ],\n            hoverBackgroundColor: [\n                \"#FF6384\",\n                \"#36A2EB\",\n                \"#FFCE56\"\n            ]\n        }\n    ]\n};\nfunction Content() {\n    _s();\n    const [showPop, setShowPop] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const handleClickOpen = ()=>{\n        setOpen(true);\n    };\n    const handleClose = ()=>{\n        setOpen(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentcontainer),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().contentwrapper),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().categories),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                cardNumber: \"5431 1111 1111 1111\",\n                                name: \"Jane Taylor\",\n                                date: \"10/24\",\n                                textColor: \"#fff\"\n                            }, void 0, false, {\n                                fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                lineNumber: 53,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().cardHoverButton),\n                                onClick: handleClickOpen,\n                                children: \" Connect \"\n                            }, void 0, false, {\n                                fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                lineNumber: 54,\n                                columnNumber: 7\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Dialog__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                open: open,\n                                onClose: handleClose,\n                                \"aria-labelledby\": \"alert-dialog-title\",\n                                \"aria-describedby\": \"alert-dialog-description\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogTitle__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n                                        id: \"alert-dialog-title\",\n                                        children: \"Use Masterswap?\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                        lineNumber: 61,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContent__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogContentText__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n                                            id: \"alert-dialog-description\",\n                                            children: \"Let Masterswap connect your card with your crypto wallet. This means you are giving Masterswap access to your card information.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 11\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 9\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_DialogActions__WEBPACK_IMPORTED_MODULE_10__[\"default\"], {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                onClick: handleClose,\n                                                children: \"Disagree\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                                lineNumber: 70,\n                                                columnNumber: 11\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_11__[\"default\"], {\n                                                onClick: handleClose,\n                                                autoFocus: true,\n                                                children: \"Agree\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 11\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 9\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                                lineNumber: 55,\n                                columnNumber: 7\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                        lineNumber: 52,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                    lineNumber: 51,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                    style: {\n                        backgroundColor: \"grey\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().categories),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            cardNumber: \"5123 4558 0630 8521\",\n                            name: \"Jane Taylor\",\n                            date: \"08/28\",\n                            textColor: \"#fff\"\n                        }, void 0, false, {\n                            fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                            lineNumber: 81,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                        lineNumber: 80,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                    lineNumber: 79,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().card),\n                    style: {\n                        backgroundColor: \"crimson\"\n                    },\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().categories),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            cardNumber: \"5123 4590 4605 8920\",\n                            name: \"Jane Taylor\",\n                            date: \"06/26\",\n                            textColor: \"#fff\"\n                        }, void 0, false, {\n                            fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                            lineNumber: 86,\n                            columnNumber: 7\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                        lineNumber: 85,\n                        columnNumber: 6\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n                    lineNumber: 84,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n            lineNumber: 49,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n        lineNumber: 47,\n        columnNumber: 3\n    }, this);\n}\n_s(Content, \"KVb/FsVhWYZGNSMHLVTkd1BNIHI=\");\n_c = Content;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Content);\nvar _c;\n$RefreshReg$(_c, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jb21wb25lbnRzL0NvbnRlbnQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUEwQjtBQUN3QjtBQUNsRCwwQ0FBMEM7QUFDMUMsOENBQThDO0FBQ25CO0FBQ0c7QUFDUztBQUNWO0FBRUQ7QUFFUTtBQUNNO0FBRUE7QUFDQTtBQUNjO0FBQ0E7QUFDUTtBQUNaO0FBRXBELE1BQU1lLFFBQVE7SUFDYkMsUUFBUTtRQUFDO1FBQVc7UUFBZ0I7S0FBVztJQUMvQ0MsVUFBVTtRQUNUO1lBQ0NDLE1BQU07Z0JBQUM7Z0JBQUs7Z0JBQUk7YUFBSTtZQUNwQkMsaUJBQWlCO2dCQUFDO2dCQUFXO2dCQUFXO2FBQVU7WUFDbERDLHNCQUFzQjtnQkFBQztnQkFBVztnQkFBVzthQUFVO1FBQ3hEO0tBQ0E7QUFDRjtBQUVBLFNBQVNDLFVBQVU7O0lBQ2xCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHcEIsK0NBQVFBLENBQUMsS0FBSztJQUU1QyxNQUFNLENBQUNxQixNQUFNQyxRQUFRLEdBQUd6QixxREFBYyxDQUFDLEtBQUs7SUFFMUMsTUFBTTBCLGtCQUFrQixJQUFNO1FBQy9CRCxRQUFRLElBQUk7SUFDWDtJQUVBLE1BQU1FLGNBQWMsSUFBTTtRQUMzQkYsUUFBUSxLQUFLO0lBQ1o7SUFFRixxQkFDQyw4REFBQ0c7UUFBSUMsV0FBVzVCLGlGQUF1QjtrQkFFdEMsNEVBQUMyQjtZQUFJQyxXQUFXNUIsK0VBQXFCOzs4QkFFcEMsOERBQUMyQjtvQkFBSUMsV0FBVzVCLHFFQUFXOzhCQUMxQiw0RUFBRTJCO3dCQUFJQyxXQUFXNUIsMkVBQWlCOzswQ0FDakMsOERBQUNDLDZDQUFJQTtnQ0FBQ2dDLFlBQWM7Z0NBQXVCQyxNQUFNO2dDQUFlQyxNQUFNO2dDQUFTQyxXQUFXOzs7Ozs7MENBQzFGLDhEQUFDQztnQ0FBT1QsV0FBVzVCLGdGQUFzQjtnQ0FBRXVDLFNBQVNkOzBDQUFpQjs7Ozs7OzBDQUNyRSw4REFBQ2hCLDREQUFNQTtnQ0FDTGMsTUFBTUE7Z0NBQ05pQixTQUFTZDtnQ0FDVGUsbUJBQWdCO2dDQUNoQkMsb0JBQWlCOztrREFFakIsOERBQUM3QixpRUFBV0E7d0NBQUM4QixJQUFHO2tEQUNiOzs7Ozs7a0RBRUgsOERBQUNoQyxtRUFBYUE7a0RBQ1osNEVBQUNDLHVFQUFpQkE7NENBQUMrQixJQUFHO3NEQUEyQjs7Ozs7Ozs7Ozs7a0RBSW5ELDhEQUFDakMsb0VBQWFBOzswREFDWiw4REFBQ0YsNkRBQU1BO2dEQUFDK0IsU0FBU2I7MERBQWE7Ozs7OzswREFDOUIsOERBQUNsQiw2REFBTUE7Z0RBQUMrQixTQUFTYjtnREFBYWtCLFNBQVM7MERBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQVE5Qyw4REFBQ2pCO29CQUFJQyxXQUFXNUIscUVBQVc7b0JBQUU2QyxPQUFPO3dCQUFDM0IsaUJBQWlCO29CQUFNOzhCQUMzRCw0RUFBQ1M7d0JBQUlDLFdBQVc1QiwyRUFBaUI7a0NBQ2hDLDRFQUFDQyw2Q0FBSUE7NEJBQUNnQyxZQUFjOzRCQUF1QkMsTUFBTTs0QkFBZUMsTUFBTTs0QkFBU0MsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFHNUYsOERBQUNUO29CQUFJQyxXQUFXNUIscUVBQVc7b0JBQUU2QyxPQUFPO3dCQUFDM0IsaUJBQWdCO29CQUFTOzhCQUM3RCw0RUFBQ1M7d0JBQUlDLFdBQVc1QiwyRUFBaUI7a0NBQ2hDLDRFQUFDQyw2Q0FBSUE7NEJBQUNnQyxZQUFjOzRCQUF1QkMsTUFBTTs0QkFBZUMsTUFBTTs0QkFBU0MsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUJoRztHQXRFU2hCO0tBQUFBO0FBd0VULCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NvbXBvbmVudHMvQ29udGVudC5qcz9lNGZjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbi8vIGltcG9ydCB7IExpbmUgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG4vLyBpbXBvcnQgeyBEb3VnaG51dCB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLyBDYXJkXCI7XG5pbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcbmltcG9ydCBtYXN0ZXJzd2FwIGZyb20gXCIuLi9tYXN0ZXJzd2FwXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUG9wVXAgZnJvbSBcIi4vUG9wVXBcIjtcblxuaW1wb3J0IEJveCBmcm9tICdAbXVpL21hdGVyaWFsL0JveCc7XG5pbXBvcnQgUG9wcGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvUG9wcGVyJztcblxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQ29udGVudFRleHQnO1xuaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nVGl0bGUnO1xuXG5jb25zdCBkYXRhMSA9IHtcblx0bGFiZWxzOiBbXCJPcmdhbmljXCIsIFwiU29jaWFsIE1lZGlhXCIsIFwiV2Vic2l0ZXNcIl0sXG5cdGRhdGFzZXRzOiBbXG5cdFx0e1xuXHRcdFx0ZGF0YTogWzMwMCwgNTAsIDEwMF0sXG5cdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IFtcIiNGRjYzODRcIiwgXCIjMzZBMkVCXCIsIFwiI0ZGQ0U1NlwiXSxcblx0XHRcdGhvdmVyQmFja2dyb3VuZENvbG9yOiBbXCIjRkY2Mzg0XCIsIFwiIzM2QTJFQlwiLCBcIiNGRkNFNTZcIl0sXG5cdFx0fSxcblx0XSxcbn07XG5cbmZ1bmN0aW9uIENvbnRlbnQoKSB7XG5cdGNvbnN0IFtzaG93UG9wLCBzZXRTaG93UG9wXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG5cdGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuXHQgIGNvbnN0IGhhbmRsZUNsaWNrT3BlbiA9ICgpID0+IHtcblx0XHRzZXRPcGVuKHRydWUpO1xuXHQgIH07XG5cdFxuXHQgIGNvbnN0IGhhbmRsZUNsb3NlID0gKCkgPT4ge1xuXHRcdHNldE9wZW4oZmFsc2UpO1xuXHQgIH07XG5cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRjb250YWluZXJ9PlxuXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR3cmFwcGVyfT5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuXHRcdFx0XHRcdDwgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxuXHRcdFx0XHRcdFx0PENhcmQgY2FyZE51bWJlciA9IHtcIjU0MzEgMTExMSAxMTExIDExMTFcIn0gbmFtZT17XCJKYW5lIFRheWxvclwifSBkYXRlPXtcIjEwLzI0XCJ9IHRleHRDb2xvcj17XCIjZmZmXCJ9Lz5cblx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEhvdmVyQnV0dG9ufSBvbkNsaWNrPXtoYW5kbGVDbGlja09wZW59PiBDb25uZWN0IDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PERpYWxvZ1xuICAgICAgICBvcGVuPXtvcGVufVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiYWxlcnQtZGlhbG9nLXRpdGxlXCJcbiAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImFsZXJ0LWRpYWxvZy1kZXNjcmlwdGlvblwiXG4gICAgICA+XG4gICAgICAgIDxEaWFsb2dUaXRsZSBpZD1cImFsZXJ0LWRpYWxvZy10aXRsZVwiPlxuICAgICAgICAgIHtcIlVzZSBNYXN0ZXJzd2FwP1wifVxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8RGlhbG9nQ29udGVudD5cbiAgICAgICAgICA8RGlhbG9nQ29udGVudFRleHQgaWQ9XCJhbGVydC1kaWFsb2ctZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgIExldCBNYXN0ZXJzd2FwIGNvbm5lY3QgeW91ciBjYXJkIHdpdGggeW91ciBjcnlwdG8gd2FsbGV0LiBUaGlzIG1lYW5zIHlvdSBhcmUgZ2l2aW5nIE1hc3RlcnN3YXAgYWNjZXNzIHRvIHlvdXIgY2FyZCBpbmZvcm1hdGlvbi5cbiAgICAgICAgICA8L0RpYWxvZ0NvbnRlbnRUZXh0PlxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zPlxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PkRpc2FncmVlPC9CdXR0b24+XG4gICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gYXV0b0ZvY3VzPlxuICAgICAgICAgICAgQWdyZWVcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IFwiZ3JleVwifX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfT5cblx0XHRcdFx0XHRcdDxDYXJkIGNhcmROdW1iZXIgPSB7XCI1MTIzIDQ1NTggMDYzMCA4NTIxXCJ9IG5hbWU9e1wiSmFuZSBUYXlsb3JcIn0gZGF0ZT17XCIwOC8yOFwifSB0ZXh0Q29sb3I9e1wiI2ZmZlwifS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9IHN0eWxlPXt7YmFja2dyb3VuZENvbG9yOlwiY3JpbXNvblwifX0+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXRlZ29yaWVzfT5cblx0XHRcdFx0XHRcdDxDYXJkIGNhcmROdW1iZXIgPSB7XCI1MTIzIDQ1OTAgNDYwNSA4OTIwXCJ9IG5hbWU9e1wiSmFuZSBUYXlsb3JcIn0gZGF0ZT17XCIwNi8yNlwifSB0ZXh0Q29sb3I9e1wiI2ZmZlwifS8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7LyogY2hhcnQgc3RhcnRlZCAgKi99XG5cdFx0XHR7LyogPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jaGFydHN9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhcn0+XG5cdFx0XHRcdFx0PGgyPlNhbGVzPC9oMj5cblx0XHRcdFx0XHQ8TGluZSBkYXRhPXtkYXRhfSB3aWR0aD17NDAwfSBoZWlnaHQ9ezQwMH0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2lyY2xlfT5cblx0XHRcdFx0XHQ8aDI+Q3VzdG9tZXJzIEFycml2ZWQ8L2gyPlxuXHRcdFx0XHRcdDxEb3VnaG51dCBkYXRhPXtkYXRhMX0gd2lkdGg9ezQwMH0gaGVpZ2h0PXs0MDB9IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+ICovfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDb250ZW50O1xuIl0sIm5hbWVzIjpbIlJlYWN0Iiwic3R5bGVzIiwiQ2FyZCIsInVzZVN0YXRlIiwibWFzdGVyc3dhcCIsIkxpbmsiLCJQb3BVcCIsIkJveCIsIlBvcHBlciIsIkJ1dHRvbiIsIkRpYWxvZyIsIkRpYWxvZ0FjdGlvbnMiLCJEaWFsb2dDb250ZW50IiwiRGlhbG9nQ29udGVudFRleHQiLCJEaWFsb2dUaXRsZSIsImRhdGExIiwibGFiZWxzIiwiZGF0YXNldHMiLCJkYXRhIiwiYmFja2dyb3VuZENvbG9yIiwiaG92ZXJCYWNrZ3JvdW5kQ29sb3IiLCJDb250ZW50Iiwic2hvd1BvcCIsInNldFNob3dQb3AiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZUNsaWNrT3BlbiIsImhhbmRsZUNsb3NlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGVudGNvbnRhaW5lciIsImNvbnRlbnR3cmFwcGVyIiwiY2FyZCIsImNhdGVnb3JpZXMiLCJjYXJkTnVtYmVyIiwibmFtZSIsImRhdGUiLCJ0ZXh0Q29sb3IiLCJidXR0b24iLCJjYXJkSG92ZXJCdXR0b24iLCJvbkNsaWNrIiwib25DbG9zZSIsImFyaWEtbGFiZWxsZWRieSIsImFyaWEtZGVzY3JpYmVkYnkiLCJpZCIsImF1dG9Gb2N1cyIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/components/Content.js\n"));

/***/ })

});