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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Content; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Box */ \"./node_modules/@mui/material/esm/Box/index.js\");\n/* harmony import */ var _mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/x-data-grid */ \"./node_modules/@mui/x-data-grid/index.js\");\n// import React from \"react\";\n// import styles from \"../../styles/Home.module.css\";\n// import Card from \"./ Card\";\n// import Button from '@mui/material/Button';\n// import Dialog from '@mui/material/Dialog';\n// import DialogActions from '@mui/material/DialogActions';\n// import DialogContent from '@mui/material/DialogContent';\n// import DialogContentText from '@mui/material/DialogContentText';\n// import DialogTitle from '@mui/material/DialogTitle';\n// function Content() {\n// \tconst [open, setOpen] = React.useState(false);\n// \t  const handleClickOpen = () => {\n// \t\tsetOpen(true);\n// \t  };\n// \t  const handleClose = () => {\n// \t\tsetOpen(false);\n// \t  };\n// \treturn (\n// \t\t<div className={styles.contentcontainer}>\n// \t\t\t<div className={styles.contentwrapper}>\n// \t\t\t\t<div className={styles.card}>\n// \t\t\t\t\t< div className={styles.categories}>\n// \t\t\t\t\t\t<Card cardNumber = {\"5431 1111 1111 1111\"} name={\"Jane Taylor\"} date={\"10/24\"} textColor={\"#fff\"}/>\n// \t\t\t\t\t\t<button className={styles.cardButton} onClick={handleClickOpen}> Connect </button>\n// \t\t\t\t\t\t<Dialog\n// \t\t\t\t\t\topen={open}\n// \t\t\t\t\t\tonClose={handleClose}\n// \t\t\t\t\t\taria-labelledby=\"alert-dialog-title\"\n// \t\t\t\t\t\taria-describedby=\"alert-dialog-description\"\n// \t\t\t\t\t>\n// \t\t\t\t\t\t<DialogTitle id=\"alert-dialog-title\">\n// \t\t\t\t\t\t{\"Use Masterswap?\"}\n// \t\t\t\t\t\t</DialogTitle>\n// \t\t\t\t\t\t<DialogContent>\n// \t\t\t\t\t\t<DialogContentText id=\"alert-dialog-description\">\n// \t\t\t\t\t\t\tLet Masterswap connect your card with your crypto wallet. This means you are giving Masterswap access to your card information.\n// \t\t\t\t\t\t</DialogContentText>\n// \t\t\t\t\t\t</DialogContent>\n// \t\t\t\t\t\t<DialogActions>\n// \t\t\t\t\t\t<Button onClick={handleClose}>Disagree</Button>\n// \t\t\t\t\t\t<Button onClick={handleClose} autoFocus>\n// \t\t\t\t\t\t\tAgree\n// \t\t\t\t\t\t</Button>\n// \t\t\t\t\t\t</DialogActions>\n// \t\t\t\t\t</Dialog>\n// \t\t\t\t\t</div>\n// \t\t\t\t</div>\n// \t\t\t\t<div className={styles.card} style={{backgroundColor: \"grey\"}}>\n// \t\t\t\t\t<div className={styles.categories}>\n// \t\t\t\t\t\t<Card cardNumber = {\"5123 4558 0630 8521\"} name={\"Jane Taylor\"} date={\"08/28\"} textColor={\"#fff\"}/>\n// \t\t\t\t\t</div>\n// \t\t\t\t</div>\n// \t\t\t\t<div className={styles.card} style={{backgroundColor:\"crimson\"}}>\n// \t\t\t\t\t<div className={styles.categories}>\n// \t\t\t\t\t\t<Card cardNumber = {\"5123 4590 4605 8920\"} name={\"Jane Taylor\"} date={\"06/26\"} textColor={\"#fff\"}/>\n// \t\t\t\t\t</div>\n// \t\t\t\t</div>\n// \t\t\t</div>\n// \t\t</div>\n// \t);\n// }\n// export default Content;\n\n\n\n\nconst columns = [\n    {\n        field: \"id\",\n        headerName: \"ID\",\n        width: 90\n    },\n    {\n        field: \"firstName\",\n        headerName: \"First name\",\n        width: 150,\n        editable: true\n    },\n    {\n        field: \"lastName\",\n        headerName: \"Last name\",\n        width: 150,\n        editable: true\n    },\n    {\n        field: \"age\",\n        headerName: \"Age\",\n        type: \"number\",\n        width: 110,\n        editable: true\n    },\n    {\n        field: \"fullName\",\n        headerName: \"Full name\",\n        description: \"This column has a value getter and is not sortable.\",\n        sortable: false,\n        width: 160,\n        valueGetter: (params)=>\"\".concat(params.row.firstName || \"\", \" \").concat(params.row.lastName || \"\")\n    }\n];\nconst rows = [\n    {\n        id: 1,\n        lastName: \"Snow\",\n        firstName: \"Jon\",\n        age: 35\n    },\n    {\n        id: 2,\n        lastName: \"Lannister\",\n        firstName: \"Cersei\",\n        age: 42\n    },\n    {\n        id: 3,\n        lastName: \"Lannister\",\n        firstName: \"Jaime\",\n        age: 45\n    },\n    {\n        id: 4,\n        lastName: \"Stark\",\n        firstName: \"Arya\",\n        age: 16\n    },\n    {\n        id: 5,\n        lastName: \"Targaryen\",\n        firstName: \"Daenerys\",\n        age: null\n    },\n    {\n        id: 6,\n        lastName: \"Melisandre\",\n        firstName: null,\n        age: 150\n    },\n    {\n        id: 7,\n        lastName: \"Clifford\",\n        firstName: \"Ferrara\",\n        age: 44\n    },\n    {\n        id: 8,\n        lastName: \"Frances\",\n        firstName: \"Rossini\",\n        age: 36\n    },\n    {\n        id: 9,\n        lastName: \"Roxie\",\n        firstName: \"Harvey\",\n        age: 65\n    }\n];\nfunction Content() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        sx: {\n            height: 400,\n            paddingLeft: \"200px\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_x_data_grid__WEBPACK_IMPORTED_MODULE_3__.DataGrid, {\n            rows: rows,\n            columns: columns,\n            pageSize: 5,\n            rowsPerPageOptions: [\n                5\n            ],\n            // checkboxSelection\n            disableSelectionOnClick: true,\n            experimentalFeatures: {\n                newEditingApi: true\n            }\n        }, void 0, false, {\n            fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n            lineNumber: 123,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/LolaRoberts/Desktop/EthSanFrancisco2022/masterswap/pages/components/Content.js\",\n        lineNumber: 122,\n        columnNumber: 5\n    }, this);\n}\n_c = Content;\nvar _c;\n$RefreshReg$(_c, \"Content\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVSSxLQUFLO0lBQUc7Q0FDMUQ7QUFFYyxTQUFTQyxVQUFVO0lBQ2hDLHFCQUNFLDhEQUFDbEIseURBQUdBO1FBQUNtQixJQUFJO1lBQUVDLFFBQVE7WUFBS0MsYUFBWTtRQUFRO2tCQUMxQyw0RUFBQ3BCLHNEQUFRQTtZQUNQYyxNQUFNQTtZQUNOYixTQUFTQTtZQUNUb0IsVUFBVTtZQUNWQyxvQkFBb0I7Z0JBQUM7YUFBRTtZQUN2QixvQkFBb0I7WUFDcEJDLHVCQUF1QjtZQUN2QkMsc0JBQXNCO2dCQUFFQyxlQUFlLElBQUk7WUFBQzs7Ozs7Ozs7Ozs7QUFJcEQsQ0FBQztLQWR1QlIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY29tcG9uZW50cy9Db250ZW50LmpzP2U0ZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuLy8gaW1wb3J0IENhcmQgZnJvbSBcIi4vIENhcmRcIjtcblxuLy8gaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XG4vLyBpbXBvcnQgRGlhbG9nIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nJztcbi8vIGltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQWN0aW9ucyc7XG4vLyBpbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbXVpL21hdGVyaWFsL0RpYWxvZ0NvbnRlbnQnO1xuLy8gaW1wb3J0IERpYWxvZ0NvbnRlbnRUZXh0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nQ29udGVudFRleHQnO1xuLy8gaW1wb3J0IERpYWxvZ1RpdGxlIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGlhbG9nVGl0bGUnO1xuXG4vLyBmdW5jdGlvbiBDb250ZW50KCkge1xuLy8gXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbi8vIFx0ICBjb25zdCBoYW5kbGVDbGlja09wZW4gPSAoKSA9PiB7XG4vLyBcdFx0c2V0T3Blbih0cnVlKTtcbi8vIFx0ICB9O1xuXHRcbi8vIFx0ICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbi8vIFx0XHRzZXRPcGVuKGZhbHNlKTtcbi8vIFx0ICB9O1xuXG4vLyBcdHJldHVybiAoXG4vLyBcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50Y29udGFpbmVyfT5cbi8vIFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudHdyYXBwZXJ9PlxuLy8gXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuLy8gXHRcdFx0XHRcdDwgZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxuLy8gXHRcdFx0XHRcdFx0PENhcmQgY2FyZE51bWJlciA9IHtcIjU0MzEgMTExMSAxMTExIDExMTFcIn0gbmFtZT17XCJKYW5lIFRheWxvclwifSBkYXRlPXtcIjEwLzI0XCJ9IHRleHRDb2xvcj17XCIjZmZmXCJ9Lz5cbi8vIFx0XHRcdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuY2FyZEJ1dHRvbn0gb25DbGljaz17aGFuZGxlQ2xpY2tPcGVufT4gQ29ubmVjdCA8L2J1dHRvbj5cbi8vIFx0XHRcdFx0XHRcdDxEaWFsb2dcbi8vIFx0XHRcdFx0XHRcdG9wZW49e29wZW59XG4vLyBcdFx0XHRcdFx0XHRvbkNsb3NlPXtoYW5kbGVDbG9zZX1cbi8vIFx0XHRcdFx0XHRcdGFyaWEtbGFiZWxsZWRieT1cImFsZXJ0LWRpYWxvZy10aXRsZVwiXG4vLyBcdFx0XHRcdFx0XHRhcmlhLWRlc2NyaWJlZGJ5PVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCJcbi8vIFx0XHRcdFx0XHQ+XG4vLyBcdFx0XHRcdFx0XHQ8RGlhbG9nVGl0bGUgaWQ9XCJhbGVydC1kaWFsb2ctdGl0bGVcIj5cbi8vIFx0XHRcdFx0XHRcdHtcIlVzZSBNYXN0ZXJzd2FwP1wifVxuLy8gXHRcdFx0XHRcdFx0PC9EaWFsb2dUaXRsZT5cbi8vIFx0XHRcdFx0XHRcdDxEaWFsb2dDb250ZW50PlxuLy8gXHRcdFx0XHRcdFx0PERpYWxvZ0NvbnRlbnRUZXh0IGlkPVwiYWxlcnQtZGlhbG9nLWRlc2NyaXB0aW9uXCI+XG4vLyBcdFx0XHRcdFx0XHRcdExldCBNYXN0ZXJzd2FwIGNvbm5lY3QgeW91ciBjYXJkIHdpdGggeW91ciBjcnlwdG8gd2FsbGV0LiBUaGlzIG1lYW5zIHlvdSBhcmUgZ2l2aW5nIE1hc3RlcnN3YXAgYWNjZXNzIHRvIHlvdXIgY2FyZCBpbmZvcm1hdGlvbi5cbi8vIFx0XHRcdFx0XHRcdDwvRGlhbG9nQ29udGVudFRleHQ+XG4vLyBcdFx0XHRcdFx0XHQ8L0RpYWxvZ0NvbnRlbnQ+XG4vLyBcdFx0XHRcdFx0XHQ8RGlhbG9nQWN0aW9ucz5cbi8vIFx0XHRcdFx0XHRcdDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PkRpc2FncmVlPC9CdXR0b24+XG4vLyBcdFx0XHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfSBhdXRvRm9jdXM+XG4vLyBcdFx0XHRcdFx0XHRcdEFncmVlXG4vLyBcdFx0XHRcdFx0XHQ8L0J1dHRvbj5cbi8vIFx0XHRcdFx0XHRcdDwvRGlhbG9nQWN0aW9ucz5cbi8vIFx0XHRcdFx0XHQ8L0RpYWxvZz5cbi8vIFx0XHRcdFx0XHQ8L2Rpdj5cbi8vIFx0XHRcdFx0PC9kaXY+XG5cbi8vIFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfSBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogXCJncmV5XCJ9fT5cbi8vIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxuLy8gXHRcdFx0XHRcdFx0PENhcmQgY2FyZE51bWJlciA9IHtcIjUxMjMgNDU1OCAwNjMwIDg1MjFcIn0gbmFtZT17XCJKYW5lIFRheWxvclwifSBkYXRlPXtcIjA4LzI4XCJ9IHRleHRDb2xvcj17XCIjZmZmXCJ9Lz5cbi8vIFx0XHRcdFx0XHQ8L2Rpdj5cbi8vIFx0XHRcdFx0PC9kaXY+XG4vLyBcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0gc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJjcmltc29uXCJ9fT5cbi8vIFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhdGVnb3JpZXN9PlxuLy8gXHRcdFx0XHRcdFx0PENhcmQgY2FyZE51bWJlciA9IHtcIjUxMjMgNDU5MCA0NjA1IDg5MjBcIn0gbmFtZT17XCJKYW5lIFRheWxvclwifSBkYXRlPXtcIjA2LzI2XCJ9IHRleHRDb2xvcj17XCIjZmZmXCJ9Lz5cbi8vIFx0XHRcdFx0XHQ8L2Rpdj5cbi8vIFx0XHRcdFx0PC9kaXY+XG4vLyBcdFx0XHQ8L2Rpdj5cbi8vIFx0XHQ8L2Rpdj5cbi8vIFx0KTtcbi8vIH1cblxuLy8gZXhwb3J0IGRlZmF1bHQgQ29udGVudDtcblxuXG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcbmltcG9ydCB7IERhdGFHcmlkIH0gZnJvbSAnQG11aS94LWRhdGEtZ3JpZCc7XG5cbmNvbnN0IGNvbHVtbnMgPSBbXG4gIHsgZmllbGQ6ICdpZCcsIGhlYWRlck5hbWU6ICdJRCcsIHdpZHRoOiA5MCB9LFxuICB7XG4gICAgZmllbGQ6ICdmaXJzdE5hbWUnLFxuICAgIGhlYWRlck5hbWU6ICdGaXJzdCBuYW1lJyxcbiAgICB3aWR0aDogMTUwLFxuICAgIGVkaXRhYmxlOiB0cnVlLFxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdsYXN0TmFtZScsXG4gICAgaGVhZGVyTmFtZTogJ0xhc3QgbmFtZScsXG4gICAgd2lkdGg6IDE1MCxcbiAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIGZpZWxkOiAnYWdlJyxcbiAgICBoZWFkZXJOYW1lOiAnQWdlJyxcbiAgICB0eXBlOiAnbnVtYmVyJyxcbiAgICB3aWR0aDogMTEwLFxuICAgIGVkaXRhYmxlOiB0cnVlLFxuICB9LFxuICB7XG4gICAgZmllbGQ6ICdmdWxsTmFtZScsXG4gICAgaGVhZGVyTmFtZTogJ0Z1bGwgbmFtZScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGNvbHVtbiBoYXMgYSB2YWx1ZSBnZXR0ZXIgYW5kIGlzIG5vdCBzb3J0YWJsZS4nLFxuICAgIHNvcnRhYmxlOiBmYWxzZSxcbiAgICB3aWR0aDogMTYwLFxuICAgIHZhbHVlR2V0dGVyOiAocGFyYW1zKSA9PlxuICAgICAgYCR7cGFyYW1zLnJvdy5maXJzdE5hbWUgfHwgJyd9ICR7cGFyYW1zLnJvdy5sYXN0TmFtZSB8fCAnJ31gLFxuICB9LFxuXTtcblxuY29uc3Qgcm93cyA9IFtcbiAgeyBpZDogMSwgbGFzdE5hbWU6ICdTbm93JywgZmlyc3ROYW1lOiAnSm9uJywgYWdlOiAzNSB9LFxuICB7IGlkOiAyLCBsYXN0TmFtZTogJ0xhbm5pc3RlcicsIGZpcnN0TmFtZTogJ0NlcnNlaScsIGFnZTogNDIgfSxcbiAgeyBpZDogMywgbGFzdE5hbWU6ICdMYW5uaXN0ZXInLCBmaXJzdE5hbWU6ICdKYWltZScsIGFnZTogNDUgfSxcbiAgeyBpZDogNCwgbGFzdE5hbWU6ICdTdGFyaycsIGZpcnN0TmFtZTogJ0FyeWEnLCBhZ2U6IDE2IH0sXG4gIHsgaWQ6IDUsIGxhc3ROYW1lOiAnVGFyZ2FyeWVuJywgZmlyc3ROYW1lOiAnRGFlbmVyeXMnLCBhZ2U6IG51bGwgfSxcbiAgeyBpZDogNiwgbGFzdE5hbWU6ICdNZWxpc2FuZHJlJywgZmlyc3ROYW1lOiBudWxsLCBhZ2U6IDE1MCB9LFxuICB7IGlkOiA3LCBsYXN0TmFtZTogJ0NsaWZmb3JkJywgZmlyc3ROYW1lOiAnRmVycmFyYScsIGFnZTogNDQgfSxcbiAgeyBpZDogOCwgbGFzdE5hbWU6ICdGcmFuY2VzJywgZmlyc3ROYW1lOiAnUm9zc2luaScsIGFnZTogMzYgfSxcbiAgeyBpZDogOSwgbGFzdE5hbWU6ICdSb3hpZScsIGZpcnN0TmFtZTogJ0hhcnZleScsIGFnZTogNjUgfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRlbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBoZWlnaHQ6IDQwMCwgcGFkZGluZ0xlZnQ6XCIyMDBweFwiIH19PlxuICAgICAgPERhdGFHcmlkXG4gICAgICAgIHJvd3M9e3Jvd3N9XG4gICAgICAgIGNvbHVtbnM9e2NvbHVtbnN9XG4gICAgICAgIHBhZ2VTaXplPXs1fVxuICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1s1XX1cbiAgICAgICAgLy8gY2hlY2tib3hTZWxlY3Rpb25cbiAgICAgICAgZGlzYWJsZVNlbGVjdGlvbk9uQ2xpY2tcbiAgICAgICAgZXhwZXJpbWVudGFsRmVhdHVyZXM9e3sgbmV3RWRpdGluZ0FwaTogdHJ1ZSB9fVxuICAgICAgLz5cbiAgICA8L0JveD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkJveCIsIkRhdGFHcmlkIiwiY29sdW1ucyIsImZpZWxkIiwiaGVhZGVyTmFtZSIsIndpZHRoIiwiZWRpdGFibGUiLCJ0eXBlIiwiZGVzY3JpcHRpb24iLCJzb3J0YWJsZSIsInZhbHVlR2V0dGVyIiwicGFyYW1zIiwicm93IiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyb3dzIiwiaWQiLCJhZ2UiLCJDb250ZW50Iiwic3giLCJoZWlnaHQiLCJwYWRkaW5nTGVmdCIsInBhZ2VTaXplIiwicm93c1BlclBhZ2VPcHRpb25zIiwiZGlzYWJsZVNlbGVjdGlvbk9uQ2xpY2siLCJleHBlcmltZW50YWxGZWF0dXJlcyIsIm5ld0VkaXRpbmdBcGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/components/Content.js\n"));

/***/ })

});