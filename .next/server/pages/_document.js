"use strict";
(() => {
var exports = {};
exports.id = 660;
exports.ids = [660];
exports.modules = {

/***/ 2265:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _document)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/document.js
var next_document = __webpack_require__(6859);
// EXTERNAL MODULE: ./node_modules/next/script.js
var script = __webpack_require__(4298);
;// CONCATENATED MODULE: external "styled-components"
const external_styled_components_namespaceObject = require("styled-components");
;// CONCATENATED MODULE: ./pages/_document.js




class MyDocument extends next_document["default"] {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage;
        const sheet = new external_styled_components_namespaceObject.ServerStyleSheet();
        // Run the React rendering logic synchronously
        try {
            ctx.renderPage = ()=>originalRenderPage({
                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ jsx_runtime_.jsx(App, {
                                ...props
                            }))
                });
            const initialProps = await next_document["default"].getInitialProps(ctx);
            return {
                ...initialProps,
                styles: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        initialProps.styles,
                        sheet.getStyleElement()
                    ]
                })
            };
        } finally{
            sheet.seal();
        }
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Html, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(next_document.Head, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            charSet: "utf-8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            httpEquiv: "X-UA-Compatible",
                            content: "IE=edge"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "keywords",
                            content: "Manifolt, servis uygulaması, ara\xe7 bakım uygualaması, tamirci uygulaması, sanayici uygulaması"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "description",
                            content: "Manifolt - Ara\xe7 Tamir Servislerinin Uygulaması"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "author",
                            content: "softalya.com"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1, maximum-scale=1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "apple-itunes-app",
                            content: "app-id=1529432227"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            name: "google-play-app",
                            content: "app-id=com.manifolt.v2"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Manifolt - Ara\xe7 Tamir Servislerinin Uygulaması"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "/css/doc.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "shortcut icon",
                            href: "images/favicon.ico"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&Raleway:300,400,500,600,700,800,900"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "css/bootstrap.min.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "css/owl-carousel/owl.carousel.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "css/font-awesome.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            type: "text/css",
                            href: "css/animate.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "css/ionicons.min.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "css/style.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "css/responsive.css"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "stylesheet",
                            href: "css/custom.css"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.Main, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(next_document.NextScript, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            async: true,
                            src: "https://code.jquery.com/jquery-3.6.0.js",
                            integrity: "sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=",
                            crossOrigin: "anonymous"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            async: true,
                            type: "text/javascript",
                            src: "js/jquery.appear.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            async: true,
                            type: "text/javascript",
                            src: "js/counter/jquery.countTo.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            async: true,
                            type: "text/javascript",
                            src: "js/magnific-popup/jquery.magnific-popup.min.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            async: true,
                            type: "text/javascript",
                            src: "js/jquery.countdown.min.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            async: true,
                            type: "text/javascript",
                            src: "js/bootstrap.min.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            async: true,
                            src: "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            async: true,
                            type: "text/javascript",
                            src: "js/custom.js"
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const _document = (MyDocument);


/***/ }),

/***/ 4140:
/***/ ((module) => {

module.exports = require("next/dist/server/get-page-files.js");

/***/ }),

/***/ 9716:
/***/ ((module) => {

module.exports = require("next/dist/server/htmlescape.js");

/***/ }),

/***/ 6368:
/***/ ((module) => {

module.exports = require("next/dist/server/utils.js");

/***/ }),

/***/ 6724:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/constants.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 8743:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/html-context.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,803], () => (__webpack_exec__(2265)));
module.exports = __webpack_exports__;

})();