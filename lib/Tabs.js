'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Row = require('./Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs(props) {
    _classCallCheck(this, Tabs);

    var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props));

    _this.state = { selected: _this.props.defaultValue };
    return _this;
  }

  _createClass(Tabs, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (typeof $ !== 'undefined') {
        //$(this.tabsEl).tabs()
      }
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      _react2.default.Children.map(this.props.children, function (child, idx) {
        var active = child.props.active;

        if (active) this.setState({ selected: idx });
      }.bind(this));
    }
  }, {
    key: '_onSelect',
    value: function _onSelect(idx, e) {
      if (this.props.hasOwnProperty('onChange')) {
        this.props.onChange(idx, e);
      }
      this.setState({ selected: idx });
    }
  }, {
    key: 'renderIndicator',
    value: function renderIndicator() {
      console.log(this.refs.active);
      if (this.refs.active) {
        var _refs$active$offsetPa = this.refs.active.offsetParent;
        var offsetLeft = _refs$active$offsetPa.offsetLeft;
        var offsetWidth = _refs$active$offsetPa.offsetWidth;

        return _react2.default.createElement('span', { className: 'indicator', style: { width: offsetWidth, left: offsetLeft } });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props;
      var children = _props.children;
      var className = _props.className;

      var props = _objectWithoutProperties(_props, ['children', 'className']);

      var selected = this.state.selected;

      return _react2.default.createElement(
        _Row2.default,
        null,
        _react2.default.createElement(
          _Col2.default,
          { s: 12 },
          _react2.default.createElement(
            'ul',
            { className: (0, _classnames2.default)('tabs', className), ref: function ref(_ref) {
                return _this2.tabsEl = _ref;
              } },
            _react2.default.Children.map(children, function (child, idx) {
              var _child$props = child.props;
              var title = _child$props.title;
              var tabWidth = _child$props.tabWidth;
              var className = _child$props.className;
              var active = _child$props.active;
              var disabled = _child$props.disabled;
              //if (!tabWidth) {
              //  tabWidth = Math.floor(12 / count);
              //}

              var classes = {
                tab: true,
                disabled: disabled,
                col: true
              };
              if (tabWidth) classes['s' + tabWidth] = true;
              var target = '#tab_' + idx;
              return _react2.default.createElement(
                'li',
                { className: (0, _classnames2.default)(classes, className), key: idx },
                _react2.default.createElement(
                  'a',
                  _extends({
                    href: target,
                    ref: selected === idx ? 'active' : '',
                    className: selected === idx ? 'active' : ''
                  }, disabled ? {} : { onClick: _this2._onSelect.bind(_this2, idx) }),
                  title
                )
              );
            }),
            this.renderIndicator()
          )
        ),
        _react2.default.Children.map(children, function (child, idx) {
          var _child$props2 = child.props;
          var title = _child$props2.title;
          var tabWidth = _child$props2.tabWidth;
          var className = _child$props2.className;
          var active = _child$props2.active;
          var disabled = _child$props2.disabled;

          return selected === idx ? _react2.default.createElement(
            _Col2.default,
            { id: 'tab_' + idx, s: 12, key: 'tab' + idx },
            child.props.children
          ) : null;
          //return <Col id={'tab_' + idx} s={12} key={'tab' + idx}>{child.props.children}</Col>;
        })
      );
    }
  }]);

  return Tabs;
}(_react2.default.Component);

exports.default = Tabs;