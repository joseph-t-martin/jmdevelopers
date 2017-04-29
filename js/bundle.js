(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _header = require('./components/header.js');

var _header2 = _interopRequireDefault(_header);

var _home = require('./components/home.js');

var _home2 = _interopRequireDefault(_home);

var _services = require('./components/services.js');

var _services2 = _interopRequireDefault(_services);

var _pricing = require('./components/pricing.js');

var _pricing2 = _interopRequireDefault(_pricing);

var _contact_us = require('./components/contact_us.js');

var _contact_us2 = _interopRequireDefault(_contact_us);

var _footer = require('./components/footer.js');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                React.createElement(_header2.default, null),
                React.createElement(
                    'div',
                    { className: 'container' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col s12' },
                            this.props.children
                        )
                    )
                ),
                React.createElement(_footer2.default, null)
            );
        }
    }]);

    return App;
}(React.Component);

ReactDOM.render(React.createElement(
    ReactRouter.Router,
    { history: ReactRouter.browserHistory },
    React.createElement(
        ReactRouter.Route,
        { path: '/', component: App },
        React.createElement(ReactRouter.IndexRoute, { component: _home2.default }),
        React.createElement(ReactRouter.Route, { path: 'services', component: _services2.default }),
        React.createElement(ReactRouter.Route, { path: 'pricing', component: _pricing2.default }),
        React.createElement(ReactRouter.Route, { path: 'contact-us', component: _contact_us2.default })
    )
), document.getElementById('app'));

},{"./components/contact_us.js":2,"./components/footer.js":3,"./components/header.js":4,"./components/home.js":5,"./components/pricing.js":6,"./components/services.js":7}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactUs = function (_React$Component) {
    _inherits(ContactUs, _React$Component);

    function ContactUs() {
        _classCallCheck(this, ContactUs);

        return _possibleConstructorReturn(this, (ContactUs.__proto__ || Object.getPrototypeOf(ContactUs)).apply(this, arguments));
    }

    _createClass(ContactUs, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h4",
                    { className: "cyan-text text-darken-3" },
                    "Contact Us"
                ),
                React.createElement(
                    "p",
                    null,
                    "Small Sydney based web development shop that can help you build the website you want: "
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "input-field col s6" },
                        React.createElement(
                            "i",
                            { className: "material-icons prefix" },
                            "account_circle"
                        ),
                        React.createElement("input", { id: "icon_prefix", type: "text", className: "validate" }),
                        React.createElement(
                            "label",
                            { htmlFor: "icon_prefix" },
                            "Name"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "input-field col s6" },
                        React.createElement(
                            "i",
                            { className: "material-icons prefix" },
                            "email"
                        ),
                        React.createElement("input", { id: "email", type: "email", className: "validate" }),
                        React.createElement(
                            "label",
                            { htmlFor: "email" },
                            "Email"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "div",
                        { className: "input-field col s6" },
                        React.createElement(
                            "i",
                            { className: "material-icons prefix" },
                            "mode_edit"
                        ),
                        React.createElement("textarea", { id: "icon_prefix2", className: "materialize-textarea" }),
                        React.createElement(
                            "label",
                            { htmlFor: "icon_prefix2" },
                            "Message"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "row" },
                    React.createElement(
                        "button",
                        { className: "btn waves-effect waves-light", name: "action" },
                        "Send Message",
                        React.createElement(
                            "i",
                            { className: "material-icons right" },
                            "send"
                        )
                    )
                )
            );
        }
    }]);

    return ContactUs;
}(React.Component);

