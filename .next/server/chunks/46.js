"use strict";
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 4046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/BackToTop/BackToTop.js


function BackToTop() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            cursor: "pointer"
        },
        onClick: ()=>{
            window.scrollTo({
                top: 100,
                left: 100,
                behavior: "smooth"
            });
        },
        id: "back-to-top",
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            className: "top",
            id: "top",
            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: "ion-ios-upload-outline"
            })
        })
    });
};

// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__(5921);
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Footer/Footer.js





function Footer() {
    const { 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    const { 0: name , 1: setName  } = (0,external_react_.useState)("");
    const { 0: email , 1: setEmail  } = (0,external_react_.useState)("");
    const { 0: message , 1: setMessage  } = (0,external_react_.useState)("");
    const { 0: phone , 1: setPhone  } = (0,external_react_.useState)("");
    const myFunction = ()=>{
        console.log(name), setIsOpen(!isOpen), console.log(isOpen);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                className: "iq-our-info white-bg overview-block-ptb grey-bg",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "row",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-4",
                                style: {
                                    marginTop: "8px"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "iq-info-box text-center iq-pt-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "info-icon green-bg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ion-icon", {
                                                name: "location-outline"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "iq-tw-6 iq-mt-25 iq-mb-15",
                                            children: "Adres"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "lead iq-tw-6",
                                            children: "Pınarbaşı Mh. H\xfcrriyet Cd. Teknokent Uluğbey No : 3 A İ\xe7 Kapı No : A25 Konyaaltı/ANTALYA"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-4",
                                style: {
                                    marginTop: "8px"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "iq-info-box text-center iq-pt-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "info-icon green-bg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ion-icon", {
                                                name: "call-outline"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "iq-tw-6 iq-mt-25 iq-mb-15",
                                            children: "Telefon"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "lead iq-tw-6",
                                            children: "+90 242 255 02 50"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-sm-4",
                                style: {
                                    marginTop: "8px"
                                },
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "iq-info-box text-center iq-pt-50",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "info-icon green-bg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ion-icon", {
                                                name: "mail-outline"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "iq-tw-6 iq-mt-25 iq-mb-15",
                                            children: "E-Mail"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "lead iq-tw-6",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                href: "mailto:kurumsal@manifolt.com",
                                                className: "__cf_email__",
                                                "data-cfemail": "kurumsal@manifolt.com",
                                                children: "kurumsal@manifolt.com"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            children: "7/24 Online Destek"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "iq-map",
                children: /*#__PURE__*/ jsx_runtime_.jsx("iframe", {
                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.593751057256!2d30.642756215578817!3d36.90006576977089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391467e99891d%3A0xed3f2d6adc507fb3!2zU29mdGFseWEgWWF6xLFsxLFtIEx0ZC4gxZ50aS4!5e0!3m2!1str!2str!4v1658928153656!5m2!1str!2str",
                    style: {
                        border: 0
                    },
                    allowFullScreen: true
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                id: "contact-us",
                className: "iq-our-touch",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "row",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-md-10 col-md-offset-1",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "iq-get-in iq-pall-40 white-bg",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "row",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "col-sm-12",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "heading-title iq-mb-60",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                                        className: "title iq-tw-6",
                                                        children: "İletişim Formu"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "divider"
                                                    })
                                                ]
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "row",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "formmessage",
                                                children: "Success/Error Message Goes Here"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("form", {
                                                className: "form-horizontal",
                                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "contact-form",
                                                    children: [
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "col-sm-6",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "section-field",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        id: "name",
                                                                        className: "form-control",
                                                                        type: "text",
                                                                        placeholder: "Ad Soyad",
                                                                        value: name,
                                                                        onChange: (e)=>setName(e.currentTarget.value)
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "section-field",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "email",
                                                                        className: "form-control",
                                                                        placeholder: "E-mail*",
                                                                        name: "email"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "section-field",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                        type: "text",
                                                                        className: "form-control",
                                                                        placeholder: "Telefon*",
                                                                        name: "phone"
                                                                    })
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                            className: "col-sm-6",
                                                            children: [
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: "section-field textarea",
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("textarea", {
                                                                        className: "form-control",
                                                                        placeholder: "Mesaj",
                                                                        rows: "7",
                                                                        name: "message"
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                                    type: "hidden",
                                                                    name: "action",
                                                                    value: "sendEmail"
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                    onClick: ()=>myFunction(),
                                                                    className: "button pull-right iq-mt-40",
                                                                    children: "G\xf6nder"
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                id: "ajaxloader",
                                                style: {
                                                    display: "none"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                    className: "center-block mt-30 mb-30",
                                                    src: "images/ajax-loader.gif",
                                                    alt: ""
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("footer", {
                className: "iq-footer white-bg text-center",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "row",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-md-10 col-md-offset-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "footer-info iq-mt-50 iq-mb-30",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((external_react_wow_default()), {
                                        duration: "1s",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                            id: "logo_img",
                                            className: "img-responsive center-block iq-mb-10 wow zoomIn",
                                            "data-wow-duration": "1s",
                                            src: "images/logo-footer.png",
                                            alt: ""
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-12",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        className: "img-responsive center-block",
                                        src: "images/logo_band_colored.png"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "col-sm-12",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "footer-copyright iq-ptb-20",
                                        children: [
                                            "Copyright \xa9 ",
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                                id: "copyright",
                                                children: [
                                                    " ",
                                                    `${new Date().getFullYear()}`
                                                ]
                                            }),
                                            " -",
                                            " ",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.softalya.com/#/",
                                                target: "_blank",
                                                children: "Softalya Yazılım Ltd. Şti."
                                            }),
                                            " ",
                                            "- Her Hakkı Saklıdır. |",
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/policies",
                                                children: "Politikalarımız"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./components/Header/Header.js




function Header() {
    const navbarRef = (0,external_react_.useRef)();
    const closeToggle = ()=>{
        const navbarButton = document.querySelector('button[class="navbar-toggle"]');
        const navbarContainer = document.querySelector('div[class="navbar-collapse collapse in"]');
        navbarContainer.classList.remove("in");
        navbarContainer.setAttribute("aria-expanded", "false");
        navbarButton.classList.add("collapsed");
        navbarButton.setAttribute("aria-expanded", "false");
    };
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        window.addEventListener("scroll", isSticky);
        return ()=>{
            window.removeEventListener("scroll", isSticky);
        };
    });
    const isSticky = (e)=>{
        const header = document.querySelector("#header-wrap");
        const scrollTop = window.scrollY;
        scrollTop >= 100 ? (header.classList.add("affix"), header.classList.remove("affix-top")) : (header.classList.add("affix-top"), header.classList.remove("affix"));
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            id: "header-wrap",
            className: "affix-top",
            "data-offset-top": "55",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "row",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "col-sm-12",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            ref: navbarRef,
                            className: "navbar navbar-default",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "navbar-header",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            type: "button",
                                            className: "navbar-toggle collapsed",
                                            "data-toggle": "collapse",
                                            "data-target": "#bs-example-navbar-collapse-1",
                                            "aria-expanded": "false",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Toggle navigation"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-bar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-bar"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: "icon-bar"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            className: "navbar-brand",
                                            href: "/",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                height: "48px",
                                                src: "images/logo.png",
                                                alt: "logo",
                                                style: {
                                                    cursor: "pointer"
                                                }
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "collapse navbar-collapse",
                                    id: "bs-example-navbar-collapse-1",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                            href: "https://panel.manifolt.com/",
                                            target: "_blank",
                                            rel: "noreferrer",
                                            className: "button button-icon pull-right",
                                            children: "Oturum A\xe7"
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                            className: "nav navbar-nav navbar-right",
                                            id: "top-menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    onClick: closeToggle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#about-us",
                                                        children: "Hakkında"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    onClick: closeToggle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#features",
                                                        children: "\xd6zellikler"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    onClick: closeToggle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#screenshots",
                                                        children: "Ekran G\xf6r\xfcnt\xfcleri"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    onClick: closeToggle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#howitworks",
                                                        children: "Nasıl \xc7alışır?"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    onClick: closeToggle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: "#references",
                                                        children: "Referanslar"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    onClick: closeToggle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#pricing",
                                                        children: "Satın Al"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    onClick: closeToggle,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: "#contact-us",
                                                        children: "İletişim"
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            })
        })
    });
};

;// CONCATENATED MODULE: ./components/Layout.js





function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BackToTop, {})
        ]
    });
};


/***/ })

};
;