"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/create-payment-intent";
exports.ids = ["pages/api/create-payment-intent"];
exports.modules = {

/***/ "stripe":
/*!*************************!*\
  !*** external "stripe" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ "(api)/./pages/api/create-payment-intent.js":
/*!********************************************!*\
  !*** ./pages/api/create-payment-intent.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n// This is your test secret API key.\nconst stripe = __webpack_require__(/*! stripe */ \"stripe\")(process.env.STRIPE_SECRET_KEY);\nconst calculateOrderAmount = (items)=>{\n    // Replace this constant with a calculation of the order's amount\n    // Calculate the order total on the server to prevent\n    // people from directly manipulating the amount on the client\n    return 1400;\n};\nasync function handler(req, res) {\n    const { items  } = req.body;\n    // Create a PaymentIntent with the order amount and currency\n    const paymentIntent = await stripe.paymentIntents.create({\n        amount: calculateOrderAmount(items),\n        currency: \"eur\",\n        automatic_payment_methods: {\n            enabled: true\n        }\n    });\n    res.send({\n        clientSecret: paymentIntent.client_secret\n    });\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLXBheW1lbnQtaW50ZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQSxvQ0FBb0M7QUFDcEMsTUFBTUEsU0FBU0MsbUJBQU9BLENBQUMsc0JBQVEsRUFBRUMsUUFBUUMsR0FBRyxDQUFDQyxpQkFBaUI7QUFFOUQsTUFBTUMsdUJBQXVCLENBQUNDLFFBQVU7SUFDcEMsaUVBQWlFO0lBQ2pFLHFEQUFxRDtJQUNyRCw2REFBNkQ7SUFDN0QsT0FBTztBQUNYO0FBRWUsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDNUMsTUFBTSxFQUFFSCxNQUFLLEVBQUUsR0FBR0UsSUFBSUUsSUFBSTtJQUUxQiw0REFBNEQ7SUFDNUQsTUFBTUMsZ0JBQWdCLE1BQU1YLE9BQU9ZLGNBQWMsQ0FBQ0MsTUFBTSxDQUFDO1FBQ3JEQyxRQUFRVCxxQkFBcUJDO1FBQzdCUyxVQUFVO1FBQ1ZDLDJCQUEyQjtZQUN2QkMsU0FBUyxJQUFJO1FBQ2pCO0lBQ0o7SUFFQVIsSUFBSVMsSUFBSSxDQUFDO1FBQ0xDLGNBQWNSLGNBQWNTLGFBQWE7SUFDN0M7QUFDSixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWFzdGVyc3dhcC8uL3BhZ2VzL2FwaS9jcmVhdGUtcGF5bWVudC1pbnRlbnQuanM/NzVjOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGlzIHlvdXIgdGVzdCBzZWNyZXQgQVBJIGtleS5cbmNvbnN0IHN0cmlwZSA9IHJlcXVpcmUoXCJzdHJpcGVcIikocHJvY2Vzcy5lbnYuU1RSSVBFX1NFQ1JFVF9LRVkpO1xuXG5jb25zdCBjYWxjdWxhdGVPcmRlckFtb3VudCA9IChpdGVtcykgPT4ge1xuICAgIC8vIFJlcGxhY2UgdGhpcyBjb25zdGFudCB3aXRoIGEgY2FsY3VsYXRpb24gb2YgdGhlIG9yZGVyJ3MgYW1vdW50XG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBvcmRlciB0b3RhbCBvbiB0aGUgc2VydmVyIHRvIHByZXZlbnRcbiAgICAvLyBwZW9wbGUgZnJvbSBkaXJlY3RseSBtYW5pcHVsYXRpbmcgdGhlIGFtb3VudCBvbiB0aGUgY2xpZW50XG4gICAgcmV0dXJuIDE0MDA7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgY29uc3QgeyBpdGVtcyB9ID0gcmVxLmJvZHk7XG5cbiAgICAvLyBDcmVhdGUgYSBQYXltZW50SW50ZW50IHdpdGggdGhlIG9yZGVyIGFtb3VudCBhbmQgY3VycmVuY3lcbiAgICBjb25zdCBwYXltZW50SW50ZW50ID0gYXdhaXQgc3RyaXBlLnBheW1lbnRJbnRlbnRzLmNyZWF0ZSh7XG4gICAgICAgIGFtb3VudDogY2FsY3VsYXRlT3JkZXJBbW91bnQoaXRlbXMpLFxuICAgICAgICBjdXJyZW5jeTogXCJldXJcIixcbiAgICAgICAgYXV0b21hdGljX3BheW1lbnRfbWV0aG9kczoge1xuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJlcy5zZW5kKHtcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwYXltZW50SW50ZW50LmNsaWVudF9zZWNyZXQsXG4gICAgfSk7XG59OyJdLCJuYW1lcyI6WyJzdHJpcGUiLCJyZXF1aXJlIiwicHJvY2VzcyIsImVudiIsIlNUUklQRV9TRUNSRVRfS0VZIiwiY2FsY3VsYXRlT3JkZXJBbW91bnQiLCJpdGVtcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJib2R5IiwicGF5bWVudEludGVudCIsInBheW1lbnRJbnRlbnRzIiwiY3JlYXRlIiwiYW1vdW50IiwiY3VycmVuY3kiLCJhdXRvbWF0aWNfcGF5bWVudF9tZXRob2RzIiwiZW5hYmxlZCIsInNlbmQiLCJjbGllbnRTZWNyZXQiLCJjbGllbnRfc2VjcmV0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/create-payment-intent.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create-payment-intent.js"));
module.exports = __webpack_exports__;

})();