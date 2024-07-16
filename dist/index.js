/*!
 * name: @jswork/next-guid
 * description: Simple guid for next.
 * homepage: https://js.work
 * version: 1.0.1
 * date: 2024-07-16 16:21:25
 * license: MIT
 */

'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;
var _next = _interopRequireDefault(require('@jswork/next'));
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : { default: e };
}
var STR_TMPL = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
var STR_X = 'x';
_next['default'].guid = function () {
  return STR_TMPL.replace(/[xy]/g, function (_char) {
    var random = (Math.random() * 16) | 0;
    var value = _char == STR_X ? random : (random & 0x3) | 0x8;
    return value.toString(16);
  });
};
if (typeof module !== 'undefined' && module.exports && typeof wx === 'undefined') {
  module.exports = _next['default'].guid;
}
var _default = (exports['default'] = _next['default'].guid);