exports.default = ContactUs;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
    _inherits(Footer, _React$Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "footer",
                    { className: "page-footer orange" },
                    React.createElement(
                        "div",
                        { className: "container" },
                        React.createElement(
                            "div",
                            { className: "row" },
                            React.createElement(
                                "div",
                                { className: "col l6 s12" },
                                React.createElement(
                                    "h5",
                                    { className: "white-text" },
                                    "JM Web Developers"
                                ),
                                React.createElement(
                                    "p",
                                    { className: "grey-text text-lighten-4" },
                                    "Sydney based development shop specialising in custom website delivery and IT servicing"
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col l3 s12" },
                                React.createElement(
                                    "h5",
                                    { className: "white-text" },
                                    "Navigation"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            ReactRouter.Link,
                                            { className: "white-text", to: "/" },
                                            "Home"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            ReactRouter.Link,
                                            { className: "white-text", to: "/services" },
                                            "Services"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            ReactRouter.Link,
                                            { className: "white-text", to: "/pricing" },
                                            "Pricing"
                                        )
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            ReactRouter.Link,
                                            { className: "white-text", to: "/contact-us" },
                                            "Contact Us"
                                        )
                                    )
                                )
                            ),
                            React.createElement(
                                "div",
                                { className: "col l3 s12" },
                                React.createElement(
                                    "h5",
                                    { className: "white-text" },
                                    "Connect"
                                ),
                                React.createElement(
                                    "ul",
                                    null,
                                    React.createElement(
                                        "li",
                                        { className: "white-text" },
                                        "Call us: 0425 714 353"
                                    ),
                                    React.createElement(
                                        "li",
                                        { className: "white-text" },
                                        "support@jmdevelopers.com.au"
                                    ),
                                    React.createElement(
                                        "li",
                                        null,
                                        React.createElement(
                                            "a",
                                            { className: "white-text", href: "https://github.com/joeyisking" },
                                            "GitHub"
                                        )
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "footer-copyright" },
                        React.createElement(
                            "div",
                            { className: "container" },
                            "Designed and Developed by ",
                            React.createElement(
                                ReactRouter.Link,
                                { className: "orange-text text-lighten-4", to: "#" },
                                "JM Web Developers"
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Footer;
}(React.Component);

exports.default = Footer;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "nav",
                    { className: "cyan darken-1", role: "navigation" },
                    React.createElement(
                        "div",
                        { className: "nav-wrapper container" },
                        React.createElement(
                            ReactRouter.Link,
                            { id: "logo-container", to: "/", className: "brand-logo logo-size" },
                            "JM Web Developers"
                        ),
                        React.createElement(
                            "ul",
                            { className: "right hide-on-med-and-down" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    ReactRouter.Link,
                                    { to: "/", activeClassName: "active" },
                                    "Home"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    ReactRouter.Link,
                                    { to: "/services", activeClassName: "active" },
                                    "Services"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    ReactRouter.Link,
                                    { to: "/pricing", activeClassName: "active" },
                                    "Pricing"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    ReactRouter.Link,
                                    { to: "/contact-us", activeClassName: "active" },
                                    "Contact Us"
                                )
                            )
                        ),
                        React.createElement(
                            "ul",
                            { id: "nav-mobile", className: "side-nav" },
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    ReactRouter.Link,
                                    { to: "/home" },
                                    "Home"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    ReactRouter.Link,
                                    { to: "/services" },
                                    "Services"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    ReactRouter.Link,
                                    { to: "/pricing" },
                                    "Pricing"
                                )
                            ),
                            React.createElement(
                                "li",
                                null,
                                React.createElement(
                                    ReactRouter.Link,
                                    { to: "/contact-us" },
                                    "Contact Us"
                                )
                            )
                        ),
                        React.createElement(
                            ReactRouter.Link,
                            { to: "#", "data-activates": "nav-mobile", className: "button-collapse" },
                            React.createElement(
                                "i",
                                { className: "material-icons" },
                                "menu"
                            )
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "parallax-container" },
                    React.createElement(
                        "div",
                        { className: "parallax" },
                        React.createElement("img", { src: "/images/image_code.jpg" })
                    )
                )
            );
        }
    }]);

    return Header;
}(React.Component);

;

exports.default = Header;

},{}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h4",
                    { className: "cyan-text text-darken-3" },
                    "Sydney Based Web Development"
                ),
                React.createElement(
                    "strong",
                    null,
                    "Range of Services"
                ),
                React.createElement(
                    "p",
                    null,
                    "Offering a wide range of services such as\xA0Web Development, Content Management Systems, Mobile Websites, System Integrations and Full Stack Development."
                ),
                React.createElement(
                    "strong",
                    null,
                    "Reasonable Pricing"
                ),
                React.createElement(
                    "p",
                    null,
                    "We get that you don't want to break the bank development a website. We have to provide you with want you only want you want for affordable prices."
                ),
                React.createElement(
                    "strong",
                    null,
                    "Personalised Service"
                ),
                React.createElement(
                    "p",
                    null,
                    "We are a small web and IT\xA0service company; with us you can\xA0 be assured of fast, efficient and\xA0friendly service. We are transparent\xA0about our charges, and work\xA0collaboratively with you to ensure\xA0the delivered product meets your\xA0needs. Please ask about our no-obligations on-site consultation\xA0service*"
                ),
                React.createElement(
                    "p",
                    null,
                    "*Within Sydney metropolitan\xA0region only"
                )
            );
        }
    }]);

    return Home;
}(React.Component);

;

