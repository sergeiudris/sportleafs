webpackJsonp([2],{

/***/ 303:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(43);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(44);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(45);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(47);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(46);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(5);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(195);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Link = __webpack_require__(101);
  
  var _Link2 = _interopRequireDefault(_Link);
  
  var _index = __webpack_require__(799);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  __webpack_require__(61);
  
  //require('./scss/main.scss');
  
  var HomePage = function (_React$Component) {
    (0, _inherits3.default)(HomePage, _React$Component);
  
    function HomePage() {
      (0, _classCallCheck3.default)(this, HomePage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(HomePage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(HomePage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = _index.title;
      }
    }, {
      key: 'render',
      value: function render() {
        return(
          //           <div className="app">
          //         <section id="main-content">
          // <div id="home">
          //     <header className="title">
          //       <h2>flip move</h2>
          //     </header>
  
          //     <section>
          //       <p>This module was built to tackle the common but arduous problem of animating a list of items when the list's order changes. </p>
  
          //       <p>DOM nodes can't actually reorder themselves; brand new nodes are created instead. Because of this, simple CSS transitions don't work.</p>
  
          //       <p><em>Flip move</em> uses the <a href="https://github.com/joshwcomeau/react-flip-move/blob/master/docs/how-it-works.md">FLIP technique</a> to work out what such a transition would look like, and fakes it using hardware-accelerated CSS transforms.</p>
  
          //       <p>Oh, and it does some other cool stuff too.</p>
          //     </section>
  
          //     <div className="text-right">
          //       <a href='https://github.com/joshwcomeau/react-flip-move' className="button-toggle large">
          //         <i className="fa fa-fw fa-code" />
          //         View the Source
          //       </a>
  
          //     </div>
          //   </div>
          //         </section>
          //       </div>
          _react2.default.createElement(
            _Layout2.default,
            null,
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _index.html } })
          )
        );
      }
    }]);
    return HomePage;
  }(_react2.default.Component);
  
  HomePage.propTypes = {};
  exports.default = HomePage;

/***/ },

/***/ 799:
/***/ function(module, exports) {

  module.exports = {"title":"Sportleafs","html":"<h3>This is home page of Sportleafs</h3>\n"};

/***/ }

});
//# sourceMappingURL=2.js.map?46abb0ff8a49021b8038