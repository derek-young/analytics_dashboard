'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = require('../../node_modules/material-ui/styles/colors');
var _colorManipulator = require('../../node_modules/material-ui/utils/colorManipulator');
var _spacing = require('../../node_modules/material-ui/styles/spacing');
var _spacing2 = _interopRequireDefault(_spacing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  spacing: _spacing2.default,
  fontFamily: 'Roboto, sans-serif',
  borderRadius: 2,
  palette: {
    primary1Color: '#ee2424',
    primary2Color: '#ee2424',
    primary3Color: _colors.grey600,
    accent1Color: '#ee2424',
    accent2Color: '#ee2424',
    accent3Color: '#ee2424',
    textColor: '#9b9b9b',
    secondaryTextColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.7),
    alternateTextColor: '#303030',
    canvasColor: '#e9e9e9',
    borderColor: (0, _colorManipulator.fade)(_colors.fullBlack, 0.3),
    disabledColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.3),
    pickerHeaderColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12),
    clockCircleColor: (0, _colorManipulator.fade)(_colors.fullWhite, 0.12)
  }
};