exports.default = Home;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Pricing = function (_React$Component) {
    _inherits(Pricing, _React$Component);

    function Pricing() {
        _classCallCheck(this, Pricing);

        return _possibleConstructorReturn(this, (Pricing.__proto__ || Object.getPrototypeOf(Pricing)).apply(this, arguments));
    }

    _createClass(Pricing, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h4",
                    { className: "cyan-text text-darken-3" },
                    "Pricing"
                ),
                React.createElement(
                    "p",
                    { className: "bottom-padding" },
                    "All our jobs are charged by the hour; our rates are below for very large jobs please give us a call to discuss."
                ),
                React.createElement(
                    "div",
                    { className: "col s12 m4" },
                    React.createElement(
                        "div",
                        { className: "center promo" },
                        React.createElement(
                            "i",
                            { className: "material-icons icon-display" },
                            "flash_on"
                        ),
                        React.createElement(
                            "h5",
                            { className: "promo-caption" },
                            React.createElement(
                                "b",
                                null,
                                "$120/hr",
                                React.createElement("br", null),
                                " Emergency Service Call"
                            )
                        ),
                        React.createElement(
                            "p",
                            { className: "center promo-text" },
                            "Need work\xA0done fast? Mistakenly changed something you shouldn't have? We will provide an emergency out-of-hours service call to set things right."
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col s12 m4" },
                    React.createElement(
                        "div",
                        { className: "center promo" },
                        React.createElement(
                            "i",
                            { className: "material-icons icon-display" },
                            "done"
                        ),
                        React.createElement(
                            "h5",
                            { className: "promo-caption" },
                            React.createElement(
                                "b",
                                null,
                                "$55/hr",
                                React.createElement("br", null),
                                " Standard Rate"
                            )
                        ),
                        React.createElement(
                            "p",
                            { className: "center promo-text" },
                            "We endeavor to work collaboratively with you to ensure your satisfaction; our quotation and invoicing process is transparent so you can how money is used."
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "col s12 m4" },
                    React.createElement(
                        "div",
                        { className: "center promo" },
                        React.createElement(
                            "i",
                            { className: "material-icons icon-display" },
                            "phone"
                        ),
                        React.createElement(
                            "h5",
                            { className: "promo-caption" },
                            React.createElement(
                                "b",
                                null,
                                "Contact us for a",
                                React.createElement("br", null),
                                " Consultation or Quote"
                            )
                        ),
                        React.createElement(
                            "p",
                            { className: "center promo-text" },
                            "Sometimes it's difficult to tell what your job will entail. Call us on 0425 714 353 for an over the phone quote, or to organise a no-obligations consultation."
                        )
                    )
                )
            );
        }
    }]);

    return Pricing;
}(React.Component);

exports.default = Pricing;

},{}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Services = function (_React$Component) {
    _inherits(Services, _React$Component);

    function Services() {
        _classCallCheck(this, Services);

        return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
    }

    _createClass(Services, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "h4",
                    { className: "cyan-text text-darken-3" },
                    "Services"
                ),
                React.createElement(
                    "div",
                    { id: "card_data", className: "row" },
                    React.createElement(
                        "div",
                        { className: "col s12 m4" },
                        React.createElement(
                            "div",
                            { className: "card" },
                            React.createElement(
                                "div",
                                { className: "card-content" },
                                React.createElement(
                                    "h5",
                                    null,
                                    "Website Design"
                                ),
                                "Know you want to update your website but not quite sure how? We offer a personal consultation service to help you determine what you need."
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col s12 m4" },
                        React.createElement(
                            "div",
                            { className: "card" },
                            React.createElement(
                                "div",
                                { className: "card-content" },
                                React.createElement(
                                    "h5",
                                    null,
                                    "Mobile Websites"
                                ),
                                "By using CSS frameworks such as Bootstrap 3 and Materialize we can ensure your website looks fantastic on phones, tablets and desktops."
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col s12 m4" },
                        React.createElement(
                            "div",
                            { className: "card" },
                            React.createElement(
                                "div",
                                { className: "card-content" },
                                React.createElement(
                                    "h5",
                                    null,
                                    "Web Development"
                                ),
                                "We employ back-end frameworks such as Laravel 5 and Zend Framework 1 to provide our clients with enormous flexibility in building their custom web application."
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col s12 m4" },
                        React.createElement(
                            "div",
                            { className: "card" },
                            React.createElement(
                                "div",
                                { className: "card-content" },
                                React.createElement(
                                    "h5",
                                    null,
                                    "Content Management Systems (CMS)"
                                ),
                                "Content Management Systems allow site administrators to quickly and easily update their pages. We employ applications such as Wordpress and Drupal to make the maintenance of your site a breeze."
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col s12 m4" },
                        React.createElement(
                            "div",
                            { className: "card" },
                            React.createElement(
                                "div",
                                { className: "card-content" },
                                React.createElement(
                                    "h5",
                                    null,
                                    "System Integration"
                                ),
                                "Making unrelated applications talk to each other can often be a painful experience. To ensure all your systems work together we can develop custom modules which has the benefit of reducing manual handling of data and streamlining your experience."
                            )
                        )
                    ),
                    React.createElement(
                        "div",
                        { className: "col s12 m4" },
                        React.createElement(
                            "div",
                            { className: "card" },
                            React.createElement(
                                "div",
                                { className: "card-content" },
                                React.createElement(
                                    "h5",
                                    null,
                                    "Full Stack Development"
                                ),
                                "Full stack development refers to building a web application from the ground up. This includes establishment of the operating system and the web server; to setting up the database; all the way through to the end user experience."
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Services;
}(React.Component);

exports.default = Services;

},{}]},{},[1]);
