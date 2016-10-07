webpackJsonp([1],{

/***/ 304:
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
  
  var _index = __webpack_require__(800);
  
  var _info = __webpack_require__(790);
  
  var _info2 = _interopRequireDefault(_info);
  
  var _classnames = __webpack_require__(29);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  __webpack_require__(61);
  
  var InfoPage = function (_React$Component) {
    (0, _inherits3.default)(InfoPage, _React$Component);
  
    function InfoPage() {
      (0, _classCallCheck3.default)(this, InfoPage);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(InfoPage).apply(this, arguments));
    }
  
    (0, _createClass3.default)(InfoPage, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        document.title = 'info';
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          _Layout2.default,
          null,
          _react2.default.createElement(
            'section',
            { className: (0, _classnames2.default)('flexbox column nowrap', _info2.default.root) },
            _react2.default.createElement(
              'div',
              null,
              'powered by:  ',
              _react2.default.createElement(
                'span',
                { className: _info2.default.name },
                _react2.default.createElement('i', { className: 'fa fa-battery-full' }),
                _react2.default.createElement('i', { className: 'fa fa-battery-full' }),
                _react2.default.createElement('i', { className: 'fa fa-battery-full' })
              )
            ),
            _react2.default.createElement(
              'div',
              null,
              'contact:  ',
              _react2.default.createElement(
                'span',
                { className: _info2.default.name },
                'serge.joggen@gmail.com  '
              )
            )
          )
        );
      }
    }]);
    return InfoPage;
  }(_react2.default.Component);
  
  exports.default = InfoPage;

/***/ },

/***/ 726:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(19)();
  // imports
  
  
  // module
  exports.push([module.id, ".info_root_3ns{\r\n    padding: 3em;\r\n    color: darkgray;\r\n    line-height: 2em;\r\n}\r\n\r\n.info_name_2Xn {\r\n    color: black;\r\n}\r\n\r\n.info_root_3ns i {\r\n    margin: 0 0.5em;\r\n}", "", {"version":3,"sources":["/./pages/info/info.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;CACpB;;AAED;IACI,aAAa;CAChB;;AAED;IACI,gBAAgB;CACnB","file":"info.css","sourcesContent":[".root{\r\n    padding: 3em;\r\n    color: darkgray;\r\n    line-height: 2em;\r\n}\r\n\r\n.name {\r\n    color: black;\r\n}\r\n\r\n.root i {\r\n    margin: 0 0.5em;\r\n}"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"root": "info_root_3ns",
  	"name": "info_name_2Xn"
  };

/***/ },

/***/ 790:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(726);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(20)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./info.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./info.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 800:
/***/ function(module, exports) {

  module.exports = {"title":"About","html":"<h4>Sport as a web.</h4>\n<h5>Project is created and maintained by <a href=\"mailto:serge.joggen@gmail.com\">serge.joggen@gmail.com</a></h5>\n"};

/***/ }

});
//# sourceMappingURL=1.js.map?cb7d327e70176be799e8