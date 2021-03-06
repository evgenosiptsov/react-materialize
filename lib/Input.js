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

var _idgen = require('./idgen');

var _idgen2 = _interopRequireDefault(_idgen);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Input = function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input(props) {
    _classCallCheck(this, Input);

    var _this = _possibleConstructorReturn(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props));

    _this.state = { value: _this.props.defaultValue };
    _this._onChange = _this._onChange.bind(_this);
    _this.isSelect = _this.isSelect.bind(_this);
    return _this;
  }

  _createClass(Input, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).material_select();
        $(this.selectInput).on('change', this._onChange);
      }
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).material_select();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (this.isMaterialSelect()) {
        this.setState({
          value: nextProps.defaultValue
        }, function () {
          return $(_this2.selectInput).material_select();
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.isMaterialSelect()) {
        $(this.selectInput).off('change', this._onChange);
      }
    }
  }, {
    key: '_onChange',
    value: function _onChange(e) {
      this.setState({
        value: e.target.type === 'checkbox' ? e.target.checked : e.target.value
      });

      if (this.props.onChange) {
        this.props.onChange(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props;
      var defaultValue = _props.defaultValue;
      var placeholder = _props.placeholder;
      var id = _props.id;
      var type = _props.type;
      var label = _props.label;
      var children = _props.children;
      var validate = _props.validate;

      var props = _objectWithoutProperties(_props, ['defaultValue', 'placeholder', 'id', 'type', 'label', 'children', 'validate']);

      var classes = {
        col: true,
        'input-field': type !== 'checkbox' && type !== 'radio'
      };
      _constants2.default.SIZES.forEach(function (size) {
        if (_this3.props[size]) {
          classes[size + _this3.props[size]] = true;
        }
      });
      if (!id) {
        id = 'input_' + (0, _idgen2.default)();
      }
      var inputClasses = {
        validate: validate,
        'browser-default': !!this.props.browserDefault && this.isSelect()
      };
      var C = void 0,
          inputType = void 0;
      switch (type) {
        case 'textarea':
          C = 'textarea';
          inputClasses['materialize-textarea'] = true;
          break;
        case 'switch':
          C = 'input';
          inputType = 'checkbox';
          break;
        default:
          C = 'input';
          inputType = type || 'text';
      }
      var labelClasses = {
        active: this.state.value || this.isSelect()
      };

      var htmlLabel = label || inputType === 'radio' ? _react2.default.createElement(
        'label',
        { className: (0, _classnames2.default)(labelClasses), htmlFor: id },
        label
      ) : null;

      if (this.isSelect()) {
        var options = placeholder && !defaultValue ? [_react2.default.createElement(
          'option',
          { disabled: true, key: (0, _idgen2.default)() },
          placeholder
        )] : [];
        options = options.concat(_react2.default.Children.map(children, function (child) {
          return _react2.default.cloneElement(child, { 'key': child.props.value });
        }));
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          htmlLabel,
          _react2.default.createElement(
            'select',
            _extends({
              id: id,
              className: (0, _classnames2.default)(inputClasses),
              ref: function ref(_ref) {
                return _this3.selectInput = _ref;
              },
              defaultValue: defaultValue
            }, props),
            options
          )
        );
      } else if (type === 'switch') {
        return _react2.default.createElement(
          'div',
          { className: 'switch' },
          _react2.default.createElement(
            'label',
            null,
            'Off',
            _react2.default.createElement('input', _extends({
              name: this.props.name,
              onChange: this._onChange,
              type: 'checkbox'
            }, props)),
            _react2.default.createElement('span', { className: 'lever' }),
            'On'
          )
        );
      } else {
        var icon = null;
        if (_react2.default.Children.count(children) == 1) {
          icon = _react2.default.Children.only(children);
        }

        switch (inputType) {
          case 'checkbox':
            break;
          case 'radio':
            break;
          default:
            props.defaultValue = this.state.value;
        }

        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)(classes) },
          icon === null ? null : _react2.default.cloneElement(icon, { className: 'prefix' }),
          _react2.default.createElement(C, _extends({
            id: id,
            className: (0, _classnames2.default)(inputClasses),
            onChange: this._onChange,
            placeholder: placeholder,
            type: inputType
          }, props)),
          htmlLabel
        );
      }
    }
  }, {
    key: 'isSelect',
    value: function isSelect() {
      return this.props.type === 'select';
    }
  }, {
    key: 'isMaterialSelect',
    value: function isMaterialSelect() {
      return this.props.type === 'select' && !this.props.browserDefault && typeof $ !== 'undefined';
    }
  }]);

  return Input;
}(_react2.default.Component);

Input.propTypes = {
  s: _react2.default.PropTypes.number,
  m: _react2.default.PropTypes.number,
  l: _react2.default.PropTypes.number,
  label: _react2.default.PropTypes.node,
  /**
   * Input field type, e.g. select, checkbox, radio, text, tel, email
   * @default 'text'
   */
  type: _react2.default.PropTypes.string,
  defaultValue: _react2.default.PropTypes.string,
  placeholder: _react2.default.PropTypes.string,
  id: _react2.default.PropTypes.string,
  name: _react2.default.PropTypes.string,
  validate: _react2.default.PropTypes.bool,
  browserDefault: _react2.default.PropTypes.bool,
  onChange: _react2.default.PropTypes.func
};

Input.defaultProps = { type: 'text' };

exports.default = Input;