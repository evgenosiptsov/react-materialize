'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _OverlayTrigger = require('./OverlayTrigger');

var _OverlayTrigger2 = _interopRequireDefault(_OverlayTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal(props) {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
  }

  _createClass(Modal, [{
    key: 'renderOverlay',
    value: function renderOverlay() {
      var _props = this.props;
      var header = _props.header;
      var children = _props.children;
      var fixedFooter = _props.fixedFooter;
      var bottomSheet = _props.bottomSheet;
      var actions = _props.actions;

      var props = _objectWithoutProperties(_props, ['header', 'children', 'fixedFooter', 'bottomSheet', 'actions']);

      var classes = (0, _classnames2.default)({
        'modal': true,
        'modal-fixed-footer': fixedFooter,
        'bottom-sheet': bottomSheet
      });

      return _react2.default.createElement(
        'div',
        _extends({ className: classes }, props),
        _react2.default.createElement(
          'div',
          { className: 'modal-content' },
          _react2.default.createElement(
            'h4',
            null,
            header
          ),
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.Children.toArray(actions)
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _OverlayTrigger2.default,
        { overlay: this.renderOverlay() },
        this.props.trigger
      );
    }
  }]);

  return Modal;
}(_react2.default.Component);

Modal.propTypes = {
  /**
  * BottomSheet styled modal
  * @default false
  */
  bottomSheet: _react2.default.PropTypes.bool,

  /**
   * Component children
   */
  children: _react2.default.PropTypes.node,

  /**
  * FixedFooter styled modal
  * @default false
  */
  fixedFooter: _react2.default.PropTypes.bool,

  /**
   * Text to shown in the header of the modal
   */
  header: _react2.default.PropTypes.string,

  /**
   * The button to trigger the display of the modal
   */
  trigger: _react2.default.PropTypes.node.isRequired,

  /**
   * The buttons to show in the footer of the modal
   */
  actions: _react2.default.PropTypes.node

};

Modal.defaultProps = {
  fixedFooter: false,
  bottomSheet: false,
  actions: [_react2.default.createElement(
    _Button2.default,
    { waves: 'light', modal: 'close', flat: true },
    'Close'
  )]
};

exports.default = Modal;