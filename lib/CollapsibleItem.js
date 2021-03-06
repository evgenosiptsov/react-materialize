'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CollapsibleItem = function (_React$Component) {
  _inherits(CollapsibleItem, _React$Component);

  function CollapsibleItem(props) {
    _classCallCheck(this, CollapsibleItem);

    var _this = _possibleConstructorReturn(this, (CollapsibleItem.__proto__ || Object.getPrototypeOf(CollapsibleItem)).call(this, props));

    _this.state = {
      expanded: props.expanded
    };

    _this.handleClick = _this.handleClick.bind(_this);
    _this.renderBody = _this.renderBody.bind(_this);
    _this.renderIcon = _this.renderIcon.bind(_this);
    return _this;
  }

  _createClass(CollapsibleItem, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var node = _props.node;
      var header = _props.header;
      var icon = _props.icon;

      var props = _objectWithoutProperties(_props, ['node', 'header', 'icon']);

      var C = node;
      var classes = {
        'collapsible-header': true
      };

      return _react2.default.createElement(
        'li',
        props,
        _react2.default.createElement(
          C,
          { className: (0, _classnames2.default)(classes), onClick: this.handleClick },
          icon ? this.renderIcon(icon) : null,
          header
        ),
        this.renderBody()
      );
    }
  }, {
    key: 'handleClick',
    value: function handleClick() {
      var _props2 = this.props;
      var onSelect = _props2.onSelect;
      var eventKey = _props2.eventKey;


      if (onSelect) {
        onSelect(eventKey);
      } else {
        this.setState({ expanded: !this.state.expanded });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (typeof nextProps !== 'undefined') {
        this.setState({ expanded: nextProps.expanded });
      }
    }
  }, {
    key: 'renderBody',
    value: function renderBody() {
      if (!this.state.expanded && !this.props.expanded) return;

      var style = { display: 'block' };
      return _react2.default.createElement(
        'div',
        { className: 'collapsible-body', style: style },
        this.props.children
      );
    }
  }, {
    key: 'renderIcon',
    value: function renderIcon(icon) {
      return _react2.default.createElement(
        _Icon2.default,
        null,
        icon
      );
    }
  }]);

  return CollapsibleItem;
}(_react2.default.Component);

CollapsibleItem.propTypes = {
  children: _react2.default.PropTypes.node,
  header: _react2.default.PropTypes.string.isRequired,
  icon: _react2.default.PropTypes.string,
  onSelect: _react2.default.PropTypes.func,
  /**
   * If the item is expanded by default
   * @default false
   */
  expanded: _react2.default.PropTypes.bool,
  /**
   * The value to pass to the onSelect callback
   */
  eventKey: _react2.default.PropTypes.any,
  /**
   * The node type of the header
   * @default a
   */
  node: _react2.default.PropTypes.node
};

CollapsibleItem.defaultProps = {
  expanded: false,
  node: 'a'
};

exports.default = CollapsibleItem;